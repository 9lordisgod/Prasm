# apps/mobile

Expo (React Native, TypeScript) shell for Prasm on Solana Mobile Seeker.

## Run

```
cd apps/mobile
npm install
npx expo install --fix
npx expo start
```

## UI v1.1 (Duolingo-style learning shell)

Duolingo-style learning UX adapted for blockchain teaching (not language), with light Solana Mobile accents. Patterns are adapted, not the Duolingo brand.

- **Palette** (`src/theme.ts`): navy canvas `#131F24`, surfaces `#1F2C34`, Duo green `#58CC02` / ledge `#46A302` for lesson CTAs (START, CHECK, CONTINUE), Solana purple `#9945FF` for the first unit banner, streak orange, XP yellow, wrong red `#FF4B4B`.
- **Curriculum** (`src/data/curriculum.ts`): 6 paths / 17 micro-lessons mirrored from Prasm-content (public metadata only). `phil-01` and `sol-01` are seeded with 3 questions each and fully playable offline; the rest are skeletons that show a "Coming soon" sheet.
- **Paths tab**: per-path colored unit banner (UNIT n, title, blurb, FREE/PRO) and a zigzag trail of lesson nodes (one per micro-lesson). Done / current (START bubble) / locked states. PRO paths stay locked.
- **Lesson player** (`src/screens/LessonScreen.tsx`): tip card, multiple choice one at a time, CHECK, correct/wrong footer with explanation, CONTINUE, end card with XP + score. Finishing unlocks the next node.
- **Learn tab**: HUD, "gm", Up next card driven by the first unfinished seeded lesson.
- **Wallet**: connect-only, Seed Vault note.

Progress is in-memory only (resets on reload). See [`docs/UI_V1_NOTES.md`](../../docs/UI_V1_NOTES.md).

No trading, no signing, no custody. All UI strings: English.
