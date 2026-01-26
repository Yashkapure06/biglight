import { render } from 'preact';
import { LocationProvider, Router, Route } from 'preact-iso';
import { LoginDrawer } from './components/LoginDrawer/LoginDrawer';

import './style.css';
import './tokens/tokens.css';

export function App() {

	const handleSubmit = (data: { customerType: string; email: string }) => {
		console.log('Form submitted:', data);
	};

	return (
		<LocationProvider>
				<main className="flex items-center justify-center bg-[#E8E8E8]" >
					
					<LoginDrawer
						isOpen={true}
						onClose={() => {}}
						onSubmit={handleSubmit}
						variant="desktop"
						presentation="modal"
					/>
				</main>
		</LocationProvider>
	);
}

render(<App />, document.getElementById('app'));
