
import { Tooltip as ReactTooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import { TOOLTIP_ID } from "../../../lib/const";
import { useTooltipStore } from "../../stores/tooltip-store";

export function Tooltip() {
	const { content } = useTooltipStore();

	return (
		<ReactTooltip
			anchorSelect={`#${TOOLTIP_ID}`}
			data-tooltip-place="top"
			offset={30}
			content={content}
			float
			style={{
				fontSize: "2rem"
			}}
		/>
	);
}
