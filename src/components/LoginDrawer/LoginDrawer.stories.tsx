/**
 * Login Drawer Component Stories
 * 
 * Showcases the login drawer in different states and responsive layouts
 */

import type { Meta, StoryObj } from '@storybook/preact';
import { LoginDrawer } from './LoginDrawer';
import { Annotation } from '../Annotation/Annotation';

const meta = {
	title: 'Library/LoginDrawer',
	component: LoginDrawer,
	parameters: {
		layout: 'fullscreen',
	},
	tags: ['autodocs'],
} satisfies Meta<typeof LoginDrawer>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default Login Drawer
 */
export const Default: Story = {
	render: () => {
		return (
			<div className="min-h-screen flex items-center justify-center p-8" style={{ backgroundColor: '#f5f5f0' }}>
				<LoginDrawer
					isOpen={true}
					onClose={() => {}}
					onSubmit={(data) => {
						console.log('Form submitted:', data);
					}}
					variant="desktop"
				/>
			</div>
		);
	},
};

/**
 * Login Drawer - Desktop Layout
 */
export const DesktopLayout: Story = {
	render: () => {
		return (
			<div className="min-h-screen">
				<LoginDrawer
					isOpen={true}
					onClose={() => {}}
					onSubmit={(data) => {
						console.log('Form submitted:', data);
					}}
					presentation="panel"
					variant="desktop"
				/>
			</div>
		);
	},
	parameters: {
		viewport: {
			defaultViewport: 'desktop',
		},
	},
};

/**
 * Login Drawer - Mobile Layout
 */
export const MobileLayout: Story = {
	render: () => {
		return (
			<div className="min-h-screen">
				<LoginDrawer
					isOpen={true}
					onClose={() => {}}
					onSubmit={(data) => {
						console.log('Form submitted:', data);
					}}
					presentation="panel"
					variant="mobile"
				/>
			</div>
		);
	},
	parameters: {
		viewport: {
			defaultViewport: 'mobile1',
		},
	},
};

/**
 * Login Drawer - With Form Validation
 */
export const WithValidation: Story = {
	render: () => {
		return (
			<div className="min-h-screen flex items-center justify-center p-8" style={{ backgroundColor: '#f5f5f0' }}>
				<LoginDrawer
					isOpen={true}
					onClose={() => {}}
					onSubmit={(data) => {
						alert(`Form submitted!\nCustomer Type: ${data.customerType}\nEmail: ${data.email}`);
					}}
					variant="desktop"
				/>
			</div>
		);
	},
};


/**
 *  Layout (Desktop + Mobile)
 */
export const FigmaLayout: Story = {
	render: () => (
		<div className="p-6">
			<div className="inline-grid grid-cols-2 gap-12">
				<div className="flex flex-col items-center">
					<Annotation variant="top">Desktop</Annotation>
					<div className="border border-dashed border-grey-400  rounded-lg p-10">
						<LoginDrawer
							isOpen
							onClose={() => {}}
							presentation="panel"
							variant="desktop"
							className='max-w-[480px]'
						/>
					</div>
				</div>
				<div className="flex flex-col items-center ">
					<Annotation variant="top">Mobile</Annotation>
					<div className="border border-dashed border-grey-400 rounded-lg p-10">
						<LoginDrawer
							isOpen
							onClose={() => {}}
							presentation="panel"
							variant="mobile"
							className='max-w-[390px]'
						/>
					</div>
				</div>
			</div>
		</div>
	),
};
