---
title: "Template Pipeline"
description: "A reusable project template that shipped 33 mobile apps in 14 months. New app setups dropped from days to hours, and reskins became a 2-4 hour job with zero new code."
year: 2025
role: "Template architecture, build pipeline, iOS CI"
status: "live"
platform: "Android, iOS"
featured: true
order: 5
tags: ["Unity", "C#", "Template", "CI/CD", "Tooling"]
accent: "#c86bf0"
---

The most useful thing I built at a studio that shipped 33 mobile apps in about
14 months. It is not a game - it is the system that made shipping them fast.

## The problem

Shipping a new mobile app should not mean re-implementing analytics, ads, IAP,
attribution and platform builds every time. But that is what happened when each
app was a fresh project.

## The solution

One reusable project template, always updated in place, with a git branch per app
for visuals only. A fixed wrapper layer (analytics, attribution, ads, platform
SDKs) that never changes, plus a game layer on top.

- 33 apps shipped from one template in 14 months
- Reskins reduced to **2-4 hours of asset and UI work, zero new code**
- New app setup went from a multi-day process to a fraction of that

## Release engineering

- Set up and maintained iOS builds through the company CI, because not every
  developer had a MacBook
- Android and iOS from the same project, no rework for the second platform