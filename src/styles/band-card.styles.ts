import { StyleSheet } from 'react-native';
import { COLORS, RADIUS, SPACING } from '../theme/theme';

export const bandCardStyles = StyleSheet.create({
card: {
    backgroundColor: COLORS.card,
    borderRadius: RADIUS.md,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: COLORS.border,
    marginBottom: SPACING.md,
},

  // 👇 ESTA CHAVE PRECISA EXISTIR
cover: {
    width: '100%',
    aspectRatio: 16 / 9, // troque para 4/3 ou 1 se preferir
    backgroundColor: '#111',
},

info: { padding: SPACING.md },
name: { fontSize: 18, fontWeight: 'bold', color: COLORS.text },
meta: { marginTop: 4, color: COLORS.textMuted },

heart: {
    position: 'absolute',
    right: 10,
    top: 10,
    padding: 6,
    backgroundColor: '#ffffffcc',
    borderRadius: 999,
},
});
