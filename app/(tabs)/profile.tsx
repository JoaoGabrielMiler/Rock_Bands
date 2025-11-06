// app/(tabs)/profile.tsx
import React, { useMemo, useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  Image,
  Pressable,
  StyleSheet,
  ScrollView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import BandCard from '../../src/components/BandCard';
import { BANDS } from '../../src/data/bands';
import { useFavorites } from '../../src/context/favorites';

// ✅ Tipagem local para bandas (corrige os erros do TypeScript)
type Band = {
  id: string;
  name: string;
  genre: string;
  description?: string;
  image?: string;
};

export default function ProfileScreen() {
  const { isFavorite } = useFavorites();

  const [avatarUri, setAvatarUri] = useState<string | null>(null);
  const [nickname, setNickname] = useState('');
  const [bio, setBio] = useState('');
  const [query, setQuery] = useState(''); // texto digitado pelo usuário

  // todas as bandas que o usuário já favoritou
  const favoriteBands: Band[] = useMemo(
    () => BANDS.filter((b: Band) => isFavorite(b.id)),
    [isFavorite]
  );

  // encontra automaticamente a banda favorita digitada (primeira que “bate”)
  const featuredBand: Band | null = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return null;

    return (
      favoriteBands.find((b: Band) => b.name.toLowerCase() === q) ||
      favoriteBands.find((b: Band) => b.name.toLowerCase().startsWith(q)) ||
      favoriteBands.find((b: Band) => b.name.toLowerCase().includes(q)) ||
      null
    );
  }, [favoriteBands, query]);

  function handlePickAvatar() {
    // aqui depois conectamos ao expo-image-picker
    console.log('trocar avatar…');
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Seu Perfil</Text>

      {/* Avatar + Nickname */}
      <View style={styles.headerRow}>
        <Pressable onPress={handlePickAvatar} style={styles.avatarWrap}>
          {avatarUri ? (
            <Image source={{ uri: avatarUri }} style={styles.avatar} />
          ) : (
            <Ionicons name="person-circle-outline" size={72} color="#9CA3AF" />
          )}
          <View style={styles.cameraBadge}>
            <Ionicons name="camera" size={14} color="#0B0F14" />
          </View>
        </Pressable>

        <View style={styles.nameArea}>
          <Text style={styles.label}>Nome / nickname</Text>
          <TextInput
            style={styles.input}
            placeholder="Como quer ser chamado?"
            placeholderTextColor="#9CA3AF"
            value={nickname}
            onChangeText={setNickname}
          />
        </View>
      </View>

      {/* Bio / descrição pessoal */}
      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <Ionicons name="create-outline" size={20} color="#E5E7EB" />
          <Text style={styles.cardTitle}>Sobre você</Text>
        </View>
        <TextInput
          style={[styles.input, styles.bioInput]}
          placeholder="Escreva uma breve descrição…"
          placeholderTextColor="#9CA3AF"
          value={bio}
          onChangeText={setBio}
          multiline
          numberOfLines={4}
          textAlignVertical="top"
        />
      </View>

      {/* Destaque de banda favorita (entre as já favoritedas) */}
      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <Ionicons name="musical-notes-outline" size={20} color="#E5E7EB" />
          <Text style={styles.cardTitle}>Banda favorita no perfil</Text>
        </View>

        <TextInput
          style={[styles.input, { marginTop: 8 }]}
          placeholder="Digite o nome (já favoritada)"
          placeholderTextColor="#9CA3AF"
          value={query}
          onChangeText={setQuery}
          autoCorrect={false}
        />

        {/* Chips de favoritos para selecionar rapidamente */}
        {favoriteBands.length > 0 && (
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{ marginTop: 10 }}
            contentContainerStyle={{ gap: 8 }}
          >
            {favoriteBands.map((b: Band) => (
              <Pressable
                key={b.id}
                onPress={() => setQuery(b.name)}
                style={[
                  styles.chip,
                  query.toLowerCase() === b.name.toLowerCase() && styles.chipActive,
                ]}
              >
                <Ionicons name="star" size={14} color="#FDE68A" />
                <Text style={styles.chipText}>{b.name}</Text>
              </Pressable>
            ))}
          </ScrollView>
        )}

        {/* Resultado: card da banda digitada (se estiver entre os favoritos) */}
        <View style={{ marginTop: 14 }}>
          {query.length > 0 && !featuredBand && (
            <Text style={styles.helpText}>
              Não encontrei essa banda nos seus favoritos.
            </Text>
          )}
          {featuredBand && (
            <View style={styles.highlightCard}>
              <BandCard band={featuredBand} />
            </View>
          )}
          {query.length === 0 && favoriteBands.length === 0 && (
            <Text style={styles.helpText}>
              Você ainda não favoritou bandas. Vá ao catálogo e adicione algumas ⭐.
            </Text>
          )}
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  // tema dark básico
  container: { flex: 1, backgroundColor: '#0B0F14', padding: 16 },
  title: { color: '#F3F4F6', fontSize: 22, fontWeight: '700', marginBottom: 16 },

  headerRow: { flexDirection: 'row', alignItems: 'center', gap: 12, marginBottom: 20 },

  avatarWrap: {
    width: 80,
    height: 80,
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#111827',
    position: 'relative',
  },
  avatar: { width: 80, height: 80, borderRadius: 40 },
  cameraBadge: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    width: 22,
    height: 22,
    borderRadius: 11,
    backgroundColor: '#F472B6',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: '#0B0F14',
  },

  nameArea: { flex: 1 },
  label: { color: '#A1A1AA', fontSize: 12, marginBottom: 6 },
  input: {
    backgroundColor: '#111827',
    borderColor: '#1F2937',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 12,
    height: 48,
    color: '#E5E7EB',
  },

  card: {
    backgroundColor: '#0F172A',
    borderColor: '#1F2937',
    borderWidth: 1,
    borderRadius: 14,
    padding: 14,
    marginBottom: 14,
  },
  cardHeader: { flexDirection: 'row', alignItems: 'center', gap: 8 },
  cardTitle: { color: '#E5E7EB', fontWeight: '600', fontSize: 16 },

  bioInput: { minHeight: 110, height: undefined, paddingTop: 12 },

  chip: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    backgroundColor: '#1F2937',
    borderRadius: 999,
    paddingHorizontal: 10,
    paddingVertical: 6,
  },
  chipActive: { borderWidth: 1, borderColor: '#FDE68A' },
  chipText: { color: '#E5E7EB', fontSize: 12, fontWeight: '600' },

  helpText: { color: '#9CA3AF', fontSize: 12 },
  highlightCard: { marginTop: 6, borderRadius: 12, overflow: 'hidden' },
});
