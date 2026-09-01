# Corpus Snapshot — 2026-08-31

## Scope and counting rules

This snapshot is a descriptive analysis of the living corpus supporting *From Commitment to Adoption: The Path Ahead for New Biology*. It is not yet the manuscript results section.

Event-stage tags are **not mutually exclusive**. Named product adoption, regulatory contexts, species-relevance comparators and surrogate-toxicology cases are analyzed separately so event density is not mistaken for actual animal-study displacement.

## Contemporary event corpus

Current `data/events.json` contains **37 events**.

Overlapping Commitment → Qualification → Adoption tags:

- Commitment: **15**
- Qualification: **19**
- Adoption: **12**
- Validation infrastructure: **6**
- Review infrastructure: **5**
- Major milestones: **25 of 37**

Ignoring secondary tags, the main-stage combinations are:

- Commitment only: **7**
- Qualification only: **14**
- Adoption only: **5**
- Commitment + Qualification: **3**
- Commitment + Adoption: **5**
- Qualification + Adoption: **2**
- Review-infrastructure only / no main-stage tag: **1**

The added qualification-only event is MHRA's Aug. 18, 2026 position paper on microbiome-based medicinal products. MHRA states that conventional toxicology may be poorly predictive for these products because animal microbiomes differ from human microbiomes and supports justified NAM/weight-of-evidence approaches. The same position paper states that no MBMP had UK marketing authorisation as of July 2026. It is therefore **regulatory stance and model-relevance guidance, not product adoption**.

The corpus remains qualification-heavy, but qualification activity should not be confused with completed reusable qualification. FDA's Feb. 2026 metrics reported 16 ISTAND projects in development but **zero completed ISTAND qualifications** as of Jan. 1, 2026. AIM-NASH is a genuine formal qualification through the Biomarker Qualification Program rather than ISTAND.

The event-level adoption count also overstates strict displacement if read naively because it includes draft guidance, nonbinding regulator thinking, accepted-method lists, infrastructure and decision-level adoption. **Event-stage counts are indicators of transition activity, not direct measures of animal-study displacement.**

## Named regulator-verified adoption

Current `data/named_regulatory_adoption.json` contains **12 confirmed named product cases**.

### Strict animal-displacement flag: 9

- Kimmtrak
- Carvykti
- Kymriah
- Yescarta
- Breyanzi
- Abecma
- Tecartus
- Tecelra
- Sarclisa

### NAM regulatory reliance without strict animal-displacement flag: 1

- Veopoz

### NAM substitution for additional clinical evidence rather than animal evidence: 2

- Kalydeco
- Galafold

Six approved CAR-T products now have regulator-authored evidence of conventional-study omission or tailored nonclinical architecture: **Carvykti, Kymriah, Yescarta, Breyanzi, Abecma and Tecartus**.

The defensible class-level claim is not that CAR-T development is animal-free. It is that patient-specific/autologous CAR-T products repeatedly create situations in which conventional whole-animal toxicology is scientifically non-representative or of limited utility, and regulators accept **tailored evidence packages** that allocate different questions to human-tissue/in-vitro assays, genomic/insertional-risk analyses, limited surrogate or xenograft studies, clinical monitoring and prior knowledge.

## Species relevance: comparator evidence

`data/species_relevance_comparators.json` contains a **14-case purposive regulator-authored comparator set**.

- No or highly limited relevant species/model: **9**
- Pharmacologically relevant species present: **5**

Among the nine no/limited-model cases, eight have general/repeat-dose toxicology coded as omitted, unavailable or substantially tailored rather than conventionally retained. Sarclisa is the endpoint-specific exception: a GLP general toxicity study remained, but embryofetal-development testing was omitted because no appropriate model existed.

All five relevant-species comparators—Imdelltra, Taltz, Adtralza, Libtayo and Piasky—retain substantive repeat-dose toxicology in the pharmacologically relevant cynomolgus monkey.

This is **hypothesis-generating**, not a representative sample. No inferential p-values should be reported from it.

## Same-target and same-modality matched comparisons

The strongest descriptive evidence now comes from comparisons that hold more biology constant.

### Complement C5 antibodies

