// src/context/favorites.tsx
import React, { createContext, useContext, useMemo, useState } from 'react';

type Ctx = {
  favorites: Set<string>;
  isFavorite: (id: string) => boolean;
  toggleFavorite: (id: string) => void;
};

const FavoritesContext = createContext<Ctx | null>(null);

export function FavoritesProvider({ children }: { children: React.ReactNode }) {
  const [favorites, setFavorites] = useState<Set<string>>(new Set());

  function toggleFavorite(id: string) {
    setFavorites(prev => {
      const copy = new Set(prev);
      copy.has(id) ? copy.delete(id) : copy.add(id);
      return copy;
    });
  }

  const value = useMemo(
    () => ({ favorites, isFavorite: (id: string) => favorites.has(id), toggleFavorite }),
    [favorites]
  );

  return <FavoritesContext.Provider value={value}>{children}</FavoritesContext.Provider>;
}

export function useFavorites() {
  const ctx = useContext(FavoritesContext);
  if (!ctx) throw new Error('useFavorites deve ser usado dentro de FavoritesProvider');
  return ctx;
}
