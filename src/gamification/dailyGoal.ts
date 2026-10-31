/** Daily goal stub — threshold comes from content pack rules, not hardcoded answers. */

export type DailyGoal = {
  lessonsTarget: number;
  lessonsDone: number;
};

export function dailyGoalMet(goal: DailyGoal): boolean {
  return goal.lessonsDone >= goal.lessonsTarget;
}
