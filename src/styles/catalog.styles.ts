import { StyleSheet } from 'react-native';
import { COLORS, RADIUS, SPACING } from '../theme/theme';

export const catalogStyles = StyleSheet.create({
container: { flex: 1, backgroundColor: COLORS.background },

stickyHeader: {
    backgroundColor: COLORS.background,
    paddingHorizontal: SPACING.lg,
    paddingBottom: SPACING.sm,
},

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

counter: {
    marginTop: 8,
    color: COLORS.subtext,
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 0.3,
},

filterPill: {
    marginTop: 6,
    alignSelf: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 999,
    backgroundColor: COLORS.card,
    borderWidth: 1,
    borderColor: COLORS.border,
},
filterPillText: { color: COLORS.text, fontWeight: '700' },
filterClear: {
    marginLeft: 2,
    width: 22,
    height: 22,
    borderRadius: 11,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
},
});
