# ADR 001: Use MongoDB for Database

## Status
Accepted

## Context
We need a flexible, scalable database for storing user notes. Since notes are document-like and can vary in structure, a NoSQL database is preferred. MongoDB integrates seamlessly with Node.js, and MongoDB Atlas offers cloud scalability.

## Decision
Use MongoDB Atlas as the primary database for the Note App.

## Consequences
- Rapid development with flexible schemas.
- Tight integration with Mongoose ODM.
- Requires indexing and query optimization for performance.