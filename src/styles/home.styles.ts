import { StyleSheet } from 'react-native';
import { COLORS, SPACING, RADIUS } from '../theme/theme';

export const homeStyles = StyleSheet.create({
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
    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 6 },
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

  /* chips */
  sectionTitle: {
    color: COLORS.text,
    fontSize: 16,
    fontWeight: '800',
    marginTop: SPACING.lg,
    marginBottom: SPACING.sm,
    paddingHorizontal: SPACING.lg,
    letterSpacing: 0.3,
  },
  chipsRow: { paddingHorizontal: SPACING.lg },
  chip: {
    paddingHorizontal: SPACING.md,
    paddingVertical: SPACING.xs,
    borderRadius: 999,
    borderWidth: 1,
    borderColor: COLORS.card,
    backgroundColor: COLORS.bg,
    marginRight: SPACING.sm,
  },
  chipSelected: { backgroundColor: COLORS.primary, borderColor: COLORS.primary },
  chipText: { color: COLORS.text, fontWeight: '600' },
  chipTextSelected: { color: '#000' },
});
