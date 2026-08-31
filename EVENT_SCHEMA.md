# Event and prospective-milestone schema

## `data/events.json`

Top-level fields: `updated`, `schema_version`, `events`.

Each observed/foundation/emerging event should use:

```json
{
  "id": "stable-slug",
  "date": "YYYY-MM-DD",
  "display_date": "Reader-facing date",
  "temporal_status": "foundation | observed | emerging",
  "institution": "Institution or coordinated actors",
  "title": "Concise event title",
  "summary": "What happened",
  "why_it_matters": "Analytical significance",
  "stage": ["commitment", "qualification", "adoption"],
  "domain": ["tags"],
  "materiality": "high | medium | low",
  "major_milestone": true,
  "source_status": "primary_source_verified | manuscript_seed | needs_public_source | secondary_source_only",
  "source_url": "https://... or null",
  "manuscript_ref": "[n] or null",
  "manuscript_impacts": [
    {"section":"III.D","claim":"short claim label","effect":"strengthens"}
  ]
}
```

`stage` may contain supplemental process tags where useful, but at least one of the core stages should be used whenever the event can be classified as commitment, qualification, or adoption.

`major_milestone` controls the compact/default roadmap view. It is independent of `materiality`: a high-materiality specialist development may still be omitted from the major-milestones view if it does not improve the compact explanatory history.

`temporal_status: emerging` is reserved for processes with concrete institutional evidence whose outcome is not complete. The summary must state the incomplete stage explicitly.

## `data/prospective.json`

Top-level fields: `updated`, `schema_version`, `milestones`.

```json
{
  "id": "stable-slug",
  "target_date": "2028-12-31",
  "display_date": "By 2028",
  "title": "Milestone",
  "summary": "What should be achieved",
  "rationale": "Why it matters to the transition",
  "stage": ["qualification"],
  "domain": ["mps", "regulatory"],
  "major_milestone": true,
  "type": "forecast | recommendation | catalytic_proposal",
  "status": "watch | in_progress | achieved | stalled | missed | superseded",
  "actors": ["FDA", "NIH", "industry consortia"],
  "success_criteria": ["Observable criterion 1", "Observable criterion 2"],
  "dependencies": ["Optional dependency"],
  "paper_origin": "Table 3 | section | new roadmap proposal",
  "linked_event_ids": []
}
```

Prospective records are hypotheses, recommendations, or programmatic targets, not facts. Achievement requires a separately sourced observed record in `events.json`.

## Stable IDs and edits

IDs should remain stable after publication. Correcting a date, stage, source, or wording should not create a new ID. A genuinely distinct institutional action receives its own record even when it occurs on the same day or is announced in the same press release.

Combined records should be avoided when they merge distinct institutions or distinct transition stages. This is especially important for quantitative analyses of Commitment → Qualification → Adoption.
