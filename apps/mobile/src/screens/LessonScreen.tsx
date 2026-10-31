import { useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { PrimaryButton } from '../components/PrimaryButton';
import type { Lesson } from '../data/curriculum';
import { colors, radius, space } from '../theme';

const XP_PER_LESSON = 10;

// Duolingo-style quiz: tip -> one question at a time -> CHECK -> feedback -> CONTINUE -> end card.
export function LessonScreen({ lesson, onClose, onComplete }: { lesson: Lesson; onClose: () => void; onComplete: (xp: number) => void }) {
  const [i, setI] = useState(-1); // -1 = tip card
  const [pick, setPick] = useState<number | null>(null);
  const [checked, setChecked] = useState(false);
  const [correct, setCorrect] = useState(0);
  const total = lesson.questions.length;
  const done = i >= total;
  const q = i >= 0 && !done ? lesson.questions[i] : null;
  const right = q != null && pick === q.answerIndex;

  const next = () => { setPick(null); setChecked(false); setI(i + 1); };

  return (
    <View style={s.root}>
      <View style={s.top}>
        <Pressable onPress={onClose} hitSlop={12}><Text style={s.close}>✕</Text></Pressable>
        <View style={s.bar}><View style={[s.fill, { width: `${(Math.max(0, i) / total) * 100}%` }]} /></View>
      </View>

      <ScrollView style={{ flex: 1 }} contentContainerStyle={{ paddingBottom: space.lg }}>
        {i === -1 && (
          <View>
            <Text style={s.kicker}>NEW LESSON</Text>
            <Text style={s.h1}>{lesson.title}</Text>
            <View style={s.tip}><Text style={s.tipEmoji}>💡</Text><Text style={s.tipText}>{lesson.tip}</Text></View>
          </View>
        )}
        {q && (
          <View>
            <Text style={s.kicker}>QUESTION {i + 1} OF {total}</Text>
            <Text style={s.h1}>{q.prompt}</Text>
            {q.choices.map((c, idx) => {
              const sel = pick === idx;
              const showRight = checked && idx === q.answerIndex;
              const showWrong = checked && sel && !right;
              return (
                <Pressable key={idx} disabled={checked} onPress={() => setPick(idx)}
                  style={[s.choice, sel && s.choiceSel, showRight && s.choiceRight, showWrong && s.choiceWrong]}>
                  <Text style={s.choiceText}>{c}</Text>
                </Pressable>
              );
            })}
          </View>
        )}
        {done && (
          <View style={{ alignItems: 'center', marginTop: space.xl }}>
            <Text style={{ fontSize: 64 }}>🎉</Text>
            <Text style={s.h1}>Lesson complete!</Text>
            <View style={s.endRow}>
              <View style={[s.endCard, { borderColor: colors.xp }]}><Text style={[s.endLabel, { color: colors.xp }]}>TOTAL XP</Text><Text style={s.endVal}>⚡ {XP_PER_LESSON}</Text></View>
              <View style={[s.endCard, { borderColor: colors.cta }]}><Text style={[s.endLabel, { color: colors.cta }]}>SCORE</Text><Text style={s.endVal}>🎯 {correct}/{total}</Text></View>
            </View>
          </View>
        )}
      </ScrollView>

      <View style={[s.footer, checked && { backgroundColor: right ? colors.correctBg : colors.wrongBg }]}>
        {checked && q && (
          <View style={{ marginBottom: space.md }}>
            <Text style={[s.fbTitle, { color: right ? colors.cta : colors.wrong }]}>{right ? 'Nice!' : 'Not quite'}</Text>
            <Text style={s.fbBody}>{q.explain}</Text>
          </View>
        )}
        {i === -1 && <PrimaryButton label="Start" onPress={next} />}
        {q && !checked && <PrimaryButton label="Check" disabled={pick === null} onPress={() => { setChecked(true); if (pick === q.answerIndex) setCorrect(correct + 1); }} />}
        {q && checked && <PrimaryButton label="Continue" variant={right ? 'cta' : 'wrong'} onPress={next} />}
        {done && <PrimaryButton label="Continue" onPress={() => onComplete(XP_PER_LESSON)} />}
      </View>
    </View>
  );
}

const s = StyleSheet.create({
  root: { flex: 1, backgroundColor: colors.bg },
  top: { flexDirection: 'row', alignItems: 'center', gap: space.md, marginBottom: space.lg },
  close: { color: colors.muted, fontSize: 22, fontWeight: '800' },
  bar: { flex: 1, height: 16, borderRadius: radius.pill, backgroundColor: colors.border, overflow: 'hidden' },
  fill: { height: '100%', backgroundColor: colors.cta, borderRadius: radius.pill },
  kicker: { color: colors.primary, fontWeight: '900', letterSpacing: 1, marginBottom: space.sm },
  h1: { color: colors.text, fontSize: 24, fontWeight: '800', marginBottom: space.lg },
  tip: { flexDirection: 'row', gap: space.md, backgroundColor: colors.surface, borderColor: colors.border, borderWidth: 2, borderRadius: radius.lg, padding: space.lg },
  tipEmoji: { fontSize: 28 },
  tipText: { flex: 1, color: colors.text, fontSize: 17, lineHeight: 24 },
  choice: { borderWidth: 2, borderBottomWidth: 5, borderColor: colors.border, borderRadius: radius.md, padding: space.md, marginBottom: space.sm + 4 },
  choiceSel: { borderColor: colors.teal, backgroundColor: '#1A3442' },
  choiceRight: { borderColor: colors.cta, backgroundColor: colors.correctBg },
  choiceWrong: { borderColor: colors.wrong, backgroundColor: colors.wrongBg },
  choiceText: { color: colors.text, fontSize: 16, fontWeight: '600' },
  footer: { paddingTop: space.md, paddingBottom: space.sm, marginHorizontal: -space.lg, paddingHorizontal: space.lg, borderTopWidth: 2, borderTopColor: colors.border },
  fbTitle: { fontSize: 22, fontWeight: '900', marginBottom: 4 },
  fbBody: { color: colors.text, fontSize: 15 },
  endRow: { flexDirection: 'row', gap: space.md },
  endCard: { borderWidth: 2, borderRadius: radius.md, padding: space.md, alignItems: 'center', minWidth: 130 },
  endLabel: { fontWeight: '900', fontSize: 12, marginBottom: 4 },
  endVal: { color: colors.text, fontSize: 20, fontWeight: '800' },
});
