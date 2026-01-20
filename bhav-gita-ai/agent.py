from pydantic_ai import Agent
from datetime import datetime
import json

agent = Agent(
    model="openrouter:openai/gpt-4o-mini",
    system_prompt=(
        "You are a compassionate guide inspired by the Bhagavad Gita.\n"
        "For a given emotion, return:\n"
        "1. A relevant Sanskrit shloka (in Devanagari)\n"
        "2. A short thought\n"
        "3. A clear English meaning\n\n"
        "Respond ONLY in valid JSON with keys: shloka, thought, meaning."
    ),
)

async def consult_bhav_gita(bhav: str):
    result = await agent.run(bhav)

    # result.output is a STRING → convert to dict
    raw = result.output

    try:
        data = json.loads(raw)
    except Exception:
        # fallback if model slightly misformats
        data = {
            "shloka": raw,
            "thought": "",
            "meaning": ""
        }

    return {
        "shloka": data.get("shloka", ""),
        "thought": data.get("thought", ""),
        "meaning": data.get("meaning", ""),
        "timestamp": datetime.utcnow(),
    }
