"""Ziyaretci defteri: notlar sunucuda notes.json dosyasinda saklanir, tum ziyaretciler gorur."""
import asyncio
import json
from datetime import datetime, timezone
from pathlib import Path
from typing import Annotated

from fastapi import APIRouter
from pydantic import BaseModel, StringConstraints

NOTES_FILE = Path(__file__).parent / "notes.json"
MAX_STORED = 200  # dosya sisip gitmesin diye en eski notlar silinir
MAX_RETURNED = 50

router = APIRouter(prefix="/api/notes", tags=["notes"])
_lock = asyncio.Lock()


class NoteIn(BaseModel):
    name: Annotated[str, StringConstraints(strip_whitespace=True, max_length=24)] = ""
    text: Annotated[
        str, StringConstraints(strip_whitespace=True, min_length=1, max_length=280)
    ]


class Note(BaseModel):
    id: int
    name: str
    text: str
    created: str  # ISO 8601, UTC


def _load() -> list[dict]:
    if not NOTES_FILE.exists():
        return []
    try:
        data = json.loads(NOTES_FILE.read_text(encoding="utf-8"))
    except (json.JSONDecodeError, OSError):
        return []
    return data if isinstance(data, list) else []


def _save(notes: list[dict]) -> None:
    tmp = NOTES_FILE.with_suffix(".tmp")
    tmp.write_text(json.dumps(notes, ensure_ascii=False, indent=2), encoding="utf-8")
    tmp.replace(NOTES_FILE)


@router.get("", response_model=list[Note])
async def list_notes() -> list[dict]:
    async with _lock:
        notes = _load()
    return list(reversed(notes[-MAX_RETURNED:]))  # en yeni en ustte


@router.post("", response_model=Note, status_code=201)
async def add_note(body: NoteIn) -> dict:
    async with _lock:
        notes = _load()
        note = {
            "id": (notes[-1]["id"] + 1) if notes else 1,
            "name": body.name or "Anonim",
            "text": body.text,
            "created": datetime.now(timezone.utc).isoformat(timespec="seconds"),
        }
        notes.append(note)
        _save(notes[-MAX_STORED:])
    return note
