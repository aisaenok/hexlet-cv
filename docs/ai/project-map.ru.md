> Русская версия для чтения.
> Каноническая версия: `./project-map.md`

# Карта проекта

## Project
hexlet-cv

## Goal
Hexlet CV — это fullstack web application для создания и публикации профессиональных CV, в первую очередь для IT-специалистов.

С инженерной точки зрения проект построен вокруг:
- React UI, рендерящегося через Inertia
- server-driven routing и page responses
- shared page props и навигации через layout
- локальной разработки с optional MSW-based mock backend
- многоязычного UI с locale-aware routing

ИИ должен рассматривать этот проект как Inertia-driven application, а не как классическую SPA с произвольными client-side API calls.

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
  - проект следует соглашениям Feature-Sliced Design
  - перенос файлов между слоями считается high-risk изменением
- Inertia:
  - для обычных page flows нет произвольного client-side API layer
  - навигация по страницам выполняется через Inertia GET
  - mutations обычно выполняются через Inertia forms
  - сервер возвращает Inertia pages и props
- shared props:
  - общие данные навигации/меню
  - общие page-level данные, переиспользуемые в account/admin зонах
  - компоненты, использующие `usePage().props`, чувствительны к глобальным обновлениям props
- layouts:
  - каждая Inertia page определяет default layout
  - поведение layout может зависеть от server-provided props
  - предположения о persistent layout нужно проверять особенно осторожно
- forms:
  - стандартные form flows используют `useForm()` из Inertia React adapter
  - поведение форм должно оставаться согласованным с server-side routes и форматом валидации
- typing conventions:
  - определены отдельно в документации проекта
  - DTO и contracts page props нельзя менять без необходимости
- i18n conventions:
  - определены отдельно в документации проекта
  - translation keys и locale-aware routing нужно менять осторожно

---

## Important flows
- app bootstrapping:
  - frontend entry отдается Vite через `frontend/index.html`
  - initial page payload передается через Inertia bootstrapping
  - MSW не генерирует initial HTML page; worker стартует после frontend bootstrap
- sign in:
  - sign-in page рендерится через Inertia
  - отправка формы выполняется через `useForm().post(...)`
  - валидация и формат ответа должны оставаться совместимыми с ожиданиями Inertia
  - в зависимости от backend/mock setup могут существовать и localized, и non-localized routes
- sign up:
  - sign-up page рендерится через Inertia
  - отправка формы выполняется через `useForm().post(...)`
  - shape маршрута должен точно совпадать с backend/mock handlers
- locale handling:
  - locale может присутствовать в path маршрута
  - часть routes может существовать и с locale, и без явного locale
  - default locale может внедряться backend/mock layer, а не browser-side redirect
- protected pages:
  - `/account/**/*` и `/admin/**/*` требуют authenticated access
  - auth checks могут выполняться в backend или mock middleware layer
- admin pages:
  - admin pages зависят от shared admin navigation/menu props
  - page rendering и поведение layout должны оставаться согласованными с admin shared props
- MSW mode:
  - включается через `VITE_MSW` в `frontend/.env.local`
  - предназначен для локального Vite dev mode
  - mock handlers должны достаточно точно эмулировать backend behavior для Inertia flows, auth checks и locale handling

---

## Sensitive areas
- Inertia page contract и shape page props
- route definitions и locale-aware routing
- sign-in и sign-up flow
- auth redirects и проверки protected routes
- поведение layout, особенно если layout зависит от server/shared props
- consumers, использующие `usePage().props`
- границы слоев FSD и решения по размещению файлов
- MSW handlers и их соответствие backend route behavior
- структура i18n keys и UI logic, зависящая от переводов
- shared UI/app providers

---

## Common risks
- воспринимать проект как классическую SPA с произвольными fetch/API calls
- менять shape маршрутов без обновления mock/backend handlers
- ломать ожидания Inertia для form submissions и validation responses
- создавать redirect loops в locale/auth logic
- вызывать лишние rerenders/remounts через shared props или зависимости layout
- переносить код между слоями FSD без ясной архитектурной причины
- слишком широко менять translation keys или locale behavior
- допускать расхождение MSW behavior и ожиданий реального backend
- трогать app-level или shared abstractions ради локальной задачи

---

## What AI should know before making changes
- этот проект Inertia-driven, а не свободная client API architecture
- локальные фиксы должны оставаться локальными; широкая реструктуризация — high-risk
- любые изменения routing, auth, locale, layout или shared props нужно считать чувствительными
- изменения в MSW handlers должны сохранять совместимость с намерением реального backend
- компоненты, использующие `usePage().props`, могут rerenderиться при любом изменении shared props
- оптимизации persistent layout нужно проверять с учетом server-driven props
- решения по размещению кода в FSD должны сохранять существующие layer rules и business boundaries
- i18n changes не должны превращаться в широкие неконтролируемые переписывания
- перед write-mode изменениями ИИ должен знать:
  - goal
  - allowed files
  - forbidden zones
  - invariants
  - acceptance criteria
  - verification method