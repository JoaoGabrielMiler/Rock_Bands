// app/(tabs)/index.tsx
import { Link } from 'expo-router';
import React from 'react';
import { View, Text, StyleSheet, Pressable, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { COLORS, SPACING, RADIUS } from '../../src/theme/theme';
import { homeStyles as styles } from '../../src/styles/home.styles'; // aqui é o import da estilização (quero deixar menos poliudo esse arquivo)

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


