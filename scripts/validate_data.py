#!/usr/bin/env python3
"""Validate the roadmap evidence, adoption, displacement, comparator, and prospective data files."""

import json
from pathlib import Path
from urllib.parse import urlparse

ROOT = Path(__file__).resolve().parents[1]
DATA = ROOT / "data"
EVENTS = DATA / "events.json"
PROSPECTIVE = DATA / "prospective.json"
REGULATORY_CONTEXTS = DATA / "regulatory_contexts.json"
CANDIDATES = DATA / "candidates.json"
ADOPTION_CANDIDATES = DATA / "adoption_candidates.json"
NAMED_ADOPTION = DATA / "named_regulatory_adoption.json"
DISPLACEMENT_METRICS = DATA / "displacement_metrics.json"
SPECIES_COMPARATORS = DATA / "species_relevance_comparators.json"

ERRORS = []


def error(msg):
    ERRORS.append(msg)


def load(path):
    try:
        with path.open(encoding="utf-8") as f:
            return json.load(f)
    except Exception as exc:
        error(f"{path.relative_to(ROOT)}: cannot parse JSON: {exc}")
        return {}


def valid_url(value):
    if value is None:
        return True
    try:
        parsed = urlparse(value)
        return parsed.scheme == "https" and bool(parsed.netloc)
    except Exception:
        return False


def check_unique(records, label):
    seen = set()
    for record in records:
        rid = record.get("id")
        if not rid:
            error(f"{label}: record missing id")
        elif rid in seen:
            error(f"{label}: duplicate id {rid}")
        seen.add(rid)


def require(records, label, fields):
    for record in records:
        rid = record.get("id", "<missing-id>")
        for field in fields:
            if field not in record:
                error(f"{label}:{rid}: missing {field}")


def check_urls(obj, label, prefix=""):
    if isinstance(obj, dict):
        for key, value in obj.items():
            path = f"{prefix}.{key}" if prefix else key
            if key.endswith("_url") or key.endswith("_source") or key.endswith("_source_url"):
                if isinstance(value, str) and not valid_url(value):
                    error(f"{label}:{path}: must be an https URL")
            check_urls(value, label, path)
    elif isinstance(obj, list):
        for i, value in enumerate(obj):
            check_urls(value, label, f"{prefix}[{i}]")


def validate_events(data):
    events = data.get("events", [])
    if not isinstance(events, list):
        error("events.json: events must be an array")
        return
    check_unique(events, "events.json")
    required = ["id", "date", "display_date", "temporal_status", "institution", "title", "summary", "stage", "domain", "materiality", "major_milestone", "source_status"]
    require(events, "events.json", required)
    allowed_temporal = {"foundation", "observed", "emerging"}
    allowed_materiality = {"high", "medium", "low"}
    allowed_source = {"primary_source_verified", "manuscript_seed", "needs_public_source", "secondary_source_only"}
    for e in events:
        rid = e.get("id", "<missing-id>")
        if e.get("temporal_status") not in allowed_temporal:
            error(f"events.json:{rid}: invalid temporal_status")
        if e.get("materiality") not in allowed_materiality:
            error(f"events.json:{rid}: invalid materiality")
        if e.get("source_status") not in allowed_source:
            error(f"events.json:{rid}: invalid source_status")
        if not isinstance(e.get("major_milestone"), bool):
            error(f"events.json:{rid}: major_milestone must be boolean")
        if not isinstance(e.get("stage"), list) or not e.get("stage"):
            error(f"events.json:{rid}: stage must be a non-empty array")
        if not isinstance(e.get("domain"), list):
            error(f"events.json:{rid}: domain must be an array")
        if not valid_url(e.get("source_url")):
            error(f"events.json:{rid}: source_url must be null or an https URL")
        if e.get("source_status") == "primary_source_verified" and not e.get("source_url"):
            error(f"events.json:{rid}: primary_source_verified requires source_url")


