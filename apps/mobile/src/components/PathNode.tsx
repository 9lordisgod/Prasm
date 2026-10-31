import { Pressable, StyleSheet, Text, View } from 'react-native';
import { colors } from '../theme';

export type NodeState = 'done' | 'current' | 'locked';
type Props = { emoji: string; label: string; state: NodeState; offset: number; onPress?: () => void };

// Circular skill node. `offset` shifts it left/right to form a winding path.
export function PathNode({ emoji, label, state, offset, onPress }: Props) {
  const face = state === 'done' ? colors.green : state === 'current' ? colors.primary : colors.locked;
  const ledge = state === 'done' ? colors.greenLedge : state === 'current' ? colors.primaryLedge : colors.lockedLedge;
  return (
    <View style={[s.wrap, { transform: [{ translateX: offset }] }]}>
      {state === 'current' && <Text style={s.bubble}>START</Text>}
      <Pressable onPress={onPress} disabled={state === 'locked'}>
        <View style={[s.circle, { backgroundColor: face, borderBottomColor: ledge }]}>
          <Text style={[s.emoji, state === 'locked' && { opacity: 0.4 }]}>{state === 'locked' ? '🔒' : emoji}</Text>
        </View>
      </Pressable>
      <Text style={[s.label, state === 'locked' && { color: colors.muted }]} numberOfLines={1}>{label}</Text>
    </View>
  );
}

const s = StyleSheet.create({
  wrap: { alignItems: 'center', marginVertical: 10 },
  circle: { width: 72, height: 72, borderRadius: 36, alignItems: 'center', justifyContent: 'center', borderBottomWidth: 6 },
  emoji: { fontSize: 30 },
  label: { color: colors.text, fontWeight: '700', marginTop: 6, maxWidth: 160, textAlign: 'center' },
  bubble: { color: colors.primary, backgroundColor: colors.surface, fontWeight: '800', fontSize: 12, paddingHorizontal: 10, paddingVertical: 4, borderRadius: 8, marginBottom: 6, overflow: 'hidden' },
});
