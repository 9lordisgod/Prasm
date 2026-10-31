# apps/mobile

Expo (React Native, TypeScript) shell for Prasm on Solana Mobile Seeker.

## Run

```
cd apps/mobile
npm install
npx expo install --fix
npx expo start
```

## Screens (placeholders)

- **Home**: daily goal, streak, XP (local stubs) - mock: [`docs/mocks/home.svg`](../../docs/mocks/home.svg)
- **Paths**: six path titles only; lesson content lives in the private `Prasm-content` repo - mock: [`docs/mocks/paths.svg`](../../docs/mocks/paths.svg)
- **Wallet**: Connect / Disconnect wired to a stub that reports unavailable (MWA later) - mock: [`docs/mocks/wallet.svg`](../../docs/mocks/wallet.svg)

See the root [README](../../README.md) for architecture and principles.

No trading, no signing, no custody. All UI strings: English.
