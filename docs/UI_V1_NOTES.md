# UI v1 notes (apps/mobile)

## v1.1 — Duolingo-faithful path + curriculum wired

Color choice: lesson CTAs use classic Duolingo green `#58CC02` with ledge `#46A302`; Solana purple `#9945FF` stays as a secondary accent (Unit 1 banner, kickers). Each unit banner has its own color.

| Area | 5b6f49f | v1.1 |
|---|---|---|
| Paths tab | 6 nodes, one per path title | Unit banner per path (UNIT n, title, blurb, FREE/PRO) + zigzag trail with one node per micro-lesson (17 total) |
| Curriculum | `stubs/paths.ts` titles only | `src/data/curriculum.ts` mirrors Prasm-content e645998: 6 paths, 17 lessons, phil-01 + sol-01 questions embedded |
| Lesson player | none | `LessonScreen`: tip → MCQ → CHECK → feedback → CONTINUE → end card (+10 XP, score) |
| Node taps | none | Current seeded → lesson; skeleton → "Coming soon" sheet with teaser; locked/PRO → info sheet |
| Unlock | static | phil-01 and sol-01 current by default; finishing a lesson marks it done and unlocks the next |
| Home | static up-next | Up next = first unfinished seeded lesson; Start opens it |
| CTA color | purple | Duo green; wrong answers use red ledge |
| Tab bar | purple active | teal active outline |

Still stubs: progress not persisted, wallet connect unavailable, 15 lessons skeleton-only. Not run on device in this revision (no expo start / typecheck). No trading, signing, or custody. English only.

## v1 (5b6f49f)

Navy palette, HUD chips, ledge buttons, winding path-title nodes, emoji tab bar, connect-only wallet.
