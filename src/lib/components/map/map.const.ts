import type { ComposableMapProps, ZoomableGroupProps } from "react-simple-maps";

export const GEO_URL = "/former-soviet-union-ussr.geojson";

export const PROJECTION_CONFIG: ComposableMapProps = {
	projection: "geoMercator",
	projectionConfig: {
		center: [ 75, 70 ],
		scale: 250,
		rotate: [ -11, 0, 0 ]
	}
};

export const ZOOM_CONFIG: ZoomableGroupProps = {
	minZoom: 0.25,
	maxZoom: 6,
	translateExtent: [
		[ -25, 25 ],
		[ 1000, 900 ]
	]
};

export const GEOGRAPHY_STYLE = {
	fill: "lightgrey",
	strokeWidth: "0.5px",
	stroke: "black",
	style: {
		default: {
			outline: "none"
		},
		hover: {
			outline: "none",
			strokeWidth: "1px"
		},
		pressed: {
			outline: "none"
		}
	}
};
