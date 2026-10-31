import { StyleSheet, Text, View } from 'react-native';
import { colors, radius, space } from '../theme';

type Props = { streakDays: number; totalXp: number; todayXp: number; dailyGoalXp: number };

export function Hud({ streakDays, totalXp, todayXp, dailyGoalXp }: Props) {
  const pct = Math.min(1, dailyGoalXp ? todayXp / dailyGoalXp : 0);
  return (
    <View style={s.row}>
      <View style={s.chip}><Text style={[s.chipText, { color: colors.streak }]}>🔥 {streakDays}</Text></View>
      <View style={s.chip}><Text style={[s.chipText, { color: colors.xp }]}>⚡ {totalXp} XP</Text></View>
      <View style={[s.chip, s.goal]}>
        <Text style={s.goalLabel}>🎯 {todayXp}/{dailyGoalXp}</Text>
        <View style={s.track}><View style={[s.fill, { width: `${pct * 100}%` }]} /></View>
      </View>
    </View>
  );
}

const s = StyleSheet.create({
  row: { flexDirection: 'row', gap: space.sm, marginBottom: space.md },
  chip: { backgroundColor: colors.surface, borderRadius: radius.pill, paddingVertical: 8, paddingHorizontal: 14, borderWidth: 2, borderColor: colors.border },
  chipText: { fontWeight: '800', fontSize: 15 },
  goal: { flex: 1, justifyContent: 'center' },
  goalLabel: { color: colors.text, fontWeight: '700', fontSize: 12, marginBottom: 4 },
  track: { height: 8, borderRadius: radius.pill, backgroundColor: colors.border, overflow: 'hidden' },
  fill: { height: 8, backgroundColor: colors.green, borderRadius: radius.pill },
});
