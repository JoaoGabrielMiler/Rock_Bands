// app/(tabs)/catalog.tsx
import React, { useMemo, useState, useRef, useCallback } from 'react';
import { FlatList, Text, TextInput, View, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { BANDS } from '../../src/data/bands';
import BandCard from '../../src/components/BandCard';
import { COLORS, SPACING } from '../../src/theme/theme';
import { catalogStyles as styles } from '../../src/styles/catalog.styles';

export default function CatalogScreen() {
  const router = useRouter();
  const inputRef = useRef<TextInput>(null);

  const { tag } = useLocalSearchParams<{ tag?: string | string[] }>();
  const appliedTag = Array.isArray(tag) ? tag[0] : tag;

  const [q, setQ] = useState('');

  // ---- filtros (mesmo comportamento, só organizado) ----
  const filtered = useMemo(() => {
    let list = BANDS;

    if (appliedTag) {
      const needle = appliedTag.toLowerCase();
      list = list.filter((b) => String(b.genre ?? '').toLowerCase().includes(needle));
    }

    const term = q.trim().toLowerCase();
    if (term) {
      list = list.filter((b) =>
        [b.name, b.genre, b.origin]
          .map((v) => String(v ?? '').toLowerCase())
          .some((v) => v.includes(term))
      );
    }

    return list;
  }, [appliedTag, q]);

  // ---- memo: evita recriar funções/objetos a cada render ----
  const keyExtractor = useCallback((item: (typeof BANDS)[number]) => String(item.id), []);
  const renderItem = useCallback(
    ({ item }: { item: (typeof BANDS)[number] }) => <BandCard band={item} />,
    []
  );
  const listContentStyle = useMemo(
    () => ({ paddingHorizontal: SPACING.lg, paddingBottom: 40, paddingTop: SPACING.md }),
    []
  );
  const Separator = useCallback(() => <View style={{ height: SPACING.md }} />, []);

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

      {appliedTag ? (
        <View
          style={{
            marginTop: SPACING.xs,
            flexDirection: 'row',
            alignItems: 'center',
            gap: 8,
          }}
        >
          <View
            style={{
              paddingHorizontal: 12,
              paddingVertical: 6,
              borderRadius: 999,
              backgroundColor: COLORS.card,
              borderWidth: 1,
              borderColor: COLORS.border,
            }}
          >
            <Text style={{ color: COLORS.text, fontWeight: '800' }}>Filtro: {appliedTag}</Text>
          </View>

          <Pressable onPress={() => router.replace('/catalog')}
            style={{
              paddingHorizontal: 12,
              paddingVertical: 6,
              borderRadius: 999,
              backgroundColor: COLORS.card,
              borderWidth: 1,
              borderColor: COLORS.border,
            }}>
            <Text style={{ color: COLORS.text }}>Limpar</Text>
          </Pressable>
        </View>
      ) : null}

      <Text style={styles.counter}>
        {filtered.length} {filtered.length === 1 ? 'resultado' : 'resultados'}
      </Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={filtered}
        keyExtractor={keyExtractor}
        renderItem={renderItem}            
        ItemSeparatorComponent={Separator} 
        contentContainerStyle={listContentStyle} 
        ListHeaderComponent={Header}
        stickyHeaderIndices={[0]}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
        // ---- ajustes de desempenho ----
        initialNumToRender={12}
        maxToRenderPerBatch={12}
        windowSize={7}
        updateCellsBatchingPeriod={50}
        removeClippedSubviews
      />
    </View>
  );
}
