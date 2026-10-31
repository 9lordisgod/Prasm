/**
 * MWA session stub for Solana Mobile / Seeker.
 * Connect / disconnect only. No sign, no broadcast, no custody, no trading.
 */

export type MwaPublicSession = {
  connected: boolean;
  /** Base58 pubkey when connected — identity only */
  address: string | null;
};

export type MwaConnectResult =
  | { ok: true; session: MwaPublicSession }
  | { ok: false; reason: "cancelled" | "unavailable" | "error"; detail?: string };

/** Placeholder — wire to Solana Mobile Wallet Adapter authorize in a later slice. */
export async function connectMwa(): Promise<MwaConnectResult> {
  return {
    ok: false,
    reason: "unavailable",
    detail: "MWA authorize not wired yet — stub only",
  };
}

export async function disconnectMwa(
  _session: MwaPublicSession,
): Promise<void> {
  return;
}
