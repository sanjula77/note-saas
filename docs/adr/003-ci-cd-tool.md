# ADR 003: Use GitHub Actions for CI/CD

## Status
Accepted

## Context
We want a free, reliable, and tightly integrated CI/CD solution for our GitHub-based repository. GitHub Actions provides seamless automation, testing, and deployment workflows within the GitHub ecosystem.

## Decision
Use GitHub Actions to manage CI/CD workflows, including tests, builds, and deployment steps.

## Consequences
- Native integration with GitHub.
- Easy configuration with YAML.
- Limited concurrency unless upgraded.