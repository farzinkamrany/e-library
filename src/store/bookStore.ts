import create from "zustand";

interface BookStore {
  search: string;
  category: string;
  sortBy: "title" | "author" | "category";
  history: string[];
  setSearch: (s: string) => void;
  setCategory: (c: string) => void;
  setSortBy: (s: "title" | "author" | "category") => void;
  addHistory: (query: string) => void;
  clearHistory: () => void;
}

export const useBookStore = create<BookStore>((set) => ({
  search: "",
  category: "همه",
  sortBy: "title",
  history: [],
  setSearch: (s) => set((state) => ({ search: s, history: [...state.history, s] })),
  setCategory: (c) => set({ category: c }),
  setSortBy: (s) => set({ sortBy: s }),
  addHistory: (query) => set((state) => ({ history: [...state.history, query] })),
  clearHistory: () => set({ history: [] }),
}));
