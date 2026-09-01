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

`source_url` remains the backward-compatible canonical locator carried by the event ledger. When an event has several useful sources, or when source verification needs to be recorded separately from the event claim, use the verified source registry described below.

`stage` may contain supplemental process tags where useful, but at least one of the core stages should be used whenever the event can be classified as commitment, qualification, or adoption.

`major_milestone` controls the compact/default roadmap view. It is independent of `materiality`: a high-materiality specialist development may still be omitted from the major-milestones view if it does not improve the compact explanatory history.

`temporal_status: emerging` is reserved for processes with concrete institutional evidence whose outcome is not complete. The summary must state the incomplete stage explicitly.

## `data/source_registry.json`

The source registry is a provenance overlay keyed by stable event ID. It supports multiple well-labeled sources without duplicating event content and allows source verification to be strengthened independently of the historical ledger.

A source-registry record may use:

```json
{
  "source_status": "primary_source_verified",
  "canonical_source_url": "https://...",
  "sources": [
    {
      "label": "Reader-facing source description",
      "short_label": "Compact label",
      "url": "https://...",
      "type": "enacted_law | bill_text | agency_report | agency_announcement | draft_guidance | federal_award_notice | ...",
      "role": "legal_basis | primary_document | announcement | implementation_context | award_record | corroboration | ...",
      "verified_by": "official-government-text | official-agency-page | ...",
      "checked_at": "YYYY-MM-DD"
    }
  ]
}
```

Source ordering is intentional. Put the source that most directly establishes the event first; follow it with useful primary context, implementation material, or clearly labeled corroboration. A search-results page is never a source locator. Prefer enacted law, official bill text, regulator or agency documents, official award records, and regulator-hosted product reviews over secondary accounts.

`canonical_source_url` may update the public canonical locator while preserving the original ledger entry. `sources` supplies the ordered reader-facing source set. Existing single-source records remain valid through `source_url`.

If a specific claim does not yet have a public locator, do not substitute a related source that establishes only a broader proposition. An intentionally retained author-confirmed or manuscript-seeded record may remain in the public chronology with `source_status: "needs_public_source"` and a `source_note` explaining its provenance and that the public locator is pending. Such a record must not be labeled as independently primary-source verified.

Where the underlying claim itself remains uncertain, rather than merely lacking a public locator, the overlay may instead use:

```json
{
  "exclude_from_public": true,
  "source_status": "needs_public_source",
  "reason": "Why the specific claim remains insufficiently established"
}
```

This withholds the record from public rendering without deleting the research-side record. Exclusion is therefore a claim-confidence decision, not an automatic consequence of a missing public URL.

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
