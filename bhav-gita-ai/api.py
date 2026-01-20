from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from datetime import datetime
from models import BhavRequest, GitaResponse
from agent import consult_bhav_gita

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173", "http://127.0.0.1:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/consult", response_model=GitaResponse)
async def consult(req: BhavRequest):
    return await consult_bhav_gita(req.bhav)


    # Force a valid response shape
    return {
        "shloka": result.shloka,
        "thought": getattr(result, "thought", "Reflect on this verse in your own life."),
        "meaning": result.meaning,
        "timestamp": datetime.utcnow(),
    }
