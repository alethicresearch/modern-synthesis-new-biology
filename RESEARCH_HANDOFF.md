# Research handoff

Updated: 2026-08-31

## Current objective

Build the repository into a living research product supporting the paper *From Commitment to Adoption: The Path Ahead for New Biology*. The roadmap should maintain a broader evidence corpus than the paper, preserve regulatory-stage distinctions, expose a compact major-milestones view, maintain a separate prospective program of observable future milestones, and now separately track verified contexts in which legacy animal studies or animal-derived test components can actually be omitted, replaced, shortened, or avoided.

## Current architecture

- `data/events.json` — observed/foundation/emerging evidence ledger.
- `data/prospective.json` — forward-looking targets, recommendations, forecasts, and catalytic proposals.
- `data/regulatory_contexts.json` — context-of-use ledger for documented animal-study or animal-derived-component displacement.
- `data/candidates.json` — source-audited candidates awaiting promotion, correction, merge, or rejection.
- `RESEARCH_PROTOCOL.md` — inclusion/exclusion, evidence hierarchy, stage discipline, and research rounds.
- `EVENT_SCHEMA.md` — event field definitions and migration rules.
- `PAPER_INTEGRATION.md` — plan for manuscript figures, supplementary chronology, linking, and publication freeze.
- `research/ROUND_1_ADOPTION_DISPLACEMENT_SWEEP_2026-08-31.md` — first explicit adoption/displacement audit.
- `RESEARCH_HANDOFF.md` — coordination state for future agents/researchers.
- `scripts/validate_data.py` + `.github/workflows/validate.yml` — CI validation of schema-critical fields and source links.

## Research Round 1: 2022-present

Status: **in progress**.

Primary-source verification completed in this round for the following additions or decompositions:

- 2024-09-24 — FDA accepts the first organ-on-chip LOI into ISTAND, a human Liver-Chip intended to assess DILI risk for certain drug candidates. Important distinction: accepted LOI, not qualification.
- 2025-04-03 — NIH Common Fund/FNIH launch the Complement-ARIE Validation and Qualification Network partnership.
- 2025-04-10 — FDA publishes its Roadmap to Reducing Animal Testing in Preclinical Safety Studies and announces immediate implementation beginning with monoclonal-antibody development.
- 2025-04-29 — NIH announces its human-based research initiative, including planned ORIVA, review-system changes, funding/training/infrastructure expansion, and annual spending reporting. This should replace the approximate July 2025 record.
- 2025-07-10 — NIH changes new NOFO policy: opportunities involving animal-model systems must also permit human-focused approaches; NIH says it will no longer issue NOFOs exclusively supporting animal models. Keep distinct from the April commitment.
- 2025-07-31 — FDA establishes ISTAND as a permanent DDT Qualification Program; FDA explicitly describes qualification as reusable within a stated context of use.
- 2025-09-25 — NIH establishes the Standardized Organoid Modeling Center with $87M over the first three years, targeting reproducibility, standardization, scale, open resources, and work with FDA toward preclinical-testing standards.
- 2025-09-30 — Complement-ARIE launches the $7M Reduction to Practice Challenge with staged reproducibility and VQN-delivery milestones.
- 2025-12-02 — FDA issues draft guidance on streamlined nonclinical safety studies for monoclonal antibodies; draft, not final.
- 2025-12-08 — FDA qualifies AIM-NASH, the first AI drug-development tool; this is a formal qualification through the Biomarker Qualification Program, not ISTAND.
- 2026-01-22 — EPA recommits to eliminating mammalian testing by 2035.
- 2026-02-02 — FDA DDT metrics report 16 ISTAND projects in development as of Jan. 1, 2026: 14 accepted LOIs, 2 accepted Qualification Plans, and 0 qualified ISTAND DDTs. This is a useful state-of-pipeline measurement, not an adoption event.
- 2026-03-18 — FDA issues draft general NAM guidance providing a validation framework for NAMs used in drug-development submissions; draft, not final.
- 2026-03-18 — NIH announces more than $150M in first Complement-ARIE awards.
- 2026-04-20 — FDA announces Year One progress on the roadmap and a follow-up report/resource layer.
- 2026-05-29 — FDA issues draft oncology guidance allowing elimination, reduction to one species, or evidence-based alternatives in certain nonclinical safety contexts; draft, not final.
- 2026-06-03 — FDA accepts the first in-silico DDT LOI into ISTAND, an AI-driven digital liver model for DILI prediction. Important distinction: accepted LOI, not qualification. This should be added to the public ledger in the next event-data edit.
- 2026-06-15 — NIH launches ORIVA to coordinate development, validation, scaling, and regulatory translation of human-based methods.
- 2026-07-20 — Complement-ARIE announces Phase 1 winners in the Reduction to Practice Challenge; these are development-stage projects, not validated or qualified tools.
- 2026-08-04 — NCI requires animal-model applications beginning with the Oct. 5, 2026 deadline to justify animal use and explain why alternatives are inferior, and requests a path for validation in a human model.
- 2026-08-06 / June 2026 guidance — FDA's QSP-MABEL initiative gives quantitative systems pharmacology a defined role in selecting minimum anticipated biological effect levels for first-in-human trials; the underlying Level 1 guidance remains draft and non-binding.
- 2026-08-27 — EPA announces actual use of 3D human airway tissue plus digital models for specified surfactant respiratory-risk assessment and a GHS mixtures equation for some pesticide oral-toxicity decisions.
- 2026-08-31 — FDA/ICMRA recombinant-endotoxin PACMP collaborative assessment already verified and retained as adoption/international convergence.

