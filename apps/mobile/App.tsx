import { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { HomeScreen } from './src/screens/HomeScreen';
import { PathsScreen } from './src/screens/PathsScreen';
import { WalletScreen } from './src/screens/WalletScreen';
import { colors } from './src/theme';

type Tab = 'Home' | 'Paths' | 'Wallet';
const TABS: Tab[] = ['Home', 'Paths', 'Wallet'];

export default function App() {
  const [tab, setTab] = useState<Tab>('Home');
  return (
    <SafeAreaView style={styles.root}>
      <StatusBar style="light" />
      <View style={styles.body}>
        {tab === 'Home' && <HomeScreen />}
        {tab === 'Paths' && <PathsScreen />}
        {tab === 'Wallet' && <WalletScreen />}
      </View>
      <View style={styles.tabs}>
        {TABS.map((t) => (
          <TouchableOpacity key={t} onPress={() => setTab(t)} style={styles.tab}>
            <Text style={[styles.tabText, tab === t && styles.tabActive]}>{t}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: colors.bg },
  body: { flex: 1, padding: 20 },
  tabs: { flexDirection: 'row', borderTopWidth: 1, borderTopColor: colors.border },
  tab: { flex: 1, paddingVertical: 14, alignItems: 'center' },
  tabText: { color: colors.muted, fontSize: 14 },
  tabActive: { color: colors.text, fontWeight: '600' },
});