Health Canada records that eculizumab and ravulizumab do not have a directly pharmacologically active animal species. Soliris and Ultomiris therefore used murine C5 surrogate antibodies for substantive repeat-dose toxicology. By contrast, crovalimab binds both human and cynomolgus C5; Health Canada identifies cynomolgus monkey as the only pharmacologically relevant species and Piasky retains 5-week and 6-month direct NHP toxicology.

This same-target contrast supports a narrow but strong conclusion: **target/species cross-reactivity determines whether the clinical molecule can supply meaningful direct animal toxicology evidence.**

### CD3 bispecific T-cell engagers

Blinatumomab binds human/chimpanzee B/T cells but not lymphocytes of ordinary experimental species, so Health Canada reviewed a largely surrogate-mouse toxicology program. Tarlatamab binds monkey CD3 and DLL3 sufficiently for direct cynomolgus toxicology, and Imdelltra retains 10-day, one-month and three-month NHP studies. Tarlatamab also used a mouse surrogate for an additional question, demonstrating that evidence architectures can be hybrid even when a direct relevant species exists.

The correct unit of analysis is therefore increasingly the **regulatory question**, not simply the product or modality.

## Species non-relevance can also produce surrogate animal toxicology

`data/surrogate_toxicology_cases.json` currently contains four regulator-verified examples:

- Soliris / eculizumab
- Blincyto / blinatumomab
- Ultomiris / ravulizumab
- Tzield / teplizumab

These cases prevent a simplistic rule of “no relevant species → animal-study omission.” When direct relevance fails, a sponsor/regulator may instead create a surrogate molecule and retain an animal-toxicology architecture.

Tzield is especially important because its Canadian authorization is from **2025**: surrogate toxicology is not merely an older historical practice.

## Regulatory divergence over surrogate models

MHRA's March 25, 2026 operational policy creates a meaningful contrast with the Health Canada product precedents. MHRA states that when a drug substance is not pharmacologically active in animals, it does **not** support animal testing including with surrogate molecules and is willing to assess scientifically justified non-animal evidence instead.

This should be described as **non-convergence in the regulatory response to species non-relevance**, not as proof that one regulator would reject the other's historical or current application.

The international-convergence question is therefore more precise than “do regulators support NAMs?” It includes: **when the clinical product has no scientifically relevant animal species, should developers construct a surrogate animal program, rely on human-relevant evidence, or omit the conventional study?**

## Cross-modality and product-architecture tests

### Tecelra: TCR-T extension

FDA's 2024 regulatory action summary documents an accepted package including healthy-human-tissue characterization, peptide cross-reactivity screening, primary human cells, iPSC-derived cells, organotypic models and vector-integration analysis. Traditional genotoxicity/carcinogenicity assessments and animal reproductive/developmental studies were not conducted; murine xenografts remained useful for antitumour pharmacology.

This extends tailored human-relevant evidence beyond CAR-T to an **affinity-enhanced TCR-T therapy**.

### Sarclisa: endpoint-specific monoclonal-antibody extension

Health Canada records that species specificity limited Sarclisa's nonclinical assessment and that embryofetal-development effects were not investigated because appropriate animal models were absent. A GLP main toxicity study existed, so this is endpoint-specific displacement rather than wholesale toxicology omission.

### Casgevy: tailoring is not explained by species relevance alone

Health Canada describes Casgevy's nonclinical program as non-traditional because of its unique gene-editing mechanism and single administration. The package combined extensive in-vitro/off-target work with selected NSG-mouse biodistribution and a single-dose toxicity/tumorigenicity study.

This shows that **product architecture and the risk question** can independently determine what animal evidence retains information value.

### Microbiome-based medicines: a new domain-level relevance problem

MHRA's Aug. 18, 2026 MBMP position paper states that conventional toxicology may be poorly predictive and animal studies may have limited relevance due to species-specific microbiome differences. This broadens the model-relevance hypothesis beyond highly human-specific biologics and engineered cell products, while remaining a policy/qualification context because no UK-authorized MBMP was reported.

## Revised adoption model

The evidence now favors a decision architecture rather than a deterministic replacement rule:

