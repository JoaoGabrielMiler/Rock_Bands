// src/components/BandCard.tsx
import { Link } from 'expo-router';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
// ⬇️ use o named import (tem typings)
import { Ionicons } from '@expo/vector-icons';
import { Band } from '../data/bands';
import { COLORS, RADIUS, SPACING } from '../theme/theme';
import { useFavorites } from '../context/favorites';

type Props = { band: Band };

export default function BandCard({ band }: Props) {
  const { isFavorite, toggleFavorite } = useFavorites();
  const fav = isFavorite(band.id);

  return (
    <Link href={`/band/${band.id}`} asChild>
      <TouchableOpacity style={styles.card} activeOpacity={0.8}>
        <Image source={{ uri: band.image }} style={styles.cover} />
        <View style={styles.info}>
          <Text style={styles.name}>{band.name}</Text>
          <Text style={styles.meta}>{band.genre} • {band.origin}</Text>
        </View>
        <TouchableOpacity
          onPress={() => toggleFavorite(band.id)}
          style={styles.heart}
          activeOpacity={0.7}
        >
          <Ionicons name={fav ? 'heart' : 'heart-outline'} size={22} color={fav ? '#e11d48' : COLORS.textMuted} />
        </TouchableOpacity>
      </TouchableOpacity>
    </Link>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: COLORS.card,
    borderRadius: RADIUS.md,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: COLORS.border,
    marginBottom: SPACING.md
  },
  cover: { width: '100%', height: 160 },
  info: { padding: SPACING.md },
  name: { fontSize: 18, fontWeight: 'bold', color: COLORS.text },
  meta: { marginTop: 4, color: COLORS.textMuted },
  heart: { position: 'absolute', right: 10, top: 10, padding: 6, backgroundColor: '#ffffffcc', borderRadius: 999 }
});
