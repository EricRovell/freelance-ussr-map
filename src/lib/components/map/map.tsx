import { ComposableMap, Geographies, Geography, ZoomableGroup } from "react-simple-maps";
import { Markers } from "../marker";
import { PROJECTION_CONFIG, ZOOM_CONFIG, GEO_URL, GEOGRAPHY_STYLE } from "./map.const";
import { TOOLTIP_ID } from "../../const";
import styles from "./map.module.css";

export const Map = () => (
	<div className={styles.map} id={TOOLTIP_ID}>
		<ComposableMap {...PROJECTION_CONFIG}>
			<ZoomableGroup {...ZOOM_CONFIG}>
				<Geographies geography={GEO_URL}>
					{({ geographies }) =>
						geographies.map((geo) => (
							<Geography
								key={geo.rsmKey}
								geography={geo}
								{...GEOGRAPHY_STYLE}
							/>
						))
					}
				</Geographies>
				<Markers />
			</ZoomableGroup>
		</ComposableMap>
	</div>
);
