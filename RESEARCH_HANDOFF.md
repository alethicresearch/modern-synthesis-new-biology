# Research handoff

Updated: 2026-08-31

## Current objective

Build the repository into a living empirical companion to *From Commitment to Adoption: The Path Ahead for New Biology*. The resource should maintain a broader evidence corpus than the paper, preserve regulatory-stage distinctions, expose a compact major-milestones view, maintain a prospective agenda with observable success criteria, and separately measure what happens at the point of adoption.

The research question has sharpened from “what NAM/new-biology developments occurred?” to: **where has commitment become reusable qualification, where has qualification become regulatory reliance, and where has reliance actually displaced legacy animal studies or other evidence requirements?**

## Current architecture

- `data/events.json` — observed/foundation/emerging chronology.
- `data/prospective.json` — forward-looking targets, recommendations, forecasts and catalytic proposals.
- `data/regulatory_contexts.json` — context-of-use ledger for defined situations in which a legacy animal study or animal-derived test component can be omitted, replaced, shortened or avoided.
- `data/named_regulatory_adoption.json` — regulator-verified named product/program cases in which NAM evidence materially affected a regulatory decision; explicitly distinguishes animal displacement from broader NAM reliance.
- `data/adoption_candidates.json` — named sponsor/product claims awaiting regulator-level confirmation.
- `data/displacement_metrics.json` — quantified study/animal reductions, avoidance estimates and relevant denominators.
- `data/candidates.json` — event candidates awaiting promotion, correction, merge or rejection.
- `RESEARCH_PROTOCOL.md` — inclusion/exclusion, evidence hierarchy, stage discipline and research rounds.
- `EVENT_SCHEMA.md` — event schema.
- `PAPER_INTEGRATION.md` — manuscript/linking/freeze plan.
- `research/ROUND_1_ADOPTION_DISPLACEMENT_SWEEP_2026-08-31.md` — first displacement audit.
- `research/ROUND_1_NAMED_ADOPTION_CASES_2026-08-31.md` — named sponsor-case search.
- `research/ROUND_1_REGULATOR_VERIFIED_NAM_ADOPTION_2026-08-31.md` — regulator-authored named cases and realized metrics.
- `scripts/validate_data.py` + `.github/workflows/validate.yml` — validation now covers the chronology, prospective milestones, contexts, candidate ledgers, named adoption cases and displacement metrics.

## Contemporary chronology: verified/high-value additions

Research Round 1 (2022-present) remains in progress. Important primary-source-verified or source-audited milestones include:

- 2024-09-24 — first organ-chip LOI accepted into FDA ISTAND; human Liver-Chip for DILI risk. Accepted LOI, not qualification.
- 2025-04-03 — Complement-ARIE Validation and Qualification Network launched.
- 2025-04-10 — FDA Roadmap to Reducing Animal Testing in Preclinical Safety Studies.
- 2025-04-29 — NIH announces human-based research initiative, including planned ORIVA, review-system changes, funding/training/infrastructure expansion and annual spending reporting.
- 2025-07-10 — NIH changes new NOFO policy so animal-model opportunities must also permit human-focused approaches; distinct from the April commitment.
- 2025-07-31 — ISTAND becomes a permanent FDA DDT qualification program.
- 2025-09-25 — NIH establishes the $87M Standardized Organoid Modeling Center, focused on reproducibility, standardization, scale, open resources and work with FDA toward preclinical-testing standards.
- 2025-09-30 — Complement-ARIE launches the $7M Reduction to Practice Challenge.
- 2025-12-02 — FDA draft mAb streamlined-nonclinical guidance; draft, not final.
- 2025-12-08 — FDA qualifies AIM-NASH through the Biomarker Qualification Program, not ISTAND.
- 2026-02-02 — FDA DDT metrics: 16 ISTAND projects in development as of Jan. 1, 2026; 14 accepted LOIs, 2 accepted Qualification Plans and 0 qualified ISTAND DDTs.
- 2026-03-18 — FDA draft general NAM validation guidance.
- 2026-03-18 — NIH announces >$150M first Complement-ARIE awards.
- 2026-04-20 — FDA Year One progress/resource layer.
- 2026-05-29 — FDA draft oncology guidance allowing specified reductions/alternatives; draft, not final.
- 2026-06-03 — first in-silico DDT LOI accepted into ISTAND, an AI-driven digital liver model for DILI. Accepted LOI, not qualification.
- 2026-06-15 — NIH launches ORIVA.
- 2026-07-20 — Complement-ARIE Reduction to Practice Phase 1 winners; development-stage, not validation/qualification.
- 2026-08-04 — NCI animal-model applications must justify animal use and describe a path to human-model validation beginning with the Oct. 5, 2026 deadline.
- 2026-08-06 / June guidance — FDA QSP-MABEL initiative gives QSP a defined role in first-in-human dose selection; underlying Level 1 guidance remains draft.
- 2026-08-27 — EPA implements 3D human airway tissue + digital models for covered surfactant respiratory-risk assessments and a GHS mixtures equation for some acute-oral pesticide decisions.
- 2026-08-31 — FDA/ICMRA recombinant-endotoxin PACMP collaborative assessment; coordinated multinational review with approval in June 2026.

