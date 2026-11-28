from app.services.ollama_service import OllamaService


class ConversationAgent:

    def __init__(self):

        self.ollama_service = OllamaService()

    def chat(self, message: str):

        return self.ollama_service.ask(
            message
        )