def validate_prospective(data):
    items = data.get("milestones", [])
    if not isinstance(items, list):
        error("prospective.json: milestones must be an array")
        return
    check_unique(items, "prospective.json")
    required = ["id", "target_date", "display_date", "title", "summary", "rationale", "stage", "domain", "major_milestone", "type", "status", "actors", "success_criteria"]
    require(items, "prospective.json", required)
    allowed_types = {"forecast", "recommendation", "catalytic_proposal"}
    allowed_status = {"watch", "in_progress", "achieved", "stalled", "missed", "superseded"}
    for m in items:
        rid = m.get("id", "<missing-id>")
        if m.get("type") not in allowed_types:
            error(f"prospective.json:{rid}: invalid type")
        if m.get("status") not in allowed_status:
            error(f"prospective.json:{rid}: invalid status")
        if not isinstance(m.get("major_milestone"), bool):
            error(f"prospective.json:{rid}: major_milestone must be boolean")
        if not isinstance(m.get("success_criteria"), list) or not m.get("success_criteria"):
            error(f"prospective.json:{rid}: success_criteria must be a non-empty array")
        if not isinstance(m.get("actors"), list) or not m.get("actors"):
            error(f"prospective.json:{rid}: actors must be a non-empty array")


def validate_collection(path, key, required):
    data = load(path)
    records = data.get(key, [])
    label = path.name
    if not isinstance(records, list):
        error(f"{label}: {key} must be an array")
        return
    check_unique(records, label)
    require(records, label, required)
    check_urls(records, label)


def validate_species_comparators(data):
    records = data.get("comparators", [])
    label = "species_relevance_comparators.json"
    if not isinstance(records, list):
        error(f"{label}: comparators must be an array")
        return
    check_unique(records, label)
    require(records, label, ["id", "product", "modality", "target", "regulator", "jurisdiction", "relevant_species_status", "general_repeat_toxicology", "species_relevance_basis", "endpoint_specific_omissions", "human_relevant_evidence", "animal_studies_retained", "comparator_class", "source_url", "source_strength"])
    allowed_species = {"none", "none_or_limited", "limited", "relevant"}
    allowed_tox = {"omitted_or_unavailable", "omitted", "tailored_or_omitted", "tailored", "retained"}
    for record in records:
        rid = record.get("id", "<missing-id>")
        if record.get("relevant_species_status") not in allowed_species:
            error(f"{label}:{rid}: invalid relevant_species_status")
        if record.get("general_repeat_toxicology") not in allowed_tox:
            error(f"{label}:{rid}: invalid general_repeat_toxicology")
        if not isinstance(record.get("endpoint_specific_omissions"), list):
            error(f"{label}:{rid}: endpoint_specific_omissions must be an array")
        if not isinstance(record.get("human_relevant_evidence"), list):
            error(f"{label}:{rid}: human_relevant_evidence must be an array")
        if not valid_url(record.get("source_url")):
            error(f"{label}:{rid}: source_url must be an https URL")
    check_urls(records, label)


def main():
    validate_events(load(EVENTS))
    validate_prospective(load(PROSPECTIVE))
    validate_collection(REGULATORY_CONTEXTS, "contexts", ["id", "regulator", "jurisdiction", "decision_context", "alternative", "displacement_type", "regulatory_status", "evidence_strength", "source_url"])
    validate_collection(CANDIDATES, "candidates", ["id", "status", "action", "institution"])
    validate_collection(ADOPTION_CANDIDATES, "candidates", ["id", "status", "product_or_program", "regulator", "claimed_displacement", "evidence_level"])
    validate_collection(NAMED_ADOPTION, "cases", ["id", "product", "regulator", "regulatory_impact", "animal_displacement_class", "counts_as_animal_displacement", "counts_as_named_nam_adoption", "evidence_strength"])
    validate_collection(DISPLACEMENT_METRICS, "metrics", ["id", "regulator", "jurisdiction", "context", "metric_type", "realized_or_estimated", "source_url", "source_strength"])
    validate_species_comparators(load(SPECIES_COMPARATORS))
    if ERRORS:
        print("Roadmap data validation failed:")
        for item in ERRORS:
            print(f"- {item}")
        raise SystemExit(1)
    print("Roadmap data validation passed.")


if __name__ == "__main__":
    main()
