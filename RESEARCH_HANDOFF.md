# Research handoff

Updated: 2026-08-31

## Current objective

Build this repository into the living empirical companion to *From Commitment to Adoption: The Path Ahead for New Biology*. Preserve the manuscript's Commitment → Qualification → Adoption framework while measuring what actually happens at adoption: animal-study displacement, NAM regulatory reliance, other evidence substitution, and institutional routinization.

Do **not** substantively revise the manuscript automatically. Complete the evidence corpus and comparator analyses first so later manuscript claims, figures and tables are derived from the ledger rather than added anecdotally.

## Architecture and current state

- `data/events.json` — 36 contemporary observed/emerging events.
- `data/prospective.json` — forward targets with observable success criteria, including structured public reporting of NAM regulatory adoption.
- `data/regulatory_contexts.json` — defined regulatory contexts for omission/replacement/shortening/avoidance.
- `data/named_regulatory_adoption.json` — 12 regulator-verified named product cases.
- `data/adoption_candidates.json` — unresolved named cases; currently SillaJen/Qureator BAL0891 and Ebvallo.
- `data/displacement_metrics.json` — realized or interpretable displacement denominators.
- `data/candidates.json` — chronology leads awaiting promotion/correction/rejection.
- `analysis/CORPUS_SNAPSHOT_2026-08-31.md` — current descriptive synthesis.
- `RESEARCH_PROTOCOL.md`, `EVENT_SCHEMA.md`, `PAPER_INTEGRATION.md` — governing protocol/schema/manuscript linkage.
- `scripts/validate_data.py` + `.github/workflows/validate.yml` — automated data validation.

Latest confirmed CI state: the prospective-roadmap refinement validated successfully; the named-adoption and candidate-ledger updates validated successfully; the current public Pages build after the latest analysis commit completed successfully. A validator run should only be claimed for commits/files actually covered by the workflow trigger.

## Adoption is multidimensional

Never use one undifferentiated adoption count.

1. **Animal-study displacement** — a legacy animal study/component is omitted, replaced, shortened or avoided for a defined decision.
2. **NAM regulatory reliance** — NAM evidence materially supports a named decision even if an animal study is not displaced.
3. **Other evidence substitution** — NAM evidence substitutes for clinical or other evidence rather than animals.
4. **Institutional routinization** — an alternative pathway migrates from exceptional review into ordinary workflow, general policy or dedicated review infrastructure.

Current routinization examples:

- EPA: specialist exception review → ordinary branch-level decisions.
- UK/MHRA: case-by-case animal-study omission → explicit regulator-wide approach → planned advance Module 4 review mechanism.

Provisional maturity sequence to test, not assume universally:

**exceptional case → repeated precedent → explicit regulator approach → dedicated review pathway → routine review → harmonized/standardized context**

## Named product adoption: current totals

`data/named_regulatory_adoption.json` contains **12 confirmed named cases**.

### Strict animal-displacement flag: 9

- Kimmtrak (tebentafusp)
- Carvykti (ciltacabtagene autoleucel)
- Kymriah (tisagenlecleucel)
- Yescarta (axicabtagene ciloleucel)
- Breyanzi (lisocabtagene maraleucel)
- Abecma (idecabtagene vicleucel)
- Tecartus (brexucabtagene autoleucel)
- Tecelra (afamitresgene autoleucel)
- Sarclisa (isatuximab), endpoint-specific rather than wholesale toxicology omission

### NAM reliance but not strict animal displacement: 1

- Veopoz (pozelimab)

### Other evidence substitution: 2

- Kalydeco (ivacaftor) — additional variant-specific clinical evidence
- Galafold (migalastat) — additional variant-specific clinical evidence

## CAR-T is now a regulator-record-supported modality-level pattern

The earlier hypothesis is resolved strongly enough to analyze as a repeated pattern rather than two or three anecdotes. Six approved CAR-T products now have regulator-authored evidence of conventional-study omission or tailored nonclinical architecture: **Carvykti, Kymriah, Yescarta, Breyanzi, Abecma and Tecartus**.

Health Canada independently confirmed the four cases that had been waiting on EMA PDF rendering:

