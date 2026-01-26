/**
 * Card Component
 * 
 * A promotional card component that composes the Button component.
 * Used for promotional content and call-to-action.
 */

import { Button, type ButtonSize } from '../button/Button';
import iconImage from '../../assets/cards/Icons.png';

export type CardSize = 'sm' | 'md' | 'lg';

export interface CardProps {
	/**
	 * Card title/headline
	 */
	title: string;
	/**
	 * Button text
	 */
	buttonText: string;
	/**
	 * Button click handler
	 */
	onButtonClick?: () => void;
	/**
	 * Card size variant
	 */
	size?: CardSize;
	/**
	 * Button size to use inside the card.
	 * If not provided, it will follow the card size (sm->sm, md->md, lg->md by default).
	 */
	buttonSize?: ButtonSize;
	/**
	 * Context variant: mobile or desktop (used to auto-size button if buttonSize is not provided)
	 */
	variant?: 'mobile' | 'desktop';
	/**
	 * Optional icon for the button (defaults to person icon)
	 */
	buttonIcon?: preact.ComponentChildren;
	/**
	 * Additional className
	 */
	className?: string;
	/**
	 * Children content (optional additional content)
	 */
	children?: preact.ComponentChildren;
}

/**
 * Card component with theme-aware styling 
 */
export function Card({
	title,
	buttonText,
	onButtonClick,
	size = 'md',
	buttonSize,
	variant,
	buttonIcon,
	className = '',
	children,
}: CardProps) {
	const sizeClasses = {
		sm: 'p-4',
		md: 'p-6',
		lg: 'p-8',
	};



	const cardClasses = [
		'bg-card-background', 
		'text-card-text', 
		'rounded-lg',
		'flex',
		'items-center',
		'justify-between',
		'gap-4',
		sizeClasses[size],
		className,
	]
		.filter(Boolean)
		.join(' ');

	const resolvedButtonSize: ButtonSize =
		buttonSize ?? (size === 'sm' ? 'sm' : 'md');

	const buttonWidthClass = variant === 'mobile' ? 'w-full' : '';
	const iconSize = variant === 'mobile' ? '70px' : '120px';

	return (
		<div className={cardClasses}>
			{/* Left side: Text and Button */}
			<div className="flex-1 flex flex-col">
				<h3
					className={`mb-4 font-body text-white break-words ${
						size === 'sm'
							? 'text-xl leading-tight font-medium '
							: 'text-2xl leading-tight '
					} whitespace-pre-line`}
				>
					{title}
				</h3>
				{children}
				<Button
					variant="primary"
					size={resolvedButtonSize}
					contextVariant={variant}
					iconLeft={buttonIcon}
					onClick={onButtonClick}
					className={`bg-card-button hover:bg-card-button-hover self-start mt-auto ${buttonWidthClass}`}
				>
					{buttonText}
				</Button>
			</div>

			{/* Right side: Geometric Icon */}
			<div className="flex-shrink-0">
				<img
					src={iconImage}
					alt="Geometric pattern icon"
					className="object-contain"
					style={{
						width: iconSize,
						height: iconSize,
					}}
				/>
			</div>
		</div>
	);
}
