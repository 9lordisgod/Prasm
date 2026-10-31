import { useState } from 'react';
import { Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { HomeScreen } from './src/screens/HomeScreen';
import { PathsScreen, type Progress } from './src/screens/PathsScreen';
import { LessonScreen } from './src/screens/LessonScreen';
import { WalletScreen } from './src/screens/WalletScreen';
import { DEFAULT_UNLOCKED, findLesson } from './src/data/curriculum';
import { colors, space } from './src/theme';

type Tab = 'Learn' | 'Paths' | 'Wallet';
const TABS: { key: Tab; icon: string }[] = [
  { key: 'Learn', icon: '🏠' },
  { key: 'Paths', icon: '🗺️' },
  { key: 'Wallet', icon: '👛' },
];

// In-memory progress stub (not persisted yet).
const START: Progress = { done: [], unlocked: DEFAULT_UNLOCKED, streak: 0, xp: 0, goal: 0, goalTarget: 20 };

export default function App() {
  const [tab, setTab] = useState<Tab>('Learn');
  const [progress, setProgress] = useState<Progress>(START);
  const [lessonId, setLessonId] = useState<string | null>(null);
  const active = lessonId ? findLesson(lessonId) : undefined;

  const complete = (xp: number) => {
    if (!active) return;
    const { path, lesson } = active;
    const idx = path.lessons.findIndex((l) => l.id === lesson.id);
    const nextId = path.lessons[idx + 1]?.id;
    setProgress((p) => ({
      ...p,
      done: p.done.includes(lesson.id) ? p.done : [...p.done, lesson.id],
      unlocked: nextId && !p.unlocked.includes(nextId) ? [...p.unlocked, nextId] : p.unlocked,
      xp: p.xp + xp,
      goal: Math.min(p.goalTarget, p.goal + xp),
      streak: p.streak === 0 ? 1 : p.streak,
    }));
    setLessonId(null);
    setTab('Paths');
  };

  return (
    <SafeAreaView style={s.root}>
      <StatusBar style="light" />
      {active ? (
        <View style={s.body}>
          <LessonScreen lesson={active.lesson} onClose={() => setLessonId(null)} onComplete={complete} />
        </View>
      ) : (
        <>
          <View style={s.body}>
            {tab === 'Learn' && <HomeScreen progress={progress} onStartLesson={setLessonId} onOpenPaths={() => setTab('Paths')} />}
            {tab === 'Paths' && <PathsScreen progress={progress} onOpenLesson={setLessonId} />}
            {tab === 'Wallet' && <WalletScreen />}
          </View>
          <View style={s.tabs}>
            {TABS.map(({ key, icon }) => {
              const on = tab === key;
              return (
                <Pressable key={key} onPress={() => setTab(key)} style={[s.tab, on && s.tabActive]}>
                  <Text style={s.icon}>{icon}</Text>
                  <Text style={[s.tabText, on && { color: colors.teal }]}>{key}</Text>
                </Pressable>
              );
            })}
          </View>
        </>
      )}
    </SafeAreaView>
  );
}

const s = StyleSheet.create({
  root: { flex: 1, backgroundColor: colors.bg },
  body: { flex: 1, padding: space.lg },
  tabs: { flexDirection: 'row', borderTopWidth: 2, borderTopColor: colors.border, paddingVertical: 6, paddingHorizontal: 8 },
  tab: { flex: 1, alignItems: 'center', paddingVertical: 6, borderRadius: 12, borderWidth: 2, borderColor: 'transparent' },
  tabActive: { borderColor: colors.teal, backgroundColor: '#1A3442' },
  icon: { fontSize: 22 },
  tabText: { color: colors.muted, fontSize: 12, fontWeight: '800', marginTop: 2 },
});
