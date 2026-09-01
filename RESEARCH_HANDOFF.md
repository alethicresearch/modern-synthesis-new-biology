# Research handoff

Updated: 2026-08-31

## Current objective

Build the repository into a living empirical companion to *From Commitment to Adoption: The Path Ahead for New Biology*. The resource should maintain a broader evidence corpus than the paper, preserve regulatory-stage distinctions, expose a compact major-milestones view, maintain a prospective agenda with observable success criteria, and separately measure what happens at the point of adoption.

The research question has sharpened from “what NAM/new-biology developments occurred?” to: **where has commitment become reusable qualification, where has qualification become regulatory reliance, and where has reliance actually displaced legacy animal studies or other evidence requirements?**

Do not substantively revise the manuscript yet. Complete the contemporary and international corpus far enough that figures and claims can be derived from the evidence ledger rather than added anecdotally.

## Current architecture

- `data/events.json` — observed/foundation/emerging chronology.
- `data/prospective.json` — forward-looking targets, recommendations, forecasts and catalytic proposals.
- `data/regulatory_contexts.json` — defined contexts in which a legacy animal study or animal-derived test component can be omitted, replaced, shortened or avoided.
- `data/named_regulatory_adoption.json` — regulator-verified named product/program cases; explicitly distinguishes animal displacement from broader NAM reliance.
- `data/adoption_candidates.json` — named product/program cases awaiting the final verification step.
- `data/displacement_metrics.json` — quantified study/animal reductions, avoidance estimates and relevant denominators.
- `data/candidates.json` — chronology candidates awaiting promotion, correction, merge or rejection.
- `RESEARCH_PROTOCOL.md` — inclusion/exclusion, evidence hierarchy, stage discipline and research rounds.
- `EVENT_SCHEMA.md` — event schema.
- `PAPER_INTEGRATION.md` — manuscript/linking/freeze plan.
- `research/ROUND_1_ADOPTION_DISPLACEMENT_SWEEP_2026-08-31.md` — first displacement audit.
- `research/ROUND_1_NAMED_ADOPTION_CASES_2026-08-31.md` — named sponsor-case search.
- `research/ROUND_1_REGULATOR_VERIFIED_NAM_ADOPTION_2026-08-31.md` — regulator-authored named cases and realized metrics.
- `research/ROUND_1_INTERNATIONAL_PRODUCT_PRECEDENTS_2026-08-31.md` — FDA/EMA/TGA/Health Canada/PMDA/UK product and regulatory precedents.
- `scripts/validate_data.py` + `.github/workflows/validate.yml` — validation covers chronology, prospective milestones, regulatory contexts, candidate ledgers, named adoption cases and displacement metrics.

## Adoption is explicitly multidimensional

Do not use one undifferentiated “adoption” count. Current evidence supports at least four outcomes:

1. **Animal-study displacement** — an animal study is omitted, replaced, shortened or avoided.
2. **NAM regulatory reliance** — NAM evidence materially supports a named regulatory decision even if no animal study is displaced.
3. **Other evidence substitution** — NAM evidence substitutes for otherwise impractical clinical or other evidence requirements.
4. **Institutional routinization** — an alternative/waiver pathway becomes ordinary enough to migrate from exceptional specialist review into routine workflow or explicit general guidance.

The stricter animal-displacement measure remains: an authoritative record supports that a legacy animal study/component can actually be omitted, replaced, shortened or avoided for a defined decision.

Two distinct routinization pathways are now visible:

- **EPA:** specialist exception review → ordinary branch-level decisions.
- **UK/MHRA:** case-by-case scientific exceptions → explicit regulator-wide assessment approach → planned pre-review mechanism for animal-free Module 4 packages.

This may become an important measurable concept in the paper: adoption is not only the first accepted exception but the process by which exceptions become normal review practice.

## Named product evidence: strongest current precedents

### Kimmtrak (tebentafusp)

Kimmtrak is a **four-regulator independent-convergence precedent**.

