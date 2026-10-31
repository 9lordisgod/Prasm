/** Gamification stubs — no content answers here. */

export type XpEvent = {
  delta: number;
  reason: "lesson_complete" | "streak_bonus" | "daily_goal" | "practice";
};

export type StreakState = {
  current: number;
  longest: number;
  lastActiveDate: string | null; // YYYY-MM-DD
};

export function applyXp(total: number, event: XpEvent): number {
  return Math.max(0, total + event.delta);
}

/** Pure date helper — wire to device calendar in the app shell. */
export function nextStreak(state: StreakState, today: string): StreakState {
  if (state.lastActiveDate === today) return state;
  const yesterday = addDays(today, -1);
  const current =
    state.lastActiveDate === yesterday ? state.current + 1 : 1;
  return {
    current,
    longest: Math.max(state.longest, current),
    lastActiveDate: today,
  };
}

function addDays(isoDate: string, days: number): string {
  const d = new Date(isoDate + "T12:00:00Z");
  d.setUTCDate(d.getUTCDate() + days);
  return d.toISOString().slice(0, 10);
}
