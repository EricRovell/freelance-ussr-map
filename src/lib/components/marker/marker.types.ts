import type { MarkerProps } from "react-simple-maps";

export type MarkerData =
	Pick<MarkerProps, "id" | "coordinates"> &
	{
		title: string,
		width: number;
		height: number;
	};

export interface Props extends MarkerProps {
	title: string;
	id?: string;
	width: number;
	height: number;
}

export type MarkersProps = MarkerProps;
