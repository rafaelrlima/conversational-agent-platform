from fastapi import APIRouter

from app.models.chat import ChatRequest
from app.models.chat import ChatResponse

from app.agents.conversation_agent import ConversationAgent

router = APIRouter()

conversation_agent = ConversationAgent()


@router.post(
    "/chat",
    response_model=ChatResponse
)
def chat(request: ChatRequest):

    response = conversation_agent.chat(
        request.message
    )
    
    return ChatResponse(
        response=response
    )