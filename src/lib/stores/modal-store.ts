import { create } from "zustand";

interface ModalContent {
	id?: string;
	title: string;
	width: number;
	height: number;
}

interface ModalStore {
	isOpen: boolean;
	content: ModalContent | null;
	closeModal: () => void;
	openModal: (content: ModalContent) => void;
}

export const useModalStore = create<ModalStore>((set) => ({
	isOpen: false,
	content: null,
	closeModal: () => set(() => ({
		isOpen: false,
		content: null
	})),
	openModal: (content: ModalContent) => set(() => ({
		isOpen: true,
		content: content
	}))
}));
