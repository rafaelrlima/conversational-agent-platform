from app.services.ollama_service import OllamaService
from prompts.loader import load_prompt

class ConversationAgent:

    def __init__(self):

        self.ollama_service = OllamaService()

        self.messages = [
            {
                "role": "system",
                "content": load_prompt(
                    "conversational_agent.txt"
                )
            }
        ]

    def chat(self, user_message: str):

        self.messages.append(
            {
                "role": "user",
                "content": user_message
            }
        )

        MAX_HISTORY = 20

        if len(self.messages) > MAX_HISTORY:
            self.messages = (
                [self.messages[0]]
                + self.messages[-19:]
            )

        response = self.ollama_service.ask(
            self.messages
        )

        self.messages.append(
            {
                "role": "assistant",
                "content": response
            }
        )

        return response