## Adoption is now explicitly multidimensional

Do not use a single undifferentiated “adoption” count. Current evidence supports at least four outcomes:

1. **Animal-study displacement** — an animal study is omitted, replaced, shortened or avoided.
2. **NAM regulatory reliance** — NAM evidence materially supports a named regulatory decision even if no animal study is displaced.
3. **Other evidence substitution** — NAM evidence substitutes for otherwise impractical clinical or other evidence requirements.
4. **Institutional routinization** — an alternative/waiver pathway becomes ordinary enough to migrate from exceptional specialist review into routine workflow.

The stricter animal-displacement measure remains: an authoritative record supports that a legacy animal study/component can actually be omitted, replaced, shortened or avoided for a defined decision.

## Regulator-verified named product cases

A 2026 FDA/CDER/OND reviewer-authored synthesis, based on public Drugs@FDA approval packages, provides the first strong named adoption set.

### Kimmtrak (tebentafusp-tebn)

Human tissue and cell-based assays assessed target/species specificity, cross-reactivity in 35 human tissues and organ-specific toxicity potential in 13 tissues. FDA authors state that the assay suite supported the safety of clinical trials in the absence of pharmacologically relevant animal models, leading into a successful development program and approval.

Coding: **confirmed named human-based regulatory adoption; counts in the stricter displacement layer**, with careful wording that this is use when a relevant animal model was unavailable rather than a documented one-for-one waiver of a named mandated study.

### Veopoz (pozelimab-bbfg)

Cell-based complement assays and validated ex vivo CH50 testing were used because no pharmacologically relevant species existed for key complement pharmacology. NAM data, with clinical and other evidence, supported approval.

Coding: **confirmed named NAM adoption, not pure animal displacement**, because FDA's totality-of-evidence description also includes animal and human data.

### Kalydeco (ivacaftor) and Galafold (migalastat)

FDA accepted validated in vitro functional assays to expand genetically defined treatment populations without separate additional pre-approval clinical trials for every variant/subpopulation.

Coding: **strong NAM regulatory reliance/evidence substitution, not animal displacement**. Galafold is especially useful as an example of staged regulatory reliance because residual uncertainty was handled through a post-approval clinical verification requirement.

## Named sponsor claim still quarantined

SillaJen/Qureator BAL0891 remains in `data/adoption_candidates.json`. Qureator states that the combination IND amendment proceeded using human vascularized tumor-immune organoid efficacy data without traditional animal proof-of-concept testing, and SillaJen independently confirms the collaboration and FDA IND amendment. A public FDA document directly attributing the regulatory decision to omission of animal POC has not yet been located.

Do not promote this to regulator-verified displacement until a public FDA review, detailed sponsor regulatory filing or equivalent authoritative record confirms the causal claim.

## Quantified displacement: strongest evidence so far

EPA Office of Pesticide Programs currently supplies the best public realized denominators in the corpus.

### FY2023 branch-level acute-toxicity decisions

EPA reports:

- 1,122 studies saved;
- 9,415–18,026 animals reduced;
- $12,004,500 estimated study-cost savings; and
- $1,102,702 EPA review-cost savings.

The category includes data citations, bridging, additional study waivers and weight-of-evidence rationales. It therefore measures the broader evidence-based transition rather than exclusively human-based replacement.

### Acute dermal waivers, FY2018-FY2023

EPA annual data sum to:

- 262 granted waivers;
- 2,620–7,860 animals reduced.

This is observed agency tracking, not the earlier prospective 2016 estimate.

### FDA/ICH S1B(R1)

