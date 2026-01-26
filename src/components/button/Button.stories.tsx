/**
 * Button Component Stories
 * 
 * Showcases all button variants (Primary, Secondary, Tertiary)
 * and all states (Default, Hovered, Disabled)
 */

import type { Meta, StoryObj } from '@storybook/preact';
import { Button, type ButtonProps } from './Button';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';

const meta: Meta<typeof Button> = {
	title: 'Library/Button',
	component: Button,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	argTypes: {
		variant: {
			control: 'select',
			options: ['primary', 'secondary', 'tertiary'],
		},
		size: {
			control: 'select',
			options: ['sm', 'md', 'lg'],
		},
		disabled: {
			control: 'boolean',
		},
	},
};

export default meta;
type Story = StoryObj<typeof Button>;

/**
 * Primary Button - Default State
 * Teal background with black text
 */
export const Primary: Story = {
	args: {
		variant: 'primary',
		children: 'Button label',
	},
};

/**
 * Primary Button - With Icons (Default State)
 */
export const PrimaryWithIcons: Story = {
	args: {
		variant: 'primary',
		children: 'Button label',
		iconLeft: <><FaAngleLeft /></>,
		iconRight: <><FaAngleRight /></>,
	},
};

/**
 * Primary Button - Hovered State
 * Black background with white text
 * (Hover to see the effect)
 */
export const PrimaryHovered: Story = {
	args: {
		variant: 'primary',
		children: 'Button label',
		iconLeft: <><FaAngleLeft /></>,
		iconRight: <><FaAngleRight /></>,
	},
	parameters: {
		docs: {
			description: {
				story: 'Hover over the button to see the hover state (background changes to black, text to white).',
			},
		},
	},
};

/**
 * Primary Button - Disabled State
 * Light grey background with darker grey text
 */
export const PrimaryDisabled: Story = {
	args: {
		variant: 'primary',
		children: 'Button label',
		iconLeft: <><FaAngleLeft /></>,
		iconRight: <><FaAngleRight /></>,
		disabled: true,
	},
};

/**
 * Secondary Button - Default State
 * Black background with white text
 */
export const Secondary: Story = {
	args: {
		variant: 'secondary',
		children: 'Button label',
	},
};

/**
 * Secondary Button - With Icons (Default State)
 */
export const SecondaryWithIcons: Story = {
	args: {
		variant: 'secondary',
		children: 'Button label',
		iconLeft: <><FaAngleLeft /></>,
		iconRight: <><FaAngleRight /></>,
	},
};

/**
 * Secondary Button - Hovered State
 * Teal background with black text
 * (Hover to see the effect)
 */
export const SecondaryHovered: Story = {
	args: {
		variant: 'secondary',
		children: 'Button label',
		iconLeft: <><FaAngleLeft /></>,
		iconRight: <><FaAngleRight /></>,
	},
	parameters: {
		docs: {
			description: {
				story: 'Hover over the button to see the hover state (background changes to teal, text to black).',
			},
		},
	},
};

/**
 * Secondary Button - Disabled State
 */
export const SecondaryDisabled: Story = {
	args: {
		variant: 'secondary',
		children: 'Button label',
		iconLeft: <><FaAngleLeft /></>,
		iconRight: <><FaAngleRight /></>,
		disabled: true,
	},
};

/**
 * Tertiary Button - Default State
 * White/transparent background with black text and black border
 */
export const Tertiary: Story = {
	args: {
		variant: 'tertiary',
		children: 'Button label',
	},
};

/**
 * Tertiary Button - With Icons (Default State)
 */
export const TertiaryWithIcons: Story = {
	args: {
		variant: 'tertiary',
		children: 'Button label',
		iconLeft: <><FaAngleLeft /></>,
		iconRight: <><FaAngleRight /></>,
	},
};

/**
 * Tertiary Button - Hovered State
 * Black background with white text
 * (Hover to see the effect)
 */
