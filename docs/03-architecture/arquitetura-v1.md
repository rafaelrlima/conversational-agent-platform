# Architecture V1

## Technology Stack

### Frontend

- Angular
- TypeScript
- Angular Material

### Backend

- FastAPI
- Python
- Pydantic
- SQLAlchemy

### AI Layer

- Ollama
- Llama 3.2

### Data Layer

- PostgreSQL
- pgvector

### Infrastructure

- Docker
- Docker Compose

### Future Components

- LangGraph
- MCP
- OpenTelemetry
- Grafana

---

## High-Level Architecture

User

↓

Angular Frontend

↓

FastAPI Backend

↓

Coordinator Layer

├── Conversational Agent

├── Database Agent

├── RAG Agent

└── Future Specialized Agents

↓

Tool Layer

├── Database Connector

├── RAG Retrieval Engine

├── File Access

└── External APIs

↓

LLM Layer

└── Ollama + Llama 3.2

↓

Data Layer

├── PostgreSQL

├── pgvector

└── Knowledge Repository

---

## Architectural Principles

1. Modularity
2. Scalability
3. Observability
4. Security by Design
5. Governance First
6. Human-in-the-Loop Support
7. MCP Readiness
8. Cloud Agnostic Design