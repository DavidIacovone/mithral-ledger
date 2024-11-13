import { create } from 'zustand';

type SystemStore = {
    viewDisplayed: string;
}

export const useSystemStore = create<SystemStore>(() => ({
    viewDisplayed: "game",
}));