export const TertiaryHovered: Story = {
	args: {
		variant: 'tertiary',
		children: 'Button label',
		iconLeft: <><FaAngleLeft /></>,
		iconRight: <><FaAngleRight /></>,
	},
	parameters: {
		docs: {
			description: {
				story: 'Hover over the button to see the hover state (background changes to black, text to white, border removed).',
			},
		},
	},
};

/**
 * Tertiary Button - Disabled State
 * White background with light grey text and light grey border
 */
export const TertiaryDisabled: Story = {
	args: {
		variant: 'tertiary',
		children: 'Button label',
		iconLeft: <><FaAngleLeft /></>,
		iconRight: <><FaAngleRight /></>,
		disabled: true,
	},
};

/**
 * All Variants - Default States
 * Side by side comparison
 */
export const AllVariantsDefault: Story = {
	render: () => (
		<div className="flex gap-4 items-center flex-wrap">
		<Button variant="primary" iconLeft={<><FaAngleLeft /></>} iconRight={<><FaAngleRight /></>}>
			Button label
		</Button>
		<Button variant="secondary" iconLeft={<><FaAngleLeft /></>} iconRight={<><FaAngleRight /></>}>
			Button label
		</Button>
		<Button variant="tertiary" iconLeft={<><FaAngleLeft /></>} iconRight={<><FaAngleRight /></>}>
			Button label
		</Button>
		</div>
	),
};

/**
 * Primary - All States
 * design grid layout
 */
export const PrimaryAllStates: Story = {
	render: () => (
		<div className="space-y-4">
			<div>
				<p className="mb-2 text-sm text-text-secondary font-medium">Default</p>
				<Button variant="primary" iconLeft={<><FaAngleLeft /></>} iconRight={<><FaAngleRight /></>}>
					Button label
				</Button>
			</div>
			<div>
				<p className="mb-2 text-sm text-text-secondary font-medium">Hovered (hover to see)</p>
				<Button variant="primary" iconLeft={<><FaAngleLeft /></>} iconRight={<><FaAngleRight /></>}>
					Button label
				</Button>
			</div>
			<div>
				<p className="mb-2 text-sm text-text-secondary font-medium">Disabled</p>
				<Button
					variant="primary"
					disabled
					iconLeft={<><FaAngleLeft /></>}
					iconRight={<><FaAngleRight /></>}
				>
					Button label
				</Button>
			</div>
		</div>
	),
};

/**
 * Secondary - All States
 */
export const SecondaryAllStates: Story = {
	render: () => (
		<div className="space-y-4">
			<div>
				<p className="mb-2 text-sm text-text-secondary font-medium">Default</p>
				<Button variant="secondary" iconLeft={<><FaAngleLeft /></>} iconRight={<><FaAngleRight /></>}>
					Button label
				</Button>
			</div>
			<div>
				<p className="mb-2 text-sm text-text-secondary font-medium">Hovered (hover to see)</p>
				<Button variant="secondary" iconLeft={<><FaAngleLeft /></>} iconRight={<><FaAngleRight /></>}>
					Button label
				</Button>
			</div>
			<div>
				<p className="mb-2 text-sm text-text-secondary font-medium">Disabled</p>
				<Button
					variant="secondary"
					disabled
					iconLeft={<><FaAngleLeft /></>}
					iconRight={<><FaAngleRight /></>}
				>
					Button label
				</Button>
			</div>
		</div>
	),
};

/**
 * Tertiary - All States
 */
