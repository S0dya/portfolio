---
title: "Nexus - ASP.NET Backend"
description: "A game backend built for player accounts, cloud saves, leaderboards, analytics and remote config. The server side of my client-server mobile architecture."
year: 2026
role: "Backend architecture and development"
status: "backend"
platform: "ASP.NET Core, PostgreSQL"
featured: true
order: 4
tags: ["ASP.NET Core", "PostgreSQL", "JWT", "REST", "EF Core"]
github: "https://github.com/S0dya/Nexus"
accent: "#4fc3d9"
---

Most mobile games ship a client and then bolt a backend on later, badly. This
one exists so a mobile game has progression from the start.

## What it does

- Anonymous and registered accounts, so players are not blocked by a login wall
- JWT authentication with a refresh token flow
- Player profiles and cloud save infrastructure
- Leaderboards
- Analytics events
- Remote configuration, so the game can be tuned without shipping a build

## Stack

ASP.NET Core, PostgreSQL, JWT auth, REST API, EF Core.

## Why build it instead of using a hosted service

Hosted services (Firebase, PlayFab and so on) are the right call for many games,
and I use them where they fit. Owning the backend means the game is not tied to a
vendor's pricing, rate limits or shutdown, and it is the difference between a
mock leaderboard and a real one.

For freelance work this is the same skill studios ask for most: taking a game
that has no backend and giving it accounts, progression and leaderboards.