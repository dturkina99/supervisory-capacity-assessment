# Workpaper — Supervisory capacity

Control testing template. Format follows internal-audit convention so the record sits alongside existing control documentation rather than beside it.

This workpaper carries the control description, the purpose limitation, the design conclusion and the exceptions. It does not restate scope, results or population: those are on the scorecard tab of `supervisory-capacity-records.xlsx` for the round, and the round register tab records what was fixed before the round ran.

---

**Control reference:** [ ]
**System under review:** [ ] — **Oversight task:** [ ] — **Reassessment interval as stated:** [ ]
**Round:** [ ] — **Period:** [ ]
**Prepared by (role):** [ ] — **Date:** [ ]
**Reviewed by (role):** [ ] — **Date:** [ ]
**Consultation with the persons assessed:** confirmed / not confirmed

| Document | Reference | Filed at |
|---|---|---|
| Round register | | |
| Small function track declaration | | |
| Scorecard for the round | | |
| This workpaper | | |

---

## 1. Control description

For [system], the competence of persons assigned to [oversight task] is assessed before assignment and reassessed at [interval], on the same footing as their independence. Assessment covers the specific capabilities the oversight task requires, is performed under conditions resembling operation, and is recorded.

## 2. Risk addressed

Consequential decisions are allocated to human judgment. If that judgment cannot detect the errors it is there to catch, the control is present in the design and absent in operation. The organisation cannot distinguish the two by inspecting role assignments.

Two features of AI-assisted work make this more than theoretical. Assisted performance can remain high while unassisted capability declines, so a measure taken with the tool present may not detect the change. And a confident, fluent, incorrect output is harder to challenge than an obviously poor one.

## 3. Purpose limitation

This assessment is conducted for control-testing purposes. Results are not used for individual performance management unless separately agreed and disclosed to the persons assessed in advance.

State which applies: ______

Independent judgment on novel questions is not assessable by these methods. It is recorded as not assessed on the scorecard rather than proxied.

## 4. Control design

Assessed independently of whether the control operated in the period.

| Element | Design | Evidenced from | Adequate? |
|---|---|---|---|
| Competence specified | Required capabilities stated as observable performance, per system scope | Record 01, competence matrix: `required_skill`, `required_level` | |
| Criterion set in advance | Criterion and the date it was fixed recorded before the round | Register; record 01, competence matrix: `criterion`, `criterion_set_date` | |
| Independence of roles | Set builder, administrator and scorer separated; separations absent are named | Register; record 01, competence matrix: `assessor_independence` | |
| Assessment at intake | Method stated; conditions recorded | Record 01, competence matrix: `assessment_method`, `conditions` | |
| Reassessment | Interval stated; triggers stated (system change, scope change, new assignee) | Register; record 01, competence matrix: `next_due_date` | |
| Conditions of work recorded | Hours, continuous stretches, breaks, concurrent load | Record 02, time on task | |
| Consequence of a failed assessment | Stated before the result: reassignment, remediation, or limitation on reliance | Register; record 01, competence matrix: `remediation`, `interim_restriction` | |
| Authority to act | Reviewers can halt the process they oversee, on a stated authority | Record 01, competence matrix: `authority_to_halt` | |
| Unassisted capability measured | Performance recorded with the system and without it, at a stated interval | Record 04, skill preservation | |

Adequate? is answered Yes, Partly or No, with one line of basis per row.

## 5. Results

See the scorecard for round [ ]. Summarise here only what bears on the conclusion below.

## 6. Exceptions and remediation

| Ref | Exception | Cause | Action | Owner | Due |
|---|---|---|---|---|---|

## 7. Conclusion

| | |
|---|---|
| Design | Effective / Effective with improvements / Deficient — basis: |
| Operating effectiveness | Effective / Effective with improvements / Deficient / Not tested — basis: |
| Capabilities not covered by this test | |
| Review | Agreed / Agreed with comments / Not agreed — comment: |

A design conclusion can be reached on the register and the control design table alone. An operating effectiveness conclusion requires a round with a criterion fixed in advance and stated separations; where either is missing, the correct entry is Not tested. A round that ran with both and fell short of the criterion is Deficient, not Not tested.

## 8. Improvements

Required where either conclusion is Effective with improvements. Each improvement names the design element it bears on. Owner is a role.

| Ref | Improvement | Design element | Owner | Due |
|---|---|---|---|---|

---

## Notes on use

**Seeded-error testing is a study on staff.** It involves deception and should not be run as routine quality assurance. Use synthetic or sandboxed cases rather than live consequential decisions, disclose in debrief, and route the design through whatever review applies to research on employees. Where the workflow cannot be simulated, structured interviews about specific recent instances are the recognised alternative. Record on the register which was used and what review the design received.

**Interval.** No interval is recommended here. Set one and state it.

**Population.** Assessment results support inferences only about a population resembling the one assessed. If the assessment is run on senior reviewers in unhurried conditions and the operating population is different, the scorecard says so rather than reporting the number alone.

**Regulatory mapping.** Where the organisation deploys high-risk AI systems in the EU, Article 26(2) of Regulation (EU) 2024/1689 requires that natural persons assigned to human oversight have the necessary competence, training and authority. This workpaper produces evidence relevant to that obligation: competence from records 01, 03 and 04; training from record 01; authority from record 01 (`authority_to_halt`). It is not a compliance opinion.

**Browser version.** The same workpaper can be assembled in the browser from conclusions already reached in the spreadsheet, with Word, Markdown and Excel export and a check code: see the document builder linked from the root README. The page stores nothing and computes no results.

**Status of this template.** Provided for information. Not legal, compliance or audit advice, and not a compliance opinion. Suitability for a particular organisation, system or jurisdiction is a matter for that organisation and its own advisers.

**Reference.** Turkina, D. (2026). *The Unmonitored Dependency: Human Supervisory Capacity as an Assurance Target in Frontier AI Safety Frameworks.* SSRN 7248205.

**Template licence.** CC BY 4.0, supervisory-capacity-assessment repository (dturkina99). The content entered in a completed workpaper is the preparing organisation's own.
