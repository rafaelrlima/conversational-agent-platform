# MVP 1 - Conversational Agent

## Objective

Transform the current chat interface into a stateful conversational agent.

The platform currently supports isolated interactions between users and the LLM.

MVP 1 introduces conversation awareness and lays the foundation for future capabilities such as RAG, Database Agents, Multi-Agent Systems, and Governance Workflows.

---

## Goals

### Conversation History

Maintain the interaction history between the user and the assistant.

### Message Model

Introduce a standard message structure.

### Session Memory

Allow the assistant to use previous conversation context.

### Agent Layer

Introduce the first agent abstraction in the platform.

---

## Scope

### Included

- Conversation History
- Message Model
- Session Memory
- Conversation Agent
- Prompt Management

### Excluded

- Database Integration
- RAG
- Multi-Agent
- Authentication
- Persistence

---

## Architecture

```text
User
 ↓
Angular
 ↓
FastAPI
 ↓
Conversation Agent
 ↓
Ollama Service
 ↓
Llama 3.2
```

## Deliverables

### Sprint 1

- Conversation History

### Sprint 2

- Message Model

### Sprint 3

- Conversation Agent

### Sprint 4

- Session Memory

---

## Success Criteria

The MVP is considered complete when:

- Previous messages remain visible.
- Context is maintained during a session.
- The application uses an explicit agent layer.
- The assistant responds using conversation history.