# Prasm schema

Progress and entitlements for the public app. Curriculum bodies are **not** stored here — only IDs that reference the private content pack.

## Tables (v0)

| Table | Purpose |
| --- | --- |
| `users` | Local or server user id; optional wallet pubkey |
| `progress` | lesson_id, score, completed_at |
| `streaks` | current / longest streak, last_active_date |
| `xp_ledger` | points deltas |
| `entitlements` | free vs paid_advanced / subscription_active |

See `migrations/0001_init.sql`.
