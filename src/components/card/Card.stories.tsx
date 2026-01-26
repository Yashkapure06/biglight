/**
 * Card Component Stories
 * 
 * Showcases card variants (small, medium, large) 
 */

import type { Meta, StoryObj } from '@storybook/preact';
import { Card } from './Card';
import { FiUser } from 'react-icons/fi';

const meta = {
	title: 'Library/Card',
	component: Card,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	argTypes: {
		size: {
			control: 'select',
			options: ['sm', 'md', 'lg'],
		},
		buttonIcon: {
			control: false, 
			table: {
				type: { summary: 'ReactNode' },
			},
		},
	},
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof Card>;

/**
 * Default Card (Medium Size)
 */
export const Default: Story = {
	render: (args) => (
		<Card
			{...args}
			buttonIcon={<FiUser />}
		/>
	),
	args: {
		title: 'Join the family.',
		buttonText: 'Join',
		onButtonClick: () => console.log('Button clicked'),
	},
};

/**
 * Small Card (Mobile Variant)
 */
export const Small: Story = {
	render: (args) => (
		<Card
			{...args}
			buttonIcon={<FiUser />}
		/>
	),
	args: {
		title: 'Join the family.',
		buttonText: 'Join',
		size: 'sm',
		onButtonClick: () => console.log('Button clicked'),
	},
};

/**
 * Large Card (Desktop Variant)
 */
export const Large: Story = {
	render: (args) => (
		<Card
			{...args}
			buttonIcon={<FiUser />}
		/>
	),
	args: {
		title: 'Join the family.',
		buttonText: 'Join',
		size: 'lg',
		onButtonClick: () => console.log('Button clicked'),
	},
};


/**
 * Responsive Card Layout
 */
export const Responsive: Story = {
	render: () => (
		<div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-4xl">
			<div>
				<p className="mb-2 text-sm text-text-secondary">Desktop Variant</p>
				<Card
					title="Join the family."
					buttonText="Join"
					buttonIcon={<FiUser />}
					size="lg"
				/>
			</div>
			<div>
				<p className="mb-2 text-sm text-text-secondary">Mobile Variant</p>
				<Card
					title="Join the family."
					buttonText="Join"
					buttonIcon={<FiUser />}
					size="sm"
				/>
			</div>
		</div>
	),
};
