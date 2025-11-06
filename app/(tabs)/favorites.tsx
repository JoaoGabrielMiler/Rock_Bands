import { View, FlatList, Text, StyleSheet } from 'react-native';
import { useFavorites } from '../../src/context/favorites';
import { BANDS } from '../../src/data/bands';
import BandCard from '../../src/components/BandCard';
import { COLORS, SPACING } from '../../src/theme/theme';

export default function FavoritesScreen() {
  const { favorites } = useFavorites();
  const data = BANDS.filter(b => favorites.has(b.id));

  if (data.length === 0) {
    return (
      <View style={styles.empty}>
        <Text style={styles.emptyText}>Você ainda não favoritou nenhuma banda.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <BandCard band={item} />}
        contentContainerStyle={{ paddingBottom: 40 }}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.background, padding: SPACING.lg },
  empty: { flex: 1, backgroundColor: COLORS.background, alignItems: 'center', justifyContent: 'center', padding: SPACING.lg },
  emptyText: { color: COLORS.textMuted }
});
