import { create } from "zustand";

interface State {
  isMenuOpen: boolean;
  openMenu: () => void;
  closeMenu: () => void;
}

const useStore = create<State>((set) => ({
  isMenuOpen: false,
  openMenu: () => set({ isMenuOpen: true }),
  closeMenu: () => set({ isMenuOpen: false }),
}));

export default useStore;
