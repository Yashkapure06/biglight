/**
 * Input Component
 * 
 * A text input field with label, placeholder, and multiple states:
 * default, focus, filled, disabled, error, and success.
 */

import { JSX } from 'preact';
import { useState } from 'preact/hooks';
import { FaTimes } from 'react-icons/fa';
import { FaCheck } from 'react-icons/fa';

export type InputState = 'default' | 'error' | 'success';

export interface InputProps extends Omit<JSX.HTMLAttributes<HTMLInputElement>, 'size'> {
	/**
	 * Input label text
	 */
	label?: string;
	/**
	 * Whether the field is required (shows *required indicator)
	 */
	required?: boolean;
	/**
	 * Show the visual "*required" indicator under the field.
	 */
	showRequiredIndicator?: boolean;
	/**
	 * Input state: default, error, or success
	 */
	state?: InputState;
	/**
	 * Error message to display
	 */
	errorMessage?: string;
	/**
	 * Success message to display
	 */
	successMessage?: string;
	/**
	 * Whether the input is disabled
	 */
	disabled?: boolean;
	/**
	 * Placeholder text
	 */
	placeholder?: string;
	/**
	 * Input type attribute (e.g. text, email)
	 */
	type?: string;
	/**
	 * Input value (controlled)
	 */
	value?: string;
	/**
	 * Default value (uncontrolled)
	 */
	defaultValue?: string;
	/**
	 * Optional icon to display on the left
	 */
	iconLeft?: preact.ComponentChildren;
	/**
	 * Callback when input value changes
	 */
	onChange?: (e: JSX.TargetedEvent<HTMLInputElement, Event>) => void;
	/**
	 * Callback when input is cleared
	 */
	onClear?: () => void;
}

/**
 * Input component with theme-aware styling 
 */
export function Input({
	label,
	required = false,
	showRequiredIndicator = true,
	state = 'default',
	errorMessage,
	successMessage,
	disabled = false,
	placeholder,
	type = 'text',
	iconLeft,
	onClear,
	className = '',
	id,
	...props
}: InputProps) {
	const [isFocused, setIsFocused] = useState(false);
	const [internalValue, setInternalValue] = useState(props.defaultValue || '');
	const isControlled = props.value !== undefined;
	const displayValue = isControlled ? props.value : internalValue;
	const isFilled = Boolean(displayValue);

	const inputId = id || `input-${Math.random().toString(36).substr(2, 9)}`;
	const labelId = `${inputId}-label`;
	const errorId = `${inputId}-error`;
	const successId = `${inputId}-success`;

	// Determine visual state
	const visualState = disabled
		? 'disabled'
		: state === 'error'
			? 'error'
			: state === 'success'
				? 'success'
				: isFocused
					? 'focus'
					: isFilled
						? 'filled'
						: 'default';

	const showLabel = visualState !== 'default' && Boolean(label);

	const inputBaseClasses = [
		'w-full',
		'px-4',
		'py-3',
		'text-base',
		'font-body',
		'transition-colors',
		'duration-200',
		'focus:outline-none',
		'disabled:cursor-not-allowed',
		'placeholder:text-grey-500', 
	];

	const borderClasses = {
		default: 'border border-solid border-grey-400',
		focus: 'border border-solid border-grey-400',
		filled: 'border border-solid border-grey-400',
		disabled: 'border border-solid border-grey-400',
		error: 'border-2 border-solid border-error',
		success: 'border-2 border-solid border-success',
	};

	const bgClasses = {
		default: 'bg-white',
		focus: 'bg-white',
		filled: 'bg-white',
		disabled: 'bg-grey-200',
		error: 'bg-white',
		success: 'bg-white',
	};

	const textClasses = {
		default: 'text-text-primary placeholder:text-grey-500', // Medium grey placeholder
		focus: 'text-text-primary placeholder:text-grey-500',
		filled: 'text-text-primary',
		disabled: 'text-text-disabled',
		error: 'text-text-primary placeholder:text-grey-500',
		success: 'text-text-primary',
	};

	const inputClasses = [
		...inputBaseClasses,
		borderClasses[visualState],
		bgClasses[visualState],
		textClasses[visualState],
		iconLeft ? 'pl-10' : '',
		'pr-10', 
		'rounded-md',
		className,
	]
		.filter(Boolean)
		.join(' ');

	const labelColorClass =
		state === 'error'
			? 'text-error'
			: state === 'success'
				? 'text-text-primary'
				: disabled
					? 'text-text-primary'
					: 'text-text-primary';

	const iconColorClass =
		state === 'error'
			? 'text-error'
			: state === 'success'
				? 'text-success'
				: disabled
					? 'text-text-disabled'
					: 'text-text-primary';

	const requiredTextColor = state === 'error' ? 'text-error' : 'text-[#fc4c02]'; //* Orange-red from tokens

	const handleChange = (e: JSX.TargetedEvent<HTMLInputElement, Event>) => {
		if (!isControlled) {
			setInternalValue((e.target as HTMLInputElement).value);
		}
		if (props.onChange) {
			props.onChange(e);
		}
	};

	const handleClear = () => {
		if (!isControlled) {
			setInternalValue('');
		}
		if (onClear) {
			onClear();
		}
	};

	const showIcon = !disabled && (isFilled || isFocused || state === 'error' || state === 'success');
	const rightIcon =
		state === 'success' ? (
			<FaCheck className={iconColorClass} size={16} />
		) : showIcon ? (
			<FaTimes className={iconColorClass} size={16} />
		) : null;

	return (
		<div className="w-full">
			{showLabel && (
				<label
					id={labelId}
					htmlFor={inputId}
					className={`block text-sm font-medium mb-1 ${labelColorClass}`}
				>
					{label || 'Label'}
				</label>
			)}

			<div className="relative">
				{iconLeft && (
					<div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-text-secondary pointer-events-none">
						{iconLeft}
					</div>
				)}

				<input
					id={inputId}
					type={type}
					disabled={disabled}
					placeholder={placeholder || (visualState === 'default' ? label : undefined)}
					value={displayValue}
					className={inputClasses}
					aria-label={label}
					aria-required={required}
					aria-invalid={state === 'error'}
					aria-describedby={
						state === 'error'
							? errorId
							: state === 'success'
								? successId
								: undefined
					}
					onFocus={() => setIsFocused(true)}
					onBlur={() => setIsFocused(false)}
					onChange={handleChange}
					{...props}
				/>

				{rightIcon && (
					<div
						className={`absolute right-3 top-1/2 transform -translate-y-1/2 ${
							onClear || state === 'success' ? 'cursor-pointer' : 'pointer-events-none'
						}`}
						onClick={onClear ? handleClear : undefined}
						role={onClear ? 'button' : undefined}
						tabIndex={onClear ? 0 : undefined}
						onKeyDown={
							onClear
								? (e: KeyboardEvent) => {
										if (e.key === 'Enter' || e.key === ' ') {
											e.preventDefault();
											handleClear();
										}
									}
								: undefined
						}
					>
						{rightIcon}
					</div>
				)}
			</div>

			{required && showRequiredIndicator && (
				<div className="mt-1">
					<span className={`text-sm ${requiredTextColor}`}>*required</span>
				</div>
			)}

			{state === 'error' && errorMessage && (
				<p id={errorId} className="mt-1 text-sm text-text-error" role="alert">
					{errorMessage}
				</p>
			)}

			{state === 'success' && successMessage && (
				<p id={successId} className="mt-1 text-sm text-text-success">
					{successMessage}
				</p>
			)}
		</div>
	);
}