- FDA/CDER/OND reviewers identify human tissue/cell assays as supporting clinical-trial safety when no pharmacologically relevant animal model existed.
- EMA states that tebentafusp is human-specific and that there are no relevant animal species in which its nonclinical toxicology could be tested; carcinogenicity, genotoxicity and DART studies were not conducted.
- TGA states that omission of animal-species toxicity studies was justified by human specificity and absence of equivalent targets and describes the supporting human binding/tissue/cytokine evidence.
- Health Canada's independent Summary Basis of Decision likewise states that tebentafusp is human-specific, no relevant animal species existed for nonclinical toxicology, and long-term carcinogenicity, genotoxicity and reproductive/developmental studies were not conducted.

Coding: confirmed named human-based regulatory adoption and strict animal displacement in the sense that conventional animal toxicology could not appropriately supply the evidence. Do **not** describe it as a one-for-one waiver of a named mandatory test.

This case supports a precise convergence claim: multiple regulators can independently recognize the same scientific constraint and evidentiary solution before formal harmonization or a shared regulatory review occurs.

### Carvykti (ciltacabtagene autoleucel)

Carvykti is now a **two-regulator species-relevance/NAM precedent**.

EMA/CHMP states that no relevant animal model existed for formal safety evaluation. No GLP-compliant formal toxicology studies were performed and absence of repeat-dose toxicology was accepted. The cynomolgus model used in a non-GLP study was considered non-relevant because the construct did not bind cynomolgus BCMA. On-/off-target risks were addressed through literature, in-vitro studies and clinical risk management.

PMDA's review independently states that Carvykti lacks cross-reactivity to rodent and NHP BCMA and therefore has no pharmacologically relevant animal species. The Japanese review includes a tailored safety package with in-vitro human-membrane-protein/off-target assays and other product-specific studies. PMDA did use a mouse xenograft model for selected pharmacology/off-target observations, so it corroborates species irrelevance and tailored NAM reliance but should not be described as an identical animal-free toxicology decision.

Coding: confirmed named animal-displacement precedent for EMA omission of conventional formal GLP/repeat-dose toxicology, with PMDA cross-jurisdiction corroboration of the scientific logic. Not an animal-free development program.

### Kymriah (tisagenlecleucel)

Kymriah is now promoted to the verified named-adoption ledger after direct visual inspection of the EMA assessment report.

CHMP states that the lack of single-dose toxicity studies was acceptable because the patient-specific product is not appropriate to administer to immunocompetent animals and that the absence of repeat-dose toxicity studies was also acceptable for a single-infusion patient-specific product. The report states that conventional rodent genotoxicity/carcinogenicity models are not appropriate for genetically modified cell therapies and that animal germline-transmission studies of genetically modified human cells are not recommended. It describes in-vitro expansion/transformation studies, genomic insertion-site analysis and selected immunocompromised-mouse studies addressing narrower questions.

Coding: confirmed named animal-study displacement, not an animal-free development program.

The combination of Carvykti and Kymriah strongly suggests that conventional-toxicology omission may be a **modality-level pattern in patient-specific CAR-T development**, not an isolated product exception.

### CAR-T class audit now underway

EMA assessment text for four additional products points in the same direction, but the project is deliberately withholding promotion until the underlying PDF pages are visually verified:

- **Yescarta (axicabtagene ciloleucel):** EMA assessment text states that no representative model can accurately address toxicological characteristics of the human product and that traditional toxicology studies were not performed, while a surrogate mouse pharmacology model addressed selected questions.
- **Breyanzi (lisocabtagene maraleucel):** EMA assessment text states that lack of species cross-reactivity made traditional single/repeat-dose toxicity, genotoxicity, carcinogenicity, reproductive/developmental toxicity and local-tolerance studies of negligible utility and they were not conducted.
- **Abecma (idecabtagene vicleucel):** EMA assessment text states that no conventional toxicity studies were conducted because appropriate animal toxicity models were lacking; safety evaluation was tailored to insertional-mutagenesis/tumorigenic-transformation and other product-specific risks.
- **Tecartus (brexucabtagene autoleucel):** EMA assessment text states that formal single-dose, repeat-dose, safety-pharmacology, reproductive/developmental and genotoxicity/carcinogenicity studies were not conducted because of lack of a suitable model/applicability of traditional toxicology.

