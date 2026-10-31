import { Pressable, StyleSheet, Text, View } from 'react-native';
import { colors, radius } from '../theme';

type Variant = 'cta' | 'primary' | 'ghost' | 'wrong' | 'disabled';
const FACE: Record<Variant, [string, string, string]> = {
  cta: [colors.cta, colors.ctaLedge, '#FFFFFF'],
  primary: [colors.primary, colors.primaryLedge, '#FFFFFF'],
  wrong: [colors.wrong, colors.wrongLedge, '#FFFFFF'],
  ghost: [colors.surface, colors.border, colors.teal],
  disabled: [colors.locked, colors.lockedLedge, colors.muted],
};

// Chunky Duolingo "ledge" button: face sits on a darker bottom ledge that collapses on press.
export function PrimaryButton({ label, onPress, variant = 'cta', disabled }: { label: string; onPress?: () => void; variant?: Variant; disabled?: boolean }) {
  const v: Variant = disabled ? 'disabled' : variant;
  const [face, ledge, text] = FACE[v];
  return (
    <Pressable onPress={disabled ? undefined : onPress} accessibilityRole="button">
      {({ pressed }) => (
        <View style={[s.ledge, { backgroundColor: ledge, paddingBottom: pressed ? 0 : 4, marginTop: pressed ? 4 : 0 }]}>
          <View style={[s.face, { backgroundColor: face, borderColor: v === 'ghost' ? colors.border : face }]}>
            <Text style={[s.label, { color: text }]}>{label.toUpperCase()}</Text>
          </View>
        </View>
      )}
    </Pressable>
  );
}

const s = StyleSheet.create({
  ledge: { borderRadius: radius.md },
  face: { borderRadius: radius.md, paddingVertical: 14, alignItems: 'center', borderWidth: 2 },
  label: { fontSize: 16, fontWeight: '800', letterSpacing: 0.8 },
});
