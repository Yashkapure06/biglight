/**
 * Dropdown Component Stories
 * 
 * Showcases all dropdown states: default, focus, selected, disabled, opened
 */

import type { Meta, StoryObj } from '@storybook/preact';
import { Dropdown } from './Dropdown';
import { Annotation } from '../Annotation/Annotation';
import { FiClock } from 'react-icons/fi';

const meta = {
	title: 'Library/Dropdown',
	component: Dropdown,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	argTypes: {
		disabled: {
			control: 'boolean',
		},
		required: {
			control: 'boolean',
		},
		iconLeft: {
			control: false,
			table: { type: { summary: 'ReactNode' } },
		},
	},
} satisfies Meta<typeof Dropdown>;

export default meta;
type Story = StoryObj<typeof Dropdown>;

const sampleOptions = [
	{ value: 'retail', label: 'Retail Store Owner' },
	{ value: 'convenience', label: 'Convenience Shop' },
	{ value: 'hospitality', label: 'Hospitality' },
	{ value: 'catering', label: 'Catering & Events' },
	{ value: 'online', label: 'Online/Delivery Only' },
];

/**
 * Default State
 */
export const Default: Story = {
	render: (args) => <div className="w-80">
						<Dropdown label="Label" required options={sampleOptions} placeholder="Label" iconLeft={<FiClock />} />
					</div>,
	args: {
		label: 'Label',
		required: true,
		options: sampleOptions,
		placeholder: 'Label',
	},
};

/**
 * Focus State
 * (Click to open and see focus state)
 */
export const Focus: Story = {
	render: (args) => <div className="w-80">
						<Dropdown label="Label" required options={sampleOptions} placeholder="Label" defaultFocused iconLeft={<FiClock />} />
					</div>,
	args: {
		label: 'Label',
		required: true,
		options: sampleOptions,
		placeholder: 'Label',
		defaultFocused: true,
	},
	parameters: {
		docs: {
			description: {
				story: 'Click the dropdown to see the focused/open state (chevron up).',
			},
		},
	},
};

/**
 * Selected State
 */
export const Selected: Story = {
	render: (args) => <div className="w-80">
						<Dropdown label="Label" required options={sampleOptions} value="retail" placeholder="Label" iconLeft={<FiClock />} />
					</div>,
	args: {
		label: 'Label',
		required: true,
		options: sampleOptions,
		value: 'retail',
	},
};

/**
 * Disabled State
 */
export const Disabled: Story = {
	render: (args) => <div className="w-80">
						<Dropdown label="Label" required options={sampleOptions} value="retail" placeholder="Label" disabled iconLeft={<FiClock />} />
					</div>,
	args: {
		label: 'Label',
		required: true,
		options: sampleOptions,
		value: 'retail',
		disabled: true,
	},
};

/**
 * Opened State
 * (Click to see dropdown menu)
 */
export const Opened: Story = {
	render: (args) => 
		<div className="inline-grid grid-cols-[auto_1fr]">
	<div className="w-80">
						<Dropdown label="Label" required options={sampleOptions} placeholder="Label" defaultOpen iconLeft={<FiClock />} />
					</div>
					</div>,
	args: {
		label: 'Label',
		required: true,
		options: sampleOptions,
		defaultOpen: true,
		placeholder: 'Label',
	},
	parameters: {
		docs: {
			description: {
				story: 'Opened by default to show the menu.',
			},
		},
	},
};

/**
 * All States Comparison
 */
export const AllStates: Story = {
	render: () => (
		<div className="inline-grid grid-cols-[auto_1fr]">
			{/* Left side annotations */}
			<div className="flex flex-col items-end justify-between py-7 h-full gap-0">
				<div className="h-20 flex items-center"><Annotation variant="left">Default</Annotation></div>
				<div className="h-20 flex items-center"><Annotation variant="left">Focus</Annotation></div>
				<div className="h-20 flex items-center"><Annotation variant="left">Selected</Annotation></div>
				<div className="h-20 flex items-center"><Annotation variant="left">Disabled</Annotation></div>
				<div className="h-20 flex items-center"><Annotation variant="left">Opened</Annotation></div>
			</div>

			{/* Right side dropdowns */}
			<div className="border border-dashed border-grey-400 rounded-lg bg-white px-8 py-6 my-2 flex flex-col gap-6 justify-between">
				<div style={{ height: '5rem' }} className="flex items-center">
					<div className="w-80">
						<Dropdown label="Label" required options={sampleOptions} placeholder="Label" iconLeft={<FiClock />} />
					</div>
				</div>
				<div style={{ height: '5rem' }} className="flex items-center">
					<div className="w-80">
						<Dropdown label="Label" required options={sampleOptions} placeholder="Label" defaultFocused iconLeft={<FiClock />} />
					</div>
				</div>
				<div style={{ height: '5rem' }} className="flex items-center">
					<div className="w-80">
						<Dropdown label="Label" required options={sampleOptions} value="retail" iconLeft={<FiClock />} />
					</div>
				</div>
				<div style={{ height: '5rem' }} className="flex items-center">
					<div className="w-80">
						<Dropdown label="Label" required options={sampleOptions} value="retail" disabled iconLeft={<FiClock />} />
					</div>
				</div>
				<div style={{ height: '5rem' }} className="flex items-center">
					<div className="w-80">
						<Dropdown label="Label" required options={sampleOptions} placeholder="Label" defaultOpen iconLeft={<FiClock />} />
					</div>
				</div>
			</div>
		</div>
	),
};

