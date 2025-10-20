import { useLocalSearchParams, useRouter } from 'expo-router';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { BANDS } from '../../src/data/bands';
import { COLORS, RADIUS, SPACING } from '../../src/theme/theme';
import { useFavorites } from '../../src/context/favorites';

export default function BandDetailsScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const band = BANDS.find(b => b.id === id);
  const router = useRouter();
  const { isFavorite, toggleFavorite } = useFavorites();

  if (!band) return null;

  const fav = isFavorite(band.id);

  return (
    <ScrollView style={{ flex: 1, backgroundColor: COLORS.background }}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.iconBtn}>
          <Ionicons name="chevron-back" size={24} color={COLORS.text} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => toggleFavorite(band.id)} style={styles.iconBtn}>
          <Ionicons name={fav ? 'heart' : 'heart-outline'} size={24} color={fav ? '#e11d48' : COLORS.text} />
        </TouchableOpacity>
      </View>

      <Image source={{ uri: band.image }} style={styles.cover} />

      <View style={styles.content}>
        <Text style={styles.title}>{band.name}</Text>
        <Text style={styles.meta}>{band.genre} • {band.origin} • Desde {band.formedIn}</Text>

        <Text style={styles.section}>Sobre</Text>
        <Text style={styles.paragraph}>{band.description}</Text>

        <Text style={styles.section}>Faixas conhecidas</Text>
        {band.topSongs.map((s) => (
          <Text key={s} style={styles.item}>• {s}</Text>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: SPACING.md },
  iconBtn: { backgroundColor: '#ffffffcc', padding: 8, borderRadius: 999 },
  cover: { width: '100%', height: 240 },
  content: { backgroundColor: COLORS.background, padding: SPACING.lg },
  title: { fontSize: 24, fontWeight: 'bold', color: COLORS.text },
  meta: { marginTop: 6, color: COLORS.textMuted },
  section: { marginTop: SPACING.lg, fontSize: 18, fontWeight: 'bold', color: COLORS.text },
  paragraph: { marginTop: 6, color: COLORS.textMuted, lineHeight: 20 },
  item: { marginTop: 4, color: COLORS.text }
});
