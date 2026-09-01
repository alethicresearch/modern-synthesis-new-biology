# Research handoff

Updated: 2026-08-31

## Current objective

Build this repository into the living empirical companion to *From Commitment to Adoption: The Path Ahead for New Biology*. Preserve the manuscript's Commitment → Qualification → Adoption framework while separately measuring animal-study displacement, NAM regulatory reliance, other evidence substitution, and institutional routinization.

Do **not** substantively revise the manuscript automatically. Complete the evidence corpus and prespecified comparator analyses first so later manuscript claims, figures and tables are derived from the ledger rather than added anecdotally.

## Current architecture

- `data/events.json` — **37** contemporary observed/emerging events.
- `data/prospective.json` — forward targets with observable success criteria.
- `data/regulatory_contexts.json` — **16** defined regulatory contexts.
- `data/named_regulatory_adoption.json` — **12** regulator-verified named product cases.
- `data/adoption_candidates.json` — unresolved named cases; currently SillaJen/Qureator BAL0891 and Ebvallo.
- `data/species_relevance_comparators.json` — 14-case purposive positive/negative comparator set.
- `data/surrogate_toxicology_cases.json` — regulator-verified cases where the clinical product lacks an ordinary relevant species but a surrogate animal molecule/model was used for substantive toxicology.
- `data/displacement_metrics.json` — realized or interpretable displacement denominators.
- `data/candidates.json` — chronology leads awaiting promotion/correction/rejection.
- `analysis/CORPUS_SNAPSHOT_2026-08-31.md` — integrated descriptive synthesis.
- `analysis/SPECIES_RELEVANCE_COMPARATOR_SNAPSHOT_2026-08-31.md` — species-relevance/surrogate analysis.
- `analysis/MATCHED_SPECIES_RELEVANCE_PAIRS_2026-08-31.md` — within-target/within-modality matched comparisons.
- `RESEARCH_PROTOCOL.md`, `EVENT_SCHEMA.md`, `PAPER_INTEGRATION.md` — governing protocol/schema/manuscript linkage.
- `scripts/validate_data.py` + `.github/workflows/validate.yml` — automated validation now includes species comparators and surrogate-toxicology cases.

## Main corpus state

Current event tags overlap:

- Commitment: **15**
- Qualification: **19**
- Adoption: **12**
- Major milestones: **25 of 37**

Qualification activity remains much more visible than completed reusable qualification. FDA's Feb. 2026 metrics show 16 ISTAND projects in development as of Jan. 1, 2026 but **zero completed ISTAND qualifications**. AIM-NASH is a genuine formal qualification through the Biomarker Qualification Program rather than ISTAND.

## Named product adoption

`data/named_regulatory_adoption.json` contains 12 confirmed cases.

Strict animal-displacement flag: **9**
- Kimmtrak
- Carvykti
- Kymriah
- Yescarta
- Breyanzi
- Abecma
- Tecartus
- Tecelra
- Sarclisa, endpoint-specific rather than wholesale tox omission

NAM regulatory reliance but not strict animal displacement:
- Veopoz

Other evidence substitution rather than animal displacement:
- Kalydeco
- Galafold

Six CAR-T products—Carvykti, Kymriah, Yescarta, Breyanzi, Abecma and Tecartus—now support a true **modality-level pattern** of conventional-study omission/tailoring. Do not describe CAR-T development as animal-free: selected surrogate/xenograft studies remain useful for narrower questions.

Tecelra extends the pattern to affinity-enhanced TCR-T with explicit FDA use of healthy-human-tissue assays, primary human cells, iPSC-derived cells, organotypic models and genomic/integration analyses. Sarclisa supplies a narrower conventional-mAb example in which species specificity caused embryofetal-development testing to be omitted even though a GLP general toxicity study was retained.

## Species/model relevance comparator result

`data/species_relevance_comparators.json` contains 14 purposively selected regulator-authored products.

- No or highly limited relevant species/model: **9**.
- Pharmacologically relevant species present: **5**.

Among the nine no/limited cases, eight have general/repeat-dose toxicology omitted, unavailable or substantially tailored rather than conventionally retained. Sarclisa retains general toxicity but has an explicitly species-driven endpoint-specific omission.

All five relevant-species cases—Imdelltra, Taltz, Adtralza, Libtayo and Piasky—retain substantive repeat-dose cynomolgus toxicology.

