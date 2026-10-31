# Prasm

[![License: MIT](https://img.shields.io/badge/License-MIT-black.svg)](LICENSE)
![Status: scaffold](https://img.shields.io/badge/status-scaffold-lightgrey)
![Solana Mobile](https://img.shields.io/badge/Solana%20Mobile-Seeker-black)

**Duolingo-style crypto education for Solana Mobile (Seeker)** — daily lessons, streaks, points, optional Seeker wallet connect for progress sync. Curriculum content lives in the private sibling repo `Prasm-content`.

> **Honesty:** This is a fresh scaffold. No live curriculum ship, no App Store listing, no custody, no trading.

## What this repo owns

- App shell (Expo / React Native target for Seeker)
- UI + gamification logic (XP, streaks, daily goals) — stubs first
- Solana Mobile Wallet Adapter (MWA) **connect / disconnect** only — never signs trades, never holds keys
- Database schema + migrations for progress / entitlements

## What this repo does **not** own

- Question bank, path text, or answer keys → `Prasm-content` (private)
- Trading, swaps, sniping, or wallet custody
- Code copied from `cypherpunk-code` / `cypherpunk-mobile` (inspiration only: multi-path learning)

## Principles

1. **Education first** — lessons and practice, not a terminal.
2. **Propose / connect only** — wallet is optional identity + progress sync; keys never enter lesson UI.
3. **Content split** — public app, private curriculum so answer keys stay closed.
4. **No overclaims** — stubs labeled stubs.
5. **English-only** — README, code, comments, docs, and UI copy in this repo are English.

## Layout

```
apps/mobile/          Expo app shell
src/
  gamification/       XP, streaks, daily goal stubs
  wallet/             MWA connect stub (no sign / broadcast)
  db/                 Client types for progress schema
schema/
  migrations/         SQL migrations
  README.md           Schema overview
docs/                 Product notes
```

## Sibling content repo

Private: https://github.com/9lordisgod/Prasm-content  
The app loads packaged or signed content snapshots; it does not embed answer keys in this tree.

## License

[MIT](LICENSE) © 2026 Anon Rothschild.
