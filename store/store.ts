import { create } from "zustand";

interface State {
  isMenuOpen: boolean;
  openMenu: () => void;
  closeMenu: () => void;
  language: string;
  setLanguage: (language: string) => void;
}

const useStore = create<State>((set) => ({
  isMenuOpen: false,
  openMenu: () => set({ isMenuOpen: true }),
  closeMenu: () => set({ isMenuOpen: false }),
  language: "es",
  setLanguage: (language) => set({ language }),
}));

export default useStore;
