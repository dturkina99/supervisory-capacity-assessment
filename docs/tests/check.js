// Checks for docs/index.html, the document builder.
// Run from the repository root:  node docs/tests/check.js
// Needs Node 18+ and Playwright (npm i playwright; the Chromium it downloads is enough).
// Every check prints PASS or FAIL; the process exits 1 if any fail.

const path = require('path');
const fs = require('fs');
const os = require('os');
const { chromium } = require('playwright');

const PAGE = 'file://' + path.resolve(__dirname, '..', 'index.html');
const results = [];
const check = (name, ok, detail = '') => { results.push({ name, ok, detail }); console.log((ok ? 'PASS ' : 'FAIL ') + name + (detail ? '  ' + detail : '')); };

(async () => {
  const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'sca-'));
  // CHROME_PATH lets you point at an existing Chromium; otherwise Playwright's own download is used.
  const browser = await chromium.launch(process.env.CHROME_PATH ? { executablePath: process.env.CHROME_PATH } : {});
  const ctx = await browser.newContext({ acceptDownloads: true });
  const p = await ctx.newPage({ viewport: { width: 1400, height: 1000 } });
  const errors = [];
  p.on('pageerror', e => errors.push(e.message));
  p.on('console', m => { if (m.type() === 'error') errors.push(m.text()); });
  let lastDialog = '';
  p.on('dialog', d => { lastDialog = d.message(); d.accept(); });
  const requests = [];
  p.on('request', r => requests.push(r.url()));

  // 1. Loads, no outbound requests
  await p.goto(PAGE);
  check('page loads', await p.evaluate(() => !!document.getElementById('start')));

  // 2. Routing follows the diagram
  await p.click('#q1n');
  const r1 = await p.evaluate(() => [document.getElementById('routeSft').classList.contains('show'), document.getElementById('routeFull').classList.contains('show')]);
  check('question 1 "no" routes to declaration only', r1[0] && !r1[1]);
  await p.click('#q1y'); await p.click('#q2n');
  const r2 = await p.evaluate(() => [document.getElementById('routeSft').classList.contains('show'), document.getElementById('routeFull').classList.contains('show'), document.getElementById('q2note').textContent]);
  check('question 1 "yes" + question 2 "no" stays on the full round', !r2[0] && r2[1] && /not separated/.test(r2[2]));

  // 3. Hash navigation and back button
  await p.click('.alldocs a[href="#round-register"]'); await p.waitForTimeout(100);
  check('opening a document sets its address', await p.evaluate(() => location.hash === '#round-register' && document.body.classList.contains('building')));
  await p.goBack(); await p.waitForTimeout(100);
  check('browser back returns to start', await p.evaluate(() => !document.body.classList.contains('building')));
  await p.goto(PAGE + '#workpaper'); await p.waitForTimeout(200);
  check('direct link opens the workpaper', await p.evaluate(() => docId === 'wp'));

  // 4. Round register: lock, check code, save, reload, tamper detection
  await p.evaluate(() => openDoc('reg', true)); await p.waitForTimeout(100);
  await p.check('#h_consult'); await p.fill('#h_round', 'TEST-R1'); await p.fill('#f_regdate', '2026-07-14'); await p.fill('#f_rundate', '2026-07-28'); await p.fill('#f_crit', '12 of 15');
  await p.click('#btnAfter'); await p.waitForTimeout(300);
  const locked = await p.evaluate(() => document.getElementById('f_crit').disabled && !!registered && registered.hash.length === 64);
  check('register locks and computes a 64-character check code after the round', locked);
  const hash1 = await p.evaluate(() => registered.hash);
  const recomputed = await p.evaluate(async () => sha256(canonical({ fields: registered.fields, tables: registered.tables })));
  check('check code recomputes identically from the snapshot', hash1 === recomputed);
  let dl = p.waitForEvent('download'); await p.click('text=Save record'); let d = await dl;
  const recPath = path.join(tmp, 'r1-record.json'); await d.saveAs(recPath);
  check('record file saves', fs.existsSync(recPath));

  await p.goto(PAGE); await p.evaluate(() => openDoc('reg', true));
  await p.setInputFiles('#loadfile', recPath); await p.waitForTimeout(400);
  const reloaded = await p.evaluate(() => ({ phase: phase(), crit: document.getElementById('f_crit').value, locked: document.getElementById('f_crit').disabled, hashShown: document.getElementById('doc').innerHTML.includes(registered.hash) }));
  check('record reloads into the locked after-phase with the code printed', reloaded.phase === 'after' && reloaded.crit === '12 of 15' && reloaded.locked && reloaded.hashShown);

  const tampered = JSON.parse(fs.readFileSync(recPath, 'utf8')); tampered.registered.fields.f_crit = '15 of 15';
  const tamperPath = path.join(tmp, 'r1-tampered.json'); fs.writeFileSync(tamperPath, JSON.stringify(tampered));
  lastDialog = '';
  await p.setInputFiles('#loadfile', tamperPath); await p.waitForTimeout(400);
  check('edited record is reported as not matching its check code', /do not match their check code/.test(lastDialog));

  // 5. Check against the record file, from the workpaper rounds table
  await p.evaluate(() => openDoc('wp', true)); await p.waitForTimeout(100);
  await p.evaluate(() => addRow('rounds', {}));
  await p.click('button:has-text("Check against the record file")');
  await p.setInputFiles('#verifyfile', recPath); await p.waitForTimeout(400);
  const verified = await p.evaluate(h => dyn.rounds[0].fp === h && document.getElementById('doc').innerHTML.includes('matches the file provided · r1-record.json'), hash1);
  check('workpaper round checked against the record file prints "matches"', verified);

  // 6. Exports run without errors
  await p.click('button:has-text("Load the worked example")'); await p.waitForTimeout(300);
  for (const label of ['Excel (.xlsx)', 'Word (.doc)', 'Markdown (.md)', 'Save record']) {
    dl = p.waitForEvent('download'); await p.click(`text=${label}`); d = await dl; await d.saveAs(path.join(tmp, d.suggestedFilename()));
  }
  check('all four exports download', fs.readdirSync(tmp).length >= 6);

  // 7. Small track example and amendment
  await p.evaluate(() => openDoc('sft', true)); await p.click('button:has-text("Load the worked example")'); await p.waitForTimeout(200);
  await p.fill('#f_subject', 'Own engagement');
  await p.click('#btnAfter'); await p.waitForTimeout(200);
  await p.click('fieldset[data-field="2"] legend .amendbtn'); await p.fill('#a_2_v', 'Four researchers'); await p.waitForTimeout(100);
  check('amendment prints on the declaration', await p.evaluate(() => document.getElementById('doc').innerHTML.includes('Amended after registration')));
  check('small track moves to the after-phase', await p.evaluate(() => phase() === 'after' && !!registered));

  // 7b. Retrospective register
  await p.evaluate(() => openDoc('reg', true)); await p.waitForTimeout(100);
  await p.check('#when_after'); await p.fill('#h_round', 'TEST-R0'); await p.waitForTimeout(200);
  const retroState = await p.evaluate(() => ({ tabsHidden: getComputedStyle(document.getElementById('phasebar')).display === 'none', supportedDisabled: document.querySelector('#f_status option[value=supported]').disabled, banner: document.getElementById('doc').innerHTML.includes('Completed after the round') }));
  check('retrospective register hides the tabs, limits the status and prints the banner', retroState.tabsHidden && retroState.supportedDisabled && retroState.banner);

  // 7c. Records of the round: example, CSV round trip, Excel
  await p.evaluate(() => openDoc('rec', true)); await p.waitForTimeout(100);
  await p.click('button:has-text("Load the worked example")'); await p.waitForTimeout(300);
  const recCounts = await p.evaluate(() => Object.values(recRows).map(r => r.length));
  check('records page loads the five example records', recCounts.length === 5 && recCounts.every(n => n > 0));
  dl = p.waitForEvent('download'); await p.evaluate(() => downloadRecCsv('01')); d = await dl; const csvPath = path.join(tmp, '01.csv'); await d.saveAs(csvPath);
  check('record 01 exports with the template header ending in record_status', fs.readFileSync(csvPath, 'utf8').split('\n')[0].trim().endsWith('record_status'));
  await p.evaluate(() => { recRows['01'] = []; renderRecRows('01'); render(); });
  await p.click('fieldset[data-rec="01"] button:has-text("Open a CSV")'); await p.setInputFiles('#csvfile', csvPath); await p.waitForTimeout(300);
  check('record 01 CSV imports back with the same row count', await p.evaluate(() => recRows['01'].length) === 3);
  dl = p.waitForEvent('download'); await p.click('text=Excel (.xlsx)'); d = await dl; await d.saveAs(path.join(tmp, 'records.xlsx'));
  check('records export to one workbook', fs.existsSync(path.join(tmp, 'records.xlsx')));

  // 7d. Red-team fixes: example tagging, separation rule, name gate
  await p.evaluate(() => openDoc('sft', true)); await p.click('button:has-text("Load the worked example")'); await p.waitForTimeout(200);
  await p.fill('#f_subject', 'Own engagement');
  check('example banner stays while untouched example fields remain', await p.evaluate(() => exampleLoaded && document.getElementById('doc').innerHTML.includes('remain in')));
  await p.evaluate(() => openDoc('reg', true)); await p.fill('#h_round', 'R-SEP'); await p.fill('#f_sepabsent', 'Scorer sits in the queue'); await p.click('#btnAfter'); await p.waitForTimeout(200);
  check('status "supported" is disabled when a separation is absent', await p.evaluate(() => document.querySelector('#f_status option[value=supported]').disabled && !document.querySelector('#f_status option[value=recorded]').disabled));
  await p.evaluate(() => openDoc('wp', true)); await p.fill('#h_ctrl', 'HO-N'); await p.fill('#h_prep', 'Jane Smith');
  lastDialog = ''; dl = p.waitForEvent('download'); await p.click('text=Excel (.xlsx)'); await dl;
  check('name-like role value triggers the warning before export', /look like personal names/.test(lastDialog));

  // 7e. Template drift: page record columns must match the repository CSV headers
  const RECFILES = { '01': '01-competence-matrix.csv', '02': '02-time-on-task.csv', '03': '03-oversight-stress-test.csv', '04': '04-skill-preservation.csv', '05': '05-production-evidence.csv' };
  const pageCols = await p.evaluate(() => Object.fromEntries(Object.entries(RECS).map(([k, r]) => [k, r.cols])));
  for (const [id, f] of Object.entries(RECFILES)) {
    const hdr = fs.readFileSync(path.resolve(__dirname, '..', '..', 'templates', f), 'utf8').split(/\r?\n/)[0].replace(/^\ufeff/, '').split(',').map(x => x.trim());
    const same = JSON.stringify(hdr) === JSON.stringify(pageCols[id]);
    check(`record ${id} page columns match templates/${f}`, same, same ? '' : `page: ${pageCols[id].join(',')} | csv: ${hdr.join(',')}`);
  }

  // 7f. Completeness line, criterion check, status reason, all-retrospective warning
  await p.evaluate(() => openDoc('sft', true)); await p.fill('#h_ref', 'C-1'); await p.fill('#f_subject', 'Thin declaration'); await p.click('#btnAfter'); await p.waitForTimeout(200);
  check('declaration prints a completeness line', await p.evaluate(() => /\d+ of 10 fields stated/.test(document.getElementById('doc').textContent)));
  await p.evaluate(() => openDoc('reg', true)); await p.fill('#h_round', 'R-NUM'); await p.fill('#f_crit', 'performs adequately');
  lastDialog = ''; await p.click('#btnAfter'); await p.waitForTimeout(200);
  check('criterion without a number is challenged on locking', /has no number/.test(lastDialog));
  await p.evaluate(() => openDoc('reg', true)); await p.check('#when_after'); await p.fill('#h_round', 'R-RETRO'); await p.fill('#f_crit', '12 of 15'); await p.fill('#f_result', '10 of 15'); await p.selectOption('#f_status', 'recorded'); await p.waitForTimeout(100);
  dl = p.waitForEvent('download'); await p.click('text=Save record'); d = await dl; const retroPath = path.join(tmp, 'retro.json'); await d.saveAs(retroPath);
  await p.evaluate(() => openDoc('wp', true)); await p.evaluate(() => addRow('rounds', {})); await p.click('button:has-text("Check against the record file")'); await p.setInputFiles('#verifyfile', retroPath); await p.waitForTimeout(300);
  const wpRetro = await p.evaluate(() => ({ result: dyn.rounds[0].result, warn: document.getElementById('doc').innerHTML.includes('No round in this sequence was registered before it ran') }));
  check('round result carries its status reason from the record file', /recorded \(retrospective\)/.test(wpRetro.result));
  check('workpaper warns when every listed round is retrospective', wpRetro.warn);

  // 8. No outbound requests at any point
  const outbound = requests.filter(u => !u.startsWith('file://'));
  check('no network requests other than the page itself', outbound.length === 0, outbound.join(' '));
  check('no script errors', errors.length === 0, errors.join(' | '));

  await browser.close();
  const failed = results.filter(r => !r.ok).length;
  console.log(`\n${results.length - failed} of ${results.length} checks passed`);
  process.exit(failed ? 1 : 0);
})().catch(e => { console.error('FAIL harness error', e.message); process.exit(1); });
