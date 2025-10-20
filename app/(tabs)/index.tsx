// app/(tabs)/index.tsx
import { Link } from 'expo-router';
import React from 'react';
import { View, Text, StyleSheet, Pressable, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { COLORS, SPACING, RADIUS } from '../../src/theme/theme';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      {/* um “spot” de cor para dar clima, bem minimal */}
      <View pointerEvents="none" style={styles.backSpot} />
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar barStyle="light-content" />
        <Header />
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

function Hero() {
  return (
    <View style={styles.hero}>
      <View style={styles.heroGlow} />
      <View style={styles.heroContent}>
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

        <Link href="/bands" asChild>
          <Pressable style={styles.cta}>
            <Ionicons name="musical-notes" size={18} color="#000" />
            <Text style={styles.ctaText}>Explorar Bandas</Text>
          </Pressable>
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.bg },

  backSpot: {
    position: 'absolute',
    top: -140,
    left: -120,
    width: 420,
    height: 420,
    borderRadius: 9999,
    backgroundColor: 'rgba(225,29,72,0.12)',
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: SPACING.md,
    paddingHorizontal: SPACING.lg,
    paddingBottom: SPACING.md,
  },
  logoWrap: {
    width: 34,
    height: 34,
    borderRadius: 8,
    backgroundColor: COLORS.card,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: COLORS.border,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: COLORS.text,
    fontSize: 20,
    fontWeight: '800',
    letterSpacing: 0.4,
  },

  hero: {
    marginHorizontal: SPACING.lg,
    borderRadius: RADIUS.xl,
    overflow: 'hidden',
    backgroundColor: COLORS.card,
    borderWidth: 1,
    borderColor: COLORS.border,
    // leve profundidade
    shadowColor: '#000', shadowOpacity: 0.25, shadowRadius: 10, shadowOffset: { width: 0, height: 6 },
    elevation: 6,
  },
  heroGlow: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(225,29,72,0.06)',
  },
  heroContent: {
    padding: SPACING.xl,
    alignItems: 'center',
    justifyContent: 'center',
  },
  heroTitle: {
    color: COLORS.text,
    fontSize: 22,
    fontWeight: '900',
    marginTop: SPACING.sm,
    letterSpacing: 0.5,
  },
  heroSub: {
    marginTop: 6,
    color: COLORS.subtext,
    textAlign: 'center',
    lineHeight: 20,
  },

  cta: {
    flexDirection: 'row',
    gap: 8,
    backgroundColor: COLORS.primary,
    borderRadius: 999,
    height: 44,
    paddingHorizontal: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ctaText: { color: '#000', fontWeight: '800', fontSize: 16 },
});
