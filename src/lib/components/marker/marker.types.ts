import type { MarkerProps } from "react-simple-maps";

export type MarkerData =
	Pick<MarkerProps, "id" | "coordinates"> &
	{ title: string };

export interface Props extends MarkerProps {
	title: string;
	id?: string;
}

export type MarkersProps = MarkerProps;
