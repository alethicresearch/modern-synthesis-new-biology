import json
from pathlib import Path

root = Path(__file__).resolve().parents[1]
payload = json.loads((root / "data" / "ncac_update_20261003.json").read_text())

events_path = root / "data" / "events.json"
events = json.loads(events_path.read_text())
event = payload["event"]
if not any(item.get("id") == event["id"] for item in events["events"]):
    events["events"].append(event)
events["events"].sort(key=lambda item: (item["date"], item["id"]))
events["updated"] = payload["updated"]
events_path.write_text(json.dumps(events, indent=2) + "\n")

registry_path = root / "data" / "source_registry.json"
registry = json.loads(registry_path.read_text())
registry["records"][event["id"]] = payload["source_registry"]
registry["updated"] = payload["updated"]
registry_path.write_text(json.dumps(registry, indent=2) + "\n")
