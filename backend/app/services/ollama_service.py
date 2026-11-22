from ollama import chat


class OllamaService:

    def ask(self, message: str) -> str:

        response = chat(
            model="llama3.2",
            messages=[
                {
                    "role": "user",
                    "content": message
                }
            ]
        )

        return response["message"]["content"]