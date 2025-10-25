// src/components/BandCard.tsx
import { Link } from 'expo-router';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Band } from '../data/bands';
import { COLORS } from '../theme/theme';
import { useFavorites } from '../context/favorites';
import { bandCardStyles } from '../styles/band-card.styles'; 

type Props = { band: Band };

export default function BandCard({ band }: Props) {
  const { isFavorite, toggleFavorite } = useFavorites();
  const fav = isFavorite(band.id);

  return (
    <Link href={`/band/${band.id}`} asChild>
      <TouchableOpacity style={bandCardStyles.card} activeOpacity={0.8}>
        <Image
          source={{ uri: band.image }}
          style={bandCardStyles.cover}
          resizeMode="cover"
        />

        <View style={bandCardStyles.info}>
          <Text style={bandCardStyles.name}>{band.name}</Text>
          <Text style={bandCardStyles.meta}>{band.genre} • {band.origin}</Text>
        </View>

        <TouchableOpacity
          onPress={() => toggleFavorite(band.id)}
          style={bandCardStyles.heart}
          activeOpacity={0.7}
        >
          <Ionicons
            name={fav ? 'heart' : 'heart-outline'}
            size={22}
            color={fav ? '#e11d48' : COLORS.textMuted}
          />
        </TouchableOpacity>
      </TouchableOpacity>
    </Link>
  );
}
