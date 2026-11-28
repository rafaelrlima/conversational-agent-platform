from ollama import chat


class OllamaService:

    def ask(self, messages):

        response = chat(
            model="llama3.2",
            messages=messages
        )

        return response["message"]["content"]