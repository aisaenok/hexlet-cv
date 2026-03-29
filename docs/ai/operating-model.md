> Canonical version of this document.
> Russian reading version: `./operating-model.ru.md`

# AI Operating Model

## Purpose
This document defines how AI should be used in the `hexlet-cv` project so that it:
- accelerates engineering work
- does not expand scope implicitly
- does not break architectural constraints
- does not violate project conventions
- remains reviewable and verifiable

AI is treated as an engineering assistant, not as an autonomous developer.

---

## Core AI roles in this project

### 1. Explain
Use AI to:
- explain code
- explain data flow
- explain routing and page flow
- explain rerender/remount behavior
- explain typing and architectural decisions

### 2. Navigate
Use AI to:
- locate relevant files
- map dependencies between modules
- find entry points and extension points
- identify duplicated logic
- trace page/layout/props relationships

### 3. Review
Use AI to:
- review diffs
- detect architectural risks
- check violations of project conventions
- identify unnecessary abstractions or unrelated changes

### 4. Generate
Use AI to:
- generate local boilerplate
- generate tests
- generate small typed utilities
- generate documentation drafts

### 5. Assist in scoped tasks
Use AI in multi-step tasks only when:
- the goal is explicit
- allowed files are listed
- forbidden zones are listed
- invariants are defined
- acceptance criteria are defined
- the result can be verified

---

## AI working modes

### 1. Read-only analysis
Allowed:
- analyze code
- propose hypotheses
- suggest options
- explain behavior
- identify risks and trade-offs

Not allowed:
- jump directly into broad rewrites
- suggest large restructuring without request
- make conclusions without explicit assumptions

### 2. Guided write
Allowed:
- make local changes in explicitly defined scope
- fix a bug in agreed files
- perform small safe refactoring
- add tests or documentation

Required process:
1. analysis
2. plan
3. scoped change
4. diff review
5. verification

### 3. Restricted generation
Allowed:
- generate types / DTOs / utilities / test scaffolding
- generate small UI wrappers
- generate draft documentation

Not allowed:
- introduce new architectural abstractions without request
- rewrite existing flows proactively
- change several layers at once without approval

---

## Allowed scenarios
- explain code
- repo navigation
- local bug analysis
- debugging hypothesis generation
- test generation
- local refactoring with explicit file scope
- draft documentation
- diff review
- search for duplicated logic
- small typed utility generation

---

## Restricted scenarios
The following tasks should stay in read-only mode unless explicitly approved:
- cross-cutting refactoring
- routing architecture changes
- auth flow changes
- broad FSD restructuring
- global i18n rewrites
- shared abstraction redesign
- Inertia page/props contract changes
- layout architecture changes
- large-scale renaming across modules
- changes affecting MSW contract or backend integration assumptions

---

## Sensitive areas in `hexlet-cv`
High-risk areas include:
- Inertia page contract and page prop shape
- route definitions and locale-aware routing
- sign-in and sign-up flows
- auth redirects and protected route checks
- layout behavior, especially when it depends on server/shared props
- `usePage().props` consumers
- FSD layer boundaries and file placement decisions
- MSW handlers and their alignment with backend behavior
- i18n key structure and translation-dependent UI logic
- shared UI/app providers

For these areas, the default allowed output is:
- analysis
- hypothesis generation
- change plan

Write changes in these areas must be minimal and explicitly justified.

---

## Rules before write mode
Before any code change, define:
1. Goal
2. Why the task is local rather than cross-cutting
3. Allowed files
4. Forbidden files or zones
5. Invariants that must stay unchanged
6. Acceptance criteria
7. Verification method
8. What counts as an unnecessary change

---

## Required execution order
For any non-trivial task, use this order:
1. Request analysis first
2. Get hypotheses or solution options
3. Choose the smallest safe approach
4. Freeze scope
5. Apply changes
6. Review the diff
7. Verify with tests / typecheck / manual scenario
8. Record conclusions

---

## Rules for bugs and unstable behavior
If the task is a bug investigation, do not request a fix immediately.

First:
- collect symptoms
- describe expected vs actual behavior
- provide minimal relevant context
- ask for hypotheses
- identify the most likely root cause
- only then move to implementation

---

## Forbidden actions without explicit approval
AI must not, without explicit request:
- move files across FSD layers
- change public module interfaces
- change route shape
- mass-rename translation keys
- change server / Inertia prop shape
- introduce shared abstractions “for future use”
- touch unrelated files
- expand task scope because “it looks cleaner”
- rewrite working code without proven need

---

## Minimal AI task contract
Each write task must include:

### Goal
What should change

### Context
Short background of the task

### Allowed files
Which files may be changed

### Forbidden zones
Which files / layers / flows must not be changed

### Invariants
What must remain unchanged

### Acceptance criteria
How success is evaluated

### Verification
How the result is checked:
- typecheck
- tests
- manual scenario
- diff review

---

## Definition of done for an AI task
An AI-assisted task is done only if:
- only the agreed scope was changed
- the solution is explainable
- there are no unnecessary abstractions
- project conventions are preserved
- the task did not silently expand
- verification exists
- invariants are preserved
- the diff is local and readable
- the result can be defended in code review

---

## Main principle
AI should accelerate local engineering work.

AI must not make architectural decisions automatically and must not expand scope without explicit approval.