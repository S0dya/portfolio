---
title: "Match 3 Drop"
summary: "A match 3 puzzle shipped to Google Play. Config-driven level generation supporting 200+ levels, a no-code animation and effects sequencing tool, and a roughly 30% cut in runtime memory."
year: "2025"
role: "Systems architecture, gameplay, tooling"
status: "released"
category: "mobile"
platform: "Android, Web"
cover: "/media/projects/match3drop.gif"
coverThumb: "/media/projects/thumbs/match3drop.gif"
coverWidth: 800
coverHeight: 450
coverIsGif: true
featured: true
order: 4
tags: ["Unity", "C#", "Level generation", "Zenject", "Tooling", "Performance"]
video: "https://youtu.be/T3hs_jqAaV4"
play: "https://play.google.com/store/apps/details?id=com.PinkThing.Match3P"
accent: "#688cf5"
storeShots:
  - "/media/stores/match3drop-1.webp"
  - "/media/stores/match3drop-2.webp"
  - "/media/stores/match3drop-3.webp"
  - "/media/stores/match3drop-4.webp"
  - "/media/stores/match3drop-5.webp"
  - "/media/stores/match3drop-6.webp"
---

Drop colored balls from a moving rope into columns to complete level conditions.
Published on Google Play.

## Systems

- Config-driven level generation supporting **200+ levels**, cutting level creation
  and balancing time by **70%**
- No-code animation and effects sequencing tool - ordered execution, skipping, reuse -
  used across the UI and gameplay feel
- Gameplay architected around a centralized game-state model, controllers mutating
  state and views reacting via signals, migrated to **Zenject Signals**
- Runtime memory reduced by approximately **30%** by eliminating unnecessary
  allocations and optimizing update-heavy systems for lower-end mobile devices

## Tradeoff

Config design over handcrafted levels. You give up precise per-level authoring and get
iteration speed and content volume instead, which is the right trade for a mobile
puzzle title that ships updates.

## Technical Stack

Unity, C#, Zenject, Firebase Remote Config, Firebase Analytics.