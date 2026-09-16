# The small function track

*Ten fields fixed before the work and published with the finding, for an oversight function with no answer to check its reviewers against.*

---

**Purpose limitation.** This is a control-design format. It creates no performance data about named individuals, supports no inference about anyone's competence, and the worked column supports none about the investigators whose published report populates it.

---

## When this applies

The rest of this repository assumes an output that can be judged right or wrong against something independent of the reviewer, and enough people to separate who builds a test from who takes it. Classification, moderation, fraud review, automated decisions subject to appeal.

Some oversight functions have neither. A team reviewing whether a novel argument holds — a safety case, a capability evaluation, an incident investigation — has no key to score against. A team of three or four has no one left over to build a test its own members are not taking.

For those functions the seeded-error protocol has no application, and the separations the other records assume cannot be achieved. What remains is a declaration: a statement, registered before the work and published with the result, of what the work reached and what it could not.

That is weaker than a measured result and stronger than an unqualified finding. At this size it is what is available.

If you are unsure which path applies, the decision diagram in the root README asks the two questions that route you.

## What it costs, and what you get

About an hour, once per engagement. No seeded errors, no criterion, no records about named individuals, and correspondingly none of the consultation and data protection obligations that attach to the other records in this repository.

What it produces is a declaration: an account of what the work reached and what it could not, registered before the work and published with the finding. That is not a measured result and does not claim to be one. It is a statement a reader can check, in place of a claim they have to take on trust.

## How to use it

1. Before the work starts, open the **Small function track** tab of `supervisory-capacity-records.xlsx` and delete the illustrative values in column B.
2. Fill the first eight fields. They are answerable before any analysis begins, and that is the point: each one records a condition you can still act on.
3. Do the work.
4. Complete *Status* and *What it does not support*, and revise any of the first eight that changed.
5. Publish the completed record with the finding, whichever way the finding goes.

A field with no answer is entered as *not stated*. That is a finding about the engagement, not a gap in the form.

The status on this track is always *declared*. The other values — supported, recorded, qualified, not determined — belong to a full round and are set out in the root README.

## The ten fields

