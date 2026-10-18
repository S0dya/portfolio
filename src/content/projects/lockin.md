---
title: "LockIn"
summary: "A session-based focus timer that is server-authoritative. The backend stays the source of truth for the active run and timer; the Unity client re-syncs instead of trusting local state."
year: "2026"
role: "Unity client and ASP.NET backend"
status: "app"
category: "tools"
platform: "Android, PC"
cover: "/media/projects/lockin.gif"
coverThumb: "/media/projects/thumbs/lockin.gif"
coverWidth: 600
coverHeight: 621
coverIsGif: true
order: 2
tags: ["Unity", "UniRx", "Zenject", "UniTask", "ASP.NET Core", "PostgreSQL", "JWT"]
github: "https://github.com/S0dya/LockIn-timer-client"
githubBackend: "https://github.com/S0dya/LockIn-timer-backend"
githubLabel: "Unity client"
githubBackendLabel: "Backend"
accent: "#9d7bff"
---

Unlike traditional Pomodoro timers, runs are not tied to daily resets and can last from
a single session to multiple days depending on the user's workflow.

The backend is the source of truth for every session - timer state, progression and
history all live server-side, with the Unity client kept in sync across devices.

## My Role

- ASP.NET backend architecture
- Unity frontend architecture
- Authentication and synchronization systems
- API and database design
- UI/UX implementation

## Backend

- Session and run lifecycle management
- Run history tracking
- JWT authentication
- Server-side validation and conflict handling for multi-device sync
- PostgreSQL + EF Core architecture

## Frontend

- Reactive MVVM-based Unity architecture using UniRx, Zenject, UniTask
- Backend synchronized timer state and session flow
- UI reactively rebinds to session state (active, paused, idle) with no manual refresh
  calls
- DOTween-driven timer animation and run-progress visualization

## Systems

- **Server-authoritative sessions** - the client re-syncs on launch, login, reconnect
  and foreground/background transitions instead of trusting local state indefinitely
- **Backend timestamps** - the countdown reads from backend timestamps rather than
  local time, so an interrupted app or a dropped connection can't drift the session or
  let a user fake early completion
- **ReactiveProperty app state** - a centralized app state drives views directly, and
  a concurrency guard blocks duplicate requests during session actions
- **Settings isolated from active runs** - timer settings are snapshotted onto a run
  only at creation, enforced with a database-level unique filtered index blocking more
  than one active run per user

## Technical Decisions & Tradeoffs

- Backend acts as the source of truth for session progression and synchronization
  across devices
- Timer settings are isolated from active runs to prevent runtime manipulation of
  current run sessions
- Database-level constraints prevent multiple active runs simultaneously

## Technical Stack

Unity, Zenject, UniRx, UniTask, DOTween. ASP.NET Core, PostgreSQL,
Entity Framework Core, JWT Authentication.