/**
 * Login Drawer Component
 * 
 * A modal/drawer component that composes Button, Input, Dropdown, and Card components.
 * Used for user authentication with email magic link.
 */

import { JSX } from 'preact';
import { useState, useEffect, useRef } from 'preact/hooks';
import { Button } from '../button/Button';
import { Input } from '../input/Input';
import { Dropdown } from '../Dropdown/Dropdown';
import { Card } from '../card/Card';
import { FiX } from 'react-icons/fi';
import { FiUser } from 'react-icons/fi';

export interface LoginDrawerProps {
	/**
	 * Whether the drawer is open
	 */
	isOpen: boolean;
	/**
	 * Callback when drawer should close
	 */
	onClose: () => void;
	/**
	 * Callback when form is submitted
	 */
	onSubmit?: (data: { customerType: string; email: string }) => void;
	/**
	 * Additional className
	 */
	className?: string;
	/**
	 * Presentation mode
	 * - modal: fullscreen overlay (default)
	 * - panel: render content only (storybook layout)
	 */
	presentation?: 'modal' | 'panel';
	/**
	 * Layout variant (affects typography/spacing)
	 */
	variant?: 'desktop' | 'mobile';
}

/**
 * Login Drawer component
 */
export function LoginDrawer({
	isOpen,
	onClose,
	onSubmit,
	className = '',
	presentation = 'modal',
	variant = 'desktop',
}: LoginDrawerProps) {
	const drawerRef = useRef<HTMLDivElement>(null);
	const previousActiveElement = useRef<HTMLElement | null>(null);

	useEffect(() => {
		if (!isOpen || presentation !== 'modal') return;

		// Store the element that had focus before opening
		previousActiveElement.current = document.activeElement as HTMLElement;

		// Focus the drawer container
		if (drawerRef.current) {
			const firstFocusable = drawerRef.current.querySelector(
				'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
			) as HTMLElement;
			if (firstFocusable) {
				firstFocusable.focus();
			}
		}

		const handleTabKey = (e: KeyboardEvent) => {
			if (e.key !== 'Tab' || !drawerRef.current) return;

			const focusableElements = drawerRef.current.querySelectorAll(
				'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
			);
			const firstElement = focusableElements[0] as HTMLElement;
			const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

			if (e.shiftKey) {
				// Shift + Tab
				if (document.activeElement === firstElement) {
					e.preventDefault();
					lastElement?.focus();
				}
			} else {
				// Tab
				if (document.activeElement === lastElement) {
					e.preventDefault();
					firstElement?.focus();
				}
			}
		};

		document.addEventListener('keydown', handleTabKey);

		return () => {
			document.removeEventListener('keydown', handleTabKey);
			if (previousActiveElement.current) {
				previousActiveElement.current.focus();
			}
		};
	}, [isOpen, presentation]);

	const ui =
		variant === 'mobile'
			? {
					panelMaxW: 'max-w-[390px]',
					contentMaxW: 'max-w-[320px] w-full',
					padding: 'px-10 pt-12 pb-10',
					topPad: 'pt-4',
					closeRight: 'right-8',
					titleClass: 'text-2xl leading-tight',
					titleBreakLines: false,
					subtitleMt: 'mt-3',
					formMt: 'mt-6',
					formGap: 'space-y-4',
					buttonsPt: 'pt-3',
					cardMt: 'mt-6',
					cardSize: 'sm' as const,
					cardButtonSize: 'sm' as const,
					actionButtonSize: 'md' as const,
			  }
			: {
					panelMaxW: 'max-w-[480px]',
					contentMaxW: 'max-w-[380px] w-full',
					padding: 'px-12 pt-14 pb-12',
					topPad: '', 
					closeRight: 'right-10',
					titleClass: 'text-[44px] leading-[1.02]',
					titleBreakLines: true,
					subtitleMt: 'mt-6',
					formMt: 'mt-8', 
					formGap: 'space-y-6',
					buttonsPt: 'pt-6',
					cardMt: 'mt-10',
					cardSize: 'md' as const,
					cardButtonSize: 'md' as const,
					actionButtonSize: 'md' as const,
			  };
	const [customerType, setCustomerType] = useState('');
	const [email, setEmail] = useState('');
	const [emailError, setEmailError] = useState('');

	const customerTypeOptions = [
		{ value: 'retail', label: 'Retail Store Owner' },
		{ value: 'convenience', label: 'Convenience Shop' },
		{ value: 'hospitality', label: 'Hospitality' },
		{ value: 'catering', label: 'Catering & Events' },
		{ value: 'online', label: 'Online/Delivery Only' },
	];

	const handleSubmit = (e: JSX.TargetedEvent<HTMLFormElement, Event>) => {
		e.preventDefault();

		if (!email || !email.includes('@')) {
			setEmailError('Please enter a valid email address');
			return;
		}

		setEmailError('');
		if (onSubmit) {
			onSubmit({ customerType, email });
		}
	};

	const handleOverlayClick = (e: JSX.TargetedMouseEvent<HTMLDivElement>) => {
		if (e.target === e.currentTarget) {
			onClose();
		}
	};

	const handleKeyDown = (e: KeyboardEvent) => {
		if (e.key === 'Escape' && isOpen) {
			onClose();
		}
	};

	if (!isOpen) return null;

	const Title = () => {
		if (!ui.titleBreakLines) {
			return (
				<h2
					id="login-drawer-title"
					className={`font-body text-[#fc4c02] ${ui.titleClass} font-medium`}
				>
					Log into your account
				</h2>
			);
		}

		return (
			<h2
				id="login-drawer-title"
				className={`font-body text-[#fc4c02] ${ui.titleClass} font-medium`}
			>
				<span className="block">Log into your</span>
				<span className="block">account</span>
			</h2>
		);
	};

	const Subtitle = () => {
		if (variant === 'mobile') {
			return (
				<p className="text-text-primary text-sm leading-snug max-w-[260px]">
					<span className="block">Please enter your email for a one-time-</span>
					<span className="block">only code</span>
				</p>
			);
		}

		return (
			<p 
				className="text-text-primary text-sm leading-snug text-left font-body"
				style={{ fontFamily: 'var(--font-body), Inter, sans-serif' }}
			>
				Please enter your email for a one-time-only code
			</p>
		);
	};

	const Content = () => (
		<div
			className={[
				'relative',
				'bg-white',
				'w-full',
				ui.panelMaxW,
				presentation === 'panel' ? 'rounded-none' : 'rounded-none shadow-xl',
				ui.padding,
				'border',
				'border-grey-300',
				variant === 'desktop' ? 'h-[850px]' : 'h-[650px]',
				className,
			]
				.filter(Boolean)
				.join(' ')}
		>
			<button
				onClick={onClose}
				className={[
					'absolute',
					'top-8',
					ui.closeRight,
					'p-2',
					'text-text-primary',
					'hover:text-text-secondary',
					'focus:outline-none',
				].join(' ')}
				aria-label="Close login drawer"
			>
				<FiX size={18} />
			</button>

			<div className={ui.topPad}>
				<div className={`${ui.contentMaxW} mx-auto text-left`}>
					<Title />
					<div className={ui.subtitleMt}>
						<Subtitle />
					</div>

					<form
						onSubmit={handleSubmit}
						className={[
							ui.formMt,
							ui.formGap,
							'w-full',
							'text-left',
						].join(' ')}
					>
						<Dropdown
							ariaLabel="Customer type"
							required
							showRequiredIndicator={false}
							options={customerTypeOptions}
							value={customerType}
							onChange={setCustomerType}
							placeholder="Customer type"
						/>

						<Input
							label="Email"
							required
							showRequiredIndicator={false}
							value={email}
							onChange={(e) => {
								setEmail((e.target as HTMLInputElement).value);
								setEmailError('');
							}}
							placeholder="Email"
							state={emailError ? 'error' : 'default'}
							errorMessage={emailError}
						/>

						<div className={`space-y-3 ${ui.buttonsPt}`}>
							<Button
								type="submit"
								variant="secondary"
								size={ui.actionButtonSize}
								contextVariant={variant}
								className="w-full justify-center"
							>
								Continue
							</Button>
							<Button
								type="button"
								variant="tertiary"
								size={ui.actionButtonSize}
								contextVariant={variant}
								onClick={onClose}
								className="w-full justify-center"
							>
								Login with your password
							</Button>
						</div>
					</form>

					<div className={ui.cardMt}>
						<Card
							title={'Join the\nfamily.'}
							buttonText="Become a member"
							buttonIcon={<FiUser />}
							size={ui.cardSize}
							buttonSize={ui.cardButtonSize}
							variant={variant}	
							className="rounded-[20px]"
							onButtonClick={() => console.log('Join clicked')}
						/>
					</div>
				</div>
			</div>
		</div>
	);

	if (presentation === 'panel') {
		return <Content />;
	}

	return (
		<div
			ref={drawerRef}
			className="fixed inset-0 z-50 flex items-center justify-center p-4"
			onClick={handleOverlayClick}
			onKeyDown={handleKeyDown}
			role="dialog"
			aria-modal="true"
			aria-labelledby="login-drawer-title"
		>
			<div className="absolute inset-0 bg-black bg-opacity-40" />

			<Content />
		</div>
	);
}
