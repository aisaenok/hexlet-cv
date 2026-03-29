> Canonical version of this document.
> Russian reading version: `./project-map.ru.md`

# Project Map

## Project
hexlet-cv

## Goal
Hexlet CV is a fullstack web application for creating and publishing professional CVs, primarily for IT specialists.

From an engineering perspective, the project is built around:
- React UI rendered through Inertia
- server-driven routing and page responses
- shared page props and layout-based navigation
- local development with optional MSW-based mock backend
- multilingual UI with locale-aware routing

AI should treat this project as an Inertia-driven application, not as a classic SPA with arbitrary client-side API calls.

---

## Stack
- frontend: React, Inertia.js, Mantine
- language: TypeScript, JavaScript, Java
- build:
  - frontend: Vite
  - backend: Gradle / gradlew
- UI: Mantine
- routing / transport: Inertia
- mocks: MSW
- i18n: react-i18next
- testing: React Testing Library, Playwright

---

## Architectural conventions
- FSD:
  - the project follows Feature-Sliced Design conventions
  - file movement across layers should be treated as high-risk
- Inertia:
  - no arbitrary client-side API layer for normal page flows
  - page navigation is done through Inertia GET
  - mutations are typically done through Inertia forms
  - server returns Inertia pages and props
- shared props:
  - shared navigation/menu data
  - common page-level data reused across account/admin areas
  - components using `usePage().props` are sensitive to global prop updates
- layouts:
  - each Inertia page defines a default layout
  - layout behavior may depend on server-provided props
  - persistent layout assumptions must be validated carefully
- forms:
  - standard form flows use `useForm()` from the Inertia React adapter
  - form behavior must stay aligned with server-side routes and validation format
- typing conventions:
  - defined separately in project documentation
  - DTO and page prop contracts should not be changed casually
- i18n conventions:
  - defined separately in project documentation
  - translation keys and locale-aware routing must be changed carefully

---

## Important flows
- app bootstrapping:
  - frontend entry is served by Vite through `frontend/index.html`
  - the initial page payload is passed through Inertia bootstrapping
  - MSW does not generate the initial HTML page; it starts after frontend bootstrap
- sign in:
  - the sign-in page is rendered through Inertia
  - form submission is performed through `useForm().post(...)`
  - validation and response behavior must stay compatible with Inertia expectations
  - localized and non-localized routes may both exist depending on backend/mock setup
- sign up:
  - the sign-up page is rendered through Inertia
  - form submission is performed through `useForm().post(...)`
  - route shape must match backend/mock handlers exactly
- locale handling:
  - locale can appear in route paths
  - some routes may exist both with and without explicit locale
  - default locale may be injected by backend/mock layer instead of browser-side redirect
- protected pages:
  - `/account/**/*` and `/admin/**/*` require authenticated access
  - auth checks may happen in backend or mock middleware layer
- admin pages:
  - admin pages rely on shared admin navigation/menu props
  - page rendering and layout behavior must stay consistent with admin shared props
- MSW mode:
  - enabled through `VITE_MSW` in `frontend/.env.local`
  - intended for local Vite dev mode
  - mock handlers should emulate backend behavior closely enough for Inertia flows, auth checks, and locale handling

---

## Sensitive areas
- Inertia page contract and page prop shape
- route definitions and locale-aware routing
- sign-in and sign-up flow
- auth redirects and protected route checks
- layout behavior, especially when layout depends on server/shared props
- `usePage().props` consumers
- FSD boundaries and file placement decisions
- MSW handlers and their alignment with backend route behavior
- i18n key structure and translation-dependent UI logic
- shared UI/app providers

---

## Common risks
- treating the project like a classic SPA with arbitrary fetch/API calls
- changing route shape without updating mock/backend handlers
- breaking Inertia expectations for form submissions and validation responses
- introducing redirect loops in locale/auth logic
- causing unnecessary rerenders/remounts through shared props or layout dependencies
- moving code across FSD layers without clear architectural reason
- changing translation keys or locale behavior too broadly
- letting MSW behavior drift away from real backend expectations
- touching app-level or shared abstractions for a local task

---

## What AI should know before making changes
- this project is Inertia-driven, not a free-form client API architecture
- local fixes should stay local; broad restructuring is high-risk
- any routing, auth, locale, layout, or shared props change must be treated as sensitive
- changes to MSW handlers must preserve compatibility with real backend intent
- components using `usePage().props` may rerender when any shared props change
- persistent layout optimizations must be validated against server-driven props
- FSD placement decisions should preserve existing layer rules and business boundaries
- i18n changes should avoid broad uncontrolled rewrites
- before write-mode changes, AI must know:
  - goal
  - allowed files
  - forbidden zones
  - invariants
  - acceptance criteria
  - verification method