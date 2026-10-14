---
title: "StoneFlow"
description: "A puzzle merge game built for small teams. Config-driven for fast rebalancing, with Firebase Remote Config and a local fallback so gameplay never blocks on the network."
year: 2025
role: "Gameplay and architecture, backend"
status: "live"
platform: "Android, Web"
featured: true
order: 2
tags: ["Unity", "C#", "Firebase", "Remote Config", "Architecture"]
video: "https://www.youtube.com/shorts/9gGNEVwmjSg"
accent: "#22c58b"
---

Classic 2048 merge with added depth through directional pushes, chain reactions
and meta abilities. Small team: programmer, artist, designer.

## My role

Gameplay and architecture, Firebase backend, technical design and refactoring.

## Systems

- Shockwave push and merge, with chain merges and combos
- Classic 2048 swap, plus limited-use abilities
- Undo system with state rollback
- Centralized game state: controllers mutate state, views react via signals
- Built to support new variants and reskins without rewriting systems
- Config-driven, for fast balancing

## Backend that never bricks the game

Firebase Remote Config with fallback to local configs, plus Analytics and
auth for leaderboards.

The fallback is the point. Backend-dependent systems fall back to local values,
so **gameplay is not blocked if Firebase is unreachable**. Most integrations
skip this and ship a bricked app over.

## Tradeoff

I replaced my own enum event system with Zenject Signals, to align with an
industry-standard DI approach rather than keep a custom one.