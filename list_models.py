"""Hesabindaki kullanilabilir Gemini modellerini listeler.

Kullanim:  python list_models.py
Cikan adlardan birini .env dosyasindaki GEMINI_MODEL'e yaz.
"""
import os

from dotenv import load_dotenv
from google import genai

load_dotenv()

client = genai.Client(api_key=os.environ["GEMINI_API_KEY"])
for model in client.models.list():
    actions = model.supported_actions or []
    if "generateContent" in actions:
        print(model.name.removeprefix("models/"))
