# Taskmere: rules for Copilot

Stack: Node.js 24, Express 5, Mongoose 9, React 19, Vite, Vitest.
ES modules only. Ask before adding a dependency.

- Scope every query on tasks to req.user.team.
- Validate request input with zod; reply 400 with the issues.
- Async route handlers just throw; the error middleware answers.
- Mongoose 9: pre hooks are async functions and never call next().
- Every new route gets a supertest test for success and for 400.
- Decisions and their reasons: docs/decisions/.
