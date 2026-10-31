import { useState } from 'react';
import { Modal, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Hud } from '../components/Hud';
import { PathNode, type NodeState } from '../components/PathNode';
import { PrimaryButton } from '../components/PrimaryButton';
import { PATHS, isSeeded, type Lesson, type Path } from '../data/curriculum';
import { colors, radius, space } from '../theme';

// Classic Duolingo zigzag offsets for the winding trail.
const ZIG = [0, 44, 70, 44, 0, -44, -70, -44];

export type Progress = { done: string[]; unlocked: string[]; streak: number; xp: number; goal: number; goalTarget: number };

export function nodeState(p: Path, l: Lesson, prog: Progress): NodeState {
  if (prog.done.includes(l.id)) return 'done';
  if (p.tier === 'free' && prog.unlocked.includes(l.id)) return 'current';
  return 'locked';
}

export function PathsScreen({ progress, onOpenLesson }: { progress: Progress; onOpenLesson: (id: string) => void }) {
  const [sheet, setSheet] = useState<{ title: string; body: string } | null>(null);

  const tap = (p: Path, l: Lesson) => {
    const st = nodeState(p, l, progress);
    if (p.tier === 'paid') return setSheet({ title: `PRO · ${l.title}`, body: 'This path is part of Prasm Pro and is coming soon.' });
    if (st === 'locked') return setSheet({ title: l.title, body: isSeeded(l) ? 'Finish the lesson before this one to unlock it.' : `Coming soon. Sneak peek: ${l.tip}` });
    if (!isSeeded(l)) return setSheet({ title: l.title, body: `Coming soon. Sneak peek: ${l.tip}` });
    onOpenLesson(l.id);
  };

  let n = 0;
  return (
    <View style={{ flex: 1 }}>
      <Hud streak={progress.streak} xp={progress.xp} goal={progress.goal} goalTarget={progress.goalTarget} />
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: space.xl }}>
        {PATHS.map((p, ui) => (
          <View key={p.id} style={{ marginBottom: space.lg }}>
            <View style={[s.banner, { backgroundColor: p.color, borderBottomColor: p.ledge }]}>
              <View style={{ flex: 1 }}>
                <Text style={s.unit}>UNIT {ui + 1}{'  '}<Text style={s.tier}>{p.tier === 'free' ? 'FREE' : 'PRO'}</Text></Text>
                <Text style={s.bannerTitle}>{p.title}</Text>
                <Text style={s.blurb}>{p.blurb}</Text>
              </View>
              <Text style={s.bannerIcon}>{p.icon}</Text>
            </View>
            {p.lessons.map((l) => (
              <View key={l.id}>
                <PathNode state={nodeState(p, l, progress)} offset={ZIG[n++ % ZIG.length]} icon="★" color={p.color} ledge={p.ledge} onPress={() => tap(p, l)} />
                <Text style={[s.nodeLabel, { transform: [{ translateX: ZIG[(n - 1) % ZIG.length] }] }]}>{l.title}</Text>
              </View>
            ))}
          </View>
        ))}
      </ScrollView>

      <Modal visible={!!sheet} transparent animationType="slide" onRequestClose={() => setSheet(null)}>
        <Pressable style={s.scrim} onPress={() => setSheet(null)} />
        <View style={s.sheet}>
          <Text style={s.sheetTitle}>{sheet?.title}</Text>
          <Text style={s.sheetBody}>{sheet?.body}</Text>
          <PrimaryButton label="Got it" onPress={() => setSheet(null)} />
        </View>
      </Modal>
    </View>
  );
}

const s = StyleSheet.create({
  banner: { flexDirection: 'row', alignItems: 'center', borderRadius: radius.md, padding: space.md, borderBottomWidth: 5, marginBottom: space.md },
  unit: { color: '#FFFFFFCC', fontWeight: '900', fontSize: 12, letterSpacing: 1 },
  tier: { color: '#FFFFFF', fontWeight: '900' },
  bannerTitle: { color: '#FFFFFF', fontSize: 19, fontWeight: '900', marginTop: 2 },
  blurb: { color: '#FFFFFFDD', fontSize: 14, marginTop: 2 },
  bannerIcon: { fontSize: 34, color: '#FFFFFF', marginLeft: space.sm },
  nodeLabel: { color: colors.muted, textAlign: 'center', fontSize: 12, fontWeight: '700', marginBottom: 4 },
  scrim: { flex: 1, backgroundColor: '#00000088' },
  sheet: { backgroundColor: colors.surface, padding: space.lg, borderTopLeftRadius: radius.lg, borderTopRightRadius: radius.lg, borderTopWidth: 2, borderColor: colors.border },
  sheetTitle: { color: colors.text, fontSize: 20, fontWeight: '900', marginBottom: space.sm },
  sheetBody: { color: colors.muted, fontSize: 16, marginBottom: space.lg },
});
