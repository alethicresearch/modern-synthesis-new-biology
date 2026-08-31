#!/usr/bin/env python3
"""Validate the roadmap evidence and prospective data files."""

import json
from pathlib import Path
from urllib.parse import urlparse

ROOT = Path(__file__).resolve().parents[1]
EVENTS = ROOT / "data" / "events.json"
PROSPECTIVE = ROOT / "data" / "prospective.json"

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


def validate_events(data):
    events = data.get("events", [])
    if not isinstance(events, list):
        error("events.json: events must be an array")
        return
    check_unique(events, "events.json")
    required = ["id", "date", "display_date", "temporal_status", "institution", "title", "summary", "stage", "domain", "materiality", "major_milestone", "source_status"]
    allowed_temporal = {"foundation", "observed", "emerging"}
    allowed_materiality = {"high", "medium", "low"}
    allowed_source = {"primary_source_verified", "manuscript_seed", "needs_public_source", "secondary_source_only"}
    for e in events:
        rid = e.get("id", "<missing-id>")
        for key in required:
            if key not in e:
                error(f"events.json:{rid}: missing {key}")
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
    allowed_types = {"forecast", "recommendation", "catalytic_proposal"}
    allowed_status = {"watch", "in_progress", "achieved", "stalled", "missed", "superseded"}
    for m in items:
        rid = m.get("id", "<missing-id>")
        for key in required:
            if key not in m:
                error(f"prospective.json:{rid}: missing {key}")
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


def main():
    validate_events(load(EVENTS))
    validate_prospective(load(PROSPECTIVE))
    if ERRORS:
        print("Roadmap data validation failed:")
        for item in ERRORS:
            print(f"- {item}")
        raise SystemExit(1)
    print("Roadmap data validation passed.")


if __name__ == "__main__":
    main()
