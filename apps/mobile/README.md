# apps/mobile

Expo (React Native, TypeScript) shell for Prasm on Solana Mobile Seeker.

## Run

```
cd apps/mobile
npm install
npx expo install --fix
npx expo start
```

## UI v1 (casual Solana Mobile + Duolingo patterns)

Duolingo-style learning UX adapted for blockchain teaching (not language), with a relaxed Solana Mobile feel. Patterns are adapted, not the Duolingo brand.

- **Palette** (`src/theme.ts`): navy canvas `#131F24`, surfaces `#1F2C34`, Solana purple `#9945FF` for primary actions, Solana green `#14F195` for progress/correct, streak orange `#FF9600`, XP yellow `#FFC800`. Spacing and radius tokens.
- **HUD** (`src/components/Hud.tsx`): streak, XP, and daily goal chips with a progress bar.
- **Ledge button** (`src/components/PrimaryButton.tsx`): chunky face plus darker bottom ledge that collapses on press.
- **Skill nodes** (`src/components/PathNode.tsx`): circular nodes on a winding left/right path; done / current / locked states.
- **Screens**: Learn (HUD, "gm", up-next lesson card, safety tip), Paths (winding node map), Wallet (connect-only, friendly copy).
- **Tab bar**: emoji icons with labels (Learn, Paths, Wallet).

See [`docs/UI_V1_NOTES.md`](../../docs/UI_V1_NOTES.md) for the change list.

No trading, no signing, no custody. All UI strings: English.
