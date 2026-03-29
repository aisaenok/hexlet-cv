> Canonical version of this document.
> Russian reading version: `./README.ru.md`

# AI Docs

This directory contains AI-oriented project documentation for `hexlet-cv`.

Its purpose is to provide:
- stable repo context for AI assistants
- clear operating rules for AI-assisted work
- reusable task templates
- shared understanding for both human contributors and AI tools

---

## Document structure

### Core documents
- `operating-model.md` — rules for how AI may be used in this project
- `project-map.md` — high-level engineering map of the project
- `task-brief-template.md` — template for scoped AI tasks

### Russian mirrors
- `operating-model.ru.md`
- `project-map.ru.md`
- `task-brief-template.ru.md`

Russian files are reading mirrors.  
English files are the source of truth.

---

## Canonical language rule
English versions are canonical.

This means:
- AI context should default to English files
- team-facing stable instructions should default to English files
- Russian files should mirror English files semantically
- updates should be made to English first, then synchronized to Russian

---

## Update rule
When changing AI documentation:

1. Update the English canonical file
2. Review wording and constraints
3. Synchronize the Russian mirror
4. Keep meaning, constraints, and invariants aligned

Russian mirrors do not have to be word-for-word translations, but they must preserve:
- intent
- constraints
- invariants
- sensitive areas
- workflow rules

---

## How to use these docs with AI

### For analysis tasks
Provide:
- relevant section from `project-map.md`
- relevant section from `operating-model.md`
- local task context

### For write tasks
Provide:
- `operating-model.md`
- relevant part of `project-map.md`
- a task brief based on `task-brief-template.md`

### For sensitive tasks
Also provide:
- explicit allowed files
- explicit forbidden zones
- invariants
- verification steps

---

## Main principle
These docs exist to keep AI useful, local, reviewable, and safe.

AI should accelerate engineering work, not introduce uncontrolled changes.