- **Yescarta:** Health Canada records that no representative model could accurately examine the toxicological characteristics of the individualized human product; traditional toxicology, carcinogenicity and genotoxicity studies were not performed, while surrogate animal pharmacology addressed selected questions.
- **Breyanzi:** human-tissue cross-reactivity, insertion-site mapping and in-vitro transformation/expansion evidence were part of the tailored package; conventional genotoxicity/carcinogenicity and fertility studies were omitted.
- **Abecma:** repeat-dose studies were not conducted for the single-infusion autologous product and traditional toxicity/fertility studies were omitted; selected xenograft pharmacology remained informative.
- **Tecartus:** Health Canada states that no representative model could accurately address toxicological characteristics and traditional toxicology was not performed; selected murine surrogate pharmacology remained.

The defensible class-level claim is **not** that CAR-T development is animal-free. It is that patient-specific/autologous CAR-T repeatedly creates circumstances in which conventional whole-animal toxicology is scientifically non-representative or low-utility, and regulators accept tailored evidence packages that decompose risk questions across human-tissue/in-vitro assays, genomic/insertional-risk evidence, prior knowledge, selected surrogate/xenograft animal studies and clinical monitoring.

## Cross-modality extension

### Tecelra (afamitresgene autoleucel)

FDA CBER's 2024 Summary Basis for Regulatory Action was directly inspected. The accepted TCR-T nonclinical package includes in-silico and in-vitro healthy-human-tissue characterization, peptide cross-reactivity screening, primary human cells, **iPSC-derived cells**, **organotypic models**, and vector-integration analysis. Traditional genotoxicity/carcinogenicity assessments and animal reproductive/developmental studies were not conducted; murine xenografts remained useful for antitumour pharmacology.

This extends the pattern beyond CAR-T to an affinity-enhanced TCR-T therapy and supplies one of the clearest FDA examples in which explicit human-relevant models are visible inside the accepted product package.

### Sarclisa (isatuximab)

Health Canada records that the nonclinical assessment was limited by species specificity and that embryofetal-development effects were not investigated because appropriate animal models were absent. A GLP main toxicity study did exist, so Sarclisa is **endpoint-specific displacement**, not wholesale animal-toxicology omission. EMA indexed material additionally describes human-tissue in-vitro assessment where no relevant species/surrogate antibody existed; direct EMA page rendering remains useful but is no longer required to support the narrower Health Canada-confirmed endpoint claim.

## The sharper adoption mechanism

The evidence now supports this provisional route:

**human/product specificity or other species-relevance failure → conventional animal study loses information value → regulatory questions are decomposed → human-relevant assays + computational/genomic evidence + prior knowledge + selective animal studies + clinical mitigation are combined → regulator accepts omission of the low-information conventional study**

This is a better empirical description than one-for-one test replacement and aligns with MHRA's March 2026 position that regulators should assess the adequacy of the total evidence package rather than demand one replacement test for every animal test.

The next task is to test whether this route predicts study omission outside advanced cell therapies.

## Negative comparator established: Imdelltra (tarlatamab)

Health Canada's review is an important negative control. Cynomolgus monkeys were selected because monkey CD3 and DLL3 were sufficiently similar to their human counterparts for tarlatamab binding; 10-day, one-month and three-month repeat-dose toxicology studies were conducted. Mouse surrogate/xenograft systems were also used for narrower questions.

Do not generalize the positive pattern as “T-cell engager = no animal model.” The more precise variable is whether the **specific product/target biology leaves an animal species pharmacologically informative**.

## Comparator research now underway

Build a positive/negative species-relevance comparator layer. Candidate negative controls already identified in Health Canada records include:

- **Taltz (ixekizumab):** cynomolgus monkey was the sole pharmacologically relevant species; general toxicity was studied for up to 39 weeks and reproductive/developmental studies were performed.
- **Adtralza (tralokinumab):** pivotal repeat-dose and reproductive/developmental toxicology was conducted in cynomolgus monkeys explicitly described as pharmacologically relevant.
- **Libtayo (cemiplimab):** cynomolgus monkey was the only pharmacologically relevant species; three repeat-dose toxicology studies up to 26 weeks were conducted.
- **Piasky (crovalimab):** binding to human and cynomolgus C5 supported cynomolgus as the only pharmacologically relevant species; 5-week and 6-month repeat-dose studies plus enhanced pre/postnatal development studies were conducted.
- **Imdelltra (tarlatamab):** species relevance discussed above.

Methodological rule: routine ICH exclusions such as conventional biologic genotoxicity/carcinogenicity omissions must **not** be counted as evidence that species irrelevance caused displacement. The primary comparator outcome should focus on general/repeat-dose toxicology or a specific endpoint that the regulator explicitly links to species/model relevance.

