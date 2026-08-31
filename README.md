# Modern Synthesis — New Biology

A living, source-linked roadmap for material developments in the transition to human-based biomedicine.

## What this repository does

The site separates three analytically different forms of progress:

- **Commitment** — law, policy, funding, organizational direction, or review structures change what can be proposed and supported.
- **Qualification** — evidence, standards, reproducibility, and regulatory reasoning make scientific confidence explicit and reusable for a defined context of use.
- **Adoption** — human-relevant methods enter real regulatory, research, funding, or industrial decisions and begin to displace legacy practice.

The current event ledger is seeded from the chronology in *From Commitment to Adoption: The Path Ahead for New Biology* and is intended to become the shared source for the manuscript chronology, interactive figures, and public roadmap.

## Data model

`data/events.json` is the source of truth. Each event contains:

- stable `id`
- ISO `date` plus reader-facing `display_date`
- `institution`, `title`, and concise `summary`
- one or more `stage` values
- topical `domain` tags
- `materiality` (`high`, `medium`, or `low`)
- `source_status`
- `manuscript_ref`
- `source_url` when a primary source has been directly verified

`source_status` is deliberately explicit. Existing manuscript milestones may begin as `manuscript_seed`; material updates should be promoted to `primary_source_verified` only after the underlying agency, funder, standards body, company, consortium, publication, or regulatory record has been checked.

## Material-update rule

Add an event only when it could reasonably change, invalidate, strengthen, or require updating a substantive claim in the manuscript or materially change the inferred trajectory of the field. Routine press coverage, commentary, duplicate announcements, and restatements of existing policy do not belong in the ledger.

Priority monitoring areas include FDA ISTAND and other qualification decisions; NAM guidance; NIH ORIVA and review-policy implementation; Complement-ARIE; animal-use baselines; reviewer expertise; monoclonal-antibody and oncology nonclinical guidance; device-method recognition; formal regulatory and funding actions; and substantive industry evidence of qualification, reproducibility, platform validation, regulatory use, adoption, investment, or animal-study displacement.

## Updating the roadmap

1. Verify the development against a primary source where possible.
2. Decide whether it is material under the rule above.
3. Add or amend the event in `data/events.json`.
4. If it affects the manuscript, record the exact affected section/table/claim in the commit or PR description and update the manuscript separately.
5. GitHub Pages redeploys automatically after changes to `main`.

The roadmap is intentionally data-first so future static manuscript figures can be generated from the same event ledger rather than maintained independently.

## Local preview

Because the page loads JSON, serve the repository with any static web server rather than opening `index.html` directly. For example:

```bash
python -m http.server 8000
```

Then open `http://localhost:8000`.
