import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { PrimaryButton } from '../components/PrimaryButton';
import { connectWallet, disconnectWallet } from '../stubs/wallet';
import { colors, radius, space } from '../theme';

// Connect-only. Prasm never signs, trades, or holds keys.
export function WalletScreen() {
  const [msg, setMsg] = useState('Optional. Connecting just links your progress to your address.');
  return (
    <View>
      <Text style={s.title}>Wallet</Text>
      <View style={s.card}>
        <Text style={s.emoji}>🔐</Text>
        <Text style={s.body}>{msg}</Text>
        <View style={{ height: space.md }} />
        <PrimaryButton label="Connect wallet" onPress={async () => { await connectWallet(); setMsg('Wallet connect is coming soon. Keep learning in the meantime!'); }} />
        <View style={{ height: space.sm }} />
        <PrimaryButton label="Disconnect" variant="ghost" onPress={async () => { await disconnectWallet(); setMsg('Nothing connected. You are all good.'); }} />
      </View>
      <Text style={s.note}>Your keys stay in Seed Vault. We never ask for a seed phrase, never sign, never trade.</Text>
    </View>
  );
}

const s = StyleSheet.create({
  title: { color: colors.text, fontSize: 28, fontWeight: '800', marginBottom: space.md },
  card: { backgroundColor: colors.surface, borderRadius: radius.lg, padding: space.lg, borderWidth: 2, borderColor: colors.border, alignItems: 'stretch' },
  emoji: { fontSize: 40, textAlign: 'center', marginBottom: space.sm },
  body: { color: colors.text, fontSize: 16, textAlign: 'center' },
  note: { color: colors.muted, marginTop: space.md, textAlign: 'center' },
});