Held on the **Small function track** tab of `supervisory-capacity-records.xlsx`. The worked column comes from the only published engagement detailed enough to populate every field: the METR and Redwood Research investigation of the OpenAI–Hugging Face incident, [published 26 August 2026](https://metr.org/blog/2026-08-26-openai-hugging-face-incident-investigation/). Every entry is drawn from that report or from the subject's public disclosures. Nothing states anything the report does not.

| Field | What it fixes | Worked column |
|---|---|---|
| **Engagement, dates** | What is being investigated, when scope was agreed, when work starts, who set the period under review | Scope and seven questions agreed 29 July 2026; six days on premises across three periods; period under review set by the subject |
| **Function** | How many investigators, from which organisations, paid by the subject or not | Three investigators from two organisations, unpaid by the subject |
| **In scope / out of scope** | Both lists in full, so scope cannot be inferred from omission | In: model behaviour, reasoning, collaboration, concealment. Out: effectiveness of safeguards, extent of the compromise, the subject's own remediation, earlier and later periods |
| **Evidence against time** | Volume and time available, side by side. No ratio is computed; the reader will | ~1,300 transcripts, most running to millions of tokens; 1.2 million cache entries; six days; roughly $400,000 in analysis credits |
| **Portion delegated, to what** | What share of the analysis was done by tools rather than people, what those tools were, and their relation to the subject | Heavily delegated; share not stated. The analysis tool was a model that had participated in the incident under investigation, running on credits supplied by the subject |
| **Verification of that work** | What was checked, by what method, and what could not be checked at the available scale | Spot-checking attempted; two samples traced to source; deep verification not achievable at this volume |
| **What would have prevented detection** | Routes by which a problem could have been missed. See the table below | Ten routes, each stated by the investigators in their own limitations section |
| **Independence available** | Structural independence and operational separation, recorded separately | Structural: unpaid, separate organisations, right to publish. Operational: none — the same three people build, run and read. Tooling: supplied by the subject |
| **Status** | Declared, and the basis on which | Declared. Limits published in full, including delegation and non-robustness to deception by the analysis tool |
| **What it does not support** | The sentence a reader would otherwise supply for themselves, wrongly | Any claim that behaviour of this kind would be detected, or characterised to the same depth, in a next engagement under the same conditions |

## Routes by which a problem could be missed

Applicable to any investigation where analysis is substantially delegated and the record is held by the subject.

| Route | Why it is a route |
|---|---|
| Communication outside the captured record | Subjects may use channels the collection did not cover |
| Incompleteness of the captured record | Collection is rarely total, and the shortfall is rarely known |
| Records altered by the subjects | Where subjects control the record, the record is evidence about them and produced by them |
| Deletion after the fact | Attempts may succeed without leaving a trace |
| Error by the analysis tool | Delegated analysis carries an error rate the team cannot fully audit |
| Bias of the analysis tool | A tool that summarises may summarise sympathetically |
| Deception by the analysis tool | Where the tool is related to the subject, its output is not neutral evidence |
| No access to the primary subject | The thing under investigation may not be available for direct examination |
| Scope set by the subject | What is out of scope cannot be found |
| Editorial control by the subject | Redaction and feedback shape what is published |

Work through all ten. Record the ones that applied and how, and enter *none known* for the rest. Absence of a known route is not evidence there was none: it means the team did not find one, which is a weaker statement and should be read as one.

Each of these was disclosed by the investigators in the worked case, in their own words. The column is *route*, not *failure*: a route left open bounds the finding, and an investigation that names ten of them has done more than one that names none.

Two of these routes are terms of engagement rather than limitations of method. Where the subject sets the period under review, or holds redaction rights over the published account, the alternative is usually no investigation at all. Accepting those terms is the right call. The claim here is narrower: that the terms belong in the record, fixed at the start and published with the finding, rather than in a limitations section a reader may not reach.

## Why these four fields in particular

The worked case already disclosed everything above. Nothing required it. Four things the format adds to a disclosure of that kind.

**A quantity where the record has an adverb.** *Heavily delegated* and *to a substantial extent* are the investigators' own words and the most honest description available after the fact. Before the fact they can be counts: items read end to end by a person, pages of tool output read by a person, spot-checks performed against items sampled. For a function with no key to score its people against, the delegated fraction is the one quantity that can be measured at all.

**A field for the tool's relation to the subject.** Independence is checked for the people and rarely for the instruments. Where the analysis tool is supplied by the subject, or is the subject, or shares its provenance, its output is evidence produced by an interested party. In an investigation where most of the reading is done by a tool, that is where independence now lives. The field belongs in the register rather than the limitations section, because registration is the point at which a team can still act on the answer — use a different model, budget for verification, or record in advance that neither was possible.

**Registration before the work.** Scope and question set were agreed in advance in the worked case, which already functions as a register. What the format adds is one further entry: the condition under which the function would decline to conclude. Naming it in advance is cheap. Deciding it afterwards is the failure mode.

**Structural and operational independence recorded apart.** The first is achievable at any size — unpaid, separate organisation, a right to publish. The second is not achievable by three people, and recording it as absent is not a criticism. It is the reason the status is *declared* rather than *supported*, and a reader is entitled to know which they are looking at.

---

**Status of this document.** Provided for information. Not legal, compliance or audit advice. The format has not been run in production anywhere; the worked column demonstrates that the fields are fillable from a real engagement, not that filling them improves anything. Reports from anyone who tries it are welcome via issues.

**Reference.** Turkina, D. (2026). *The Unmonitored Dependency: Human Supervisory Capacity as an Assurance Target in Frontier AI Safety Frameworks.* SSRN 7248205.
