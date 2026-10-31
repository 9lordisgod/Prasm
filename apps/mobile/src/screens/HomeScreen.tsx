import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { Hud } from '../components/Hud';
import { PrimaryButton } from '../components/PrimaryButton';
import { getProgressStub } from '../stubs/progress';
import { PATH_TITLES } from '../stubs/paths';
import { colors, radius, space } from '../theme';

type Props = { onStart: () => void };

export function HomeScreen({ onStart }: Props) {
  const p = getProgressStub();
  return (
    <ScrollView>
      <Hud streakDays={p.streakDays} totalXp={p.totalXp} todayXp={p.todayXp} dailyGoalXp={p.dailyGoalXp} />
      <Text style={s.hello}>gm 👋</Text>
      <Text style={s.sub}>{p.streakDays > 0 ? 'Keep the streak going.' : 'A few minutes a day. No charts, no hype.'}</Text>
      <View style={s.card}>
        <Text style={s.kicker}>UP NEXT · {PATH_TITLES[0].toUpperCase()}</Text>
        <Text style={s.cardTitle}>What cypherpunk means</Text>
        <Text style={s.cardBody}>3 quick questions · about 2 minutes</Text>
        <View style={{ height: space.md }} />
        <PrimaryButton label="Start a lesson" onPress={onStart} />
      </View>
      <View style={[s.card, s.tipCard]}>
        <Text style={s.tip}>💡 Your address is public. Your seed phrase is not. Ever.</Text>
      </View>
    </ScrollView>
  );
}

const s = StyleSheet.create({
  hello: { color: colors.text, fontSize: 30, fontWeight: '800' },
  sub: { color: colors.muted, fontSize: 16, marginTop: 4, marginBottom: space.lg },
  card: { backgroundColor: colors.surface, borderRadius: radius.lg, padding: space.lg, borderWidth: 2, borderColor: colors.border, marginBottom: space.md },
  kicker: { color: colors.green, fontWeight: '800', fontSize: 12, letterSpacing: 1 },
  cardTitle: { color: colors.text, fontSize: 22, fontWeight: '800', marginTop: 6 },
  cardBody: { color: colors.muted, marginTop: 4 },
  tipCard: { borderStyle: 'dashed' },
  tip: { color: colors.text, fontSize: 15 },
});
