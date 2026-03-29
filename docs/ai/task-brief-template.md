> Canonical version of this document.
> Russian reading version: `./task-brief-template.ru.md`

# AI Task Brief Template

Use this template for any non-trivial AI-assisted task in `hexlet-cv`.

The goal of the brief is to:
- constrain scope
- preserve invariants
- prevent unrelated changes
- make the result reviewable and verifiable

---

## Goal
What should change?

Example:
- Fix incorrect rerender behavior in a specific component
- Add tests for a utility module
- Refactor one local module without changing its public behavior

---

## Context
What is the minimal background AI needs to know?

Include only relevant context:
- feature/module purpose
- current behavior
- where the problem appears
- relevant architectural constraints

Avoid unrelated repository history.

---

## Problem
What is wrong now, or what outcome is needed?

Describe:
- current behavior
- expected behavior
- why this matters

For bugs, prefer:
- expected behavior
- actual behavior
- reproduction conditions

---

## Task mode
Choose one:
- analysis only
- hypotheses only
- plan only
- patch
- tests
- review diff

If the task is risky, start with:
- analysis only
or
- hypotheses only

---

## Allowed files
List only files that AI may change.

Example:
- `frontend/src/features/auth/model/useSignInForm.ts`
- `frontend/src/pages/Users/SignIn/Index.tsx`

If no files are allowed yet, state:
- No write access yet. Analysis only.

---

## Forbidden zones
List files, layers, or flows that must not be changed.

Examples:
- routing
- auth flow outside the listed files
- shared abstractions
- i18n keys
- layout architecture
- unrelated FSD layers

---

## Invariants
What must remain unchanged?

Examples:
- public API of the module
- route shape
- Inertia page contract
- existing translation keys
- current layout behavior outside the target scope
- existing backend/mock contract

---

## Expected output
Specify what you want from AI.

Possible outputs:
- root cause analysis
- ranked hypotheses
- step-by-step plan
- minimal patch
- test cases
- diff review
- risk list
- trade-off comparison

---

## Acceptance criteria
How will success be evaluated?

Examples:
- only allowed files are changed
- the bug is fixed in the described scenario
- no public API changes
- no new abstraction introduced
- typecheck passes
- relevant tests pass

---

## Verification
How should the result be checked?

Possible checks:
- typecheck
- unit tests
- integration tests
- manual scenario
- diff review
- local visual verification

---

## Constraints and notes
Add any extra constraints.

Examples:
- keep the solution local
- do not move files between FSD layers
- do not rename translation keys
- do not introduce new hooks unless necessary
- prefer the smallest possible change

---

## Optional references
Add only the references needed for this task:
- relevant doc section
- relevant code snippet
- relevant route/flow description
- relevant bug report or expected scenario

---

## Example brief skeleton

### Goal
...

### Context
...

### Problem
...

### Task mode
analysis only

### Allowed files
...

### Forbidden zones
...

### Invariants
...

### Expected output
...

### Acceptance criteria
...

### Verification
...

### Constraints and notes
...