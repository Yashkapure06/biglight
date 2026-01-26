/**
 * Annotation Component Stories
 * 
 * Showcases annotation component with Left, Right, Top and Bottom variants
 */

import type { Meta, StoryObj } from '@storybook/preact';
import { Annotation } from './Annotation';

const meta: Meta<typeof Annotation> = {
	title: 'Library/Annotation',
	component: Annotation,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	argTypes: {
		variant: {
			control: 'select',
			options: ['left', 'right', 'top', 'bottom'],
		},
		showLine: {
			control: 'boolean',
		},
	},
};

export default meta;
type Story = StoryObj<typeof Annotation>;

/**
 * Default Annotation (Left variant)
 */
export const Default: Story = {
	args: {
		children: 'Default',
		variant: 'left',
		showLine: true,
	},
};

/**
 * Left Variant
 * Line extends to the right
 */
export const Left: Story = {
	args: {
		children: 'Default',
		variant: 'left',
		showLine: true,
	},
};

/**
 * Right Variant
 * Line extends to the left
 */
export const Right: Story = {
	args: {
		children: 'Default',
		variant: 'right',
		showLine: true,
	},
};


/**
 * Without Line
 */
export const WithoutLine: Story = {
	args: {
		children: 'Default',
		variant: 'left',
		showLine: false,
	},
};

/**
 * Left and Right Variants
 */
export const HorizontalVariants: Story = {
	render: () => (
		<div className="flex flex-col gap-4 items-start">
			<Annotation variant="left" showLine={true}>
				Left Variant
			</Annotation>
			<Annotation variant="right" showLine={true}>
				Right Variant
			</Annotation>
		</div>
	),
};

/**
 * Top and Bottom Variants
 */
export const VerticalVariants: Story = {
	render: () => (
		<div className="flex gap-8 items-center">
			<div className="flex flex-col items-center">
				<Annotation variant="top" showLine={true}>
					Top Variant
				</Annotation>
				<div className="w-32 h-32 bg-grey-100 border border-grey-400 rounded-md flex items-center justify-center">
					Component
				</div>
			</div>
			<div className="flex flex-col items-center">
				<div className="w-32 h-32 bg-grey-100 border border-grey-400 rounded-md flex items-center justify-center">
					Component
				</div>
				<Annotation variant="bottom" showLine={true}>
					Bottom Variant
				</Annotation>
			</div>
		</div>
	),
};

/**
 * All Variants
 */
export const AllVariants: Story = {
	render: () => (
		<div className="flex gap-8 items-center">
			<div className="flex flex-col items-center">
				<Annotation variant="top" showLine={true}>
					Top
				</Annotation>
				<div className="w-24 h-24 bg-grey-100 border border-grey-400 rounded-md" />
			</div>
			<div className="flex items-center">
				<Annotation variant="left" showLine={true}>
					Left
				</Annotation>
				<div className="w-24 h-24 bg-grey-100 border border-grey-400 rounded-md" />
				<Annotation variant="right" showLine={true}>
					Right
				</Annotation>
			</div>
			<div className="flex flex-col items-center">
				<div className="w-24 h-24 bg-grey-100 border border-grey-400 rounded-md" />
				<Annotation variant="bottom" showLine={true}>
					Bottom
				</Annotation>
			</div>
		</div>
	),
};
