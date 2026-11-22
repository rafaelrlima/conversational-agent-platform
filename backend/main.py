from fastapi import FastAPI

from app.api.chat import router as chat_router

app = FastAPI(
    title="Conversational Agent Platform",
    version="0.1.0"
)

app.include_router(
    chat_router,
    prefix="/api"
)


@app.get("/")
def health():

    return {
        "status": "running",
        "application": "conversational-agent-platform"
    }