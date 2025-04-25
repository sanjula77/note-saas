# ADR 004: Use Docker for Containerization

**Status:** Accepted  
**Date:** 2025-04-25  

## Context
To ensure consistency across development, testing, and production environments, and to simplify deployment and dependency management, we decided to containerize the Note App using Docker.

## Decision
We will use Docker to:
- Create consistent and isolated environments
- Easily package the application with all its dependencies
- Facilitate local development and CI/CD testing
- Support future scalability and orchestration (e.g., Kubernetes)

The application will be packaged in a Docker image defined in a `Dockerfile`, and Docker Compose may be used for managing multi-container setups like app + MongoDB.

## Consequences
- Developers must have Docker installed locally
- Build and deployment pipelines must support Docker (e.g., GitHub Actions runners)
- Adds initial complexity but simplifies long-term scalability

## Alternatives Considered
- Running app natively (less portable)
- Using traditional VMs (more overhead)

Docker offers the best balance between portability, simplicity, and scalability.
