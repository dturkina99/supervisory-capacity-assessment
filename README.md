# Supervisory Capacity Assessment

Audit-format templates for recording assessments of the people assigned to oversee an AI system.

**Paper:** Turkina, D. (2026). *The Unmonitored Dependency: Human Supervisory Capacity as an Assurance Target in Frontier AI Safety Frameworks.* SSRN 7248205. [doi.org/10.2139/ssrn.7248205](https://doi.org/10.2139/ssrn.7248205)

**Data:** Coding sheet, term-search log and text-layer manifest at [doi.org/10.5281/zenodo.22075225](https://doi.org/10.5281/zenodo.22075225), CC BY 4.0.

Written in a personal capacity; does not represent any employer.

---

## The problem

Governance frameworks and standards allocate consequential decisions to named human beings — approve a deployment, reject an output, halt a process. They generally specify who those people are, and often what independence they must have. They rarely specify how anyone would know those people can still detect the errors they are there to catch.

A control that is asserted but never tested provides no assurance. These templates are for organisations that want the competence of human overseers held as evidence rather than as an assumption.

The paper examines frontier AI safety frameworks, which govern model developers. These templates are built for deployers of high-risk systems, who face the same question under different law. The two are separate regimes and often separate companies; what they share is that the competence of the human overseer is stated rather than established.

## What this is not

This repository contributes no measurement science. Automation bias has been studied in the human factors and clinical decision-support literature for decades: a systematic review covering 1983–2015 found the effect present in single tasks, typically diagnosis rather than monitoring, and where verification of the automated output was itself complex. It concluded that automation bias is associated with cognitive load rather than uniquely with multitasking (Lyell & Coiera, *Journal of the American Medical Informatics Association* 24(2), 2017, [doi.org/10.1093/jamia/ocw105](https://doi.org/10.1093/jamia/ocw105)). Practitioner guidance on studying over-reliance gives sample sizes and design cautions. Commercially available tooling already monitors override rate, time on decision, variance between reviewers, performance on seeded cases and override accuracy. Published human-in-the-loop policy templates already cover initial and refresher training and per-reviewer training records.

Design a study from that literature, not from this repository. What this repository adds is narrower: the records in an internal-audit format, and the distinction between recording that training occurred and recording whether the person can currently detect an error under conditions resembling operation. The first is attendance. The second is operating effectiveness. Most existing templates capture the first. The review cited above notes that the literature is fragmented in how automation bias is reported; consistent recording is the gap.

## Ethics and employment obligations

Seeded errors are deception, and the records these templates create are per-individual performance data. Both need handling before anyone runs them on staff.

Method:

- Use synthetic or sandboxed cases rather than live consequential decisions.
- Disclose in debrief.
- Where the workflow is consequential, regulated, or too long to simulate, structured interviews about specific recent instances are the recognised alternative to a controlled task.

Before running anything:

- Consult employee representatives or works councils where applicable. In some jurisdictions a covert performance test without consultation is unlawful however carefully the ethics are handled.
- Complete whatever data protection assessment your organisation requires before creating per-individual records. Keep identifiers pseudonymous and identifiability to the minimum the purpose requires.
- Decide, in advance and in writing, whether results may be used in employment decisions. Deciding afterwards is the failure mode.
- Route the design through whatever review applies to research involving employees.

The requirements vary by jurisdiction and the list above is not exhaustive. Obtain local advice before running an exercise of this kind on employees.

This repository provides record formats. It does not discharge any of the above. Adopters are responsible for all applicable data protection, employment and consultation obligations arising from their use, and the licence gives no warranty and may not grant every permission a particular use requires.

## What is being assessed

The paper distinguishes four capabilities human oversight relies on. The four-way split is that paper's own framing rather than an established taxonomy, and is offered as a way of separating what can be assessed from what cannot:

- **conceptual understanding** — grasping how the system produces what it produces
- **error detection** — noticing that an output is wrong
- **independent judgment** — reaching a conclusion the system did not supply
- **override capacity** — acting against a confident machine

The four records implement the paper's proposed instruments to different degrees. Reading from capability to record:

- **error detection** — implemented. The paper proposes seeded incorrect outputs with detection rate tracked over time; **record 03** does this.
- **override capacity** — the paper proposes seeded *confidently* incorrect outputs with override rate read as a distribution.** Record 03** records confidence, detection and override separately, and records cases where a reviewer noticed and let the item through anyway. That last case is a different failure from not noticing, with a different remedy.
- **conceptual understanding** — the paper proposes unassisted comprehension assessment on the behaviour of the supervised system, at intake and periodically, and calls it partially tractable.** Record 01** carries this where the organisation states it as a required skill.
- **independent judgment** on genuinely novel questions — the paper is explicit that **no instrument it proposes measures this directly, and neither does anything here.**

**Record 04 ** sits across the set rather than under one capability. Measuring performance both with and without the system tracks conceptual understanding, error detection and independent diagnostic ability at once: assisted performance can approach specialist level while unassisted capability is unchanged, and only the second measurement reveals it. The record therefore holds two results side by side rather than one score.

**Record 02** measures no capability. It records the conditions the other records were obtained under.

An assurance requirement needs an indicator, a threshold, and a consequence attaching to the result. Some thresholds invite gaming. Override rate is the clear case: a reviewer who knows the rate is tracked can raise it without judging any better. For those the templates record a distribution instead of a target, and the consequence attaches to the change rather than the level: a distribution that shifts between rounds, or a reviewer well outside the spread, is what should prompt action.

## Contents

| File | Purpose |
|---|---|
| `templates/01-competence-matrix.csv` | Can each reviewer do what the role requires? Skill, criterion, method, result, whether met, conditions |
| `templates/02-time-on-task.csv` | Under what conditions were they working? Hours, unbroken stretches, breaks, concurrent load |
| `templates/03-oversight-stress-test.csv` | Do they catch errors that are deliberately planted? Results as a distribution, with conditions |
| `templates/04-skill-preservation.csv` | Can they still do it without the system? Unassisted beside assisted |
| `templates/supervisory-capacity-records.xlsx` | The four above as one workbook, plus a scorecard tab completed by hand |
| `templates/workpaper-supervisory-capacity.md` | Control-testing workpaper in internal-audit format |
| `templates/README.md` | Field definitions and usage notes |
| `dataset/README.md` | Pointer to the deposited coding data |
| `CITATION.cff` | Citation metadata; cite the paper rather than the repository |

The CSVs are the source of truth and render as tables in the browser. The record sheets in the workbook are generated from them; if they differ, the CSVs are correct. The scorecard tab is not generated and is filled by hand.

**Start here.** If you are doing one thing, complete the competence matrix for one system and one reviewer group. The other three records answer questions the first one raises: under what conditions the result was obtained, whether anyone is actually catching planted errors, and whether people can still do the work without the system.

**Status.** These templates have not been run in production anywhere. Reports from anyone who tries them are welcome via issues.

A first round typically returns few determinations. Criteria are being stated for the first time, distributions have nothing to be compared against, and some assessments will have been run under conditions that do not support an inference to operation.

All example values are illustrative and marked as such. They show the shape of a completed record; they are not findings about any organisation.

Adopting these templates creates records about identified individuals. See *Ethics and employment obligations* above before use, and do not commit completed records to any public repository. Git history is additive, and deleting a file later does not remove it.

## Precedents

Two regulated domains treat operator capability as a maintained resource rather than a stable trait: aviation, through recurrent training that must be completed and recorded, and model risk management in banking, through the requirement that challenge be effective and made by people with the standing to make it. Neither transfers directly to AI oversight. Both establish that the question is answerable.

## Regulatory context

Article 26(2) of Regulation (EU) 2024/1689 requires deployers of high-risk AI systems to assign human oversight to natural persons who have the necessary competence, training and authority, as well as the necessary support. Article 14 sets the corresponding provider obligations. These templates produce evidence relevant to those obligations. They are not a compliance opinion and confer no presumption of conformity.

## Third-party material

This repository contains no material from the documents discussed.

The frontier safety frameworks and compliance filings analysed in the paper remain the copyright of their publishers. The deposited dataset records source URLs and text-layer hashes rather than redistributing the documents, so that a reader can verify a conversion they produce themselves against the one the counts were computed on.

The European standards referenced, including prEN 18229-3 on human oversight, IEC 62366-1 and EN ISO 11064-7, are sold by national standards bodies and are not reproduced here beyond what is necessary to identify them. Drafts are freely available during their public comment windows and paid for afterwards.

## Disclaimer

These materials are provided for information. They do not constitute legal, compliance, audit or other professional advice, do not create any advisory or professional relationship, and are not a compliance opinion in respect of any regulation. Whether they are suitable for a particular organisation, system or jurisdiction is a matter for that organisation and its own advisers.

The author is not responsible for any use made of these materials or for any decision taken in reliance on them.

## Contributing

Corrections and disputes welcome via issues, including disputes with the coding in the deposited dataset. It was produced by one researcher; that is disclosed as a limitation in the paper and the sheet is published so individual decisions can be argued with.

## Licence

[CC BY 4.0](https://creativecommons.org/licenses/by/4.0/), matching the deposited dataset. Share and adapt for any purpose including commercially, with attribution. See `LICENSE`.