All four are in `data/adoption_candidates.json` with status requiring direct page-image verification. Do not count them in confirmed case totals yet.

### Veopoz (pozelimab-bbfg)

FDA reviewers report no pharmacologically relevant species for key complement pharmacology. Cell-based assays and validated ex-vivo CH50 testing materially supported approval with clinical and other evidence.

Coding: named NAM regulatory reliance, **not pure animal displacement**, because the totality included animal and human data.

### Kalydeco and Galafold

FDA accepted validated in-vitro functional assays to extend genetically defined treatment populations without separate clinical trials for every variant/subpopulation.

Coding: strong NAM regulatory reliance and **clinical-evidence substitution**, not animal displacement. Galafold is useful as an example of staged reliance because residual uncertainty was handled through post-approval clinical verification.

## Other named-product candidates

### SillaJen/Qureator BAL0891

Qureator says the combination IND amendment used a human vascularized tumor-immune organoid efficacy package without traditional animal proof-of-concept testing; SillaJen independently confirms the collaboration and FDA IND amendment. A public FDA document directly linking the decision to omitted animal POC has not been located.

Status: quarantine in `data/adoption_candidates.json` until regulator-level or equivalent authoritative causal confirmation is found.

### Sarclisa (isatuximab)

Health Canada directly confirms that the nonclinical assessment was limited by species specificity and that embryofetal-development effects were not investigated because appropriate animal models were absent; a GLP main toxicity study did exist, so this is not wholesale animal-toxicology omission.

EMA indexed material indicates a stronger NAM-reliance claim: target-organ identification reportedly relied on human-tissue in-vitro studies because no relevant animal species or surrogate antibody existed. Direct EMA PDF page-image verification remains outstanding because of rate limiting.

Status: partial regulator confirmation, pending direct visual verification of the EMA human-tissue statement.

## MHRA: current operational policy, not only future strategy

A major new chronology candidate is the **25 March 2026 MHRA approach to medicines using non-animal methods**.

Direct source: `https://www.gov.uk/guidance/mhra-approach-to-medicines-using-non-animal-methods`

The regulator states that:

- scientifically justified applications may omit animal studies when alternative methods address safety and deviation from current international expectations poses no human-health risk;
- MHRA does not expect one-for-one replacement of individual animal tests but evaluates the adequacy of the total evidence package;
- developers are encouraged to submit in-silico methods, MPS and complex in-vitro models;
- for drug substances that are **not pharmacologically active in animals, MHRA does not support animal testing**, including use of surrogate molecules; non-animal approaches can suffice for efficacy and safety expectations;
- generic and biosimilar products should not require animal testing;
- products with well-recognized pharmacology may be permitted into UK clinical trials without animal studies;
- biological products and ATMPs can follow human-relevant non-animal pathways when relevant animal models do not exist and residual risk is addressed by target biology, prior knowledge, human-relevant nonclinical data and clinical mitigation.

The guidance is current regulator policy for CTA/MA assessment. Distinguish it from the **future** Module 4 pre-review mechanism that MHRA says it will establish by the end of 2026; that mechanism will provide a nonbinding advance opinion on animal-free Module 4 packages.

This event is queued in `data/candidates.json` as a high-materiality major milestone.

## United Kingdom: additional current practice

The November 2025 UK strategy documents current use of non-animal-only pathways for a small number of biologicals where no relevant animal model exists. The strategy's future end-2026 target to formalize such submissions must remain distinct from this already-existing case-by-case practice.

The strategy also states that MHRA now accepts a validated non-animal potency method for specified Type A botulinum-toxin drug-substance strengths (500U BAS and 300U BAS) and that since 2024 it no longer licenses LD50 testing for third countries. This is mature implemented quality-control replacement, distinct from the future end-2027 goal of using validated alternative pharmacopoeial methods except rare safety cases.

These UK findings reinforce the routinization hypothesis: regulatory practice can begin as case-specific scientific judgment and later be formalized into general guidance and review infrastructure.

## PMDA: international streamlining signals with exact status

