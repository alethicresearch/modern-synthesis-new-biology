# Paper integration plan

## Role of the web resource

The roadmap should become a living empirical companion to *From Commitment to Adoption: The Path Ahead for New Biology*. The paper remains the stable scholarly argument; the site maintains a larger, continuously updated evidence corpus and prospective program.

The manuscript should eventually link to a dated release of the roadmap as well as the live site. At submission, archive a versioned snapshot so reviewers can inspect the exact evidence state used for the paper while the public resource continues to evolve.

## Proposed paper figures

### Figure A — Major transition milestones

A compact static figure derived from `data/events.json`, probably 15–25 `major_milestone: true` events. Organize by time and Commitment → Qualification → Adoption rather than reproducing the entire interactive timeline.

Purpose: show that the transition is not a single policy shift but a sequence in which commitments are increasingly followed by qualification infrastructure and real decision-level adoption.

The figure caption should link to the full interactive chronology.

### Figure B — Prospective roadmap

A compact 2027–2030 roadmap derived from `data/prospective.json`. Show major milestones only, grouped by qualification infrastructure, regulatory adoption, evidence/reproducibility, international convergence, and measurable displacement.

Purpose: convert the paper from description alone into an explicit program of observable next steps.

## Supplementary material

Supplementary Table S1 can remain a larger static chronology than Figure A, but it should be generated from the same event ledger. The web corpus may be larger still.

A supplementary prospective table can expose success criteria and responsible actors for the forward milestones if journal space permits.

## Manuscript claims that the corpus can test

The expanded data can support or qualify claims about:

- whether commitment is accumulating faster than qualification or adoption;
- whether qualification infrastructure predicts subsequent adoption;
- which domains move fastest from validation to regulatory use;
- whether international convergence follows reusable qualification evidence;
- whether adoption is clustered in narrow contexts or becoming generalizable;
- whether formal commitments are associated with measurable animal-use displacement;
- whether the transition is accelerating over time.

These should only become empirical claims after the corpus is sufficiently complete and inclusion rules are stable.

## Near-term manuscript updates after Research Round 1

1. Update Supplementary Table S1 from the expanded 2022–present corpus.
2. Separate currently combined events where they confound institutional stage.
3. Add a short methods note explaining the living roadmap, inclusion rules, primary-source verification, and dated archival snapshot.
4. Add a link in the main text/caption to the interactive resource.
5. Reassess Table 3 using `data/prospective.json`; convert vague aspirations into observable success criteria and responsible actors where possible.
6. Consider whether the expanded chronology supports a stronger argument about reusable qualification infrastructure and compounding progress.

## Freeze protocol for publication

At manuscript submission:

- tag a release such as `paper-submission-v1`;
- export the major-milestones figure and prospective-roadmap figure from that release;
- record the event count, inclusion period, and source-verification status;
- archive the release in a persistent repository/DOI service if available;
- continue the live roadmap separately without changing the evidentiary state of the submitted manuscript.
