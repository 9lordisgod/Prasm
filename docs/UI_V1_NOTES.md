# UI v1 notes (apps/mobile)

Revision of the first Expo shell toward Duolingo learning patterns with a casual Solana Mobile feel.

| Area | Before | After |
|---|---|---|
| Palette | Zinc black/gray | Navy `#131F24` / `#1F2C34`, purple `#9945FF` CTA, green `#14F195` progress, orange `#FF9600` streak, yellow `#FFC800` XP |
| Tokens | Colors only | Adds `space` and `radius` tokens |
| Home | Three stat cards | HUD chips (streak, XP, goal bar), "gm" greeting, up-next lesson card, ledge "Start a lesson" button, safety tip card |
| Paths | Flat list of titles | Winding vertical skill nodes (72 px circles, left/right offsets), current node with START bubble, locked nodes |
| Wallet | Plain buttons | Card with ledge Connect and ghost Disconnect, friendly copy, Seed Vault reassurance |
| Tab bar | Text-only | Emoji icon + label, active pill outline (Learn, Paths, Wallet) |
| Buttons | TouchableOpacity text | `PrimaryButton` with face + darker bottom ledge, press collapses ledge |

Still stubs: progress values, path unlock state, wallet connect (returns unavailable). No trading, signing, or custody. English only.