export const TertiaryAllStates: Story = {
	render: () => (
		<div className="space-y-4">
			<div>
				<p className="mb-2 text-sm text-text-secondary font-medium">Default</p>
				<Button variant="tertiary" iconLeft={<><FaAngleLeft /></>} iconRight={<><FaAngleRight /></>}>
					Button label
				</Button>
			</div>
			<div>
				<p className="mb-2 text-sm text-text-secondary font-medium">Hovered (hover to see)</p>
				<Button variant="tertiary" iconLeft={<><FaAngleLeft /></>} iconRight={<><FaAngleRight /></>}>
					Button label
				</Button>
			</div>
			<div>
				<p className="mb-2 text-sm text-text-secondary font-medium">Disabled</p>
				<Button
					variant="tertiary"
					disabled
					iconLeft={<><FaAngleLeft /></>}
					iconRight={<><FaAngleRight /></>}
				>
					Button label
				</Button>
			</div>
		</div>
	),
};

/**
 * Complete Grid - All Variants and States
 */
export const CompleteGrid: Story = {
	render: () => (
		<div className="grid grid-cols-3 gap-x-4 gap-y-8 w-full">
			{/* First Row: Default */}
			<div>
				<div className=" p-1   w-full  mb-2">
					<p className="text-xl font-medium font-sans text-white bg-black px-5 py-5 rounded-md m-0 tracking-normal text-left">
						Primary
					</p>
				</div>
				<Button variant="primary" iconLeft={<><FaAngleLeft /></>} iconRight={<><FaAngleRight /></>}>
					Button label
				</Button>
			</div>
			<div>
				<div className=" p-1   w-full  mb-2">
					<p className="text-xl font-medium font-sans text-white bg-black px-5 py-5 rounded-md m-0 tracking-normal text-left">
						Secondary
					</p>
				</div>
				<Button variant="secondary" iconLeft={<><FaAngleLeft /></>} iconRight={<><FaAngleRight /></>}>
					Button label
				</Button>
			</div>
			<div>
				<div className=" p-1   w-full  mb-2">
					<p className="text-xl font-medium font-sans text-white bg-black px-5 py-5 rounded-md m-0 tracking-normal text-left">
						Tertiary
					</p>
				</div>
				<Button variant="tertiary" iconLeft={<><FaAngleLeft /></>} iconRight={<><FaAngleRight /></>}>
					Button label
				</Button>
			</div>
			
			{/* Second Row: Hovered */}
			<div>
				<p className="mb-2 text-sm text-text-secondary font-medium text-center">Hovered</p>
				<Button variant="primary" iconLeft={<><FaAngleLeft /></>} iconRight={<><FaAngleRight /></>}>
					Button label
				</Button>
			</div>
			<div>
				<p className="mb-2 text-sm text-text-secondary font-medium text-center">Hovered</p>
				<Button variant="secondary" iconLeft={<><FaAngleLeft /></>} iconRight={<><FaAngleRight /></>}>
					Button label
				</Button>
			</div>
			<div>
				<p className="mb-2 text-sm text-text-secondary font-medium text-center">Hovered</p>
				<Button variant="tertiary" iconLeft={<><FaAngleLeft /></>} iconRight={<><FaAngleRight /></>}>
					Button label
				</Button>
			</div>

			{/* Third Row: Disabled */}
			<div>
				<p className="mb-2 text-sm text-text-secondary font-medium text-center">Disabled</p>
				<Button
					variant="primary"
					disabled
					iconLeft={<><FaAngleLeft /></>}
					iconRight={<><FaAngleRight /></>}
				>
					Button label
				</Button>
			</div>
			<div>
				<p className="mb-2 text-sm text-text-secondary font-medium text-center">Disabled</p>
				<Button
					variant="secondary"
					disabled
					iconLeft={<><FaAngleLeft /></>}
					iconRight={<><FaAngleRight /></>}
				>
					Button label
				</Button>
			</div>
			<div>
				<p className="mb-2 text-sm text-text-secondary font-medium text-center">Disabled</p>
				<Button
					variant="tertiary"
					disabled
					iconLeft={<><FaAngleLeft /></>}
					iconRight={<><FaAngleRight /></>}
				>
					Button label
				</Button>
			</div>
		</div>
	),
};
