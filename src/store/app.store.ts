import { create } from "zustand";

interface IAppStore {
  showMenu: boolean;
  setShowMenu: (show: boolean) => void;
}

export const appStore = create<IAppStore>((set) => ({
  showMenu: false,
  setShowMenu: (show) => set({ showMenu: show }),
}));
