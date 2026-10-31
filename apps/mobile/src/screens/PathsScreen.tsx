import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { PathNode, NodeState } from '../components/PathNode';
import { PATH_TITLES } from '../stubs/paths';
import { colors, radius, space } from '../theme';

const EMOJI = ['📜', '🟠', '🕶️', '◎', '📱', '🔎'];
const OFFSETS = [0, 60, 90, 60, 0, -60, -90, -60];

export function PathsScreen() {
  return (
    <ScrollView contentContainerStyle={{ paddingBottom: space.xl }}>
      <View style={s.banner}>
        <Text style={s.bannerKicker}>YOUR JOURNEY</Text>
        <Text style={s.bannerTitle}>Six paths, one tap at a time</Text>
      </View>
      {PATH_TITLES.map((title, i) => {
        const state: NodeState = i === 0 ? 'current' : 'locked';
        return <PathNode key={title} emoji={EMOJI[i] ?? '⭐'} label={title} state={state} offset={OFFSETS[i % OFFSETS.length]} />;
      })}
      <Text style={s.footer}>Lessons live in the private content pack. More nodes unlock as you learn.</Text>
    </ScrollView>
  );
}

const s = StyleSheet.create({
  banner: { backgroundColor: colors.primary, borderRadius: radius.lg, padding: space.md, borderBottomWidth: 4, borderBottomColor: colors.primaryLedge, marginBottom: space.lg },
  bannerKicker: { color: '#E9D8FF', fontWeight: '800', fontSize: 12, letterSpacing: 1 },
  bannerTitle: { color: '#FFFFFF', fontWeight: '800', fontSize: 20, marginTop: 4 },
  footer: { color: colors.muted, textAlign: 'center', marginTop: space.lg },
});
