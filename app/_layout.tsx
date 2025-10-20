// app/_layout.tsx
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { FavoritesProvider } from '../src/context/favorites';


export default function RootLayout() {
return (
    <FavoritesProvider>
    <StatusBar style="dark" />
    <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(tabs)" />
        <Stack.Screen name="band/[id]" />
    </Stack>
    </FavoritesProvider>
);
}
