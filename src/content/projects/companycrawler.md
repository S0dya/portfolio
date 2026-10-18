---
title: "CompanyCrawler"
summary: "A configurable website crawler for researching companies at scale. Give it a CSV of company websites and a preset, and it explores each domain, analyzes pages, and generates a report."
year: "2025"
role: "Design, implementation, release"
status: "tool"
category: "tools"
platform: ".NET, Playwright"
cover: "/media/projects/companycrawler-main.png"
coverWidth: 1200
coverHeight: 480
order: 3
tags: ["C#", ".NET", "Playwright", "CLI", "CSV", "Open source"]
github: "https://github.com/S0dya/CompanyCrawler"
accent: "#4caf50"
---

Crawl company websites, find career pages and emails, analyze keywords, and export
everything into a CSV.

<img src="/media/projects/companycrawler-output.png" alt="CompanyCrawler output" width="1895" height="485" loading="lazy" decoding="async" />

## Why

Researching companies manually is slow. Opening hundreds of websites just to answer
questions like is this company hiring, where is their careers page, what technologies do
they use, is there an HR email - gets repetitive very quickly. CompanyCrawler automates
the process.

## Features

### Career Page Detection

Automatically finds pages related to careers, jobs, vacancies, hiring, recruitment and
company culture.

### Email Discovery

Extracts company emails and automatically ranks them by relevance - `hr@`, `jobs@`,
`careers@`, `recruitment@`. Higher quality contacts appear first in the final report.

### Keyword Analysis

Analyze websites for any keywords or phrases.

### External Link Detection

Extracts external company profiles such as LinkedIn, GitHub, Upwork, HH.ru, Glassdoor
and Indeed.

### JSON Presets

Crawler behavior is configurable through JSON presets. A preset controls crawl depth,
maximum pages, keyword analyzers, scoring, output columns and link categories, so
different workflows can be created without touching the code.

## How crawling works

For every company: download the homepage, parse internal links, locate the sitemap,
crawl discovered pages, detect important pages, extract emails, analyze keywords, export
results.

## Technical Stack

C#, .NET, Playwright. MIT licensed.

Originally built to automate my own job search, but the crawler itself is generic.