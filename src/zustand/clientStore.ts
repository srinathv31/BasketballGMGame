import create from "zustand";

interface ClientState {
    index: number,
    updateIndex: (val: number) => void
}

export const useClientStore = create<ClientState>((set) => ({
    index: 1,
    updateIndex: (val) => set(() => ({ index: val }))
}));