This is hypothesis-generating only. **Do not report inferential p-values** from the present selected sample.

## Matched comparisons now provide cleaner evidence

### Complement C5 family

Health Canada provides a strong same-target comparison:

- **Soliris / eculizumab:** human-C5 specific; no other species pharmacologically active → BB5.1 murine C5 surrogate used for 4-week and 26-week repeat-dose and reproductive/developmental studies.
- **Ultomiris / ravulizumab:** no non-human C5 binding / no pharmacologically active animal species → murine C5 surrogate used for 26-week repeat-dose and reproductive studies.
- **Piasky / crovalimab:** binds human and cynomolgus C5 → cynomolgus identified as only pharmacologically relevant species → 5-week and 6-month direct NHP toxicology plus enhanced prenatal/postnatal development study.

This supports the narrow proposition that **target/species cross-reactivity governs whether the clinical molecule can generate informative direct animal toxicology evidence**.

### CD3 bispecific T-cell engager family

- **Blincyto / blinatumomab:** binds human/chimpanzee lymphocytes but not ordinary experimental species → most toxicology performed with a murine CD19/CD3 surrogate, with mouse studies to 13 weeks.
- **Imdelltra / tarlatamab:** monkey CD3/DLL3 sufficiently similar for direct tarlatamab binding → 10-day, one-month and three-month direct cynomolgus toxicology. A murine surrogate was also used for an additional mouse study.

This demonstrates that evidence architecture can be **hybrid** and reinforces that the regulatory question, rather than the product label alone, is the correct unit of analysis.

## Critical falsification: no relevant species does NOT automatically mean omission

`data/surrogate_toxicology_cases.json` contains four regulator-verified examples:

- Soliris / eculizumab
- Blincyto / blinatumomab
- Ultomiris / ravulizumab
- Tzield / teplizumab

All lack an ordinary directly pharmacologically relevant experimental species but use surrogate molecules/models for substantive animal toxicology.

Tzield is especially important because Health Canada authorized it in **2025** and reviewed repeat-dose and reproductive/developmental toxicology using a surrogate anti-mouse CD3 antibody. Surrogate toxicology is therefore not merely an older historical practice.

## Current regulatory divergence over surrogate animal models

MHRA's **25 March 2026** operational approach states that when a drug substance is not pharmacologically active in animals it does **not** support animal testing, including with surrogate molecules, and can assess scientifically justified non-animal evidence instead.

This contrasts with regulator-accepted surrogate architectures in Health Canada's Soliris, Blincyto, Ultomiris and Tzield reviews. The supported claim is **regulatory non-convergence in the preferred response to species non-relevance**, not that one regulator would reject another regulator's historical/current package.

International convergence should therefore be asked at a more precise level: when the clinical product has no scientifically relevant animal species, should development use a surrogate animal program, selective purpose-built animal studies, a human-relevant package, or conventional-study omission?

## Revised empirical model

The earlier deterministic model—`no relevant species → omission`—has been falsified.

Current working architecture:

1. Define the regulatory risk question.
2. Determine whether an available animal species/model expresses the relevant target, pharmacology and product behavior.
3. If a directly relevant species exists, direct animal toxicology may retain substantial information value.
4. If direct relevance fails, possible responses include:
   - surrogate-animal toxicology;
   - limited purpose-built animal studies for narrower questions;
   - human tissue/cell, iPSC, organotypic, genomic or computational evidence;
   - prior knowledge/literature;
   - clinical monitoring/risk mitigation; or
   - omission of the conventional study.
5. Regulator assesses the **total evidentiary package**, not one replacement test per legacy animal test.

The emerging outcome classification is:

**direct relevant-species toxicology / surrogate toxicology / selective animal retention / human-relevant tailored package / conventional-study omission**.

Candidate explanatory variables: species/model relevance, regulator/jurisdiction, approval period, modality, risk question, prior knowledge and maturity of human-relevant evidence.

## Product architecture matters independently of species relevance

Health Canada's Casgevy review describes a non-traditional program because of the gene-edited autologous product and single administration. Extensive in-vitro/off-target work was combined with selected NSG-mouse biodistribution and single-dose toxicity/tumorigenicity testing. This shows that **product architecture and the specific risk question** can determine which animal studies retain information value even outside a simple species-relevance binary.

