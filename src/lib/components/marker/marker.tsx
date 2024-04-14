import { useCallback } from "react";

import { Marker as MapMarker } from "react-simple-maps";
import { MarkerView } from "./marker-view";
import { TOOLTIP_ID } from "../../const";
import type { Props } from "./marker.types";
import { useModalStore } from "../../stores/modal-store";
import { useTooltipStore } from "../../stores/tooltip-store";

export function Marker(props: Props) {
	const { title, id, width, height, ...rest } = props;
	const { openModal } = useModalStore();
	const { setContent, removeContent } = useTooltipStore()

	const handleMouseEnter = useCallback(() => {
		setContent(title);
	}, [ title, setContent ]);

	const handleMouseLeave = () => removeContent();

	const handleClick = useCallback(() => {
		openModal({
			id,
			title,
			width,
			height
		});
	}, [ id, title, openModal, width, height ]);

	return (
		<MapMarker
			id={TOOLTIP_ID}
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
			onClick={handleClick}
			style={{
				default: {
					outline: "none"
				},
				hover: {
					outline: "none"
				},
				pressed: {
					outline: "none"
				}
			}}
			{...rest}
		>
			<MarkerView />
		</MapMarker>
	);
}
