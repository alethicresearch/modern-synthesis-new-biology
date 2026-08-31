# Research Round 1 — industry and standards sweep

Date: 2026-08-31
Status: source-audited working record; not all items belong in the major-milestone layer.

## Industry coordination

### IAMPS launch — 2026-02-10
Primary source: https://iamps.eu/industry-leaders-announce-worlds-first-microphysiological-systems-industry-association-iamps/

Nine European MPS providers — AlveoliX, BiomimX, chiron, Dynamic42, InSphero, MIMETAS, NETRI, React4Life, and TissUse — announced the Industry Alliance for Microphysiological Systems (IAMPS), described as the first industry association dedicated to MPS providers.

Classification: observed; validation/standards/regulatory-engagement infrastructure.
Materiality: medium; not a major milestone by itself.
Why it matters: creates a collective industry interface for standardization, qualification frameworks, data-sharing, and regulatory engagement. It should be separated from the existing combined `2026-iamps-ring-trials` record because an association launch and evidence from a ring trial are analytically distinct.

## Cross-company reproducibility / ring-trial evidence

### Liver MPS Ring Trial — initiated 2024-05-29
Primary industry source: https://www.ucb.com/innovation/magazine/detail/article/ucb-s-commitment-to-innovation-in-drug-development
Additional provider source: https://www.tissuse.com/en/news/press-releases/

UCB describes a cross-pharma Liver Ring Trial involving UCB, Sanofi, AstraZeneca, Boehringer Ingelheim, Servier, and Orion Pharma, using TissUse's liver MPS and esqLABS computational modeling. The stated aim is to assess robustness/reproducibility across laboratories and support confidence for decision-making and eventual regulatory submission. UCB states the effort is supported/guided by EMA and ECVAM.

Classification: observed; qualification / reproducibility infrastructure.
Materiality: high as a qualification-pipeline event, but not yet evidence of successful reproducibility or regulatory adoption.
Critical distinction: trial launch ≠ demonstrated cross-site reproducibility ≠ regulatory qualification.
Why it matters: this is exactly the kind of cross-company evidence-generation mechanism the manuscript argues is needed. It should be represented as its own event rather than merged with IAMPS.

Next action: search for completed/results publication from the ring trial. Do not upgrade materiality to a demonstrated reproducibility milestone until results are public.

## Industry use context

### IQ MPS industry collaboration
Primary organizational source: https://www.iqmps.org/about-us

The IQ Microphysiological Systems Affiliate is a cross-pharma collaboration explicitly oriented toward implementation and qualification of MPS models in drug discovery/development. This is important background infrastructure but predates the contemporary transition and is better treated as a foundation unless a specific 2022–2026 action is identified.

The 2024 IQ MPS industry survey/commentary provides evidence that pharmaceutical companies are using MPS, but it is a publication-level evidence source rather than a singular institutional event. It may be valuable for a future analytical layer on prevalence of industry use rather than as a timeline milestone.

## Standards infrastructure

### ISO/TC 276/SC 2 — Microphysiological systems and Organ-on-Chip
Primary source: https://committee.iso.org/cms/live/live/en/sites/isoorg/contents/data/committee/10/71/10713488.html

ISO now has a dedicated subcommittee for MPS/OoC with working groups on terminology, biological components, experimental design/data processing/integration, and engineering. IAMPS is listed as a Category A liaison organization; the European Commission participates as a Category C liaison.

Classification: standards infrastructure / emerging.
Materiality: potentially high for the qualification thesis, but a standards committee is not equivalent to a published standard.
Why it matters: the existence of dedicated international standardization machinery is evidence that MPS is moving from bespoke platform development toward a field with shared engineering, biological, terminology, and data expectations.

Next action: identify the establishment date of ISO/TC 276/SC 2 and any published or balloted standards/projects. A committee-creation event may warrant inclusion if date and scope are verified; individual published standards would be stronger milestones.

## Regulatory-industry standards convergence signal

### FDA/HESI/Safety Pharmacology Society workshop on ICH S7A and NAMs — 2026-07-28
Primary source: https://www.fda.gov/drugs/news-events-human-drugs/fdahealth-and-environmental-sciences-institutesafety-pharmacology-society-hybrid-workshop-ich-s7a

