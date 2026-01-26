/**
 * Annotation Component
 * 
 * A label/annotation component used to annotate other components.
 * Supports Left, Right, Top, and Bottom positioning variants with connecting lines.
 */

import { JSX } from 'preact';

export type AnnotationVariant = 'left' | 'right' | 'top' | 'bottom';

export interface AnnotationProps {
	/**
	 * Annotation text content
	 */
	children: preact.ComponentChildren;
	/**
	 * Variant: left, right, top, or bottom positioning
	 */
	variant?: AnnotationVariant;
	/**
	 * Whether to show the connecting line
	 */
	showLine?: boolean;
	/**
	 * Additional className
	 */
	className?: string;
}

/**
 * Annotation component for labeling components
 */
export function Annotation({
	children,
	variant = 'left',
	showLine = true,
	className = '',
}: AnnotationProps) {
	// Base classes for the label
	const labelClasses = [
		'inline-flex',
		'items-center',
		'justify-center',
		'px-3',
		'py-1.5',
		'text-sm',
		'font-medium',
		'font-body',
		'text-text-primary',
		'bg-grey-200', 
		'rounded-full',
		'whitespace-nowrap',
	];

	// Horizontal line classes (for left/right)
	const horizontalLineClasses = [
		'inline-block',
		'h-px',
		'w-8', 
		'bg-grey-400', 

	];

	// Vertical line classes (for top/bottom)
	const verticalLineClasses = [
		'inline-block',
		'w-px',
		'h-8', 
		'bg-grey-400', 
	];

	const labelClass = [
		...labelClasses,
		className,
	]
		.filter(Boolean)
		.join(' ');

	// Horizontal variants (left/right)
	if (variant === 'left' || variant === 'right') {
		return (
			<div className="inline-flex items-center">
				{variant === 'right' && showLine && (
					<span className={`${horizontalLineClasses.join(' ')}`} />
				)}
				<span className={labelClass}>
					{children}
				</span>
				{variant === 'left' && showLine && (
					<span className={horizontalLineClasses.join(' ')} />
				)}
			</div>
		);
	}

	// Vertical variants (top/bottom)
	return (
		<div className="inline-flex flex-col items-center">
			{variant === 'bottom' && showLine && (
				<span className={verticalLineClasses.join(' ')} />
			)}
			<span className={labelClass}>
				{children}
			</span>
			{variant === 'top' && showLine && (
				<span className={verticalLineClasses.join(' ')} />
			)}
		</div>
	);
}