FDA/CDER/OND authors state that omission of one two-year rat carcinogenicity study avoids **more than 400 animals**, depending on study design. This is a useful per-decision conversion factor but cannot become a national total without the number of actual omissions.

## Institutional routinization finding

EPA reports that by FY2022 most acute-toxicity determinations could be made at branch level rather than requiring CATSAC consultation. This gives the project a potentially important fourth adoption indicator: successful alternatives may be visible not only in method acceptance or animal counts but in **where the decision sits organizationally**. Movement from specialist exception handling to ordinary review is evidence that the alternative has become routine.

## Existing verified regulatory contexts

`data/regulatory_contexts.json` includes, among others:

- FDA: qualifying hiPSC-derived cardiomyocyte studies can substitute for an otherwise-conducted animal study for QT/proarrhythmic-risk assessment in the specified anticancer context.
- EPA: 3D human airway tissue + digital models can avoid new animal inhalation studies for covered surfactant assessments.
- EPA: GHS mixtures equation can avoid new acute-oral animal testing for covered pesticide formulations; computational, not human-biological.
- FDA: recombinant endotoxin reagents accommodated in final guidance; replacement of an animal-derived reagent, not necessarily an in vivo study.
- FDA/ICH: S1B(R1) weight-of-evidence pathway can support omission of a two-year rat carcinogenicity study in appropriate cases.
- FDA: mature photosafety practice relies largely on non-animal methods/clinical data.
- FDA draft mAb/oncology contexts: conditional omission or shortening pathways; retain draft-status labeling.

## Source gaps and audits

Resolve before declaring Round 1 audit-ready:

- FDA Modernization Act 2.0 statutory source normalization.
- OHSU/ONPRC record: verified Feb. 9, 2026 board resolution does not yet substantiate the current July 27 NAM-center-of-excellence wording; resolve/correct.
- NIH reviewer EOI/public posting status.
- NIEHS/SCIOME contract award source normalization.
- IAMPS launch vs Liver MPS Ring Trial must remain separate; find ring-trial outcome/reproducibility evidence.
- Extract and independently inspect the original Drugs@FDA review passages underlying Kimmtrak and Veopoz.
- Find FY2024/FY2025 EPA metrics if publicly available.
- Find product-level regulator records from EMA/MHRA/PMDA/TGA/Health Canada with explicit non-animal or human-based substitution.
- Find independently corroborated industry animal-use denominators.

## Next research priority

1. **FDA approval reviews** — mine public approval packages for named products lacking relevant species and identify exactly what human/in vitro evidence supported trial entry or approval.
2. **EMA EPARs** — search named human medicines for explicit statements that animal studies were unnecessary, scientifically irrelevant or replaced; distinguish comparability omissions from human-based toxicology/efficacy substitution.
3. **EPA metrics** — extend realized denominators through FY2024/FY2025 and add endpoint-specific in vitro assay metrics where available.
4. **International adoption** — MHRA, PMDA, TGA, Health Canada, OECD/ECHA and ICMRA.
5. **Industry** — regulatory submissions, ring-trial results and audited/measured animal displacement, not internal platform-use claims alone.

## Manuscript implications

The paper can now plausibly move beyond a conceptual Commitment → Qualification → Adoption sequence toward an empirically specified adoption layer. A later figure/table could show downstream outputs of qualification as separate columns or branches: **animal displacement, named regulatory reliance, other evidence substitution, and routinization**.

A central empirical claim is beginning to emerge: the transition is highly visible at commitment, increasingly legible at qualification, but actual adoption is fragmented across regulator inventories, approval reviews and agency-specific waiver metrics. EPA demonstrates that displacement denominators can be published. FDA demonstrates that named regulatory reliance can be reconstructed from approval records. The absence of comparable systematic reporting elsewhere is therefore an infrastructure/transparency gap rather than an inherently unmeasurable phenomenon.

Do not revise the manuscript substantively until the contemporary corpus is larger and the international/product-review pass is further along. When Round 1 reaches sufficient coverage, derive the paper figures and claims from the ledger rather than adding anecdotes ad hoc.

## Quality bar

Primary/regulator-authored sources whenever possible. Preserve draft/final, accepted/qualified, funded/awarded, validation/qualification/adoption, intent/implementation, human-based/broader-NAM, in-vivo-study/animal-derived-component, animal-displacement/clinical-evidence-substitution, and sponsor-claim/regulator-confirmed distinctions. Never infer animals avoided from a validation-corpus size or method announcement unless a source supplies the denominator.
