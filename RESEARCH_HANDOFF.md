# Research handoff

Updated: 2026-08-31

## Current objective

Build the repository into a living research product supporting the paper *From Commitment to Adoption: The Path Ahead for New Biology*. The roadmap should maintain a broader evidence corpus than the paper, preserve regulatory-stage distinctions, expose a compact major-milestones view, and maintain a separate prospective program of observable future milestones.

## Current architecture

- `data/events.json` — observed/foundation/emerging evidence ledger.
- `data/prospective.json` — forward-looking targets, recommendations, forecasts, and catalytic proposals.
- `RESEARCH_PROTOCOL.md` — inclusion/exclusion, evidence hierarchy, stage discipline, and research rounds.
- `EVENT_SCHEMA.md` — field definitions and migration rules.
- `PAPER_INTEGRATION.md` — plan for manuscript figures, supplementary chronology, linking, and publication freeze.
- `RESEARCH_HANDOFF.md` — coordination state for future agents/researchers.

## Research Round 1: 2022-present

Status: **in progress**.

Primary-source verification completed in this round for the following additions or decompositions:

- 2024-09-24 — FDA accepts the first organ-on-chip LOI into ISTAND, a human Liver-Chip intended to assess DILI risk for certain drug candidates. Important distinction: accepted LOI, not qualification.
- 2025-04-03 — NIH Common Fund/FNIH launch the Complement-ARIE Validation and Qualification Network partnership.
- 2025-09-30 — Complement-ARIE launches the $7M Reduction to Practice Challenge with staged reproducibility and VQN-delivery milestones.
- 2025-12 — FDA draft guidance on streamlined nonclinical safety studies for monoclonal antibodies; draft, not final.
- 2026-01-22 — EPA recommits to eliminating mammalian testing by 2035.
- 2026-03-18 — FDA issues draft general NAM guidance providing a validation framework for NAMs used in drug-development submissions; draft, not final.
- 2026-03-18 — NIH announces more than $150M in first Complement-ARIE awards.
- 2026-05-29 — FDA issues draft oncology guidance allowing elimination, reduction to one species, or evidence-based alternatives in certain nonclinical safety contexts; draft, not final.
- 2026-06-15 — NIH launches ORIVA to coordinate development, validation, scaling, and regulatory translation of human-based methods.
- 2026-07-20 — Complement-ARIE announces Phase 1 winners in the Reduction to Practice Challenge; these are development-stage projects, not validated or qualified tools.
- 2026-08-31 — FDA/ICMRA recombinant-endotoxin PACMP collaborative assessment already verified and retained as adoption/international convergence.

## Important decompositions

The initial seed ledger contains several records that merge analytically distinct developments. These should be split during the v2 migration:

- `2025-07-istand-permanent`: NIH human-based research prioritization and FDA ISTAND permanence are separate institutional actions.
- `2025-12-fda-mab-aim-mash`: mAb draft guidance and AIM-MASH qualification are separate stages and should be separate records.
- `2026-iamps-ring-trials`: IAMPS launch and specific ring-trial evidence should be separate if primary sources can be verified independently.

Do not use combined records for quantitative counts of Commitment → Qualification → Adoption.

## Known high-priority source gaps

Normalize primary sources for the existing manuscript-seeded events before treating the corpus as audit-ready:

- FDA Modernization Act 2.0 statutory source;
- Complement-ARIE 2024 concept approval;
- FDA 2025 Roadmap;
- FDA ISTAND permanence and program statistics;
- UK Replacing Animals in Science strategy;
- AIM-MASH qualification record and exact pathway;
- FDA Year One report and accepted-methods resource;
- EU chemical-safety roadmap;
- OHSU/ONPRC board resolution;
- NIH reviewer EOI/public posting status;
- EPA June 2, 2026 NAM-list additions;
- NIEHS/SCIOME contract award;
- EPA Aug 27, 2026 regulatory-use decisions;
- ISSCR consortium;
- FDA Aug 6, 2026 QSP/MABEL material;
- NCI Aug 4, 2026 application guidance;
- IAMPS and ring-trial records.

## Research Round 1 next searches

Search systematically rather than by news recall:

1. FDA: NAM hub, guidance documents, ISTAND/BQP qualification records, device-recognition databases, CBER/manufacturing alternatives, oncology, pharmacology/toxicology, QSP/MABEL.
2. NIH: ORIVA, Complement-ARIE funded research, VQN pilots, reviewer/review-policy changes, NCI/NIEHS/NCATS implementation.
3. EPA: TSCA/FIFRA accepted-method lists, waivers, actual decision use, baselines/metrics, guidance/CFR flexibility.
4. Europe/UK: European Commission roadmap implementation, EMA/ICMRA actions, ECHA/OECD test-guideline changes, UK roadmap milestones, NC3Rs validation/adoption infrastructure.
5. Industry: documented regulatory submissions using MPS/in silico/human-based approaches, cross-company ring trials, reproducibility studies, CRO/pharma platform adoption, dedicated facilities, and measured animal-study displacement.
6. Standards: OECD test guidelines, ISO standards, USP chapters, and other formal standards that materially enable regulatory use.

## Prospective program

`data/prospective.json` should begin with paper-derived milestones but improve them by adding observable success criteria. Candidate major milestones include:

- first reusable regulatory qualification of an MPS for a defined context of use;
- public validation/qualification criteria that can be applied consistently across NAM classes;
- cross-site reproducibility demonstrated for priority human-based platforms;
- species-matched benchmarking using existing animal and human datasets rather than new animal studies;
- transparent regulator/funder animal-use baselines and displacement metrics;
- routine reviewer access to human-based-method expertise;
- international convergence on reusable evidence packages;
- documented routine displacement of specified animal studies in multiple regulatory or development contexts;
- composable qualification in which validated modules can be combined without restarting evidence generation from zero.

Prospective records must never be rendered as completed events. When achieved, add a separate observed event and link it.

## Manuscript implications

After Round 1 is materially complete, update the paper rather than merely adding events to the site. Likely changes:

- revise Supplementary Table S1 from the larger corpus;
- derive a compact major-milestones figure from the data;
- derive a prospective roadmap figure from `data/prospective.json`;
- add a methods/availability note and a link to the living resource;
- reassess whether event density and stage transitions support stronger empirical claims about the gap between commitment, qualification, and adoption.

## Quality bar

Primary sources whenever possible. Preserve draft/final, accepted/qualified, funded/awarded, collaboration/acceptance, validation/qualification/adoption, and intent/implementation distinctions. Do not add an event simply because it is recent or rhetorically aligned with the project.
