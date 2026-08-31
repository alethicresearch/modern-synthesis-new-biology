# Round 1 — Named adoption and displacement cases

Updated: 2026-08-31

## Purpose

Identify named sponsor/regulator cases in which a human-based, computational, or integrated evidence package appears to have enabled omission, replacement, shortening, waiver, or avoidance of a legacy animal study. The evidence threshold is intentionally higher than for policy or qualification events.

## Evidence hierarchy for named cases

1. Regulator review document or decision record explicitly linking the alternative evidence to omission/replacement of an animal study.
2. Regulator public statement identifying the named sponsor/product and the displacement.
3. Sponsor disclosure plus independent regulator record confirming the underlying regulatory action.
4. Platform-provider or partner claim corroborated by sponsor disclosure, but without regulator attribution.
5. Uncorroborated company/media claim.

Only levels 1–2 should be described as regulator-verified displacement. Level 3 can support a carefully worded sponsor-level case. Level 4 is a research candidate pending confirmation.

## Named case: SillaJen BAL0891 + tislelizumab / Qureator vTIME

### What is publicly supported

Qureator announced on 27 October 2025 that its human vascularized tumor immune microenvironment (vTIME) organ-on-chip platform generated the efficacy evidence used in SillaJen's FDA IND amendment for BAL0891 combined with an immune checkpoint inhibitor, and asserted that the package replaced traditional animal efficacy/proof-of-concept testing.

Primary company source: https://qureator.com/qureator-achieves-worlds-first-fda-ind-approval-using-only-human-vascularized-organoid-efficacy-data/

SillaJen's own public materials independently establish that:

- SillaJen and Qureator entered a joint BAL0891 research agreement in June 2024.
- SillaJen applied in July 2025 for an FDA IND amendment adding tislelizumab combination treatment.
- SillaJen subsequently announced U.S. FDA approval of the BAL0891 + tislelizumab combination clinical IND amendment in October 2025.

Sponsor sources:
- https://www.sillajen.com/eng/sub/company_history.html
- https://www.sillajen.com/kor/sub/notice_list.html?chk=5&page=2&sv=

### What is not yet independently supported

No public FDA review memorandum, IND correspondence, press release, or other FDA record was located in this sweep that states that the agency accepted the vTIME organoid efficacy package *in lieu of* animal proof-of-concept studies.

Therefore the strong formulation — “FDA accepted an IND because human organoid efficacy data replaced animal POC” — remains a provider/sponsor-attributed claim rather than a regulator-verified fact.

### Current classification

- candidate status: `requires_regulator_confirmation`
- evidence level: 4 (platform-provider claim corroborated by sponsor regulatory action and collaboration)
- likely materiality if confirmed: landmark
- likely stage: adoption
- likely domain: organoid, MPS, oncology, efficacy, IND

### Why it matters

If regulator documentation confirms the causal claim, this would be one of the clearest named post–FDA Modernization Act 2.0 examples of a human-based model replacing a traditional animal efficacy proof-of-concept package in an IND-related decision. It could materially strengthen the paper's adoption section and become a major roadmap milestone.

## FDA CDER inventory: contexts with explicit study omission/reduction

FDA's current “CDER Streamlined Nonclinical Studies and Acceptable NAMs” inventory provides a second route to measure adoption even where sponsor names are unavailable. It explicitly identifies multiple contexts where studies are not warranted or may be replaced by weight-of-evidence approaches. These contexts should be tracked separately from named sponsor cases.

Primary source: https://www.fda.gov/about-fda/center-drug-evaluation-and-research-cder/cder-streamlined-nonclinical-studies-and-acceptable-new-approach-methodologies-nams

High-value examples from the current inventory include:

- Monospecific antibodies with no pharmacologically relevant nonclinical species: no animal toxicology studies may be warranted; this currently rests in draft mAb guidance.
- PD-(L)1 blocking monospecific antibodies: chronic effects may be assessed by weight of evidence in lieu of a 3-month toxicology study; draft guidance.
- CD3 bispecific T-cell engagers: chronic effects may similarly be assessed by weight of evidence in lieu of a 3-month toxicology study; draft oncology guidance.
- Oligonucleotide DART: existing evidence can in some cases be sufficient so that no additional nonclinical studies are warranted; established guidance.
- Microdose radiopharmaceutical diagnostic drugs: repeat-dose toxicity and DART studies are not warranted in the described context; established guidance.
- Oncology QT/proarrhythmic assessment: qualifying hiPSC-derived cardiomyocyte studies can be used in place of an animal study otherwise conducted; applied regulatory example already represented in `data/regulatory_contexts.json`.

These examples show that “adoption” is heterogeneous. Some contexts replace an animal study with a human model; others omit a study because existing evidence makes it scientifically unnecessary. Both reduce animal use, but they should not be conflated.

## Search result: sponsor-specific public evidence remains sparse

Public FDA IND files rarely expose enough detail to identify whether a specific omitted study was omitted *because of* NAM evidence. Search results frequently show waiver requests and FDA responses, but most concern conventional weight-of-evidence, human exposure, or study feasibility rather than a named human-based model.

This absence is analytically meaningful. If the field wants adoption to compound, public precedent needs to become more legible. The current evidence environment makes it substantially easier to document policy and qualification activity than sponsor-specific displacement.

## Next searches

1. Locate FDA review/IND documentation for the SillaJen BAL0891 combination amendment, if publicly available.
2. Search Drugs@FDA review packages and sponsor regulatory disclosures for explicit statements that an animal study was omitted after acceptance of human-relevant or computational evidence.
3. Search EMA EPAR nonclinical assessment reports for named products where an animal study was waived/replaced based on NAM evidence.
4. Search EPA pesticide waiver records and new-chemical decisions for named substances/formulations with explicit avoided-study determinations.
5. Build a denominator where possible: number of contexts, waivers, or submissions in which displacement occurred rather than isolated anecdotes alone.
