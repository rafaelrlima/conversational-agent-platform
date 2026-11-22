from fastapi import FastAPI

from app.api.chat import router as chat_router

from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(
    title="Conversational Agent Platform",
    version="0.1.0"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:4200"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
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