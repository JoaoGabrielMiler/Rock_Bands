// app/(tabs)/catalog.tsx
import React, { useMemo, useState, useRef } from 'react';
import { FlatList, StyleSheet, Text, TextInput, View, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { BANDS } from '../../src/data/bands';
import BandCard from '../../src/components/BandCard';
import { COLORS, RADIUS, SPACING } from '../../src/theme/theme';

export default function CatalogScreen() {
  const [q, setQ] = useState('');
  const inputRef = useRef<TextInput>(null);

  const filtered = useMemo(() => {
    const term = q.trim().toLowerCase();
    if (!term) return BANDS;
    return BANDS.filter(b =>
      b.name.toLowerCase().includes(term) ||
      b.genre.toLowerCase().includes(term) ||
      b.origin.toLowerCase().includes(term)
    );
  }, [q]);

  const Header = (
    <View style={styles.stickyHeader}>
      <View style={styles.searchWrap}>
        <Ionicons name="search" size={18} color={COLORS.subtext} />
        <TextInput
          ref={inputRef}
          value={q}
          onChangeText={setQ}
          placeholder="Buscar banda, gênero ou origem..."
          placeholderTextColor={COLORS.subtext}
          style={styles.searchInput}
          selectionColor={COLORS.primary}
          returnKeyType="search"
          onSubmitEditing={() => inputRef.current?.blur()}
        />
        {q ? (
          <Pressable onPress={() => setQ('')} style={styles.clearBtn}>
            <Ionicons name="close" size={16} color={COLORS.subtext} />
          </Pressable>
        ) : null}
      </View>

      <Text style={styles.counter}>
        {filtered.length} {filtered.length === 1 ? 'resultado' : 'resultados'}
      </Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={filtered}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <BandCard band={item} />}
        ItemSeparatorComponent={() => <View style={{ height: SPACING.md }} />}
        contentContainerStyle={{ paddingHorizontal: SPACING.lg, paddingBottom: 40, paddingTop: SPACING.md }}
        ListHeaderComponent={Header}
        stickyHeaderIndices={[0]}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.background },

  // Sticky header (fundo igual ao da tela para não "quebrar" ao grudar)
  stickyHeader: {
    backgroundColor: COLORS.background,
    paddingHorizontal: SPACING.lg,
    paddingBottom: SPACING.sm,
  },

  // Search
  searchWrap: {
    height: 44,
    borderRadius: RADIUS.lg,
    paddingHorizontal: 12,
    backgroundColor: COLORS.card,
    borderWidth: 1,
    borderColor: COLORS.border,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  searchInput: {
    flex: 1,
    color: COLORS.text,
    fontSize: 14,
  },
  clearBtn: {
    width: 28, height: 28, borderRadius: 14,
    alignItems: 'center', justifyContent: 'center',
    backgroundColor: COLORS.card, borderWidth: 1, borderColor: COLORS.border,
  },

  // Counter
  counter: {
    marginTop: 8,
    color: COLORS.subtext,
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 0.3,
  },
});
