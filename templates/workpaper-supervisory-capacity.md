# Workpaper — Supervisory capacity

Control testing template. Format follows internal-audit convention so the record sits alongside existing control documentation rather than beside it.

This workpaper carries the control description, the purpose limitation, the design conclusion and the exceptions. It does not restate scope, results or population: those are on the scorecard tab of `supervisory-capacity-records.xlsx` for the round, and the round register tab records what was fixed before the round ran.

---

**Control reference:** [ ]
**Round:** [ ] — **Period:** [ ]
**Prepared by:** [ ] — **Date:** [ ]
**Reviewed by:** [ ] — **Date:** [ ]

---

## 1. Control description

The competence of persons assigned to oversee the AI system is assessed before assignment and reassessed at a stated interval, on the same footing as their independence. Assessment covers the specific capabilities the oversight task requires, is performed under conditions resembling operation, and is recorded.

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
| Competence specified | Required capabilities stated as observable performance, per system scope | Record 01, `required_skill` / `required_level` | |
| Criterion set in advance | Criterion and the date it was fixed recorded before the round | Register; record 01 `criterion` / `criterion_set_date` | |
| Independence of roles | Set builder, administrator and scorer separated; separations absent are named | Register; record 01 `assessor_independence` | |
| Assessment at intake | Method stated; conditions recorded | Record 01, `assessment_method` / `conditions` | |
| Reassessment | Interval stated; triggers stated (system change, scope change, new assignee) | Register; record 01 `next_due_date` | |
| Conditions of work recorded | Hours, continuous stretches, breaks, concurrent load | Record 02 | |
| Consequence of a failed assessment | Stated before the result: reassignment, remediation, or limitation on reliance | Register; record 01 `remediation` / `interim_restriction` | |
| Authority to act | Reviewers can halt the process they oversee, on a stated authority | Record 01, `authority_to_halt` | |
| Unassisted capability measured | Performance recorded with the system and without it, at a stated interval | Record 04 | |

## 5. Results

See the scorecard for round [ ]. Summarise here only what bears on the conclusion below.

## 6. Exceptions and remediation

| Ref | Exception | Cause | Action | Owner | Due |
|---|---|---|---|---|---|

## 7. Conclusion

| | |
|---|---|
| Design | Effective / Deficient — basis: |
| Operating effectiveness | Effective / Deficient / Not tested — basis: |
| Capabilities not covered by this test | |

A design conclusion can be reached on the register and the control design table alone. An operating effectiveness conclusion requires a round with a criterion fixed in advance and stated separations; where either is missing, the correct entry is Not tested.

---

## Notes on use

**Seeded-error testing is a study on staff.** It involves deception and should not be run as routine quality assurance. Use synthetic or sandboxed cases rather than live consequential decisions, disclose in debrief, and route the design through whatever review applies to research on employees. Where the workflow cannot be simulated, structured interviews about specific recent instances are the recognised alternative. Record on the register which was used and what review the design received.

**Interval.** No interval is recommended here. Set one and state it.

**Population.** Assessment results support inferences only about a population resembling the one assessed. If the assessment is run on senior reviewers in unhurried conditions and the operating population is different, the scorecard says so rather than reporting the number alone.

**Regulatory mapping.** Where the organisation deploys high-risk AI systems in the EU, Article 26(2) of Regulation (EU) 2024/1689 requires that natural persons assigned to human oversight have the necessary competence, training and authority. This workpaper produces evidence relevant to that obligation. It is not a compliance opinion.

**Status of this template.** Provided for information. Not legal, compliance or audit advice, and not a compliance opinion. Suitability for a particular organisation, system or jurisdiction is a matter for that organisation and its own advisers.

**Reference.** Turkina, D. (2026). *The Unmonitored Dependency: Human Supervisory Capacity as an Assurance Target in Frontier AI Safety Frameworks.* SSRN 7248205.