FDA, HESI, and SPS convened a workshop intended to develop a shared scientific rationale and stakeholder consensus for potential revision of ICH S7A to incorporate NAMs in safety pharmacology. FDA explicitly states the workshop itself does not change ICH guidance.

Classification: emerging / standards-policy development.
Materiality: medium; not a major milestone yet.
Critical distinction: workshop/consensus-building ≠ ICH guideline revision.
Why it matters: it is an early signal that NAM integration is reaching international harmonized safety-pharmacology standards rather than remaining confined to national guidance.

## FDA regulatory-use inventory

### CDER Streamlined Nonclinical Studies and Acceptable NAMs inventory — 2026
Primary source: https://www.fda.gov/about-fda/center-drug-evaluation-and-research-cder/cder-streamlined-nonclinical-studies-and-acceptable-new-approach-methodologies-nams

FDA provides a searchable inventory of drug-development contexts in which CDER is open to streamlined nonclinical programs, including reduced animal numbers/species and NAM use. The page includes applied regulatory examples, such as hiPSC-derived cardiomyocyte studies being usable in place of an animal study for certain QT/proarrhythmic-risk assessments when best practices are followed.

Classification: adoption/transparency infrastructure.
Materiality: high for analysis, but the page is an evolving inventory rather than a single event.
Why it matters: this resource may be more useful analytically than chronologically. It provides a growing denominator of contexts where alternative evidence is already usable and could support a separate `accepted/use contexts` dataset rather than overloading the event timeline.

Recommendation: create a second structured dataset in a later phase (e.g., `data/regulatory_contexts.json`) for method × endpoint × context-of-use × regulator × evidence-status. This would allow the paper to distinguish event history from the actual breadth of usable regulatory contexts.

## FDA Year One / institutional capacity

Primary sources:
- https://www.fda.gov/news-events/press-announcements/fda-achieves-year-1-goals-reducing-animal-testing-drug-development
- https://www.fda.gov/science-research/science-and-research-special-topics/new-approach-methodologies-nams

FDA's Apr. 20, 2026 Year One report states that the agency established a core NAMs workgroup in Jan. 2026 and that CDER developed a concept of operations for a NAMs Integrated Review Team to be piloted in 2026. This is relevant institutional review infrastructure and should be reflected in the existing Year One event rather than treated merely as a transparency webpage.

## ISTAND permanence — date/source correction

Primary source: https://www.fda.gov/news-events/fda-voices/fda-advances-drug-development-innovation-establishing-istand-permanent-qualification-program

FDA's public announcement states that ISTAND transitioned from pilot status to a permanent DDT Qualification Program. FDA's Year One report dates the transition to July 31, 2025. The current ledger uses an approximate July 1 date and should be corrected to July 31, 2025 once the event is normalized.

Important: the source describes eight submissions accepted during the pilot period and emphasizes qualification as a formal reusable regulatory mechanism; acceptance into the program remains distinct from qualification.

## Analytical implications

The industry/standards evidence suggests at least four different layers that should not be collapsed into a single 'industry adoption' category:

1. provider coordination (IAMPS),
2. cross-company evidence generation (ring trials),
3. formal standards machinery (ISO / ICH processes),
4. actual company or regulator use in decisions.

The current public roadmap is strong on (1) and partly on (2), but the next research round should prioritize (4), because actual substitution/displacement is the hardest and most probative outcome.

A future paper contribution could explicitly distinguish **coordination density** from **decision-level adoption density**. A field can have many alliances, workshops, and consortia while still having relatively few verified cases where an animal study was actually replaced in a consequential decision.

## Next searches

1. Find published results from the Liver MPS Ring Trial and determine whether reproducibility targets were met.
2. Search IQ MPS annual reports for actual member-company deployment examples and any regulatory submissions citing MPS evidence.
3. Search FDA/EMA public assessment records for named sponsor submissions in which MPS or other human-based evidence changed or replaced a nonclinical study package.
4. Identify ISO/TC 276/SC 2 establishment date and standards/projects at DIS/FDIS/publication stages.
5. Audit ICH S7A revision process for formal reopening after the July 2026 workshop.
6. Build a candidate `regulatory_contexts` data model separating accepted method/context evidence from chronology events.
