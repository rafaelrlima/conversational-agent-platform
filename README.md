# Conversational Agent Platform (CAP)

## Overview

The Conversational Agent Platform (CAP) is an Enterprise AI & Decision Intelligence Platform designed to combine Artificial Intelligence, Analytics, Governance, Risk Management, Auditability, and Knowledge Management into a unified ecosystem.

The project aims to demonstrate how organizations can operationalize Generative AI using enterprise-grade architectural principles.

The platform is being developed incrementally through MVPs, with a strong focus on governance, explainability, security, auditability, and long-term maintainability.

---

## Current Status

### MVP 0 - Foundation

Status: Completed

Implemented:

- Angular Frontend
- FastAPI Backend
- Ollama Integration
- Llama 3.2 Integration
- End-to-End Chat
- VS Code Development Tasks
- Project Documentation
- Architecture Definition
- Architectural Decision Records (ADRs)

Upcoming:

- MVP 1 - Conversational Agent

---

## Architecture

```text
User
 ↓
Angular Frontend
 ↓
FastAPI Backend
 ↓
Ollama
 ↓
Llama 3.2
```

Future Architecture:

```text
User
 ↓
Angular
 ↓
FastAPI
 ↓
Agent Layer
 ↓
Database Agent
RAG Agent
Governance Agent
Analytics Agent
 ↓
Tool Layer
 ↓
Data Sources
```

---

## Technology Stack

### Frontend

- Angular
- TypeScript

### Backend

- FastAPI
- Python

### AI Layer

- Ollama
- Llama 3.2

### Future Components

- PostgreSQL
- pgvector
- Multi-Agent Systems
- MCP
- OpenTelemetry
- Docker

---

## Project Roadmap

### MVP 0 - Foundation ✅

- End-to-End Chat
- Angular
- FastAPI
- Ollama

### MVP 1 - Conversational Agent

- Conversation History
- Session Management
- Agent Layer

### MVP 2 - Database Agent

- Natural Language to SQL
- Data Analytics

### MVP 3 - RAG

- Knowledge Retrieval
- Vector Search

### MVP 4 - Multi-Agent

- Coordinator Agent
- Specialized Agents

### MVP 5 - Authentication & Authorization

- JWT
- RBAC

### MVP 6 - Observability & Evaluation

- Monitoring
- Metrics
- Evaluation Framework

### MVP 7 - Governance & Human-in-the-Loop

- Approval Workflows
- Governance Controls

### MVP 8 - MCP Integration

- MCP Client
- MCP Tool Registry

---

## Strategic Principles

The platform is built around five strategic pillars:

- Enterprise AI
- Governance
- Risk Management
- Auditability
- Cost Awareness

---

## Author

Rafael Ribeiro de Lima

Senior Data Scientist | AI & Machine Learning | Model Governance | Researcher

Linkedin: https://www.linkedin.com/in/rafarlima/

---