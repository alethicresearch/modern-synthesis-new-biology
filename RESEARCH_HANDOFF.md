# Research handoff

Updated: 2026-08-31

## Current objective

Build the repository into a living empirical companion to *From Commitment to Adoption: The Path Ahead for New Biology*. The resource should maintain a broader evidence corpus than the paper, preserve regulatory-stage distinctions, expose a compact major-milestones view, maintain a prospective agenda with observable success criteria, and separately measure what happens at the point of adoption.

The research question has sharpened from “what NAM/new-biology developments occurred?” to: **where has commitment become reusable qualification, where has qualification become regulatory reliance, and where has reliance actually displaced legacy animal studies or other evidence requirements?**

Do not substantively revise the manuscript yet. Complete the contemporary/international corpus far enough that figures and claims can be derived from the evidence ledger rather than added anecdotally.

## Current architecture

- `data/events.json` — observed/foundation/emerging chronology.
- `data/prospective.json` — forward-looking targets, recommendations, forecasts and catalytic proposals.
- `data/regulatory_contexts.json` — defined contexts in which a legacy animal study or animal-derived test component can be omitted, replaced, shortened or avoided.
- `data/named_regulatory_adoption.json` — regulator-verified named product/program cases; explicitly distinguishes animal displacement from broader NAM reliance.
- `data/adoption_candidates.json` — named sponsor/product claims awaiting regulator-level confirmation.
- `data/displacement_metrics.json` — quantified study/animal reductions, avoidance estimates and relevant denominators.
- `data/candidates.json` — event candidates awaiting promotion, correction, merge or rejection.
- `RESEARCH_PROTOCOL.md` — inclusion/exclusion, evidence hierarchy, stage discipline and research rounds.
- `EVENT_SCHEMA.md` — event schema.
- `PAPER_INTEGRATION.md` — manuscript/linking/freeze plan.
- `research/ROUND_1_ADOPTION_DISPLACEMENT_SWEEP_2026-08-31.md` — first displacement audit.
- `research/ROUND_1_NAMED_ADOPTION_CASES_2026-08-31.md` — named sponsor-case search.
- `research/ROUND_1_REGULATOR_VERIFIED_NAM_ADOPTION_2026-08-31.md` — regulator-authored named cases and realized metrics.
- `research/ROUND_1_INTERNATIONAL_PRODUCT_PRECEDENTS_2026-08-31.md` — FDA/EMA/TGA/Health Canada product precedents and PMDA positions.
- `scripts/validate_data.py` + `.github/workflows/validate.yml` — validation covers chronology, prospective milestones, regulatory contexts, candidate ledgers, named adoption cases and displacement metrics.

## Adoption is explicitly multidimensional

Do not use one undifferentiated “adoption” count. Current evidence supports at least four outcomes:

1. **Animal-study displacement** — an animal study is omitted, replaced, shortened or avoided.
2. **NAM regulatory reliance** — NAM evidence materially supports a named regulatory decision even if no animal study is displaced.
3. **Other evidence substitution** — NAM evidence substitutes for otherwise impractical clinical or other evidence requirements.
4. **Institutional routinization** — an alternative/waiver pathway becomes ordinary enough to migrate from exceptional specialist review into routine workflow.

The stricter animal-displacement measure remains: an authoritative record supports that a legacy animal study/component can actually be omitted, replaced, shortened or avoided for a defined decision.

## Named product evidence: strongest current precedents

### Kimmtrak (tebentafusp)

Kimmtrak is now a **four-regulator cross-jurisdiction precedent**.

- FDA/CDER/OND reviewers identify human tissue/cell assays as supporting clinical-trial safety when no pharmacologically relevant animal model existed.
- EMA product information states that tebentafusp is human-specific and that there are no relevant animal species in which its nonclinical toxicology could be tested; carcinogenicity, genotoxicity and DART studies were not conducted.
- TGA's AusPAR states that omission of animal-species toxicity studies was justified by human specificity and absence of equivalent targets and describes the supporting human binding/tissue/cytokine evidence.
- Health Canada's independent Summary Basis of Decision likewise states that tebentafusp is human-specific, no relevant animal species existed for nonclinical toxicology, and no long-term carcinogenicity, genotoxicity or reproductive/developmental toxicity studies were conducted. Health Canada notes that its regulatory decision was independent even though foreign reviews were used as references.

Coding: confirmed named human-based regulatory adoption and a strict animal-displacement precedent in the sense that conventional animal toxicology could not appropriately supply the evidence. Do **not** describe it as a one-for-one waiver of a named mandatory test.

This is important for the manuscript because convergence here is stronger than parallel rhetoric: multiple regulators independently recognized the same scientific constraint and corresponding evidence strategy.

### Carvykti (ciltacabtagene autoleucel)