Recommended comparator fields: product, modality, target, regulator, relevant-species status (`none`, `limited`, `relevant`), general/repeat toxicology (`omitted`, `tailored`, `retained`), endpoint-specific omissions, human-relevant evidence, animal studies retained, regulator wording and primary source.

## Other unresolved candidates

### SillaJen/Qureator BAL0891

Provider/sponsor records claim a human vascularized tumor-immune organoid package replaced traditional animal proof-of-concept for an FDA IND amendment, but no public FDA record has yet causally confirmed the omission. Keep quarantined.

### Ebvallo (tabelecleucel)

EMA indexed assessment text states that conventional toxicology, carcinogenicity, genotoxicity, mutagenicity and reproductive toxicology studies were not performed for the allogeneic EBV-specific T-cell product, with selected immunodeficient-animal studies used for narrower questions. Direct EMA PDF rendering remained rate-limited and an independent equivalent regulator source has not yet been located. Keep as candidate until visual or independent regulator confirmation.

## Regulatory-context and quantified-displacement evidence

`data/regulatory_contexts.json` includes 15 defined contexts spanning FDA, EPA, PMDA and the UK. Preserve exact regulatory maturity: applied/final/established, draft guidance, and PMDA Early Consideration are not interchangeable.

Strong realized public denominators remain EPA:

- FY2023 branch-level acute-toxicity decisions: **1,122 studies saved** and **9,415–18,026 animals reduced**.
- Acute-dermal waivers FY2018–FY2023: **262 waivers** and **2,620–7,860 animals reduced**.
- FDA/ICH S1B(R1): omission of a two-year rat carcinogenicity study can avoid **>400 animals per study**, depending on design; this is a per-case conversion factor, not a national observed total.

Do not sum these categories. EPA's public realized metrics currently stop at FY2023.

## Main corpus signal

The event ledger contains **36 contemporary events**: 15 commitment-tagged, 18 qualification-tagged and 12 adoption-tagged, with overlapping stages. There are 25 major milestones.

The adoption audit changes how that asymmetry should be interpreted. Qualification infrastructure remains highly visible and reusable qualification remains a genuine bottleneck, but product-specific regulator reviews reveal substantially more adoption than high-level policy pages do. The apparent scarcity of adoption is therefore partly substantive and partly a **measurement/transparency problem**.

This supports the prospective target for **structured public reporting of NAM regulatory adoption**: regulators should expose the context/question, whether a legacy animal study was actually displaced, what evidence replaced or supplemented it, and the underlying precedent.

## Next research priority

1. Build `data/species_relevance_comparators.json` (or equivalent analysis file) with confirmed positive and negative controls.
2. Verify the negative-control set from regulator-authored sources and expand it across conventional antibodies/biologics.
3. Add more positives outside CAR-T/TCR-T, prioritizing explicit regulator language linking species/model non-relevance to omitted general/repeat-dose toxicology or a named endpoint.
4. Resolve Ebvallo if possible.
5. Seek ring-trial **results**, not launch announcements.
6. Extend realized displacement denominators when agencies publish them.
7. Recompute comparator and corpus summaries reproducibly before making manuscript changes.

## Manuscript implications — provisional, do not auto-edit

If the comparator analysis survives expansion, likely manuscript effects are:

- **§IV:** adoption should be described as risk-question decomposition and evidence substitution conditioned by model relevance, not simply one-for-one replacement.
- **§VII:** repeated product precedents and routinization may show how regulatory credibility becomes reusable before formal method-level qualification is complete.
- **Table 2:** add carefully chosen named adoption examples and distinguish mature routine practice, endpoint-specific omission, and product-specific tailored evidence.
- **Table 3:** retain/publicly strengthen adoption-reporting and denominator/accountability milestones.

Three provisional empirical claims now merit testing:

1. **Species/model relevance is a regulatory decision variable across jurisdictions.**
2. **Advanced cell therapies provide a clear modality-level example of conventional toxicology being selectively displaced by tailored evidence packages.**
3. **Routinization is measurable independently of first acceptance.**

## Quality bar

Use primary/regulator-authored sources whenever possible. Preserve draft/final/Early Consideration, accepted/qualified, validation/qualification/adoption, human-based/broader NAM, animal-study displacement/other evidence substitution, independent convergence/formal harmonization, and sponsor claim/regulator confirmation. Never infer animals avoided merely from absent studies, validation-corpus size or announcements without an authoritative causal basis.
