# ADR-004 - Conversational Agent Architecture

## Status

Accepted

---

## Context

MVP 0 validated the technical foundation of the platform using Angular, FastAPI, and Ollama.

The system currently processes isolated requests without conversation context.

Future platform capabilities require conversation awareness.

Examples include:

- RAG
- Database Agents
- Governance Agents
- Multi-Agent Systems

---

## Decision

Introduce a dedicated Conversation Agent layer.

Current Architecture:

```text
API
 ↓
Ollama Service
```

New Architecture:

```text
API
 ↓
Conversation Agent
 ↓
Ollama Service
```

The Conversation Agent becomes responsible for:

- Managing conversation context.
- Organizing messages.
- Handling session memory.
- Preparing prompts.
- Supporting future agent orchestration.

---

## Rationale

Introducing an agent layer early provides a stable architectural foundation for future capabilities.

This reduces coupling between API endpoints and LLM integrations.

The resulting architecture is more maintainable, scalable, and aligned with Enterprise AI practices.

---

## Consequences

### Positive

- Improved modularity.
- Better extensibility.
- Future RAG readiness.
- Future Multi-Agent readiness.
- Better separation of concerns.

### Negative

- Additional abstraction layer.
- Increased implementation complexity.

---

## Outcome

The platform transitions from an LLM-powered chat interface to a true Conversational Agent Architecture.
