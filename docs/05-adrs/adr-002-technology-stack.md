# ADR-002 - Technology Stack

## Status

Accepted

## Context

The platform requires modern technologies capable of supporting AI workloads, future scalability, local LLM execution, and enterprise architecture practices.

## Decision

### Frontend

- Angular
- TypeScript

### Backend

- FastAPI
- Python

### AI Layer

- Ollama
- Llama 3.2

### Data Layer

- PostgreSQL

### Infrastructure

- Docker
- Docker Compose

## Rationale

Angular

- Enterprise-oriented
- Strong TypeScript ecosystem
- Long-term maintainability

FastAPI

- High performance
- Excellent AI ecosystem integration
- Strong Python community

Ollama

- Local inference
- Cost control
- Data privacy

PostgreSQL

- Enterprise adoption
- Future pgvector support

Docker

- Portability
- Reproducibility
- Simplified deployment

## Consequences

### Positive

- Modern enterprise stack
- Strong AI ecosystem alignment
- Reduced vendor lock-in

### Negative

- Larger learning curve compared to simpler solutions
- Additional operational complexity