# Round 1 adoption and displacement sweep

Updated: 2026-08-31

## Research question

Where can we document not merely support for NAMs, validation activity, or regulatory openness, but actual omission, replacement, shortening, or avoidance of legacy animal studies or animal-derived test components?

This sweep uses primary regulator sources where possible and distinguishes direct substitution from broader streamlining.

## Strongest documented contexts found

### FDA CDER: hiPSC-cardiomyocytes can replace an otherwise-conducted animal study in a defined QT context

FDA's current CDER inventory of streamlined nonclinical studies and acceptable NAMs includes an applied regulatory example for anticancer pharmaceuticals where QT prolongation or proarrhythmic risk warrants assessment. FDA states that hiPSC-derived cardiomyocyte studies following best practices can be used in place of an animal study that would otherwise be conducted, alongside hERG testing as appropriate.

Primary source:
https://www.fda.gov/about-fda/center-drug-evaluation-and-research-cder/cder-streamlined-nonclinical-studies-and-acceptable-new-approach-methodologies-nams

Interpretation: this is unusually valuable evidence because the regulator itself frames the NAM as replacing an otherwise-conducted animal study in a defined decision context. This should be treated as adoption evidence, not merely validation or encouragement.

### EPA: 3D human airway tissue plus digital models avoid new animal studies in covered surfactant assessments

EPA's August 27, 2026 implementation announcement states that its updated framework for specified surfactants uses 3D human airway tissue and existing digital models so reviewers can estimate risks rather than ordering new animal studies.

Primary source:
https://www.epa.gov/newsreleases/epa-announces-two-major-scientific-advancements-further-eliminate-animal-testing-raise

Interpretation: direct decision-level displacement. This is one of the clearest contemporary examples for the manuscript's adoption category.

### EPA: GHS mixtures equation for covered pesticide acute-oral decisions

The same EPA action adopts the GHS mixtures equation for predicting acute oral toxicity of some pesticide formulations rather than requiring new testing in covered cases.

Interpretation: this is genuine displacement but computational rather than human-biological. Preserve that distinction in any manuscript language using "human-based" as the narrower category.

### FDA: recombinant endotoxin reagents enter final-guidance flexibility

FDA's March 2026 final revised pyrogen/endotoxin guidance removes some LAL-specific language to accommodate recombinant reagents and aligns with USP <86>. FDA states that the change provides flexibility for manufacturers to transition to recombinant reagents.

Primary sources:
https://www.fda.gov/science-research/advancing-alternative-methods-fda/fda-clarifies-current-thinking-pyrogen-and-endotoxins-testing
https://www.fda.gov/regulatory-information/search-fda-guidance-documents/pyrogen-and-endotoxins-testing-questions-and-answers

Interpretation: this is replacement of an animal-derived testing reagent, not necessarily an in vivo animal study. It belongs in the broader transition but requires a different displacement label.

### ICH S1B(R1): conditional omission of the two-year rat carcinogenicity study

FDA's final November 2022 ICH S1B(R1) guidance permits sponsors to use an integrated weight-of-evidence assessment and seek regulatory consultation on not conducting a two-year rat carcinogenicity study in appropriate cases.

Primary source:
https://www.fda.gov/regulatory-information/search-fda-guidance-documents/s1br1-addendum-s1b-testing-carcinogenicity-pharmaceuticals

Interpretation: this is a mature pre-roadmap precedent showing that animal-study displacement can arise through evidence integration rather than one-for-one substitution by a single NAM. It is useful as a foundation/early-transition benchmark.

### Photosafety: non-animal methods are already routine in an established context

FDA's current CDER inventory states that non-animal methods or clinical data are typically used for photosafety assessment of small molecules.

Primary source:
https://www.fda.gov/about-fda/center-drug-evaluation-and-research-cder/cder-streamlined-nonclinical-studies-and-acceptable-new-approach-methodologies-nams

Interpretation: analytically useful because it demonstrates a mature endpoint where non-animal adoption has become routine enough to appear as ordinary regulatory practice rather than a headline milestone.

## Architecture decision

Created `data/regulatory_contexts.json` as a second empirical ledger.

The chronology and regulatory-context ledger answer different questions:

- `events.json`: what institutional/scientific development happened, and when?
- `regulatory_contexts.json`: what legacy animal component can actually be omitted/replaced/reduced/avoided, under what context of use, by what evidence, and at what regulatory status?

This separation should reduce category errors. A roadmap announcement may be a major event without creating a new usable context; conversely, a mature regulatory context may be analytically important despite no recent headline event.

## Emerging manuscript contribution

The paper could move beyond counting commitments, qualifications, and announcements by introducing a stricter empirical definition of adoption:

> Adoption is evidenced when an authoritative regulatory or development context permits a legacy animal study, component, or requirement to be omitted, replaced, shortened, or avoided for a defined decision.

This can be operationalized with fields already introduced in the new ledger:

- decision context
- legacy animal component
- alternative evidence/method
- displacement type
- regulatory status
- evidence strength
- whether the alternative is specifically human-based

This could support a new compact figure or table showing a small number of verified displacement contexts, rather than claiming that every NAM-supportive policy constitutes adoption.

## Next research targets

1. Search FDA's applied regulatory examples and historical guidance systematically for every context with explicit animal-study displacement language.
2. Search sponsor/regulator records for named development programs where an animal study was actually waived or omitted based on NAM evidence.
3. Search EMA/MHRA/PMDA/TGA/Health Canada for comparable explicit contexts.
4. Search EPA TSCA/FIFRA decisions for waiver and NAM-use records beyond the August 27 announcement.
5. Identify measured animal-count reductions where a regulatory policy change has a published denominator.
6. Separate one-for-one substitution, integrated evidence/waiver, study shortening, animal-number reduction, and replacement of animal-derived reagents.

## Caution

Do not infer displacement merely because a company says it uses organoids, MPS, AI, or in-silico methods. Company platform adoption is relevant, but it becomes regulatory displacement evidence only when the record supports that an animal study was actually omitted, replaced, shortened, or avoided in a defined development or regulatory decision.
