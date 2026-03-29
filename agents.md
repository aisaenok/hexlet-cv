> Canonical version of this document.
> Russian reading version: `./agents.ru.md`

# AI Agent Guide

This file is the short entry point for AI assistants working with the `hexlet-cv` repository.

Detailed rules and extended context are stored in:
- `docs/ai/README.md`
- `docs/ai/operating-model.md`
- `docs/ai/project-map.md`
- `docs/ai/task-brief-template.md`

Do not treat this file as a replacement for those documents.  
Use it as a quick operational briefing.

---

## Project overview
`hexlet-cv` is a fullstack application for creating and publishing CVs.

From an engineering perspective, the project is:
- React-based on the frontend
- Inertia-driven for routing and page transport
- server-driven in page rendering and props delivery
- using Mantine for UI
- using MSW for local mock-based development
- using react-i18next for localization
- organized with FSD conventions

Important: this is **not** a free-form SPA with arbitrary client-side API calls.

---

## Default AI role
By default, act as:
- analyzer
- navigator
- reviewer

Do **not** default to broad code generation or architectural rewriting.

For non-trivial tasks, prefer:
1. analysis
2. hypotheses
3. minimal plan
4. scoped implementation

---

## Core project rules
- Treat Inertia as the primary page/navigation model
- Respect existing FSD boundaries
- Keep local fixes local
- Do not introduce abstractions without clear need
- Do not expand task scope implicitly
- Prefer the smallest safe change
- Preserve current contracts unless explicitly asked to change them

---

## Sensitive areas
Treat the following areas as high-risk:
- routing and locale-aware routing
- auth flow
- sign-in and sign-up flows
- Inertia page contract and page props
- shared props
- layout behavior
- `usePage().props` consumers
- MSW handlers
- i18n keys and translation-dependent logic
- app-level/shared providers

In these areas, default to:
- analysis
- hypotheses
- change plan

Do not make broad write changes unless explicitly authorized.

---

## Before making changes
Before any write action, make sure you know:
- the goal
- the allowed files
- the forbidden zones
- the invariants
- the acceptance criteria
- the verification method

If these are missing, do not guess broadly.  
Reduce the task to analysis or ask for a stricter scope.

---

## Allowed default actions
Unless the task says otherwise, safe default actions are:
- explain code
- trace flow across files
- identify likely root causes
- propose ranked hypotheses
- review a local diff
- suggest a minimal patch plan
- generate tests for a local module
- generate small local utilities or boilerplate

---

## Forbidden default behavior
Do not do the following unless explicitly requested:
- move files across FSD layers
- redesign shared abstractions
- rewrite routing architecture
- rewrite auth flow
- mass-rename i18n keys
- change Inertia/server prop shape
- rewrite working code “for cleanliness”
- touch unrelated files
- introduce speculative future-oriented abstractions

---

## Bug workflow
For bug-related tasks:
1. collect symptoms
2. define expected vs actual behavior
3. inspect only relevant code and flow
4. propose ranked hypotheses
5. identify likely root cause
6. suggest the smallest valid fix
7. verify with tests / typecheck / manual scenario

Do not jump directly into rewriting.

---

## Refactoring workflow
For refactoring tasks:
1. identify the local target
2. list invariants
3. keep public behavior unchanged unless requested
4. avoid cross-layer movement by default
5. prefer incremental refactoring
6. keep the diff small and reviewable

---

## Output expectations
Good AI output in this repository is:
- local
- explicit
- constrained
- explainable
- verifiable
- aligned with project conventions

Bad AI output is:
- broad
- speculative
- architecture-changing without approval
- weakly verified
- expanding scope silently

---

## Recommended docs to consult
Before non-trivial work, consult:
- `docs/ai/operating-model.md`
- `docs/ai/project-map.md`

For write tasks, also use:
- `docs/ai/task-brief-template.md`

---

## Main principle
Help with engineering work, but do not take ownership away from human review.

Optimize for correctness, locality, and reviewability over speed alone.