import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { connectWallet, disconnectWallet } from '../stubs/wallet';
import { colors } from '../theme';

export function WalletScreen() {
  const [status, setStatus] = useState('Not connected');

  const run = async (fn: typeof connectWallet) => {
    const r = await fn();
    setStatus(r.ok ? 'Done' : 'Wallet connection is unavailable in this build.');
  };

  return (
    <View>
      <Text style={s.title}>Wallet</Text>
      <Text style={s.note}>Optional. Connect only, for progress sync. Prasm never signs, trades, or holds keys.</Text>
      <TouchableOpacity style={s.btn} onPress={() => run(connectWallet)}>
        <Text style={s.btnText}>Connect</Text>
      </TouchableOpacity>
      <TouchableOpacity style={s.btn} onPress={() => run(disconnectWallet)}>
        <Text style={s.btnText}>Disconnect</Text>
      </TouchableOpacity>
      <Text style={s.note}>{status}</Text>
    </View>
  );
}

const s = StyleSheet.create({
  title: { color: colors.text, fontSize: 28, fontWeight: '700', marginBottom: 12 },
  note: { color: colors.muted, fontSize: 14, marginVertical: 12 },
  btn: { borderColor: colors.border, borderWidth: 1, borderRadius: 10, padding: 14, alignItems: 'center', marginBottom: 10 },
  btnText: { color: colors.text, fontSize: 16 },
});
