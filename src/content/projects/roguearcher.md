---
title: "RogueArcher"
description: "A physics-based roguelike on Android and Web. Config-driven enemies, waves and progression, built on a custom client-server architecture with my own ASP.NET backend."
year: 2026
role: "Gameplay, physics, architecture, backend integration"
status: "in-dev"
platform: "Android, Web"
featured: true
order: 3
tags: ["Unity", "C#", "ASP.NET", "Client-Server", "Physics"]
github: "https://github.com/S0dya/Nexus"
accent: "#f0913f"
---

Fight waves of ragdoll archers, build combinations through upgrades, and push
through configurable levels and boss encounters. Currently in development, on
Android and Web.

## What it is built around

This is as much an architecture exercise as a game. The whole thing is
**client-server from the start** - player accounts, cloud saves, leaderboards,
analytics and remote config all live behind my own ASP.NET backend, so the game
does not depend on a hosted service to have progression.

## Physics and gameplay

- Physics-based ragdoll archers with responsive aiming and shooting
- Projectile physics with penetration checks, collisions, sticking and body
  interaction
- Configurable roguelike upgrade system with stacking stat modifications
- Parameterized level generation, 100+ levels

## Architecture decisions

- **Shared archer architecture.** Player-controlled and AI-controlled archers use
  the same body and combat systems. Input and AI only decide which commands to
  send. This prevents duplicated gameplay logic.
- **Physics controls, not direct transforms.** Force-based movement on rigidbodies,
  to preserve physical behavior while keeping aiming responsive.
- **Config-driven gameplay.** Levels, waves, enemies and progression values are
  separated from gameplay code, so balancing and content iteration are fast.

The point of all three: adding a new enemy, upgrade or boss extends the system
instead of rewriting core gameplay.