EMA/CHMP's public assessment report states that no relevant animal model existed for formal safety evaluation. No GLP-compliant formal toxicology studies were performed, absence of repeat-dose toxicology was considered acceptable, and the cynomolgus model used in a non-GLP study was explicitly considered non-relevant because the construct did not bind cynomolgus BCMA. On-/off-target risks were addressed with literature, in-vitro studies and clinical risk management.

Coding: confirmed named animal-displacement precedent for **omission of conventional formal GLP/repeat-dose toxicology**, not an animal-free program; in-vivo pharmacology and a non-GLP monkey study existed.

Health Canada's later Carvykti authorization independently documents human-cell in-vitro functional assays and in-vitro assessment of insertional-mutagenesis risk, but it does not make the same explicit repeat-dose-omission/no-relevant-model statement. Treat it as supporting NAM-adoption evidence, not a second regulator-confirmed displacement decision.

### Veopoz (pozelimab-bbfg)

FDA reviewers report no pharmacologically relevant species for the key complement pharmacology. Cell-based assays and validated ex-vivo CH50 testing materially supported approval with clinical and other evidence.

Coding: named NAM regulatory reliance, **not pure animal displacement**, because the totality included animal and human data.

### Kalydeco and Galafold

FDA accepted validated in-vitro functional assays to extend genetically defined treatment populations without separate clinical trials for every variant/subpopulation.

Coding: strong NAM regulatory reliance and **clinical-evidence substitution**, not animal displacement. Galafold is a useful example of staged reliance because residual uncertainty was handled through post-approval clinical verification.

## Sponsor claim still quarantined

SillaJen/Qureator BAL0891 remains in `data/adoption_candidates.json`. Qureator says the combination IND amendment used a human vascularized tumor-immune organoid efficacy package without traditional animal proof-of-concept testing; SillaJen independently confirms the collaboration and FDA IND amendment. A public FDA document directly linking approval to omitted animal POC has not been located.

Do not promote until a public FDA review, sufficiently detailed sponsor regulatory filing or equivalent authoritative record confirms the causal displacement claim.

## PMDA: international streamlining signals with exact status

Two PMDA records are now in `data/regulatory_contexts.json` and queued in `data/candidates.json` for chronology promotion. Both are **Early Consideration** documents: PMDA explicitly describes these as current reference information/views that may change, not binding final guidance.

### October 24, 2025 — NHP DART

PMDA states that when NHP is the only relevant species for a biopharmaceutical, an alternative Weight-of-Evidence scheme can be used **in place of NHP DART testing** with appropriate scientific justification. Inputs can include mechanism and target biology, placental transfer, literature/databases, human experience with related drugs, existing genetically modified-animal information and other evidence. PMDA also describes cases where available evidence can make DART testing unnecessary.

Coding: `early_consideration_nonbinding`; major international conditional-replacement context, not a named product adoption event.

### May 13, 2026 — monoclonal antibody repeated-dose toxicity

PMDA states that retrospective evidence suggests a three-month monkey study can often provide sufficient information for conventional mAbs, identifies NAM data plus mechanism/class/clinical evidence as WOE inputs, and says the incremental value of a six-month study may be limited when specified risk conditions do not apply. Sponsors are encouraged to discuss case-specific rationalization with PMDA.

Coding: `early_consideration_nonbinding`; conditional shortening/omission context, not final guidance.

## Quantified displacement: strongest current evidence

EPA Office of Pesticide Programs remains the best public source for realized denominators.

### FY2023 branch-level acute-toxicity decisions

EPA reports:

- 1,122 studies saved;
- 9,415–18,026 animals reduced;
- $12,004,500 estimated study-cost savings; and
- $1,102,702 EPA review-cost savings.

This includes data citations, bridging, additional study waivers and WOE rationales, so it measures broader evidence-based reduction, not only human-based NAM substitution.

### Acute dermal waivers, FY2018-FY2023

EPA annual data sum to 262 granted waivers and 2,620–7,860 animals reduced. This is observed agency tracking, not the 2016 prospective estimate.

### FDA/ICH S1B(R1)

FDA/CDER/OND authors state that omission of one two-year rat carcinogenicity study avoids more than 400 animals, depending on study design. This is a per-decision conversion factor, not a national total.

## Institutional routinization finding

EPA reports that by FY2022 most acute-toxicity determinations could be made at branch level rather than requiring CATSAC consultation. Successful adoption can therefore be measured not only through accepted methods or animal counts but through **where a decision sits organizationally**. Movement from specialist exception handling to ordinary review is evidence of routinization.

## Contemporary chronology: major verified/source-audited developments

