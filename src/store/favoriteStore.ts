import create from "zustand";

interface FavoriteStore {
  favorites: number[];
  toggleFavorite: (id: number) => void;
}

const FAVORITES_KEY = "favorites";

export const useFavoriteStore = create<FavoriteStore>((set) => ({
  favorites: JSON.parse(localStorage.getItem(FAVORITES_KEY) || "[]"),
  toggleFavorite: (id) =>
    set((state) => {
      const newFavs = state.favorites.includes(id)
        ? state.favorites.filter((f) => f !== id)
        : [...state.favorites, id];
      localStorage.setItem(FAVORITES_KEY, JSON.stringify(newFavs));
      return { favorites: newFavs };
    }),
}));
