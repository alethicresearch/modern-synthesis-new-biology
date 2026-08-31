# Research protocol

## Purpose

This repository is a living evidence base for the transition toward human-based biomedicine. It supports the public roadmap, manuscript analysis, static figures, and a prospective program of milestones that can be monitored and, where appropriate, catalyzed.

The repository deliberately distinguishes a complete-enough research corpus from a curated landmark view. An event can be worth recording without being a major milestone.

## Analytical framework

Observed developments are coded by their role in the transition:

- **Commitment**: law, policy, funding, institutional direction, or review structures change what can be proposed, supported, or required.
- **Qualification**: validation, standards, reproducibility, context-of-use evidence, or formal regulatory reasoning makes confidence explicit and reusable.
- **Adoption**: a method enters a real regulatory, research, funding, manufacturing, or industrial decision and begins to change legacy practice.

Additional tags such as `validation-infrastructure`, `review-infrastructure`, `international-convergence`, and `research-infrastructure` can supplement but do not replace the three core stages.

## Temporal classes

The project separates four kinds of records:

1. **Foundation** — earlier developments necessary to understand how the present transition became possible.
2. **Observed** — completed, documented developments.
3. **Emerging** — active processes with concrete evidence but no completed outcome yet; these must never be described as completed adoption.
4. **Prospective milestone** — an explicitly forward-looking target, prediction, recommendation, or catalytic proposal. These are stored separately in `data/prospective.json` so they cannot be mistaken for historical facts.

## Inclusion rule

Record an observed event when at least one of the following is true:

- it changes legal or regulatory possibility;
- it establishes or materially changes a funding or institutional program;
- it enters, advances, or completes a recognized validation or qualification process;
- it establishes a reusable standard, benchmark, reporting framework, or cross-site validation result;
- it documents actual regulatory, research, manufacturing, or industry use;
- it documents measurable displacement or reduction of animal studies or animal-derived materials;
- it materially changes international convergence;
- it is an important precursor needed to explain a later milestone.

Exclude routine publicity, conference announcements without a substantive action, duplicate announcements, commentary, aspirational statements without institutional action, and minor updates that do not alter the trajectory or evidence base.

## Major milestone flag

`major_milestone: true` is a display and analytical judgment, not a truth-status field. It means the event is sufficiently consequential to belong in a compact overview of the transition. The full corpus remains available through the site.

Major milestones generally satisfy several of these conditions: broad scope, formal authority, downstream consequences, cross-domain importance, evidence of qualification/adoption, or strong explanatory value for the historical trajectory.

## Source hierarchy

Prefer, in order:

1. official regulator, government, funder, standards body, or court/legislative record;
2. official company or consortium documentation for industry actions;
3. peer-reviewed primary publication for scientific validation/reproducibility claims;
4. credible secondary reporting only when a primary record is unavailable.

`source_status` values:

- `primary_source_verified` — the linked primary source has been checked directly;
- `manuscript_seed` — the event is supported by the manuscript/reference layer but its direct public source has not yet been normalized in the ledger;
- `needs_public_source` — evidence exists in working materials but a stable public source still needs confirmation;
- `secondary_source_only` — temporarily retained with only a secondary source; should be upgraded or removed.

## Regulatory-stage discipline

Never collapse the following distinctions:

- accepted into a qualification program ≠ qualified;
- draft guidance ≠ final guidance;
- collaboration ≠ regulatory acceptance;
- validation study ≠ qualification;
- qualification ≠ routine adoption;
- funding announcement ≠ award;
- award ≠ demonstrated implementation;
- intention or target ≠ implementation;
- a coordinated multinational review ≠ a single supranational regulatory decision.

## Research rounds

The corpus should be expanded in explicit rounds:

- **R1 — 2022-present transition:** FDA, NIH, EPA, EU, UK, OECD/standards, other regulators, major qualification programs, and substantive industry evidence.
- **R2 — 2010-2021 enabling infrastructure:** legal changes, accepted alternatives, validation systems, MPS development, computational precedents, and major standards.
- **R3 — earlier foundations:** selected landmarks such as the 3Rs, major toxicology paradigm shifts, and foundational validation/alternative-method infrastructure.
- **R4 — industry and displacement audit:** cross-industry ring trials, platform reproducibility, regulatory submissions, dedicated programs/facilities, investments, and documented animal-study displacement.

Each round should leave a handoff note describing searches completed, records added, unresolved candidates, and source gaps.

## Prospective milestones

Forward-looking records require:

- `target_date` or target window;
- `type`: `forecast`, `recommendation`, or `catalytic_proposal`;
- responsible or plausible `actors`;
- `success_criteria` stated in observable terms;
- `rationale` explaining why the milestone matters;
- dependencies when known;
- status such as `watch`, `in_progress`, `achieved`, `stalled`, `missed`, or `superseded`.

When a prospective milestone is achieved, create a new observed event with primary-source evidence and link the two records. Do not rewrite the prospective record as if it had always been historical.

## Manuscript linkage

Events can carry `manuscript_impacts`, an array of objects with `section`, `claim`, and `effect` (`supports`, `strengthens`, `qualifies`, `contradicts`, or `requires_update`). The website may evolve continuously, while manuscript changes remain deliberate and versioned.

## Editorial standard

Short summaries should answer: **what happened, at what institutional stage, and why does it matter?** Avoid advocacy language in factual records. Prospective proposals can be normative, but must be visibly marked as such.
