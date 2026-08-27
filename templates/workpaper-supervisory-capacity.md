# Workpaper — Supervisory capacity

Control testing template. Format follows internal-audit convention so the record sits alongside existing control documentation rather than beside it.

---

**Control reference:** [ ]
**Period:** [ ]
**Prepared by:** [ ] — **Date:** [ ]
**Reviewed by:** [ ] — **Date:** [ ]

---

## 1. Control description

The competence of persons assigned to oversee the AI system is assessed before assignment and reassessed at a stated interval, on the same footing as their independence. Assessment covers the specific capabilities the oversight task requires, is performed under conditions resembling operation, and is recorded.

## 2. Risk addressed

Consequential decisions are allocated to human judgment. If that judgment cannot detect the errors it is there to catch, the control is present in the design and absent in operation. The organisation cannot distinguish the two by inspecting role assignments.

Two features of AI-assisted work make this more than theoretical. Assisted performance can remain high while unassisted capability declines, so a measure taken with the tool present may not detect the change. And a confident, fluent, incorrect output is harder to challenge than an obviously poor one.

## 3. Scope

**Purpose limitation.** This assessment is conducted for control-testing purposes. Results are not used for individual performance management unless separately agreed and disclosed to the persons assessed. State which applies: ______

| Item | Entry |
|---|---|
| Systems in scope | |
| Oversight functions in scope | |
| Population of reviewers | |
| Capabilities assessed | |
| Capabilities not assessed, and why | |

Independent judgment on novel questions is not assessable by the methods below. State that in the last row rather than substituting a proxy for it.

## 4. Control design

| Element | Design | Evidence produced |
|---|---|---|
| Competence specified | Required capabilities stated as observable performance, per system scope | Competence matrix |
| Assessment at intake | Method stated; conditions recorded | Assessment record |
| Reassessment | Interval stated; triggers stated (system change, scope change, new assignee) | Assessment record |
| Conditions of work recorded | Hours, continuous stretches, breaks | Time-on-task log |
| Consequence of a failed assessment | Stated: reassignment, remediation, or limitation on reliance | Remediation record |

## 5. Test performed

| Test | Method | Sample | Result |
|---|---|---|---|
| Competence records exist and are current | Inspection | | |
| Assessment conditions recorded | Inspection | | |
| Seeded-error detection | Reperformance | | |
| Override behaviour under low system confidence | Reperformance | | |
| Consequence applied where assessment not met | Inspection | | |

## 6. Results

Record seeded-error detection and override behaviour as distributions across the reviewer population, with the conditions under which each was obtained. A single pass rate against a target is not appropriate for override behaviour: reviewers who know the rate is tracked have an incentive to raise it without any change in judgment.

| Measure | Distribution | Conditions | Notes |
|---|---|---|---|
| Seeded-error detection | | | |
| Override under low confidence | | | |
| Unassisted vs assisted performance | | | |

## 7. Exceptions and remediation

| Ref | Exception | Cause | Action | Owner | Due |
|---|---|---|---|---|---|

## 8. Conclusion

| | |
|---|---|
| Design | Effective / Deficient — basis: |
| Operating effectiveness | Effective / Deficient / Not tested — basis: |
| Capabilities not covered by this test | |

---

## Notes on use

**Seeded-error testing is a study on staff.** It involves deception and should not be run as routine quality assurance. Use synthetic or sandboxed cases rather than live consequential decisions, disclose in debrief, and route the design through whatever review applies to research on employees. Where the workflow cannot be simulated, structured interviews about specific recent instances are the recognised alternative. Record in section 5 which was used and what review the design received.

**Interval.** No interval is recommended here. Set one and state it.

**Population.** Assessment results support inferences only about a population resembling the one assessed. If the assessment is run on senior reviewers in unhurried conditions and the operating population is different, say so in section 6 rather than reporting the number alone.

**Regulatory mapping.** Where the organisation deploys high-risk AI systems in the EU, Article 26(2) of Regulation (EU) 2024/1689 requires that natural persons assigned to human oversight have the necessary competence, training and authority. This workpaper produces evidence relevant to that obligation. It is not a compliance opinion.

**Status of this template.** Provided for information. Not legal, compliance or audit advice, and not a compliance opinion. Suitability for a particular organisation, system or jurisdiction is a matter for that organisation and its own advisers.

**Reference.** Turkina, D. (2026). *The Unmonitored Dependency: Human Supervisory Capacity as an Assurance Target in Frontier AI Safety Frameworks.* SSRN 7248205.