## New domain-level model-relevance signal: microbiome medicines

MHRA's **18 August 2026** UK position paper on microbiome-based medicinal products has been promoted into the chronology and regulatory-context ledger.

The regulator states that:
- conventional toxicology may be poorly predictive for microbiome-modulating products;
- animal studies may have limited relevance because of species-specific microbiome differences; and
- scientifically justified NAM and weight-of-evidence strategies are supported.

The same paper states that **no MBMP had UK marketing authorisation as of July 2026**. Code this as regulatory stance / qualification context, not adoption.

This matters because model-relevance constraints now appear beyond highly human-specific biologics and advanced cell therapies.

## Other unresolved adoption candidates

### SillaJen/Qureator BAL0891
Provider/sponsor records claim a human vascularized tumor-immune organoid package replaced traditional animal proof-of-concept for an FDA IND amendment, but no public FDA record has yet causally confirmed the omission. Keep quarantined.

### Ebvallo / tabelecleucel
EMA indexed assessment text states that conventional toxicology and multiple specialized study classes were not performed for the allogeneic EBV-specific T-cell product, with selected immunodeficient-animal work for narrower questions. Direct EMA rendering remains rate-limited and an independent equivalent regulator source has not yet been located. Keep candidate status.

## Quantified displacement

Strongest realized public denominators remain EPA:

- FY2023 branch-level acute-toxicity decisions: **1,122 studies saved; 9,415–18,026 animals reduced**.
- Acute-dermal waivers FY2018–FY2023: **262 waivers; 2,620–7,860 animals reduced**.
- FDA/ICH S1B(R1): an omitted two-year rat carcinogenicity study can avoid **>400 animals per study**, depending on design; this is a per-case conversion factor, not a national observed total.

Do not sum these categories. EPA's public realized metrics currently stop at FY2023.

## Routinization

Two routes remain especially useful:

- EPA: specialist exception review → ordinary branch-level decisions.
- UK/MHRA: case-by-case omission → explicit regulator-wide approach → planned advance Module 4 review mechanism.

Provisional maturity sequence:

**exceptional case → repeated precedent → explicit regulator approach → dedicated review pathway → routine review → harmonized/standardized context**

CAR-T supplies repeated product precedent; EPA supplies workflow migration; MHRA supplies explicit policy architecture.

## Next research priority

1. Move from purposive comparison to a **prespecified sampling frame**.
2. Prefer same-target/same-modality families and code species relevance before toxicology outcome.
3. Separate direct relevant-species toxicology from surrogate-molecule toxicology.
4. Stratify by regulator/jurisdiction, modality and approval period.
5. Search additional complement inhibitors, CD3 bispecifics/anti-CD3 agents, checkpoint antibodies and advanced cellular/gene-edited products.
6. Resolve Ebvallo if possible.
7. Seek actual MPS ring-trial **results**, not launch announcements.
8. Extend realized displacement denominators when agencies publish them.
9. Build reproducible scripts for corpus/comparator counts before manuscript revision.

## Manuscript implications — provisional, do not auto-edit

If a prespecified sample reproduces these patterns:

- **§IV:** frame adoption as movement toward **information-value-based evidence architectures**, not one-for-one test replacement.
- **§VII:** use routinization and jurisdictional divergence/convergence to explain how evidentiary credibility becomes institutionalized.
- **Table 2:** distinguish direct relevant-species toxicology, surrogate toxicology, selective animal retention, endpoint-specific omission and human-relevant tailored evidence.
- **Table 3:** retain structured adoption-reporting/accountability milestones and consider a convergence milestone specifically addressing handling of species non-relevance.

The strongest provisional claim is now:

**Model relevance governs the information value of legacy animal studies; when that information value collapses, regulator policy and product-specific evidence determine whether the response is surrogate animal toxicology, selective animal retention, human-relevant evidence, or omission.**

## Quality bar

Use primary/regulator-authored sources whenever possible. Preserve draft/final/Early Consideration, accepted/qualified, validation/qualification/adoption, human-based/broader NAM, animal-study displacement/other evidence substitution, direct-species/surrogate toxicology, independent convergence/formal harmonization, and sponsor claim/regulator confirmation. Never infer animals avoided merely from absent studies, validation-corpus size or announcements without an authoritative causal basis.
