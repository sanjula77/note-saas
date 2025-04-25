# ADR 002: Deploy on AWS EC2

## Status
Accepted

## Context
We need full control over the infrastructure for our Micro SaaS application. While platforms like Vercel and Heroku offer easier deployment, they are limited in customization. EC2 provides flexibility and control over networking, compute, and scaling.

## Decision
Deploy the application on AWS EC2 instances using SSH and custom deployment scripts.

## Consequences
- Greater control over deployment and environment.
- More complex setup and maintenance.
- Requires manual scaling or automation scripts.