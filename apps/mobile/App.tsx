import { useState } from 'react';
import { Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { HomeScreen } from './src/screens/HomeScreen';
import { PathsScreen } from './src/screens/PathsScreen';
import { WalletScreen } from './src/screens/WalletScreen';
import { colors, space } from './src/theme';

type Tab = 'Learn' | 'Paths' | 'Wallet';
const TABS: { key: Tab; icon: string }[] = [
  { key: 'Learn', icon: '🏠' },
  { key: 'Paths', icon: '🗺️' },
  { key: 'Wallet', icon: '👛' },
];

export default function App() {
  const [tab, setTab] = useState<Tab>('Learn');
  return (
    <SafeAreaView style={s.root}>
      <StatusBar style="light" />
      <View style={s.body}>
        {tab === 'Learn' && <HomeScreen onStart={() => setTab('Paths')} />}
        {tab === 'Paths' && <PathsScreen />}
        {tab === 'Wallet' && <WalletScreen />}
      </View>
      <View style={s.tabs}>
        {TABS.map(({ key, icon }) => {
          const active = tab === key;
          return (
            <Pressable key={key} onPress={() => setTab(key)} style={[s.tab, active && s.tabActive]}>
              <Text style={s.icon}>{icon}</Text>
              <Text style={[s.tabText, active && { color: colors.primary }]}>{key}</Text>
            </Pressable>
          );
        })}
      </View>
    </SafeAreaView>
  );
}

const s = StyleSheet.create({
  root: { flex: 1, backgroundColor: colors.bg },
  body: { flex: 1, padding: space.md + 4 },
  tabs: { flexDirection: 'row', borderTopWidth: 2, borderTopColor: colors.border, paddingVertical: 6, paddingHorizontal: 8 },
  tab: { flex: 1, alignItems: 'center', paddingVertical: 6, borderRadius: 12, borderWidth: 2, borderColor: 'transparent' },
  tabActive: { borderColor: colors.primary, backgroundColor: colors.surface },
  icon: { fontSize: 22 },
  tabText: { color: colors.muted, fontSize: 12, fontWeight: '800', marginTop: 2 },
});