## Adoption/displacement layer

A second empirical object is now required in addition to the chronology. `data/regulatory_contexts.json` records defined contexts in which an authoritative source supports actual omission, replacement, reduction, or avoidance of a legacy animal study or animal-derived component.

Initial verified contexts include:

- FDA CDER applied regulatory example: hiPSC-derived cardiomyocyte studies following best practices can be used in place of an animal study otherwise conducted for QT/proarrhythmic-risk assessment in the specified anticancer context.
- EPA surfactant assessment: 3D human airway tissue plus existing digital models allow covered respiratory-risk decisions without ordering new animal studies.
- EPA pesticide acute-oral assessment: the GHS mixtures equation can avoid new animal testing for covered formulations; this is computational rather than human-biological.
- FDA final 2026 pyrogen/endotoxin guidance: recombinant reagents are accommodated as alternatives to horseshoe-crab-derived LAL reagents; code this as replacement of an animal-derived reagent, not an in vivo study.
- ICH S1B(R1)/FDA final 2022 guidance: an integrated weight-of-evidence pathway can support regulatory consultation on omitting the two-year rat carcinogenicity study in appropriate cases.
- FDA photosafety inventory: non-animal methods or clinical data are typically used for small-molecule photosafety assessment, an example of mature adoption that no longer looks like a new milestone.

Do not equate a NAM-supportive announcement, qualification pathway entry, corporate platform deployment, or validation study with displacement. For the stricter adoption measure, the record should support that a legacy study/component can actually be omitted, replaced, shortened, or avoided for a defined decision.

## Important decompositions

The initial seed ledger contained records that merged analytically distinct developments. The v2 migration has already split:

- NIH human-based research prioritization from FDA ISTAND permanence;
- monoclonal-antibody draft guidance from AIM-NASH qualification.

Remaining decomposition candidate:

- `2026-iamps-ring-trials`: IAMPS launch and specific ring-trial evidence should be separate. IAMPS is industry coordination/standards infrastructure; the Liver MPS Ring Trial is a distinct reproducibility exercise. Trial initiation is not evidence of successful reproducibility or regulatory acceptance.

Do not use combined records for quantitative counts of Commitment → Qualification → Adoption.

## Known high-priority source gaps and audits

Normalize or resolve the following before treating the corpus as audit-ready:

