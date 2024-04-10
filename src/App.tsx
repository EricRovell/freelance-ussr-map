import { Map } from './lib/components/map/map'
import { Modal } from './lib/components/modal';
import { Tooltip } from './lib/components/tooltip';
import { Title } from './lib/components/title';
import "react-tooltip/dist/react-tooltip.css";

function App() {

	return (
		<>
			<Map />
			<Tooltip />
			<Modal />
			<Title />
		</>
	);
}

export default App
