# Templates

Four record types. Use whichever fit; they are independent.

The workbook adds a scorecard tab, completed last, which brings the four together in one place. It summarises the records and does not replace the workpaper, which carries the scope, purpose limitation and conclusion.

The scorecard carries a status against each record: supported, recorded, qualified, or not determined. The status describes how far the evidence goes, not how well anyone performed. It is not a rating of reviewers and not a risk score.

## competence-matrix

*Can each reviewer do what the role requires?*

One row per reviewer per required skill. The core record.

| Field | Notes |
|---|---|
| `reviewer_id` | Pseudonymous. These records concern individuals; identifiability should be the minimum the purpose requires. |
| `role` | The oversight function, not the job title. |
| `system_scope` | Which system or capability tier this row covers. Competence is not general. |
| `required_skill` | Stated as something a person does, not something they are. "Detects an inconsistent statistical argument" rather than "familiar with statistics". Conceptual understanding belongs here too, stated the same way — "explains why the system produced a given output" rather than "understands the model". |
| `required_level` | Organisation's own scale. |
| `assessment_method` | What was actually done. For conceptual understanding the paper proposes unassisted comprehension assessment on the behaviour of the supervised system, at intake and periodically. |
| `assessment_date` / `next_due_date` | Interval is the organisation's to set. State it rather than leaving it implicit. |
| `criterion` | What counted as meeting the requirement, set before the assessment was run. A result with no stated criterion cannot be judged. |
| `result` | The raw result. Record it whether or not it met the criterion. |
| `met` | Yes, no, or not determined. "Not determined" is a legitimate outcome, for instance where the assessment ran under conditions unlike operation. |
| `result_detail` | Where the result came from: which items were missed, any pattern in them. A bare score cannot be acted on. |
| `remediation` | What follows where the criterion was not met, or was not determined. Leave blank only if nothing is required. |
| `authority_to_halt` | Whether this person can stop the process they oversee, and on what authority. |
| `status` | Record-keeping state of the row, not a verdict on the person. The verdict is `met`. |
| `conditions` | Conditions under which the assessment was performed — time of day, concurrent load, whether the reviewer knew they were being assessed. An assessment run under conditions unlike operation supports no inference about operation. |
| `evidence_location` | Where the record lives. |

## time-on-task

*Under what conditions were they working?*

Recording hours, continuous stretches, breaks and concurrent scenarios separates a competence problem from a workload one. Without it, a poor assessment result is uninterpretable.

Use `interpretation` to say what this row means for reading an assessment result from the same period.

The construct is cognitive load, not concurrency alone. The systematic review cited in the main README found automation bias in single tasks where verification of the output was itself complex, and concluded that load rather than multitasking is the associated factor. Concurrency is one contributor to load; task difficulty and verification complexity are others, and a reviewer working on one hard case may be under more load than one working on four easy ones.

## oversight-stress-test

*Do they catch errors that are deliberately planted?*

The seeded-error protocol. Present the reviewer with a mix of correct and deliberately flawed outputs under conditions resembling operation, and record how often flawed outputs are accepted without challenge.

**Before running it.** Seeded errors are deception. Use synthetic or sandboxed cases rather than live consequential decisions, disclose in debrief, and have the design reviewed by whoever reviews research on employees in your organisation. Where the workflow is consequential, regulated, or too long to simulate, structured interviews about specific recent instances are the recognised alternative. Treat this as a study on staff, not as routine quality assurance.

**Where it does not apply.** The protocol requires a known correct answer. That exists for classification, moderation and fraud review, where an item is right or wrong independently of the reviewer. It may not exist where the reviewer is assessing whether a novel argument is sound, such as a safety case or a capability evaluation, and in those settings this record has no application.

**The method is not new.** Automation bias has been studied in human factors and clinical decision support since the 1980s, including controlled studies with deliberately introduced errors. Published research-methods guidance suggests figures in the region of 30-40 participants per segment for stable acceptance rates. Work from that literature for study design; this sheet is a record format, not a protocol.

Notes on running it:

- Flawed outputs should be wrong in ways that are plausible, not obviously broken. An obviously broken output measures attention, not judgment.
- Record the result as a distribution across reviewers, not as a pass rate against a target. A tracked override threshold gives reviewers a reason to override more, which improves the number without improving the judgment.
- Record whether reviewers were informed that the protocol was running.
- Present some flawed outputs as confident. Detection and override are different capabilities: a reviewer who does not notice and one who notices and lets the item through have failed differently, and `noticed_not_acted` is where the second is recorded.
- Record detection and override as separate distributions rather than one acceptance figure.
- A record that a reviewer noticed and did not act is a different kind of record from a failure to notice. It carries more weight against the individual, and the purpose limitation in the workpaper matters more for it.
- Use `interpretation` to state what the distribution appears to show and what would change the reading.

## skill-preserving-modes

*Can they still do it without the system?*

Records whether reviewers ever work without the system, and how they perform when they do. The concern is that assisted performance can remain high while unassisted capability declines, so a measure taken only with the tool present cannot detect the change. Aviation addresses this by scheduling and recording manual flying rather than by asking whether pilots feel current.

Use `interpretation` to state whether a single observation or a trend is being recorded.

---

**Completed records must not be committed to any public repository.** A filled-in matrix or stress-test sheet contains named individuals and performance data. Git history is additive: deleting the file in a later commit does not remove it from the repository. Keep completed records in whatever system already holds your control evidence.

---

All example rows are illustrative. They show the shape of a completed record. They are not data about any organisation and should be deleted before use.
