# Corpus Snapshot — 2026-08-31

## Scope and counting rules

This snapshot is a descriptive analysis of the living corpus supporting *From Commitment to Adoption: The Path Ahead for New Biology*. It is not yet the manuscript results section.

Event-stage tags are **not mutually exclusive**. Named product adoption and regulatory contexts are analyzed separately so event density is not mistaken for actual animal-study displacement.

## Contemporary event corpus

Current `data/events.json` contains **36 events**.

Overlapping Commitment → Qualification → Adoption tags:

- Commitment: **15**
- Qualification: **18**
- Adoption: **12**
- Validation infrastructure: **6**
- Review infrastructure: **5**
- Major milestones: **25 of 36**

Ignoring secondary tags, the main-stage combinations are:

- Commitment only: **7**
- Qualification only: **13**
- Adoption only: **5**
- Commitment + Qualification: **3**
- Commitment + Adoption: **5**
- Qualification + Adoption: **2**
- Review-infrastructure only / no main-stage tag: **1**

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

The largest change from the first snapshot is that the CAR-T hypothesis is no longer based on two or three examples. **Six approved CAR-T products now have regulator-authored evidence of conventional-study omission or tailored nonclinical architecture:** Carvykti, Kymriah, Yescarta, Breyanzi, Abecma and Tecartus.

The exact omitted studies differ by product and regulator. The defensible class-level claim is therefore not that CAR-T development is animal-free. It is that patient-specific/autologous CAR-T products repeatedly create situations in which conventional whole-animal toxicology is scientifically non-representative or of limited utility, and regulators accept **tailored evidence packages** that allocate different questions to human-tissue/in-vitro assays, genomic/insertional-risk analyses, limited surrogate or xenograft studies, clinical monitoring and prior knowledge.

This now supports a genuine **modality-level adoption pattern**, with an important caveat: the relevant outcome is selective displacement of low-information conventional studies, not elimination of every animal experiment.

## Cross-modality test

The species-relevance route is not confined to CAR-T.

### Tecelra: TCR-T extension

FDA's 2024 Summary Basis for Regulatory Action for Tecelra documents an accepted package including:

- in-silico and in-vitro healthy-human-tissue characterization;
- peptide cross-reactivity screening;
- primary human cells;
- iPSC-derived cells;
- organotypic models; and
- vector-integration analysis.

FDA also records that traditional genotoxicity/carcinogenicity assessments were not conducted and that animal reproductive/developmental studies were omitted as acceptable based on the product characteristics and safety profile. Murine xenografts remained useful for antitumour pharmacology.

This extends the pattern from CAR-T to an **affinity-enhanced TCR-T therapy** and is particularly valuable because the human-relevant assays are explicit in the FDA review rather than inferred from absence of an animal model.

### Sarclisa: monoclonal-antibody endpoint-specific extension

Health Canada records that Sarclisa's nonclinical assessment was limited by species specificity and that embryofetal-development effects were not investigated because appropriate animal models were absent. A GLP main toxicity study did exist, so Sarclisa is not a wholesale toxicology-omission case.

EMA materials additionally describe use of human-tissue in-vitro studies for target-organ identification because no relevant animal species or surrogate antibody existed. The stronger human-tissue claim remains supported by EMA indexed material while direct page rendering is still rate-limited.

Sarclisa therefore supports a narrower but important claim: **species non-relevance can displace specific endpoints even in a conventional monoclonal-antibody program.**

### Negative comparator: Imdelltra (tarlatamab)

Health Canada's review of tarlatamab shows why the mechanism must not be generalized from modality labels alone. Cynomolgus monkeys were selected because monkey CD3 and DLL3 are sufficiently similar to the human targets; the program included 10-day, one-month and three-month repeat-dose toxicology.

This is an analytically useful negative control. It suggests that the relevant predictor is not simply “T-cell engager” or “biologic,” but whether the **specific target/product biology makes the animal species pharmacologically informative**.

## Revised adoption hypothesis

The evidence now supports a more precise route to adoption:

**human/product specificity or other species-relevance failure → conventional animal study loses information value → risk questions are decomposed → human-relevant assays, computational/genomic evidence, prior knowledge, limited purpose-built animal studies and clinical mitigation are combined → regulators accept omission of the low-value conventional study**

This is stronger than the earlier claim that new methods simply replace old tests one-for-one. It also fits MHRA's explicit 2026 position that it does not expect one-for-one replacement and instead evaluates the adequacy of the total evidence package.

The next research question is whether this route appears frequently enough outside advanced cell therapies to become a general adoption mechanism rather than a special feature of highly human-specific products.

## Regulatory context-of-use corpus

Current `data/regulatory_contexts.json` contains **15 defined regulatory contexts**.

By regulatory maturity:

- Applied/current/final/established practice: **10**
- Draft-guidance contexts: **3**
- PMDA Early Consideration, explicitly nonbinding: **2**

By relationship to human biology:

- Explicitly human-based: **3**
- Mixed/weight-of-evidence: **6**
- Broader non-animal/computational/omission contexts not specifically human-based: **6**

Regulatory displacement currently occurs through multiple mechanisms: human cell/tissue systems, computational methods, weight of evidence, accumulated prior knowledge, scientifically justified omission, and replacement of animal-derived reagents.

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

A provisional adoption-maturity sequence is:

**exceptional case → repeated precedent → explicit regulator approach → dedicated review pathway → routine review → harmonized/standardized context**

The newly confirmed CAR-T series supplies evidence for the “repeated precedent” step at product level.

## The strongest empirical asymmetry so far

Commitment and qualification infrastructure remain easier to observe publicly than named adoption and realized displacement. But the new product audit shows that some of the earlier apparent adoption scarcity was a **measurement problem**: regulator review records contain more adoption than high-level policy pages reveal.

The evidence now supports two simultaneous conclusions:

1. qualification remains a genuine bottleneck, especially for reusable method-level qualification; and
2. adoption is systematically undercounted when research looks only for announcements, because important precedents are buried in product-specific regulatory reviews.

That makes **structured public reporting of NAM regulatory adoption** a defensible prospective target rather than merely a documentation preference.

## Next evidence threshold

Before converting these findings into manuscript results:

- continue the cross-modality named-product audit beyond CAR-T/TCR-T;
- use negative comparators such as tarlatamab to test when species relevance predicts study retention;
- resolve Ebvallo through direct visual or independent regulator confirmation;
- find additional conventional biologics with endpoint-specific species-relevance omissions;
- identify ring-trial outcomes rather than launches;
- obtain additional realized displacement denominators; and
- rerun the corpus from a reproducible summary script rather than hand-counting.

The central empirical question is now more specific: **is species/model relevance a measurable predictor of when regulators accept tailored human-relevant evidence and omit conventional animal studies, and how does that route interact with reusable qualification and routinization?**
