// Thin local stubs. Real values will come from the progress schema.
export type Progress = { dailyGoalXp: number; todayXp: number; streakDays: number; totalXp: number };

export function getProgressStub(): Progress {
  return { dailyGoalXp: 30, todayXp: 0, streakDays: 0, totalXp: 0 };
}
