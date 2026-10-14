---
title: "Match 3 Drop"
description: "A match 3 puzzle game shipped on Google Play. Config-driven level generation scaled to 200+ levels and cut level building time by about 70 percent."
year: 2024
role: "Systems architecture, gameplay programming, tooling"
status: "released"
platform: "Android, Web"
featured: true
order: 1
tags: ["Unity", "C#", "Level Generation", "Zenject", "Tooling"]
video: "https://youtu.be/T3hs_jqAaV4"
play: "https://play.google.com/store/apps/details?id=com.PinkThing.Match3P"
accent: "#4f7cff"
---

Drop colored balls from a moving rope into columns to complete level conditions.

## My role

Systems architecture and gameplay programming, tooling and pipeline design,
level generation and balancing, UI and gameplay animation systems.

## The interesting part: 200+ levels without handcrafting them

Handcrafting 200 levels is not a content problem, it is a time problem. So the
levels are parameterized and generated from config data instead. Designers
rebalance by changing numbers, not by rebuilding scenes.

- Parameterized level generation driven by config data
- Scales to 200+ levels
- Cut level creation and balancing time by roughly **70%**
- Controlled randomness, to balance player agency against unpredictability

## Reusable systems

- Parameterized level generation driven by config data
- Reusable reward and ad-based helper systems
- Lightweight animation and effects system: ordered execution, skipping, reuse,
  and it needs no code
- Modular UI windows, tutorial and animation sequence systems

## Tradeoff

Config design over handcrafted levels. You give up precise per-level
authoring, you get iteration speed and content volume. For a mobile puzzle game
that ships updates, it is the right trade.