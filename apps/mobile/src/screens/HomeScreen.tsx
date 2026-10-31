import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { Hud } from '../components/Hud';
import { PrimaryButton } from '../components/PrimaryButton';
import { ALL_LESSONS, isSeeded } from '../data/curriculum';
import type { Progress } from './PathsScreen';
import { colors, radius, space } from '../theme';

export function HomeScreen({ progress, onStartLesson, onOpenPaths }: { progress: Progress; onStartLesson: (id: string) => void; onOpenPaths: () => void }) {
  const next = ALL_LESSONS.find(({ path, lesson }) => path.tier === 'free' && isSeeded(lesson) && progress.unlocked.includes(lesson.id) && !progress.done.includes(lesson.id));
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Hud streak={progress.streak} xp={progress.xp} goal={progress.goal} goalTarget={progress.goalTarget} />
      <Text style={s.gm}>gm 👋</Text>
      <Text style={s.sub}>A few minutes a day. No trading, just learning.</Text>
      <View style={s.card}>
        <Text style={s.kicker}>UP NEXT</Text>
        {next ? (
          <>
            <Text style={s.path}>{next.path.icon} {next.path.title}</Text>
            <Text style={s.title}>{next.lesson.title}</Text>
            <Text style={s.meta}>{next.lesson.questions.length} questions · +10 XP</Text>
            <View style={{ height: space.md }} />
            <PrimaryButton label="Start lesson" onPress={() => onStartLesson(next.lesson.id)} />
          </>
        ) : (
          <>
            <Text style={s.title}>All playable lessons done! 🎉</Text>
            <Text style={s.meta}>More lessons are on the way.</Text>
          </>
        )}
        <View style={{ height: space.sm }} />
        <PrimaryButton label="View path" variant="ghost" onPress={onOpenPaths} />
      </View>
      <View style={[s.card, { flexDirection: 'row', gap: space.md, alignItems: 'center' }]}>
        <Text style={{ fontSize: 28 }}>🛡️</Text>
        <Text style={[s.meta, { flex: 1 }]}>Safety tip: nobody legit will ever ask for your seed phrase. Not support, not a lesson app, nobody.</Text>
      </View>
    </ScrollView>
  );
}

const s = StyleSheet.create({
  gm: { color: colors.text, fontSize: 30, fontWeight: '900' },
  sub: { color: colors.muted, fontSize: 15, marginBottom: space.lg },
  card: { backgroundColor: colors.surface, borderColor: colors.border, borderWidth: 2, borderBottomWidth: 5, borderRadius: radius.lg, padding: space.lg, marginBottom: space.md },
  kicker: { color: colors.cta, fontWeight: '900', letterSpacing: 1, marginBottom: space.sm },
  path: { color: colors.muted, fontWeight: '700' },
  title: { color: colors.text, fontSize: 22, fontWeight: '900', marginVertical: 4 },
  meta: { color: colors.muted, fontSize: 14 },
});
