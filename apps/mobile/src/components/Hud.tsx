import { StyleSheet, Text, View } from 'react-native';
import { colors, radius, space } from '../theme';

// Top HUD chips like Duolingo: streak flame, XP gem, daily goal bar.
export function Hud({ streak, xp, goal, goalTarget }: { streak: number; xp: number; goal: number; goalTarget: number }) {
  const pct = Math.min(1, goalTarget ? goal / goalTarget : 0);
  return (
    <View style={s.row}>
      <Text style={[s.chip, { color: colors.streak }]}>🔥 {streak}</Text>
      <Text style={[s.chip, { color: colors.xp }]}>⚡ {xp} XP</Text>
      <View style={s.goal}>
        <View style={s.bar}><View style={[s.fill, { width: `${pct * 100}%` }]} /></View>
        <Text style={s.goalText}>{goal}/{goalTarget}</Text>
      </View>
    </View>
  );
}

const s = StyleSheet.create({
  row: { flexDirection: 'row', alignItems: 'center', gap: space.md, marginBottom: space.md },
  chip: { fontSize: 16, fontWeight: '800' },
  goal: { flex: 1, flexDirection: 'row', alignItems: 'center', gap: space.sm },
  bar: { flex: 1, height: 14, borderRadius: radius.pill, backgroundColor: colors.border, overflow: 'hidden' },
  fill: { height: '100%', backgroundColor: colors.cta, borderRadius: radius.pill },
  goalText: { color: colors.muted, fontWeight: '800', fontSize: 12 },
});
