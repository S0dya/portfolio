---
title: "Nexus"
summary: "A self-built game backend covering auth, cloud saves, leaderboards, inventory, shop and analytics as independent feature modules. Per-device refresh tokens, optimistic cloud saves, transactional purchases."
year: "2026"
role: "Backend architecture and development"
status: "backend"
category: "tools"
platform: "ASP.NET Core, PostgreSQL, Redis"
cover: "/media/projects/nexus.svg"
coverWidth: 640
coverHeight: 400
featured: true
order: 2
tags: ["ASP.NET Core", "EF Core", "PostgreSQL", "Redis", "JWT", "Docker"]
github: "https://github.com/S0dya/Nexus"
accent: "#56a8f5"
---

Auth, cloud saves, leaderboards, inventory, shop and analytics sit behind thin
controllers, with a service layer underneath.

## Systems

- **Per-device JWT refresh tokens with independent revocation** - a player signed in on
  two phones holds two separately revocable sessions instead of one shared token;
  guest accounts link to a real account on registration without losing progress.
- **Cloud saves use optimistic concurrency by version number** - a write is rejected
  if the client's version is behind what's stored, so an old client can't silently
  overwrite a newer save.
- **Shop purchases run spend, grant and audit-record writes inside a single DB
  transaction**, so a failure partway through can't leave a player's inventory in a
  broken state; every inventory change carries an audit record with a reason and a
  reference ID.
- **Analytics runs on a generic event shape** - events are written immediately and
  processed later in batches by a background worker, so a request never waits on
  analytics work; leaderboards are paginated at the database level with Redis caching
  on top.

## Used by

RogueArcher runs its meta-progression - accounts, cloud saves, leaderboards,
analytics - through this backend.

## Technical Stack

ASP.NET Core, PostgreSQL, EF Core, Redis, JWT, Docker.