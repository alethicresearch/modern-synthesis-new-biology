# Species-Relevance Comparator Snapshot — 2026-08-31

## Question

Does pharmacological/model relevance help explain when regulators retain conventional general/repeat-dose animal toxicology versus omit or radically tailor it?

This is a **purposive, hypothesis-generating comparator set**, not a representative sample and not a causal analysis. No inferential p-values should be reported from the present dataset because cases were deliberately selected to expose contrasting regulatory patterns.

## Structured comparator set

`data/species_relevance_comparators.json` currently contains **14 regulator-authored product comparators**.

### No or highly limited relevant species/model: 9

Kimmtrak, Carvykti, Kymriah, Yescarta, Breyanzi, Abecma, Tecartus, Tecelra and Sarclisa.

Among these nine, **eight have general/repeat-dose toxicology coded as omitted, unavailable, or substantially tailored rather than conventionally retained**. Sarclisa is the endpoint-specific exception: a general toxicity study remained informative, while embryofetal-development testing was omitted because an appropriate animal model was absent.

### Pharmacologically relevant species present: 5

Imdelltra, Taltz, Adtralza, Libtayo and Piasky.

All five regulator records explicitly identify cynomolgus monkeys as pharmacologically relevant or sufficiently cross-reactive for toxicological analysis, and all five retain substantive repeat-dose toxicology. The programs include studies extending to three months, six months, 26 weeks or 39 weeks, with reproductive/developmental work where scientifically relevant.

Routine biologic exclusions such as genotoxicity/carcinogenicity not being warranted under ICH guidance are **not** counted as species-relevance displacement in these controls.

## What the 14-case structured set supports

The present set is consistent with a strong descriptive association:

**relevant species/model available → conventional general/repeat-dose toxicology tends to be retained**

**relevant species/model absent or severely limited → conventional toxicology is more often omitted or decomposed into a tailored evidence package**

The defensible mechanism is not “NAM availability automatically replaces animal testing.” It is that **model relevance changes information value**. When a conventional study cannot interrogate the relevant human pharmacology or product biology, the safety question may be decomposed and answered using other evidence sources.

## Critical counterexamples: species non-relevance does not mechanically imply omission

The next search deliberately looked for products with poor species relevance in which regulators nevertheless retained animal toxicology through surrogate strategies. It found several.

### Blincyto (blinatumomab), Canada 2015

Health Canada states that blinatumomab has affinity for human and chimpanzee B and T cells but does not bind lymphocytes of other animal species. Apart from limited short-duration chimpanzee infusions, most nonclinical toxicology was performed in mice using a surrogate anti-mouse CD19/CD3 construct, including a comprehensive general and specialized toxicity program.

Primary source:
`https://dhpp.hpfb-dgpsa.ca/review-documents/resource/SBD00207`

### Ultomiris (ravulizumab), Canada 2019

Health Canada states that ravulizumab does not bind non-human C5 and therefore has **no animal species with a pharmacologically active response**. A surrogate antibody directed against murine C5 was nevertheless used for a 26-week repeat-dose toxicity study and reproductive studies in mice.

Primary source:
`https://dhpp.hpfb-dgpsa.ca/review-documents/resource/SBD00463`

### Tzield (teplizumab), Canada 2025

This is the strongest contemporary counterexample to a simple time-trend account. Health Canada states that teplizumab cross-reactivity is limited to humans, chimpanzees, gorillas and other species that are not established experimental species. The submitted nonclinical package therefore used a single chimpanzee study plus **repeat-dose and reproductive/developmental toxicity with a surrogate anti-mouse CD3 antibody**, whose relevance was supported by in-vitro binding comparisons.

Primary source:
`https://dhpp.hpfb-dgpsa.ca/review-documents/resource/SBD1750255396960/`

Tzield was authorized in Canada on 5 May 2025. Surrogate toxicology is therefore not merely an older regulatory artifact.

## Contemporary regulatory divergence

The surrogate cases become especially important when compared with MHRA's **25 March 2026** operational policy.

MHRA now states that, for drug substances that are not pharmacologically active in animals, it **does not support testing in animals, including with surrogate molecules**, and says non-animal-based methods can suffice to support efficacy and safety expectations for this group.

