import { create } from "zustand";

interface TooltipStore {
	content: string;
	setContent: (input: string) => void;
	removeContent: () => void;
}

export const useTooltipStore = create<TooltipStore>((set) => ({
	content: "",
	setContent: (input) => set(() => ({ content: input })),
	removeContent: () => set(() => ({ content: "" }))
}));
