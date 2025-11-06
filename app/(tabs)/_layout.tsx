// app/(tabs)/_layout.tsx
import React from 'react';
import { View, Platform } from 'react-native';
import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { COLORS, SPACING } from '../../src/theme/theme';

export default function TabsLayout() {
return (
    <Tabs
    screenOptions={{
        headerShown: false,
        tabBarShowLabel: true,
        tabBarActiveTintColor: COLORS.text,
        tabBarInactiveTintColor: COLORS.subtext,
        tabBarStyle: {
        position: 'absolute',
        left: SPACING.lg,
        right: SPACING.lg,
        bottom: Platform.OS === 'ios' ? 18 : 12,
        height: 64,
        paddingTop: 6,
        paddingBottom: 8,
        backgroundColor: COLORS.card,
        borderTopWidth: 0,
        borderWidth: 1,
        borderColor: COLORS.border,
        borderRadius: 22,
          // Sombra
        shadowColor: '#000',
        shadowOpacity: 0.22,
        shadowRadius: 12,
        shadowOffset: { width: 0, height: 8 },
        elevation: 12,
        },
        tabBarLabelStyle: {
        fontSize: 11,
        fontWeight: '700',
        marginTop: 2,
        },
    }}
    >
    <Tabs.Screen
        name="index"
        options={{
        title: 'Início',
        tabBarIcon: ({ color, focused }) => (
            <IconPill focused={focused}>
            <Ionicons
                name={focused ? 'home' : 'home-outline'}
                size={22}
                color={focused ? '#000' : color}
            />
            </IconPill>
        ),
        }}
    />
    <Tabs.Screen
        name="catalog"
        options={{
        title: 'Catálogo',
        tabBarIcon: ({ color, focused }) => (
            <IconPill focused={focused}>
            <Ionicons name="list" size={22} color={focused ? '#000' : color} />
            </IconPill>
        ),
        }}
    />
    <Tabs.Screen
        name="favorites"
        options={{
        title: 'Favoritos',
        tabBarIcon: ({ color, focused }) => (
            <IconPill focused={focused}>
            <Ionicons
                name={focused ? 'heart' : 'heart-outline'}
                size={22}
                color={focused ? '#000' : color}
            />
            </IconPill>
        ),
        }}
    />
    <Tabs.Screen
<<<<<<< HEAD
  name="profile"
  options={{
    title: 'Perfil',
    tabBarIcon: ({ color }) => <Ionicons name="person-outline" size={26} color={color} />,
  }}
/>
    <Tabs.Screen
=======
>>>>>>> 04d6d94fca9d93696b9ba1e9d5cfedf9cb5c978a
        name="about"
        options={{
        title: 'Sobre',
        tabBarIcon: ({ color, focused }) => (
            <IconPill focused={focused}>
            <Ionicons
                name={focused ? 'information-circle' : 'information-circle-outline'}
                size={22}
                color={focused ? '#000' : color}
            />
            </IconPill>
        ),
        }}
    />
    </Tabs>
);
}

function IconPill({
focused,
children,
}: {
focused: boolean;
children: React.ReactNode;
}) {
return (
    <View
    style={{
        padding: focused ? 8 : 0,
        borderRadius: 999,
        backgroundColor: focused ? COLORS.primary : 'transparent',
    }}
    >
    {children}
    </View>
);
}
