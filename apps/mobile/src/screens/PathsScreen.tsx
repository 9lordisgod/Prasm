import { FlatList, StyleSheet, Text, View } from 'react-native';
import { PATH_TITLES } from '../stubs/paths';
import { colors } from '../theme';

export function PathsScreen() {
  return (
    <View style={{ flex: 1 }}>
      <Text style={s.title}>Paths</Text>
      <FlatList
        data={PATH_TITLES}
        keyExtractor={(t) => t}
        renderItem={({ item }) => (
          <View style={s.row}>
            <Text style={s.text}>{item}</Text>
          </View>
        )}
      />
    </View>
  );
}

const s = StyleSheet.create({
  title: { color: colors.text, fontSize: 28, fontWeight: '700', marginBottom: 20 },
  row: { backgroundColor: colors.card, borderColor: colors.border, borderWidth: 1, borderRadius: 12, padding: 16, marginBottom: 10 },
  text: { color: colors.text, fontSize: 16 },
});
