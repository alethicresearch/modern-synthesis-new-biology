# Species-Relevance Comparator Snapshot — 2026-08-31

## Question

Does pharmacological/model relevance appear to help explain when regulators retain conventional general/repeat-dose animal toxicology versus omit or radically tailor it?

This is a **purposive, hypothesis-generating comparator set**, not a representative sample and not a causal analysis. No inferential p-values should be reported from the present dataset because cases were deliberately selected to expose both positive and negative regulatory patterns.

## Structured comparator set

`data/species_relevance_comparators.json` currently contains **14 regulator-authored product comparators**.

### No or highly limited relevant species/model: 9

- Kimmtrak — no relevant species; conventional toxicology unavailable/omitted.
- Carvykti — no relevant species; formal GLP/repeat-dose toxicology omitted.
- Kymriah — patient-specific product/model non-representative; single/repeat-dose toxicology omitted.
- Yescarta — no representative toxicology model; traditional toxicology omitted.
- Breyanzi — no representative conventional strategy / species cross-reactivity limitations; package tailored/omitted.
- Abecma — no/limited appropriate model for conventional program; repeat-dose/traditional toxicity omitted.
- Tecartus — no representative toxicology model; traditional toxicology omitted.
- Tecelra — highly human-specific engineered TCR questions; conventional package tailored toward human cells/iPSC-derived cells/organotypic models, with selected animal pharmacology retained.
- Sarclisa — species specificity limited the program; general toxicity was retained but embryofetal-development testing was specifically omitted because an appropriate model was absent.

Among these nine, **eight have general/repeat-dose toxicology coded as omitted, unavailable, or substantially tailored rather than conventionally retained**. Sarclisa is the important endpoint-specific exception: a general toxicity study remained informative, while a particular reproductive-developmental endpoint lacked an appropriate animal model.

### Pharmacologically relevant species present: 5

- Imdelltra (tarlatamab)
- Taltz (ixekizumab)
- Adtralza (tralokinumab)
- Libtayo (cemiplimab)
- Piasky (crovalimab)

All five regulator records explicitly identify cynomolgus monkeys as pharmacologically relevant or sufficiently cross-reactive for toxicological analysis, and all five retain substantive repeat-dose toxicology. The exact programs differ, but include studies extending to three months, six months, 26 weeks or 39 weeks, with reproductive/developmental work where scientifically relevant.

Routine biologic exclusions such as genotoxicity/carcinogenicity not being warranted under ICH guidance are **not** counted as species-relevance displacement in these negative controls.

## What the current 14 cases do support

The present evidence is consistent with a strong descriptive association:

**relevant species/model available → conventional general/repeat-dose toxicology tends to be retained**

**relevant species/model absent or severely limited → conventional toxicology is more often omitted or decomposed into a tailored evidence package**

The more defensible explanatory mechanism is not “NAM availability automatically replaces animal testing.” It is that **model relevance governs information value**. When a conventional study cannot interrogate the relevant human pharmacology or product biology, regulators permit the safety question to be decomposed and answered using other evidence sources.

## Two edge cases prevent overclaiming

### Blincyto (blinatumomab): species non-relevance can lead to surrogate substitution rather than omission

Health Canada's original Blincyto review states that blinatumomab has affinity for human and chimpanzee B/T cells but does not bind lymphocytes of other animal species. Apart from limited short-duration chimpanzee infusions, the majority of toxicology was therefore performed in mice using a surrogate anti-mouse CD19/CD3 construct, including a comprehensive general and specialized toxicity program.

Primary source:
`https://dhpp.hpfb-dgpsa.ca/review-documents/resource/SBD00207`

This case is analytically critical. It shows that **absence of an ordinary pharmacologically relevant species does not mechanically imply animal-study omission**. A regulator/sponsor may instead construct a surrogate conventional-toxicology program.

It also creates a potentially important historical contrast with the March 2026 MHRA approach, which explicitly says that where a drug substance is not pharmacologically active in animals, MHRA does not support animal testing using surrogate molecules simply to reproduce human pharmacology. This suggests the regulatory response to species non-relevance may itself be changing over time.

### Casgevy: non-traditional product biology produces tailoring without wholesale animal omission

Health Canada's Casgevy review describes the nonclinical program as “non-traditional” because of the unique mechanism and single administration. The package included in-vitro proof of concept, extensive orthogonal off-target analyses, biodistribution and a **single-dose NSG-mouse study evaluating engraftment, toxicity and tumorigenicity**.

Primary source:
`https://dhpp.hpfb-dgpsa.ca/review-documents/resource/SBD1739203842068/`

Casgevy shows another route to tailored evidence: **product architecture and the risk question**, not species relevance alone, can determine which animal studies retain information value. The result is selective retention rather than a simple binary of “animal” versus “non-animal.”

## Revised working model

The evidence now favors a multi-step model:

1. Define the regulatory risk question.
2. Ask whether an available animal species/model actually expresses the relevant target, pharmacology and product behavior.
3. If yes, conventional animal toxicology may retain substantial information value and tends to remain in the package.
4. If no, choose among several responses rather than assuming automatic omission:
   - surrogate-animal substitution;
   - limited purpose-built animal studies for questions they can answer;
   - human tissue/cell, iPSC, organotypic, genomic or computational evidence;
   - prior knowledge and literature;
   - clinical monitoring/risk mitigation; or
   - omission of a conventional study when its information value is inadequate.
5. The regulator judges the **total evidentiary package**, not whether each legacy animal test has a one-for-one replacement.

This formulation fits the named-product evidence and MHRA's 2026 operational framing better than a test-replacement narrative.

## A possible historical transition worth testing

Blincyto (authorized Canada 2015) versus the 2025–2026 policy environment raises a new hypothesis:

**species non-relevance may historically have been managed more often through surrogate animal models, whereas newer regulatory frameworks increasingly allow direct human-relevant evidence plus selective omission.**

This is not yet established. Test it by identifying older and newer biologics with no relevant species and coding whether the response was:

- surrogate animal program;
- limited/selective animal work;
- human-relevant tailored package; or
- conventional-study omission.

A time variable should therefore be added before any formal manuscript analysis.

## Next sampling strategy

To reduce selection bias, the next comparator expansion should be rules-based rather than convenience-based:

1. Define a set of approved biologics/advanced therapies from regulator public reviews over fixed periods.
2. Code species relevance from the regulator's own wording before coding toxicology outcome.
3. Code general/repeat-dose toxicology separately from endpoint-specific DART/genotoxicity/carcinogenicity.
4. Record surrogate use as its own outcome, not as ordinary relevant-species toxicology.
5. Stratify by modality and approval period.
6. Only after the dataset is large enough should the project calculate association measures.

Priority searches: older human-specific biologics using surrogate molecules; newer CD3 bispecifics; conventional mAbs with no relevant species; gene-edited/autologous cell products; and products where the regulator explicitly retained a relevant NHP program.

## Manuscript implication if replicated

If this pattern persists in a more systematic sample, §IV can make a stronger and more original claim: **the transition is not fundamentally from animal tests to named replacement tests; it is from default species-based packages toward information-value-based evidence architectures in which model relevance determines what evidence is worth generating.**

That claim should remain provisional until the sampling frame is expanded beyond the current purposive set.
