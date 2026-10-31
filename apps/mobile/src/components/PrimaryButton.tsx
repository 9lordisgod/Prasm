import { Pressable, StyleSheet, Text } from 'react-native';
import { colors, radius } from '../theme';

type Variant = 'primary' | 'green' | 'ghost';
type Props = { label: string; onPress?: () => void; variant?: Variant; disabled?: boolean };

const faces: Record<Variant, [string, string, string]> = {
  primary: [colors.primary, colors.primaryLedge, '#FFFFFF'],
  green: [colors.green, colors.greenLedge, '#0B1A12'],
  ghost: [colors.surface, colors.border, colors.text],
};

// Chunky "3D" button: colored face sitting on a darker ledge that collapses on press.
export function PrimaryButton({ label, onPress, variant = 'primary', disabled }: Props) {
  const [face, ledge, ink] = disabled ? [colors.locked, colors.lockedLedge, colors.muted] : faces[variant];
  return (
    <Pressable onPress={onPress} disabled={disabled}>
      {({ pressed }) => (
        <Text
          style={[
            s.btn,
            { backgroundColor: face, borderBottomColor: ledge, color: ink },
            pressed && { borderBottomWidth: 0, marginTop: 4 },
          ]}
        >
          {label.toUpperCase()}
        </Text>
      )}
    </Pressable>
  );
}

const s = StyleSheet.create({
  btn: { textAlign: 'center', fontWeight: '800', fontSize: 16, letterSpacing: 0.8, paddingVertical: 14, borderRadius: radius.md, borderBottomWidth: 4, overflow: 'hidden' },
});
