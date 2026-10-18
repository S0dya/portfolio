---
title: "RogueArcher"
summary: "A physics-based roguelike archer where you fight waves of ragdoll archers, build increasingly powerful combinations through upgrades, and progress through configurable levels and boss encounters."
year: "2026"
role: "Gameplay, physics, architecture, backend"
status: "in-dev"
category: "mobile"
platform: "Android, Web"
cover: "/media/projects/roguearcher.gif"
coverThumb: "/media/projects/thumbs/roguearcher.gif"
coverWidth: 800
coverHeight: 352
coverIsGif: true
featured: true
order: 1
tags: ["Unity", "C#", "Zenject", "UniTask", "UniRx", "DOTween", "ASP.NET Core"]
accent: "#ab85a8"
---

Alongside gameplay development, RogueArcher uses a custom **client-server
architecture** built on my own ASP.NET backend - [Nexus](/projects/nexus). The
backend handles player accounts, profiles, leaderboards, analytics, and remote
configuration.

## My Role

- Gameplay programming and physics implementation
- Unity architecture and technical design
- Roguelike progression and upgrade systems
- Level, wave and boss systems
- Client-server architecture
- ASP.NET backend development and Unity backend integration

## Physics & Gameplay

- Physics-based ragdoll archers with responsive aiming and shooting controls
- Physical arrow behavior: projectile physics, penetration checks, collisions,
  sticking and body interaction

## Roguelike Progression

- Configurable roguelike upgrade system supporting stacking stat modifications and
  gameplay effects
- Upgrades and arrow effects designed to scale without requiring large conditional
  systems
- Progression flow around enemy waves, upgrades and boss encounters

## Levels & Enemies

- Parameterized level generation driven by configs data, scaling across 100+ levels
- Configurable level and wave systems
- Enemy archers designed around a scalable AI state machine

## Architecture

- Systems support adding new enemies, upgrades, effects and boss behaviors without
  rewriting existing gameplay
- Combat is designed around runtime contexts, so upgrades and effects can modify
  projectiles without changing core projectile code
- Config-driven architecture for balancing enemies, weapons, upgrades, waves and
  levels

## Technical Decisions & Tradeoffs

- **Shared Archer Architecture** - player-controlled and AI-controlled archers use the
  same underlying body and combat systems. Input and AI only decide which commands to
  send, preventing duplicated gameplay logic.
- **Physics controls instead of direct transforms** - the archer body is controlled
  through Rigidbody2D forces, joints and physics-based movement where appropriate,
  preserving the unstable physical behavior while keeping aiming responsive.
- **Config-driven gameplay** - levels, waves, enemies and progression values are
  separated from gameplay code to make balancing and content iteration faster.
- **Scalable enemy design** - regular enemies and bosses are built around shared
  foundations. Bosses can later extend the same system with additional states,
  attacks and mechanics instead of requiring a separate architecture.

## Technical Stack

Unity, C#, Zenject, UniTask, UniRx, DOTween. ASP.NET Core, PostgreSQL,
Entity Framework Core, JWT Authentication, REST API.