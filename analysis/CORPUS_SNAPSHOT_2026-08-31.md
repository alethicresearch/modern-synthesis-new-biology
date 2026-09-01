# Corpus Snapshot — 2026-08-31

## Scope and counting rules

This snapshot is a first descriptive analysis of the living corpus supporting *From Commitment to Adoption: The Path Ahead for New Biology*. It is not yet the manuscript results section.

Counts use the current verified/source-audited files. Event-stage tags are **not mutually exclusive**: one event may mark commitment plus qualification or commitment plus adoption. Named product adoption and regulatory contexts are analyzed separately so event density is not mistaken for actual animal-study displacement.

## Contemporary event corpus

Current `data/events.json` contains **36 events**.

### Overlapping Commitment → Qualification → Adoption tags

- Commitment: **15** events
- Qualification: **18** events
- Adoption: **12** events

Secondary infrastructure tags:

- Validation infrastructure: **6** events
- Review infrastructure: **5** events

Major milestones: **25 of 36** events are currently coded `major_milestone: true`.

### Main-stage combinations

Ignoring secondary tags such as review infrastructure, validation infrastructure, guidance and international convergence:

- Commitment only: **7**
- Qualification only: **13**
- Adoption only: **5**
- Commitment + Qualification: **3**
- Commitment + Adoption: **5**
- Qualification + Adoption: **2**
- Review-infrastructure only / no main-stage tag: **1**

No current event is simultaneously tagged Commitment + Qualification + Adoption.

### Initial interpretation

The corpus is already **qualification-heavy**. There are more qualification-tagged events than commitment-tagged or adoption-tagged events, reflecting the rapid construction of validation networks, permanent qualification pathways, standards/reproducibility programs and staged candidate pipelines.

However, qualification activity should not be confused with completed reusable qualification. FDA's own Feb. 2026 metrics reported 16 ISTAND projects in development but **zero completed ISTAND qualifications** as of Jan. 1, 2026. AIM-NASH is a genuine formal qualification, but it came through the Biomarker Qualification Program rather than ISTAND.

The adoption count also overstates strict displacement if read naively. Seven of the twelve adoption-tagged events are combined with commitment or qualification, often because they are draft guidance, nonbinding regulator thinking, expanding accepted-method lists or infrastructure that has begun to affect decisions. Only five events are currently adoption-only at the event level.

This supports a central methodological rule: **event-stage counts are indicators of transition activity, not direct measures of animal-study displacement.**

## Named regulator-verified adoption

Current `data/named_regulatory_adoption.json` contains **6 confirmed named product cases**:

- Kimmtrak
- Carvykti
- Kymriah
- Veopoz
- Kalydeco
- Galafold

Of these:

- Strict animal-displacement flag: **3** — Kimmtrak, Carvykti, Kymriah
- NAM regulatory reliance without a strict animal-displacement flag: **1** — Veopoz
- NAM substitution for additional clinical evidence rather than animal evidence: **2** — Kalydeco, Galafold

The strict cases are disproportionately associated with **species relevance** and advanced/human-specific modalities. Kimmtrak is now corroborated across FDA, EMA, TGA and Health Canada. Carvykti is supported by EMA with PMDA corroboration of species irrelevance. Kymriah provides a second directly verified CAR-T example from EMA.

This concentration suggests a testable hypothesis: **one early route to animal-study displacement is not the arrival of a universally superior replacement assay, but recognition that a conventional animal model is scientifically non-relevant for a human-specific product, followed by a tailored evidence package.**

That hypothesis should be tested against the pending Yescarta, Breyanzi, Abecma and Tecartus audits and against non-CAR-T modalities before it is elevated into a manuscript claim.

## Regulatory context-of-use corpus

Current `data/regulatory_contexts.json` contains **15 defined regulatory contexts**.

By regulatory maturity:

- Applied/current/final/established practice: **10**
- Draft-guidance contexts: **3**
- PMDA Early Consideration, explicitly nonbinding: **2**

By relationship to human biology:

- Explicitly human-based: **3**
- Mixed/weight-of-evidence, potentially including human-based evidence: **6**
- Broader non-animal/computational/omission contexts not specifically human-based: **6**

This confirms that the transition is not synonymous with “human organ models.” Regulatory displacement currently occurs through multiple mechanisms: human cell/tissue systems, computational methods, weight of evidence, accumulated prior knowledge, scientifically justified omission, and replacement of animal-derived reagents.

## Quantified displacement

The strongest realized public denominators still come from EPA rather than medicines regulators.

- FY2023 EPA branch-level acute-toxicity decisions: **1,122 studies saved** and **9,415–18,026 animals reduced**, with published study- and regulator-cost savings.
- EPA acute-dermal waivers FY2018–FY2023: **262 waivers** and **2,620–7,860 animals reduced**.
- FDA/CDER/OND estimate for an omitted two-year rat carcinogenicity study under ICH S1B(R1): **more than 400 animals per omitted study**, depending on design.

These figures should **not be summed** into one displacement total because the EPA categories can overlap and the FDA figure is a per-case conversion factor rather than a national observed total.

EPA's public metrics page currently stops at FY2023. The absence of FY2024/FY2025 data must remain explicit.

## Routinization as an emerging adoption variable

Two distinct patterns suggest that routinization may be measurable:

1. **EPA:** acute-toxicity alternative/waiver decisions migrate from specialist CATSAC review toward ordinary branch-level determination.
2. **UK/MHRA:** selected case-by-case non-animal submissions are followed by an explicit regulator-wide assessment approach and a planned dedicated advance-review mechanism for animal-free Module 4 packages.

A provisional sequence to test is:

**exceptional case → repeated precedent → explicit regulator approach → dedicated review pathway → routine review → harmonized/standardized context**

This should remain a hypothesis rather than a universal model until more domains are coded.

## The strongest empirical asymmetry so far

The evidence base is becoming much easier to populate for **commitment and qualification infrastructure** than for **named adoption and realized displacement**.

That asymmetry has at least two possible explanations that future analysis must distinguish:

1. adoption is genuinely less common than commitment/qualification; and/or
2. adoption is systematically less visible because it is buried in product review documents, sponsor-regulator interactions, waivers and routine review decisions rather than published as structured public data.

The existing corpus supports the second explanation as a real transparency problem: FDA, EMA, TGA, Health Canada and PMDA records allow named adoption to be reconstructed case by case, while EPA demonstrates that realized animal/study denominators can be published directly.

A later manuscript claim may therefore be stronger if framed as a **measurement and infrastructure gap** rather than simply “there is little adoption.”

## What would materially change the picture

Before turning this into manuscript results, the next evidence threshold should be:

- visually verify the remaining high-confidence CAR-T assessment reports;
- expand named-product audits beyond CAR-T/human-specific biologics;
- add named MHRA/PMDA/Health Canada/TGA cases where possible;
- identify ring-trial outcomes rather than trial launches;
- obtain any additional realized displacement denominators;
- finish source normalization/removal of remaining manuscript-seed records; and
- then rerun this snapshot from a reproducible summary script rather than hand-counting.

At that point the manuscript can test, rather than assume, whether the transition is bottlenecked primarily at qualification, at adoption, or at public visibility of adoption.
