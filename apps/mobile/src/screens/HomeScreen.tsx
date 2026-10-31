import { StyleSheet, Text, View } from 'react-native';
import { getProgressStub } from '../stubs/progress';
import { colors } from '../theme';

export function HomeScreen() {
  const p = getProgressStub();
  return (
    <View>
      <Text style={s.title}>Prasm</Text>
      <View style={s.card}>
        <Text style={s.label}>Daily goal</Text>
        <Text style={s.value}>{p.todayXp} / {p.dailyGoalXp} XP</Text>
      </View>
      <View style={s.card}>
        <Text style={s.label}>Streak</Text>
        <Text style={s.value}>{p.streakDays} days</Text>
      </View>
      <View style={s.card}>
        <Text style={s.label}>Total XP</Text>
        <Text style={s.value}>{p.totalXp}</Text>
      </View>
    </View>
  );
}

const s = StyleSheet.create({
  title: { color: colors.text, fontSize: 28, fontWeight: '700', marginBottom: 20 },
  card: { backgroundColor: colors.card, borderColor: colors.border, borderWidth: 1, borderRadius: 12, padding: 16, marginBottom: 12 },
  label: { color: colors.muted, fontSize: 13 },
  value: { color: colors.text, fontSize: 20, marginTop: 4 },
});
