# Modern Synthesis — New Biology

A living, source-linked roadmap for the transition to human-based biomedicine and a research companion to *From Commitment to Adoption: The Path Ahead for New Biology*.

## What this repository does

The project now has two connected layers:

- a **historical and emerging evidence corpus** documenting what has actually happened;
- a **prospective roadmap** specifying observable milestones that could mark, accelerate, or test the next stages of the transition.

The public site defaults to **major milestones only** so the history remains readable. Clear that checkbox to expose the larger research corpus.

Observed developments are interpreted through three analytically different forms of progress:

- **Commitment** — law, policy, funding, organizational direction, or review structures change what can be proposed and supported.
- **Qualification** — evidence, standards, reproducibility, and regulatory reasoning make scientific confidence explicit and reusable for a defined context of use.
- **Adoption** — human-relevant methods enter real regulatory, research, funding, manufacturing, or industrial decisions and begin to displace legacy practice.

The roadmap also distinguishes **foundations**, **observed events**, **emerging processes**, and **prospective milestones**. Prospective records are visibly separate and must never be treated as completed facts.

## Data

`data/events.json` is the source of truth for historical, observed, and emerging evidence. It now includes fields for temporal status, analytical significance, a `major_milestone` flag, source status, and manuscript impact.

`data/prospective.json` stores forward-looking targets. Each prospective milestone can specify a target date, type (`forecast`, `recommendation`, or `catalytic_proposal`), actors, observable success criteria, dependencies, current status, and links to related observed events.

See `EVENT_SCHEMA.md` for the complete field definitions.

## Research rules

`RESEARCH_PROTOCOL.md` defines the inclusion rule, source hierarchy, stage discipline, major-milestone judgment, and research rounds. The central rule is to preserve distinctions such as accepted vs qualified, draft vs final, funded vs implemented, validation vs qualification, and collaboration vs regulatory acceptance.

The corpus is intended to become substantially larger than the paper chronology. A record belongs when it materially improves explanation of the transition or provides evidence relevant to the paper's claims; it does not need to fit in a static manuscript figure.

## Research program

The expansion is organized in rounds:

1. **2022-present transition** — regulators, funders, qualification programs, standards, and substantive industry adoption.
2. **2010-2021 enabling infrastructure** — legal changes, validation systems, accepted alternatives, MPS and computational precedents.
3. **Earlier foundations** — selected older landmarks needed to understand the trajectory.
4. **Industry and displacement audit** — reproducibility, regulatory submissions, platform adoption, investments, and documented animal-study displacement.

`RESEARCH_HANDOFF.md` records the current coordination state, completed verification, unresolved source gaps, and next searches so another researcher or agent can continue without reconstructing prior work.

## Paper integration

`PAPER_INTEGRATION.md` describes how the living corpus can feed the manuscript. The intended structure is:

- a compact **major transition milestones** figure derived from `events.json`;
- a compact **prospective roadmap** figure derived from `prospective.json`;
- a larger static supplementary chronology;
- a link from the paper to the interactive, continuously updated evidence record;
- a tagged/archive snapshot at manuscript submission so the evidentiary state used in the paper remains reproducible.

The roadmap can eventually support empirical questions the static chronology cannot answer, including whether commitment is accumulating faster than qualification/adoption, whether qualification infrastructure precedes adoption, how international convergence develops, and whether formal commitments translate into measurable displacement of animal studies.

## Source status

`source_status` is deliberately explicit:

- `primary_source_verified` — direct primary source checked;
- `manuscript_seed` — supported by the manuscript/reference layer but direct source normalization remains;
- `needs_public_source` — working evidence exists but a stable public source still needs confirmation;
- `secondary_source_only` — temporary state requiring upgrade or removal.

## Updating the roadmap

Verify against a primary source where possible, apply the inclusion rule, classify the event without inflating its regulatory stage, update the appropriate data file, and record manuscript implications when relevant. GitHub Pages redeploys automatically after changes to `main`.

The site is deliberately data-first so public views, manuscript figures, supplementary tables, and future analyses can all be generated from the same evidence base rather than maintained independently.

## Local preview

Because the page loads JSON, serve the repository with a static web server rather than opening `index.html` directly:

```bash
python -m http.server 8000
```

Then open `http://localhost:8000`.
