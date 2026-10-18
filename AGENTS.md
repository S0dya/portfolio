## Running commands in this repo (Windows / PowerShell 5.1)

**There is exactly one sanctioned way to run anything: `run.ps1`.** Never invoke
`npm`, `npx`, `astro`, `node` or any script directly.

```powershell
powershell.exe -NoProfile -ExecutionPolicy Bypass -File "C:\Users\Sdnnp\AppData\Local\Temp\opencode\run.ps1" `
  -Exe "npm.cmd" -Args "run build" `
  -WorkDir "E:\Projects\AI Projects\Site" `
  -Log "C:\Users\Sdnnp\AppData\Local\Temp\opencode\build.log" `
  -TimeoutSec 240 -HeartbeatSec 10 -Retry 1
```

The wrapper exists because three separate failures kept costing whole sessions.
Each is now impossible:

1. **A command can never hang silently.** The wrapper prints a heartbeat every
   `-HeartbeatSec`, showing time left, output bytes and how long the command has
   been quiet. A stuck command is visible in seconds, so it can never be
   mistaken for "still working". Verified against an infinite loop: killed at
   31s against a 30s budget, exit 124.
2. **A command can never outlive its budget.** Hard deadline, then the whole
   process tree is killed. Exit `124` = timed out, `125` = stalled.
3. **`2>&1` is banned.** Proven to return instantly capturing **0 lines**, and to
   hang 600s in the agent shell. Astro writes progress to **stdout**; stderr is
   empty, so merging is pure downside. The wrapper keeps them in separate files.

Parameter notes:

- `-Args` is a **single string** (`"run build"`). An array collapses into one
  token and npm errors with `Unknown command: "run,build"`.
- Never `cd` into the project - the path contains spaces. Pass `-WorkDir`.
- Always pass `-TimeoutSec`. Omitting it falls back to 120s.
- Use `-Retry 1` for builds only. Retrying a scrape or download can double-write.

Never write `Start-Sleep` polling loops in a visible command to wait on a
server - that is what reads as "stuck". Put the wait *inside* the script the
wrapper runs, so the heartbeat covers it (see `shot/all.ps1` for the
build + serve + capture pattern).

Script-specific rules:

- A page-scrolling script must snapshot `document.body.scrollHeight` **once**.
  Re-reading it in a loop never terminates, because lazy images grow the page as
  they load. This caused three separate timeouts.
- Top-level `await` is invalid in `.cjs`. Wrap in an async IIFE or rename to `.mjs`.
- In a PowerShell here-string, `\$` is **not** an escape - it emits a literal
  backslash-dollar. Use `` `$ `` or, better, avoid regex (`$` in a JS regex
  literal written from PowerShell breaks silently).
- An unescaped `\/` inside a JS regex literal prevents the literal from ever
  terminating. Use `new RegExp('...')` for patterns containing slashes.
- `[slug].astro` must be addressed with `Select-String -LiteralPath`; `[` is a
  wildcard in PowerShell paths.

## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)
