import type { Preview } from '@storybook/preact';
import '../src/style.css';
import '../src/tokens/tokens.css';

const preview: Preview = {
	parameters: {
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
	},
	decorators: [
		(Story, context) => {
			// Get theme from story parameters or default to brandA
			const theme = (context.parameters.theme || context.globals?.theme || 'brandA') as string;
			
			// Return JSX with theme wrapper
			return (
				<div data-theme={theme}>
					<Story />
				</div>
			);
		},
	],
	globalTypes: {
		theme: {
			name: 'Theme',
			description: 'Design system theme',
			defaultValue: 'brandA',
			toolbar: {
				icon: 'paintbrush',
				items: [
					{ value: 'brandA', title: 'Brand A' },
					{ value: 'brandB', title: 'Brand B' },
				],
				showName: true,
			},
		},
	},
};

export default preview;