- FDA Modernization Act 2.0 statutory source;
- OHSU/ONPRC record: primary sources found verify a Feb. 9, 2026 board resolution authorizing negotiations over a possible sanctuary transition, but do not yet verify the current July 27 NAM-center-of-excellence formulation. Resolve or correct rather than silently retaining it.
- NIH reviewer EOI/public posting status;
- NIEHS/SCIOME contract award;
- IAMPS and Liver MPS Ring Trial results/outcomes, not merely launch;
- direct primary source for quantified animal-use displacement in industry programs;
- regulator/sponsor records of named drug-development programs where NAM evidence caused a specific animal study to be waived or omitted.

Primary sources have now been found for the FDA 2025 Roadmap, ISTAND permanence, AIM-NASH qualification, FDA Year One report, NCI Aug. 4 guidance, FDA QSP-MABEL draft guidance, EPA June 2 accepted-method expansion, EPA Aug. 27 regulatory-use announcement, EU roadmap, UK strategy, Complement-ARIE concept approval, ISSCR consortium, and multiple NIH implementation milestones. Promote/normalize those corresponding ledger records in the next structured data edit.

## Research Round 1 next searches

Search systematically rather than by news recall:

1. FDA adoption inventory: exhaustively review CDER's streamlined-nonclinical/NAM table and linked guidance for every explicit animal-study displacement context. Separate established historical adoption from genuinely new 2025–2026 changes.
2. Sponsor/regulator cases: locate named IND/NDA/BLA or development-program examples where animal studies were waived, omitted, shortened, or replaced because of NAM evidence.
3. EPA: search TSCA/FIFRA waiver decisions and accepted-method implementation records beyond the August 27 announcement; look for denominators or counts of avoided studies.
4. International: EMA, MHRA, PMDA, TGA, Health Canada, OECD/ECHA and ICMRA records for explicit replacement/reduction contexts and mutual-recognition effects.
5. Industry: cross-company ring-trial results, reproducibility outcomes, regulatory submissions using MPS/in silico/human-based approaches, and measured animal-study displacement. Corporate statements that a method is merely used internally are supporting evidence, not regulatory displacement.
6. Standards: OECD test guidelines, ISO standards, USP chapters, ICH guidance and other formal standards that materially enable substitution.
7. Baselines: identify public animal-use denominators that would let the roadmap report not only contexts but estimated or observed numbers of studies/animals displaced.

## Prospective program

`data/prospective.json` now contains an initial set of paper-derived and roadmap-derived milestones with observable success criteria. Major targets include:

- first reusable regulatory qualification of an MPS for a defined context of use;
- cross-site reproducibility demonstrated for priority human-based platforms;
- transparent regulator/funder animal-use baselines and displacement metrics;
- international convergence on reusable evidence packages;
- documented routine displacement of specified animal studies in multiple regulatory or development contexts;
- composable qualification in which validated modules can be combined without restarting evidence generation from zero.

Additional non-major targets cover reviewer expertise and species-matched benchmarking using existing animal and human datasets rather than commissioning new animal studies.

Prospective records must never be rendered as completed events. When achieved, add a separate observed event and link it.

## Manuscript implications

After Round 1 is materially complete, update the paper rather than merely adding events to the site. Likely changes:

- revise Supplementary Table S1 from the larger event corpus;
- derive a compact major-milestones figure from the event data;
- derive a prospective roadmap figure from `data/prospective.json`;
- add a small adoption/displacement table or figure from `data/regulatory_contexts.json`, with a stricter operational definition of adoption;
- add a methods/availability note and a link to the living resource;
- reassess whether event density and stage transitions support stronger empirical claims about the gap between commitment, qualification, and adoption;
- distinguish narrower human-based substitution from the broader NAM transition, which also includes computational methods and replacement of animal-derived reagents.

A promising operational definition for later manuscript development is: adoption is evidenced when an authoritative regulatory or development context permits a legacy animal study, component, or requirement to be omitted, replaced, shortened, or avoided for a defined decision. This should remain provisional until the corpus is larger.

## Quality bar

Primary sources whenever possible. Preserve draft/final, accepted/qualified, funded/awarded, collaboration/acceptance, validation/qualification/adoption, intent/implementation, human-based/broader-NAM, and in-vivo-study/animal-derived-component distinctions. Do not add an event simply because it is recent or rhetorically aligned with the project.