Round 1 remains in progress. High-value milestones already verified or queued include FDA Modernization Act 2.0; first organ-chip ISTAND LOI; Complement-ARIE VQN; FDA 2025 Roadmap; NIH April 2025 human-based initiative; NIH July 2025 funding-opportunity policy implementation; permanent ISTAND; NIH $87M Standardized Organoid Modeling Center; Reduction to Practice Challenge; FDA draft mAb guidance; AIM-NASH qualification through BQP; EPA 2035 recommitment; FDA ISTAND pipeline metrics; FDA general draft NAM guidance; >$150M Complement-ARIE awards; FDA Year One; FDA oncology draft guidance; first in-silico ISTAND LOI; ORIVA; Reduction to Practice Phase 1; NCI animal-use justification policy; QSP-MABEL; EPA Aug. 27 implemented regulatory use; and FDA/ICMRA recombinant-endotoxin collaborative assessment.

The two PMDA Early Consideration milestones are now queued for the public chronology with exact nonbinding status.

## Existing regulatory-context examples

`data/regulatory_contexts.json` now includes examples across FDA, EPA and PMDA:

- FDA hiPSC-derived cardiomyocytes substituting for an otherwise-conducted animal QT/proarrhythmia study in a defined anticancer context.
- EPA 3D human airway tissue + digital models avoiding new inhalation studies for covered surfactant assessments.
- EPA GHS mixtures equation avoiding some acute-oral testing; computational, not human-biological.
- FDA recombinant endotoxin reagents replacing an animal-derived reagent; distinguish from in-vivo replacement.
- FDA/ICH S1B(R1) WOE pathway supporting conditional omission of a two-year rat carcinogenicity study.
- Mature FDA photosafety reliance on non-animal/clinical evidence.
- FDA draft mAb/oncology conditional omission/shortening contexts, preserving draft status.
- PMDA NHP DART WOE alternative and PMDA six-month mAb monkey-study rationalization, both preserving Early Consideration status.

## Source gaps and audits

Resolve before declaring Round 1 audit-ready:

- FDA Modernization Act 2.0 statutory source normalization.
- OHSU/ONPRC: verified Feb. 9, 2026 board resolution does not yet substantiate the current July 27 NAM-center-of-excellence wording; resolve/correct.
- NIH reviewer EOI/public posting status.
- NIEHS/SCIOME award source normalization.
- IAMPS launch and Liver MPS Ring Trial must remain separate; find actual reproducibility/results evidence.
- Inspect original Drugs@FDA review passages underlying Kimmtrak and Veopoz directly.
- Find FY2024/FY2025 EPA displacement metrics if published.
- Find independently corroborated industry animal-use denominators.
- Continue named-product mining at EMA, Health Canada, TGA, PMDA and MHRA.

## Next research priority

1. **EMA EPAR mining** — find additional named approvals where no relevant species existed and in-vitro/human evidence replaced or materially reduced conventional toxicology. Sarclisa/isatuximab is a promising next candidate because EMA materials indicate human-tissue in-vitro studies were used to identify potential target organs when no relevant animal species/surrogate existed.
2. **Health Canada** — mine Summary Basis of Decision records for named products and compare with EMA/FDA/TGA outcomes.
3. **PMDA named approvals** — find actual product review reports implementing the logic now articulated in Early Consideration.
4. **MHRA** — search Public Assessment Reports for explicit no-relevant-species and non-animal strategies.
5. **EPA metrics** — extend realized denominators and endpoint-specific metrics through the latest available fiscal year.
6. **Industry** — regulatory submissions, ring-trial outcomes and audited/measured animal displacement, not internal platform use alone.

## Manuscript implications

The paper can now plausibly move beyond a conceptual Commitment → Qualification → Adoption sequence toward an empirically specified adoption layer. A later figure/table could show downstream outputs of qualification as separate branches: **animal displacement, named regulatory reliance, other evidence substitution, and routinization**.

A stronger international argument is emerging: **species relevance is becoming a regulatory decision variable across jurisdictions**. Kimmtrak shows four regulators independently accepting the consequences of a human-specific mechanism. Carvykti shows EMA accepting omission of conventional formal toxicology for an advanced therapy when available animal models were not scientifically relevant. PMDA shows the same logic moving into explicit prospective regulator thinking for NHP DART and long-term mAb toxicology.

This supports a more precise convergence claim than “regulators support NAMs”: convergence can occur at the level of evidentiary logic before formal harmonization or shared qualification. Preserve the distinction between independent convergence, ICH/OECD harmonization, and coordinated multinational review.

The opacity finding also remains important: EPA proves that study/animal denominators can be published, while FDA/EMA/Health Canada/TGA product records show that named regulatory reliance can be reconstructed. Lack of comparable systematic reporting elsewhere is therefore an infrastructure/transparency gap rather than an inherently unmeasurable phenomenon.

## Quality bar

Primary/regulator-authored sources whenever possible. Preserve draft/final/Early Consideration, accepted/qualified, funded/awarded, validation/qualification/adoption, intent/implementation, human-based/broader-NAM, in-vivo-study/animal-derived-component, animal-displacement/clinical-evidence-substitution, independent-convergence/formal-harmonization, and sponsor-claim/regulator-confirmed distinctions. Never infer animals avoided from validation-corpus size, method announcements or absent studies without an authoritative causal basis.
