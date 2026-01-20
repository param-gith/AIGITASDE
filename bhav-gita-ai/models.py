from pydantic import BaseModel, Field
from datetime import datetime

class BhavRequest(BaseModel):
    bhav: str = Field(...)

class GitaResponse(BaseModel):
    shloka: str
    thought: str
    meaning: str
    timestamp: datetime
