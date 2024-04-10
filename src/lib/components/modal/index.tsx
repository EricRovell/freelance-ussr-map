import ReactModal from "react-modal";
import { useModalStore } from "../../stores/modal-store";
import styles from "./modal.module.css";

ReactModal.setAppElement("#root");

export function Modal() {
	const { isOpen, closeModal, content } = useModalStore();

	if (!content) {
		return null;
	}

	const { id, title } = content;

	return (
		<ReactModal
			className={styles.content}
			isOpen={isOpen}
			onRequestClose={closeModal}
			shouldCloseOnOverlayClick={true}
			overlayClassName={styles.overlay}
		>
			<div className={styles.content}>
				<header className={styles.header}>
					<h2 className={styles.title}>
						{title}
					</h2>
					<button className={styles.button} onClick={closeModal}>
						<svg viewBox="0 0 256 256">
							<path d="M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z" />
						</svg>
					</button>
				</header>
				<img
					className={styles.image}
					src={`/img/${id}.jpg`}
					alt={title}
				/>
			</div>
		</ReactModal>
	);
}
