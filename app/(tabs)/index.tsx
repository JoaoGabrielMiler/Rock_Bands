// app/(tabs)/index.tsx
import React, { useMemo } from 'react';
import { View, Text, Pressable, StatusBar, ScrollView, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { COLORS, SPACING } from '../../src/theme/theme';
import { homeStyles as styles } from '../../src/styles/home.styles';
import { Link, useRouter } from 'expo-router';
import { BANDS } from '../../src/data/bands';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      {/* spot de cor de fundo */}
      <View pointerEvents="none" style={styles.backSpot} />

      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar barStyle="light-content" />
        <Header />

        {/* [CHANGED] Descoberta do dia AGORA fica no topo no lugar do Hero */}
        <BandOfTheDayHero />

        {/* Chips de gêneros logo abaixo */}
        <GenresChips />

        {/* [CHANGED] O antigo "Catálogo definitivo" desceu para cá */}
        <Hero />
      </SafeAreaView>
    </View>
  );
}

function Header() {
  return (
    <View style={styles.header}>
      <View style={styles.logoWrap}>
        <MaterialCommunityIcons name="skull" size={20} color={COLORS.text} />
      </View>
      <Text style={styles.title}>Rock Bands</Text>
    </View>
  );
}

/* ---------- Hero antigo ("Catálogo definitivo") — agora abaixo ---------- */
function Hero() {
  return (
    <View style={styles.hero}>
      <View style={styles.heroGlow} />
      <View style={[styles.heroContent, { paddingVertical: SPACING.md, paddingHorizontal: SPACING.lg }]}>
        <MaterialCommunityIcons
          name="guitar-electric"
          size={42}
          color={COLORS.primary}
          style={{ opacity: 0.95 }}
        />
        <Text style={styles.heroTitle}>Catálogo definitivo</Text>
        <Text style={styles.heroSub}>
          Clássicos, lendas e novas apostas — tudo em um só lugar.
        </Text>

        <View style={{ height: SPACING.md }} />

        <Link href="/catalog" asChild>
          <Pressable style={styles.cta}>
            <Ionicons name="musical-notes" size={18} color="#000" />
            <Text style={styles.ctaText}>Explorar Bandas</Text>
          </Pressable>
        </Link>
      </View>
    </View>
  );
}

/* ---------- Chips de gêneros ---------- */
function GenresChips() {
  const router = useRouter();

  const genres = useMemo(() => {
    const set = new Set<string>();
    for (const b of BANDS) {
      const parts = String(b.genre ?? '')
        .split(',')
        .map((s) => s.trim())
        .filter(Boolean);
      parts.forEach((p) => set.add(p));
    }
    return Array.from(set).sort();
  }, []);

  if (genres.length === 0) return null;

  return (
    <>
      <Text style={styles.sectionTitle}>Explorar por gênero</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.chipsRow}
      >
        {genres.map((g) => (
          <Pressable
            key={g}
            onPress={() =>
              router.push({ pathname: '/catalog', params: { tag: g } })
            }
            style={({ pressed }) => [styles.chip, pressed && styles.chipSelected]}
          >
            <Text style={styles.chipText}>{g}</Text>
          </Pressable>
        ))}
      </ScrollView>
    </>
  );
}

function BandOfTheDayHero() {
  const band = useMemo(() => {
    if (!BANDS.length) return undefined;
    const d = new Date();
    const key = `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;
    let h = 0;
    for (let i = 0; i < key.length; i++) h = (h * 31 + key.charCodeAt(i)) >>> 0;
    return BANDS[h % BANDS.length];
  }, []);

  if (!band) return null;

  return (
    <View style={styles.hero}>
      <View style={styles.heroGlow} />
      <Image source={{ uri: band.image }} style={styles.dayHeroCover} resizeMode="cover" />

      {/* padding menor só aqui */}
      <View style={[styles.heroContent, { paddingVertical: SPACING.md, paddingHorizontal: SPACING.lg }]}>
        <Text style={styles.heroTitle}>Descoberta do dia</Text>
        <Text style={styles.heroSub} numberOfLines={1}>{band.name}</Text>
        <Text style={styles.heroSub} numberOfLines={1}>{band.genre} • {band.origin}</Text>

        <View style={{ height: SPACING.xs }} />

        <Link href={`/band/${band.id}`} asChild>
          <Pressable style={styles.cta}>
            <Ionicons name="information-circle" size={18} color="#000" />
            <Text style={styles.ctaText}>Ver detalhes</Text>
          </Pressable>
        </Link>
      </View>
    </View>
  );
}