1. Define the regulatory risk question.
2. Determine whether an available animal species/model expresses the relevant target, pharmacology and product behavior.
3. If a directly relevant species exists, direct animal toxicology may retain substantial information value.
4. If direct relevance fails, possible strategies include:
   - surrogate-animal toxicology;
   - limited purpose-built animal studies for narrower questions;
   - human tissue/cell, iPSC, organotypic, genomic or computational evidence;
   - prior knowledge and literature;
   - clinical monitoring/risk mitigation; or
   - omission of the conventional study.
5. The regulator evaluates the **total evidentiary package**, not whether each legacy animal test has a one-for-one replacement.

The emerging dependent-variable classification is therefore:

**direct relevant-species toxicology / surrogate toxicology / selective animal retention / human-relevant tailored package / conventional-study omission**.

Candidate explanatory variables now include species/model relevance, regulator/jurisdiction, approval period, modality, risk question, prior knowledge and maturity of available human-relevant evidence.

## Regulatory context-of-use corpus

Current `data/regulatory_contexts.json` contains **16 defined regulatory contexts**.

By regulatory maturity/status grouping:

- Applied/current/final/established regulator practice or current regulator position: **11**
- Draft-guidance contexts: **3**
- PMDA Early Consideration, explicitly nonbinding: **2**

By relationship to human biology:

- Explicitly human-based: **3**
- Mixed/weight-of-evidence: **7**
- Broader non-animal/computational/omission contexts not specifically human-based: **6**

The new microbiome context is mixed/weight-of-evidence and is not counted as realized displacement.

## Quantified displacement

The strongest realized public denominators still come from EPA rather than medicines regulators.

- FY2023 EPA branch-level acute-toxicity decisions: **1,122 studies saved** and **9,415–18,026 animals reduced**.
- EPA acute-dermal waivers FY2018–FY2023: **262 waivers** and **2,620–7,860 animals reduced**.
- FDA/CDER/OND estimate for an omitted two-year rat carcinogenicity study under ICH S1B(R1): **more than 400 animals per omitted study**, depending on design.

These figures should **not be summed** because EPA categories can overlap and the FDA figure is a per-case conversion factor rather than a national observed total. EPA's public metrics page currently stops at FY2023.

## Routinization as an adoption variable

Two distinct patterns remain visible:

1. **EPA:** specialist exception review → ordinary branch-level decisions.
2. **UK/MHRA:** case-by-case non-animal submissions → explicit regulator-wide assessment approach → planned dedicated advance-review mechanism.

A provisional adoption-maturity sequence remains:

**exceptional case → repeated precedent → explicit regulator approach → dedicated review pathway → routine review → harmonized/standardized context**

The CAR-T series supplies repeated product-level precedent; EPA supplies routine workflow migration; MHRA supplies explicit policy architecture.

## The strongest empirical asymmetry so far

Commitment and qualification infrastructure remain easier to observe publicly than named adoption and realized displacement. The named-product audits show, however, that some apparent adoption scarcity was a **measurement problem**: product-specific regulator reviews contain materially more adoption evidence than high-level policy pages expose.

The evidence supports two simultaneous conclusions:

1. reusable qualification remains a genuine bottleneck; and
2. adoption is systematically undercounted when research looks only for announcements rather than product reviews and context-specific regulatory decisions.

That makes **structured public reporting of NAM regulatory adoption** a defensible prospective target rather than merely a documentation preference.

## Next evidence threshold

Before converting these findings into manuscript results:

- expand the species-relevance analysis through a prespecified sampling frame rather than convenience sampling;
- separate direct relevant-species toxicology from surrogate-molecule toxicology;
- stratify by regulator, modality and approval period;
- add more same-target/same-modality matched product families;
- resolve Ebvallo through direct visual or independent regulator confirmation;
- identify ring-trial outcomes rather than launches;
- obtain additional realized displacement denominators; and
- rerun corpus/comparator summaries from reproducible scripts rather than hand-counting.

The central empirical question is now more precise: **when model relevance collapses, what determines whether regulators require a surrogate animal program, retain only selective animal evidence, or accept human-relevant evidence plus omission—and how does that choice vary across jurisdictions and over time?**
