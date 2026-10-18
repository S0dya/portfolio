---
title: "StoneFlow"
summary: "A 2048-style merge puzzle with added gameplay depth through directional pushes, chain reactions and meta abilities. Config-driven balancing, with a backend integration that does not block gameplay."
year: "2025"
role: "Gameplay and architecture, backend, technical design"
status: "released"
category: "mobile"
platform: "Android, Web"
cover: "/media/projects/stoneflow.gif"
coverThumb: "/media/projects/thumbs/stoneflow.gif"
coverWidth: 300
coverHeight: 384
coverIsGif: true
featured: true
order: 3
tags: ["Unity", "C#", "Zenject", "UniRx", "DOTween", "Addressables", "Firebase"]
video: "https://www.youtube.com/shorts/9gGNEVwmjSg"
play: "https://play.google.com/store/apps/details?id=com.PinkThing.ShockWave"
accent: "#22c58b"
storeShots:
  - "/media/stores/stoneflow-1.webp"
  - "/media/stores/stoneflow-2.webp"
  - "/media/stores/stoneflow-3.webp"
---

Built with a focus on system modularity, config-driven balancing, and a resilient
backend integration.

**Team:** small team - programmer, artist, designer.

## My Role

- Gameplay and architecture
- Backend (Firebase)
- Technical design and refactoring

## Gameplay Systems

- Core shockwave push and merge mechanics with chain merges and combos
- Classic 2048 swap mechanic and limited abilities to widen the gameplay loop
- Undo system with state rollback

## Architecture

- Core gameplay logic is built around a centralized game state, with controllers
  mutating state and views reacting through signals
- Systems made to support new game variants and reskins
- Config-driven project for rapid balancing
- Addressables asset loading: art, audio and UI ship as addressable bundles that load
  on demand and release once nothing references them, instead of one scene carrying
  everything for the whole session

## Backend

- Firebase Remote Config with safe fallback to local configs
- Firebase Analytics for player behavior tracking
- Authentication to support leaderboards

## Technical Decisions & Tradeoffs

- Replaced my own lightweight enum-based event system with Zenject Signals to align
  with industry standards
- Backend dependent systems fall back to local values if Firebase is unavailable, so
  gameplay isn't blocked on backend failures

## Technical Stack

Unity, C#, Zenject, UniRx, DOTween, Addressables, Firebase.