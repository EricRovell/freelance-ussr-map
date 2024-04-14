import { Marker } from "./marker";
import { MARKERS } from "./markers";
import type { MarkersProps } from "./marker.types";

export const Markers = (props: MarkersProps) => (
	<>
		{MARKERS.map(item => (
			// @ts-expect-error types are fine
			<Marker
				{...item}
				{...props}
				key={item.title}
				data-title={item.title}
			/>
		))}
	</>
);