Primary source:
`https://www.gov.uk/guidance/mhra-approach-to-medicines-using-non-animal-methods`

This creates a concrete international divergence in how species non-relevance can be handled:

- **Health Canada / historical and recent product reviews:** surrogate animal toxicology may be accepted when the clinical molecule lacks a conventional relevant species.
- **MHRA 2026 stated approach:** if the drug substance is not pharmacologically active in animals, surrogate-molecule animal testing is not supported; the regulator is willing to assess a human-relevant non-animal package instead.

This is more analytically interesting than a simple “old versus new” transition. The response to model non-relevance depends on **regulatory jurisdiction and policy architecture**, as well as product biology.

## Casgevy: a second source of tailoring independent of species relevance

Health Canada's Casgevy review describes the nonclinical program as “non-traditional” because of the unique mechanism and single administration. It included in-vitro proof of concept, extensive orthogonal off-target analyses, biodistribution, and a **single-dose NSG-mouse study evaluating engraftment, toxicity and tumorigenicity**.

Primary source:
`https://dhpp.hpfb-dgpsa.ca/review-documents/resource/SBD1739203842068/`

Casgevy shows that **product architecture and the regulatory risk question**, not species relevance alone, determine which animal studies retain information value. The result is selective retention rather than a binary of animal versus non-animal evidence.

## Revised working model

The evidence now favors a decision architecture rather than a deterministic rule:

1. Define the regulatory risk question.
2. Determine whether an available species/model expresses the relevant target, pharmacology and product behavior.
3. If a directly relevant species exists, conventional toxicology often retains substantial information value.
4. If it does not, regulators/sponsors can choose among several strategies:
   - surrogate-animal toxicology;
   - limited purpose-built animal studies for questions they can answer;
   - human tissue/cell, iPSC, organotypic, genomic or computational evidence;
   - prior knowledge and literature;
   - clinical monitoring/risk mitigation; or
   - omission of a conventional study when its information value is inadequate.
5. The regulator evaluates the **total evidentiary package**, not whether each legacy animal test has a one-for-one replacement.

Therefore the emerging dependent variable is not simply “animal study present/absent.” A better outcome classification is:

**direct relevant-species toxicology / surrogate toxicology / selective animal retention / human-relevant tailored package / conventional-study omission**.

## New variables required

Before formal analysis, add at least:

- approval/decision year;
- regulator/jurisdiction;
- directly relevant species available?;
- surrogate molecule/model used?;
- general/repeat-dose toxicology outcome;
- endpoint-specific omissions;
- human-relevant evidence types;
- product/modality;
- clinical prior knowledge;
- regulator policy status at time of decision.

Jurisdiction is now a particularly important candidate explanatory variable because Tzield and MHRA's 2026 policy point in different directions despite both being contemporary.

## Sampling strategy

To reduce selection bias, the next expansion should be rules-based rather than convenience-based:

1. Define a fixed set of regulator-reviewed biologics/advanced therapies over prespecified periods.
2. Code species relevance from regulator wording **before** coding toxicology outcome.
3. Separate direct relevant-species toxicology from surrogate-molecule toxicology.
4. Separate general/repeat-dose toxicology from DART/genotoxicity/carcinogenicity.
5. Stratify by modality, approval period and regulator.
6. Only after that dataset is large enough should association measures be calculated.

Priority searches: CD3 bispecifics, human-specific monoclonal antibodies, complement biologics, gene-edited/autologous products, older surrogate-molecule cases, and matched products with a clearly relevant NHP species.

## Manuscript implication if replicated

If this pattern survives a more systematic sample, §IV can make a more precise claim:

**the transition is not fundamentally from animal tests to named replacement tests. It is toward information-value-based evidence architectures in which product biology, model relevance, regulator policy and the specific risk question determine whether animal evidence is retained directly, recreated through a surrogate, narrowed to selected questions, or omitted in favor of human-relevant evidence.**

The Health Canada–MHRA surrogate-model divergence may also become a concrete example for §VII and the international-convergence discussion: convergence is not simply agreement that alternatives matter; it requires convergence on **what to do when the clinical product has no scientifically relevant animal species**.

These claims remain provisional until the sampling frame is expanded systematically.