Two PMDA records are in `data/regulatory_contexts.json` and queued for chronology promotion. Both are **Early Consideration** documents: PMDA describes these as reference information/current thinking that may change, not binding final guidance.

### 24 October 2025 — NHP DART

PMDA states that when NHP is the only relevant species for a biopharmaceutical, an alternative Weight-of-Evidence scheme can be used **in place of NHP DART testing** with appropriate scientific justification. Inputs can include mechanism and target biology, placental transfer, literature/databases, human experience with related drugs, existing genetically modified-animal information and other evidence.

### 13 May 2026 — monoclonal antibody repeated-dose toxicity

PMDA states that retrospective evidence suggests a three-month monkey study can often provide sufficient information for conventional mAbs, identifies NAM data plus mechanism/class/clinical evidence as WOE inputs, and says the incremental value of a six-month study may be limited when specified risk conditions do not apply.

These are important international streamlining signals but should not be analyzed as final guidance or named-product adoption decisions.

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

### EPA freshness limit

EPA's public metrics page was rechecked on 2026-08-31. It was last updated 5 March 2026 and its reported tables still stop at FY2023. Do not imply FY2024/FY2025 realized denominators are public until EPA posts them.

## Institutional routinization

EPA reports that by FY2022 most acute-toxicity determinations could be made at branch level rather than requiring CATSAC consultation. Successful adoption can therefore be measured not only through accepted methods or animal counts but through **where a decision sits organizationally**.

The UK supplies a complementary pattern: case-by-case applications omitting animal studies are already scientifically reviewable; MHRA has now published a general assessment approach; and it plans an advance Module 4 review mechanism. This is a measurable path from exceptional acceptance to explicit infrastructure.

Potential later adoption-maturity sequence:

**exceptional case → repeated precedent → explicit regulator approach → dedicated review pathway → routine review → harmonized/standardized context**

This should be tested against the wider corpus rather than asserted as universal.

## Contemporary chronology: major verified/source-audited developments

Round 1 remains in progress. High-value milestones already verified or queued include FDA Modernization Act 2.0; first organ-chip ISTAND LOI; Complement-ARIE VQN; FDA 2025 Roadmap; NIH April 2025 human-based initiative; NIH July 2025 funding-opportunity policy implementation; permanent ISTAND; NIH $87M Standardized Organoid Modeling Center; Reduction to Practice Challenge; UK Replacing Animals in Science strategy; FDA draft mAb guidance; AIM-NASH qualification through BQP; EPA 2035 recommitment; FDA ISTAND pipeline metrics; FDA general draft NAM guidance; >$150M Complement-ARIE awards; **MHRA March 2026 operational non-animal medicines approach**; FDA Year One; FDA oncology draft guidance; PMDA mAb Early Consideration; first in-silico ISTAND LOI; ORIVA; Reduction to Practice Phase 1; NCI animal-use justification policy; QSP-MABEL; EPA Aug. 27 implemented regulatory use; and FDA/ICMRA recombinant-endotoxin collaborative assessment.

## Existing regulatory-context examples

`data/regulatory_contexts.json` includes examples across FDA, EPA, PMDA and the UK:

- FDA hiPSC-derived cardiomyocytes substituting for an otherwise-conducted animal QT/proarrhythmia study in a defined anticancer context.
- EPA 3D human airway tissue + digital models avoiding new inhalation studies for covered surfactant assessments.
- EPA GHS mixtures equation avoiding some acute-oral testing; computational, not human-biological.
- FDA recombinant endotoxin reagents replacing an animal-derived reagent; distinguish from in-vivo replacement.
- FDA/ICH S1B(R1) WOE pathway supporting conditional omission of a two-year rat carcinogenicity study.
- Mature FDA photosafety reliance on non-animal/clinical evidence.
- FDA draft mAb/oncology conditional omission/shortening contexts, preserving draft status.
- PMDA NHP DART WOE alternative and PMDA six-month mAb monkey-study rationalization, both preserving Early Consideration status.
- UK case-by-case non-animal first-in-human biological-development practice where no relevant species exists.
- UK/MHRA implemented non-animal botulinum-toxin potency testing for specified strengths.

