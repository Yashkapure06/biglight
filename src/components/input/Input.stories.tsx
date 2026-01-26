/**
 * Input Component Stories
 * 
 * Showcases all input states: default, focus, filled, disabled, error, success
 * 
 */

import type { Meta, StoryObj } from '@storybook/preact';
import { Input } from './Input';
import { Annotation } from '../Annotation/Annotation';

const meta = {
	title: 'Library/Input',
	component: Input,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	argTypes: {
		state: {
			control: 'select',
			options: ['default', 'error', 'success'],
		},
		disabled: {
			control: 'boolean',
		},
		required: {
			control: 'boolean',
		},
	},
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof Input>;

/**
 * Default State
 * No label above, placeholder inside, light grey background
 */
export const Default: Story = {
	args: {
		label: 'Input label',
		required: true,
		placeholder: 'Input label',
	},
};

/**
 * Focus State
 * Label appears above, white background, cursor visible
 */
export const Focus: Story = {
	args: {
		label: 'Label',
		required: true,
		placeholder: 'Input label',
	},
	parameters: {
		docs: {
			description: {
				story: 'Click into the input field to see the focus state.',
			},
		},
	},
};

/**
 * Filled State
 * Label above, value inside, white background
 */
export const Filled: Story = {
	args: {
		label: 'Label',
		required: true,
		value: 'Placeholder',
		placeholder: 'Input label',
	},
};

/**
 * Disabled State
 * Label above, faded text, muted grey background
 */
export const Disabled: Story = {
	args: {
		label: 'Label',
		required: true,
		disabled: true,
		value: 'Input label',
		placeholder: 'Input label',
	},
};

/**
 * Error State
 * Red label, red border, red icon, red required text
 */
export const Error: Story = {
	args: {
		label: 'Label',
		required: true,
		state: 'error',
		value: 'Placeholder',
		errorMessage: 'This field has an error',
	},
};

/**
 * Success State
 * Green border, green checkmark icon
 */
export const Success: Story = {
	args: {
		label: 'Label',
		required: true,
		state: 'success',
		value: 'Placeholder',
		successMessage: 'This field is valid',
	},
};


/**
 *  All States
 */
export const AllStates: Story = {
	render: () => (
		<div className="space-y-6 w-96">
			<div className="flex items-center gap-4">
				<div className="w-64">
					<Input label="Input label" required placeholder="Input label" />
				</div>
				<Annotation variant="right"
				>Default</Annotation>
			</div>
			<div className="flex items-center gap-4">
				<div className="w-64">
					<Input label="Label" required placeholder="Input label" />
				</div>
				<Annotation variant="right"
				
				>Focus</Annotation>
			</div>
			<div className="flex items-center gap-4">
				<div className="w-64">
					<Input label="Label" required value="Placeholder" />
				</div>
				<Annotation variant="right"
				
				>Filled</Annotation>
			</div>
			<div className="flex items-center gap-4">
				<div className="w-64">
					<Input label="Label" required disabled value="Input label" />
				</div>
				<Annotation variant="right"
				
				>Disabled</Annotation>
			</div>
			<div className="flex items-center gap-4">
				<div className="w-64">
					<Input label="Label" required state="error" value="Placeholder" />
				</div>
				<Annotation variant="right"
				
				>Error</Annotation>
			</div>
			<div className="flex items-center gap-4">
				<div className="w-64">
					<Input label="Label" required state="success" value="Placeholder" />
				</div>
				<Annotation variant="right"
				
				>Success</Annotation>
			</div>
		</div>
	),
};
