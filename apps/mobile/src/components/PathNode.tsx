import { Pressable, StyleSheet, Text, View } from 'react-native';
import { colors } from '../theme';

export type NodeState = 'done' | 'current' | 'locked';

// Round Duolingo-style lesson node with ledge. Current node shows a bouncing-style START bubble.
export function PathNode({ state, offset, icon, color, ledge, onPress }: { state: NodeState; offset: number; icon: string; color: string; ledge: string; onPress?: () => void }) {
  const face = state === 'locked' ? colors.locked : color;
  const under = state === 'locked' ? colors.lockedLedge : ledge;
  return (
    <View style={[s.wrap, { transform: [{ translateX: offset }] }]}>
      {state === 'current' && (
        <View style={s.bubble}>
          <Text style={[s.bubbleText, { color }]}>START</Text>
          <View style={s.caret} />
        </View>
      )}
      <View style={state === 'current' ? [s.ring, { borderColor: color }] : undefined}>
        <Pressable onPress={onPress} accessibilityRole="button">
          {({ pressed }) => (
            <View style={[s.ledge, { backgroundColor: under, paddingBottom: pressed ? 0 : 7, marginTop: pressed ? 7 : 0 }]}>
              <View style={[s.face, { backgroundColor: face }]}>
                <Text style={[s.icon, state === 'locked' && { opacity: 0.6 }]}>{state === 'locked' ? '🔒' : state === 'done' ? '✓' : icon}</Text>
              </View>
            </View>
          )}
        </Pressable>
      </View>
    </View>
  );
}

const s = StyleSheet.create({
  wrap: { alignItems: 'center', marginVertical: 10 },
  ring: { borderWidth: 5, borderRadius: 60, padding: 5 },
  ledge: { borderRadius: 40 },
  face: { width: 72, height: 66, borderRadius: 40, alignItems: 'center', justifyContent: 'center' },
  icon: { fontSize: 28, color: '#FFFFFF', fontWeight: '900' },
  bubble: { backgroundColor: colors.surface, borderColor: colors.border, borderWidth: 2, borderRadius: 12, paddingHorizontal: 14, paddingVertical: 8, marginBottom: 8, alignItems: 'center' },
  bubbleText: { fontWeight: '900', letterSpacing: 1 },
  caret: { position: 'absolute', bottom: -8, width: 12, height: 12, backgroundColor: colors.surface, borderRightWidth: 2, borderBottomWidth: 2, borderColor: colors.border, transform: [{ rotate: '45deg' }] },
});
