/**
 * Button Component
 * 
 * A flexible button component with Primary, Secondary, and Tertiary variants.
 * Supports all interaction states: default, hover, disabled, and focus.
 */

import { JSX } from 'preact';

export type ButtonVariant = 'primary' | 'secondary' | 'tertiary';
export type ButtonSize = 'sm' | 'md' | 'lg';
export type ButtonContextVariant = 'mobile' | 'desktop';

export interface ButtonProps extends JSX.HTMLAttributes<HTMLButtonElement> {
	/**
	 * Button variant: primary, secondary, or tertiary
	 */
	variant?: ButtonVariant;
	/**
	 * Button size (if not provided, will be derived from contextVariant)
	 */
	size?: ButtonSize;
	/**
	 * Context variant: mobile or desktop (used to auto-size if size is not provided)
	 */
	contextVariant?: ButtonContextVariant;
	/**
	 * Whether the button is disabled
	 */
	disabled?: boolean;
	/**
	 * Button content (text or children)
	 */
	children: preact.ComponentChildren;
	/**
	 * Optional icon to display before the text
	 */
	iconLeft?: preact.ComponentChildren;
	/**
	 * Optional icon to display after the text
	 */
	iconRight?: preact.ComponentChildren;
	/**
	 * Button type attribute
	 */
	type?: 'button' | 'submit' | 'reset';
}

/**
 * Button component with theme-aware styling
 */
export function Button({
	variant = 'primary',
	size,
	contextVariant,
	disabled = false,
	children,
	iconLeft,
	iconRight,
	className = '',
	type = 'button',
	...props
}: ButtonProps) {
	const resolvedSize: ButtonSize =
		size ??
		(contextVariant === 'mobile' ? 'sm' : 'md');
	// Base classes for all buttons
	const baseClasses = [
		'inline-flex',
		'items-center',
		'justify-center',
		'font-body', 
		'font-medium', 
		'transition-all',
		'duration-200',
		'ease-in-out',
		'focus:outline-none',
		'focus:ring-2',
		'focus:ring-offset-2',
		'disabled:cursor-not-allowed',
		'rounded-button', 
		'whitespace-nowrap', 
	];

	// Size classes - from tokens
	const sizeClasses = {
		sm: 'px-button-x-sm py-button-y-sm text-action-sm leading-body-sm gap-button h-button-sm min-w-button-sm',
		md: 'px-button-x-md py-button-y-md text-action-md leading-body-md h-button-md min-w-button-md',
		lg: 'px-button-x-lg py-button-y-lg text-action-lg leading-body-lg h-button-lg min-w-button-lg gap-button',
	};

	// Variant-specific classes based on tokens
	const variantClasses = {
		primary: [
			'bg-button-primary',
			'text-button-primary-text',
			'hover:bg-button-primary-hover',
			'hover:text-button-primary-hover-text',
			'disabled:bg-button-primary-disabled-bg',
			'disabled:text-button-primary-disabled-text',
			'disabled:opacity-100',
			'focus:ring-button-primary',
			'px-button-x-md py-button-y-md',
		],
		secondary: [
			'bg-button-secondary',
			'text-button-secondary-text',
			'hover:bg-button-secondary-hover',
			'hover:text-button-secondary-hover-text',
			'disabled:bg-button-secondary-disabled-bg',
			'disabled:text-button-secondary-disabled-text',
			'disabled:opacity-100', 
			'focus:ring-button-secondary',
			'px-button-x-md py-button-y-md',
		],
		tertiary: [
			'bg-button-tertiary',
			'text-button-tertiary-text',
			'border',
			'border-button-tertiary-border',
			'hover:bg-button-tertiary-hover',
			'hover:text-button-tertiary-hover-text',
			'hover:border-button-tertiary-hover',
			'disabled:bg-button-tertiary-disabled-bg',
			'disabled:text-button-tertiary-disabled-text',
			'disabled:border-button-tertiary-disabled-border',
			'disabled:opacity-100', 
			'focus:ring-button-tertiary-hover',
			'px-button-x-md py-button-y-md',
		],
	};

	const classes = [
		...baseClasses,
		...sizeClasses[resolvedSize],
		...variantClasses[variant],
		className,
	]
		.filter(Boolean)
		.join(' ');

	return (
		<button
			type={type}
			disabled={disabled}
			className={classes}
			aria-disabled={disabled}
			style={{
				...(resolvedSize === 'md' && {
					minHeight: 'var(--button-height-md)',
					height: 'var(--button-height-md)',
				}),
				...(resolvedSize === 'sm' && {
					minHeight: 'var(--button-height-sm)',
					height: 'var(--button-height-sm)',
				}),
				...(resolvedSize === 'lg' && {
					minHeight: 'var(--button-height-lg)',
					height: 'var(--button-height-lg)',
				}),
			}}
			{...props}
		>
			{iconLeft && (
				<span
					className="inline-flex items-center justify-center leading-none"
					aria-hidden="true"
					style={{ 
						fontSize: 'inherit',
						fontWeight: 'inherit',
						color: 'inherit',
					}}
				>
					{iconLeft}
				</span>
			)}
			<span className="whitespace-nowrap leading-none">{children}</span>
			{iconRight && (
				<span
					className="inline-flex items-center justify-center leading-none"
					aria-hidden="true"
					style={{ 
						fontSize: 'inherit',
						fontWeight: 'inherit',
						color: 'inherit',
					}}
				>
					{iconRight}
				</span>
			)}
		</button>
	);
}
