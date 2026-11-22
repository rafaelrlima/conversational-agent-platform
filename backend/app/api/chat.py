from fastapi import APIRouter

from app.models.chat import ChatRequest
from app.models.chat import ChatResponse

from app.services.ollama_service import OllamaService

router = APIRouter()

ollama_service = OllamaService()


@router.post(
    "/chat",
    response_model=ChatResponse
)
def chat(request: ChatRequest):

    response = ollama_service.ask(
        request.message
    )

    return ChatResponse(
        response=response
    )