// @ts-expect-error: the module is present
import { useZoomPanContext } from "react-simple-maps";
import { useEffect, useState } from "react";
import styles from "./style.module.css";

const INITIAL_SIZE = 32;

function clamp(value, min, max) {
	return Math.min(Math.max(value, min), max);
}

export function MarkerView() {
	const { k } = useZoomPanContext();
	const [ size, setSize ] = useState(clamp(INITIAL_SIZE * (k ** 2) + 2, 20, 30));

	useEffect(() => {
		setSize(clamp(INITIAL_SIZE * (k ** 2) + 2, 20, 30))
	}, [ k ]);

	return (
		<svg
			className={styles.marker}
			width={size}
			height={size}
			fill="#000000"
			viewBox="0 0 32 32"
			transform={`translate(-${size / 4}, -${size / 4 * 1.5})`}
			>
				<path d="m5.89,0C2.64,0,0,2.64,0,5.89c0,5.04,5.36,8.85,5.59,9.01.18.13.43.13.61,0,.23-.16,5.59-3.97,5.59-9.01,0-3.25-2.64-5.89-5.89-5.89Zm0,3.75c1.18,0,2.14.96,2.14,2.14s-.96,2.14-2.14,2.14-2.14-.96-2.14-2.14.96-2.14,2.14-2.14Z"/>
		</svg>
	);
}
