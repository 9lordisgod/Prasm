// Connect-only wallet stub. Mobile Wallet Adapter will be wired later.
// This app never signs transactions, never trades, and never holds keys.
export type WalletResult = { ok: false; reason: 'unavailable' };

export async function connectWallet(): Promise<WalletResult> {
  return { ok: false, reason: 'unavailable' };
}

export async function disconnectWallet(): Promise<WalletResult> {
  return { ok: false, reason: 'unavailable' };
}
