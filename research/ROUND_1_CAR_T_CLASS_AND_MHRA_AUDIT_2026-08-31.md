# Research Round 1 — CAR-T class and MHRA adoption audit

Date: 2026-08-31

## Objective

Test whether the named advanced-therapy findings are isolated exceptions or evidence of a modality-level regulatory pattern, and distinguish UK current regulatory practice from future policy targets.

## Kymriah: promoted after visual verification

EMA's original Kymriah assessment report was directly inspected. CHMP states that:

- lack of single-dose toxicity studies is acceptable because tisagenlecleucel is a patient-specific product that is not appropriate to administer to immunocompetent animals;
- lack of repeat-dose toxicity studies is acceptable because the product is a single-infusion, patient-specific therapy and is not appropriate for immunocompetent animals;
- rodent genotoxicity and carcinogenicity assays are not appropriate for genetically modified cell therapy products and no adequate alternative animal models exist;
- animal germline-transmission testing of genetically modified human cells is not recommended because administration/testing of human cells in animals can be difficult or not meaningful;
- product-specific in-vitro expansion/transformation studies and genomic insertion-site analyses were used for relevant safety questions, while selected immunocompromised-mouse studies addressed persistence/clonal-expansion questions.

Source: https://www.ema.europa.eu/en/documents/assessment-report/kymriah-epar-public-assessment-report_en.pdf

Coding: confirmed named animal-study displacement; not an animal-free development program.

## Carvykti: PMDA corroboration added

PMDA's Carvykti review report independently states that ciltacabtagene autoleucel lacks cross-reactivity to BCMA in rodents and nonhuman primates and therefore has no pharmacologically relevant animal species. PMDA reviewed a tailored package including in-vitro human-membrane surface-protein binding and other off-target/insertional-risk studies. A mouse xenograft model was nevertheless used for selected pharmacology and toxicity observations.

Source: https://www.pmda.go.jp/files/000252610.pdf

Coding: PMDA corroborates the core species-relevance and tailored-NAM logic, while EMA remains the clearer source for actual omission of conventional formal GLP/repeat-dose toxicology. Carvykti should therefore be treated as a cross-jurisdiction precedent with non-identical regulatory implementations.

## CAR-T class audit: four additional EMA candidates

The following direct EMA assessment text has been located but the corresponding PDF pages have not yet been visually verified in this audit. They remain in `data/adoption_candidates.json` and must not yet be counted as confirmed cases.

### Yescarta (axicabtagene ciloleucel)

EMA assessment text states that no representative in-vitro, ex-vivo or in-vivo model can accurately address the toxicological characteristics of the human product and that traditional toxicology studies were therefore not performed. A surrogate anti-murine CD19 CAR-T mouse lymphoma model addressed selected pharmacology/on-target questions but was explicitly limited in translation to the human product.

Source: https://www.ema.europa.eu/en/documents/assessment-report/yescarta-epar-public-assessment-report_en.pdf

### Breyanzi (lisocabtagene maraleucel)

EMA assessment text states that the autologous T-cell product lacks species cross-reactivity and that traditional toxicity studies — including single/repeat-dose toxicity, genotoxicity, carcinogenicity, reproductive/developmental toxicity and local tolerance — were considered of negligible utility and were not conducted.

Source: https://www.ema.europa.eu/en/documents/assessment-report/breyanzi-epar-public-assessment-report_en.pdf

### Abecma (idecabtagene vicleucel)

EMA assessment text states that no conventional toxicity studies were conducted because appropriate animal models for toxicity evaluation were lacking. A tailored safety evaluation focused on insertional mutagenesis and tumorigenic transformation, including insertion-site analysis and in-vitro growth/transformation testing.

Source: https://www.ema.europa.eu/en/documents/assessment-report/abecma-epar-public-assessment-report_en.pdf

### Tecartus (brexucabtagene autoleucel)

EMA assessment text states that formal single-dose testing was not performed, repeat-dose testing was not conducted for the single-infusion product, and safety-pharmacology, reproductive/developmental and genotoxicity/carcinogenicity studies were not conducted because of lack of a suitable animal model and applicability of traditional toxicology. Selected surrogate mouse and vector-integration studies addressed narrower questions.

Source: https://www.ema.europa.eu/en/documents/assessment-report/tecartus-epar-public-assessment-report_en.pdf

## Emerging modality-level hypothesis

If visual verification confirms the four candidates, the evidence will include at least six approved CAR-T products — Kymriah, Carvykti, Yescarta, Breyanzi, Abecma and Tecartus — in which regulators accepted a **tailored nonclinical package rather than a conventional toxicology battery** because patient-specific/autologous human cell products and species cross-reactivity constraints made standard animal models scientifically limited or non-relevant.

This would be analytically stronger than a claim that “CAR-T uses NAMs.” The potential finding is:

> For some advanced-therapy modalities, adoption has occurred by **redefining the nonclinical evidence architecture around the questions that available models can actually answer**, rather than by replacing each conventional animal study with a one-for-one non-animal assay.

This remains a hypothesis until the remaining cases are visually verified and exact omitted-study categories are coded product by product.

## MHRA: March 25, 2026 operational approach

Direct source: https://www.gov.uk/guidance/mhra-approach-to-medicines-using-non-animal-methods

MHRA now publishes an operational approach for CTA and MAA review that is materially stronger than a general government phase-out strategy. It states that:

- scientifically justified proposals may omit animal studies when alternative evidence adequately addresses safety;
- the regulator evaluates totality of evidence and does not expect one-to-one substitution of each animal study;
- non-animal evidence may include in-silico methods, microphysiological systems and complex in-vitro models;
- for drug substances not pharmacologically active in animals, MHRA does not support animal testing, including testing surrogate molecules, and non-animal methods can suffice;
- generic and biosimilar products should not be tested in animals;
- some products with well-recognized pharmacology can enter UK clinical trials without animal studies;
- for biologicals and ATMPs, applications omitting animal studies may be acceptable where relevant animal models do not exist and human-relevant nonclinical data, target biology, prior knowledge and clinical risk mitigation address residual uncertainty.

The guidance also contains a future infrastructure commitment: by end-2026 MHRA intends to establish a mechanism for advance, nonbinding review of Module 4 for marketing applications developed without animal studies. Current scientific assessment policy and the future pre-review mechanism must remain distinct.

## Routinization concept

This pass reinforces an emerging empirical adoption concept: **routinization**.

Two different paths are now visible:

- EPA: formerly specialist-council waiver decisions become ordinary branch-level determinations.
- UK/MHRA: case-by-case scientifically justified exceptions become an explicit regulator-wide assessment approach, followed by a planned dedicated pre-review mechanism.

A provisional adoption-maturity sequence worth testing against the broader corpus is:

**exceptional case → repeated precedent → explicit regulator approach → dedicated review pathway → routine review → harmonized/standardized context**

Do not assume every domain follows this sequence. Test it empirically.

## Next actions

1. Obtain direct page-image verification for Yescarta, Breyanzi, Abecma and Tecartus and promote only those whose exact claims survive visual audit.
2. Extend the same class audit to other patient-specific or human-specific advanced therapies.
3. Add the March 25, 2026 MHRA approach to the public chronology after the candidate queue is reconciled.
4. Align the UK biological regulatory-context record to the direct MHRA source.
5. Search for named UK applications that actually used the non-animal pathways described by MHRA.
6. After enough cases are verified, quantify adoption by modality and omitted-study category rather than by raw anecdote count.