The UK biological context should eventually cite/align directly with the March 2026 MHRA guidance as the strongest regulator-level source rather than relying only on the 2025 government strategy.

## Source gaps and audits

Resolve before declaring Round 1 audit-ready:

- FDA Modernization Act 2.0 statutory source normalization.
- OHSU/ONPRC: verified Feb. 9, 2026 board resolution does not yet substantiate the current July 27 NAM-center-of-excellence wording; resolve/correct.
- NIH reviewer EOI/public posting status.
- NIEHS/SCIOME award source normalization.
- IAMPS launch and Liver MPS Ring Trial must remain separate; find actual reproducibility/results evidence.
- Inspect original Drugs@FDA review passages underlying Kimmtrak and Veopoz directly.
- Complete visual verification for Yescarta, Breyanzi, Abecma and Tecartus before promoting them from `data/adoption_candidates.json`.
- Complete EMA visual verification for Sarclisa's human-tissue target-organ assessment.
- Find named UK biological products underlying the government's description of non-animal-only first-in-human packages.
- Find PMDA named review reports implementing the 2025/2026 Early Consideration logic beyond Carvykti's species-relevance precedent.
- Find independently corroborated industry animal-use denominators.

## Next research priority

1. **Complete the CAR-T class audit.** Obtain page-image verification for Yescarta, Breyanzi, Abecma and Tecartus; add only confirmed products to the named ledger. Determine whether the pattern is strong enough to analyze as a modality-level regulatory practice rather than a collection of anecdotes.
2. **Broaden beyond CAR-T.** Search bispecific proteins, human-specific antibodies, oligonucleotides and other advanced modalities for named products in which conventional toxicity or DART was omitted because no scientifically relevant animal species existed.
3. **MHRA implementation.** Find named UK products and monitor whether the planned Module 4 pre-review mechanism is actually established by end-2026.
4. **Health Canada/TGA/PMDA.** Mine public assessment records for named cases and cross-jurisdiction convergence.
5. **EPA metrics.** Extend realized denominators when FY2024/FY2025 data become public; do not invent missing years.
6. **Industry.** Prioritize regulator-linked submissions, ring-trial outcomes and audited/measured animal displacement over internal platform-use claims.

## Manuscript implications

The paper can now plausibly move beyond a conceptual Commitment → Qualification → Adoption sequence toward an empirically specified adoption layer. A later figure/table could show downstream outputs of qualification as separate branches: **animal displacement, named regulatory reliance, other evidence substitution, and routinization**.

Three stronger empirical claims are emerging but should remain provisional until Round 1 coverage is adequate:

1. **Species relevance is becoming a regulatory decision variable across jurisdictions.** Kimmtrak demonstrates independent recognition across four regulators; Carvykti demonstrates EMA/PMDA convergence in an advanced therapy.
2. **Advanced therapies may provide an early modality-level example of conventional toxicology being replaced by tailored evidence rather than one-for-one NAM substitution.** Kymriah and Carvykti are confirmed; Yescarta, Breyanzi, Abecma and Tecartus are high-priority verification candidates.
3. **Routinization is measurable.** EPA shows specialist-to-routine workflow migration, while MHRA shows exception-to-explicit-policy-to-dedicated-review-pathway progression.

The opacity finding remains important: EPA proves that study/animal denominators can be published, while FDA/EMA/Health Canada/TGA/PMDA product records show that named regulatory reliance can be reconstructed. Lack of comparable systematic reporting elsewhere is therefore an infrastructure/transparency gap rather than an inherently unmeasurable phenomenon.

## Quality bar

Primary/regulator-authored sources whenever possible. Preserve draft/final/Early Consideration, current policy/future mechanism, accepted/qualified, funded/awarded, validation/qualification/adoption, intent/implementation, human-based/broader-NAM, in-vivo-study/animal-derived-component, animal-displacement/clinical-evidence-substitution, independent-convergence/formal-harmonization, and sponsor-claim/regulator-confirmed distinctions. Never infer animals avoided from validation-corpus size, method announcements or absent studies without an authoritative causal basis.
