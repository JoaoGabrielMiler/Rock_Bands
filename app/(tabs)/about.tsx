import { StyleSheet, Text, View } from 'react-native';
import { COLORS, SPACING } from '../../src/theme/theme';

export default function AboutScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sobre o App</Text>
      <Text style={styles.text}>
        App criado nas aulas de Aplicações Móveis, ministrada pelo professor Brendo Vale e executado por Erik Augusto e João Gabriel.
      </Text> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.background, padding: SPACING.lg, justifyContent: 'center' },
  title: { fontSize: 22, fontWeight: 'bold', color: COLORS.text, marginBottom: SPACING.sm },
  text: { color: COLORS.textMuted }
});