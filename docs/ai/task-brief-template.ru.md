> Русская версия для чтения.
> Каноническая версия: `./task-brief-template.md`

# Шаблон AI Task Brief

Используй этот шаблон для любой нетривиальной AI-assisted задачи в `hexlet-cv`.

Цель brief:
- ограничить scope
- сохранить invariants
- предотвратить посторонние изменения
- сделать результат удобным для review и verification

---

## Goal
Что должно измениться?

Примеры:
- Исправить некорректное rerender-поведение в конкретном компоненте
- Добавить тесты для utility-модуля
- Отрефакторить один локальный модуль без изменения его публичного поведения

---

## Context
Какой минимальный фон должен знать ИИ?

Нужно включать только релевантный контекст:
- назначение feature/module
- текущее поведение
- где проявляется проблема
- важные архитектурные ограничения

Не нужно тащить нерелевантную историю репозитория.

---

## Problem
Что сейчас не так, или какой результат нужен?

Нужно описать:
- текущее поведение
- ожидаемое поведение
- почему это важно

Для багов предпочтительно писать:
- expected behavior
- actual behavior
- условия воспроизведения

---

## Task mode
Выбери один вариант:
- analysis only
- hypotheses only
- plan only
- patch
- tests
- review diff

Если задача рискованная, начинать лучше с:
- analysis only
или
- hypotheses only

---

## Allowed files
Перечисли только те файлы, которые ИИ может менять.

Пример:
- `frontend/src/features/auth/model/useSignInForm.ts`
- `frontend/src/pages/Users/SignIn/Index.tsx`

Если пока никакие изменения не разрешены, так и укажи:
- No write access yet. Analysis only.

---

## Forbidden zones
Перечисли файлы, слои или flow, которые менять нельзя.

Примеры:
- routing
- auth flow вне перечисленных файлов
- shared abstractions
- i18n keys
- layout architecture
- unrelated FSD layers

---

## Invariants
Что должно остаться неизменным?

Примеры:
- public API модуля
- shape маршрутов
- Inertia page contract
- существующие translation keys
- текущее поведение layout вне целевого scope
- существующий backend/mock contract

---

## Expected output
Что именно ожидается от ИИ?

Возможные варианты:
- root cause analysis
- ranked hypotheses
- пошаговый план
- минимальный patch
- test cases
- diff review
- список рисков
- сравнение trade-offs

---

## Acceptance criteria
Как оценивается успешность результата?

Примеры:
- изменены только allowed files
- баг исправлен в описанном сценарии
- нет изменений public API
- не введена новая абстракция
- проходит typecheck
- проходят релевантные тесты

---

## Verification
Как именно проверяется результат?

Возможные проверки:
- typecheck
- unit tests
- integration tests
- manual scenario
- diff review
- локальная визуальная проверка

---

## Constraints and notes
Добавь дополнительные ограничения.

Примеры:
- решение должно остаться локальным
- нельзя переносить файлы между слоями FSD
- нельзя переименовывать translation keys
- не вводить новые hooks без необходимости
- предпочесть минимально возможное изменение

---

## Optional references
Добавляй только те ссылки и материалы, которые реально нужны для задачи:
- релевантная секция документации
- релевантный фрагмент кода
- описание route/flow
- bug report или expected scenario

---

## Пример каркаса brief

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