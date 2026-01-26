/**
 * Dropdown Component
 * 
 * A select dropdown component with label, placeholder, and multiple states:
 * default, focus, selected, disabled, and opened.
 */

import { JSX } from 'preact';
import { useEffect, useRef, useState } from 'preact/hooks';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

export interface DropdownOption {
	value: string;
	label: string;
}

export interface DropdownProps {
	/**
	 * Dropdown label text
	 */
	label?: string;
	/**
	 * Accessible label when `label` is not rendered.
	 */
	ariaLabel?: string;
	/**
	 * Whether the field is required (shows *required indicator)
	 */
	required?: boolean;
	/**
	 * Show the visual "*required" indicator under the field.
	 */
	showRequiredIndicator?: boolean;
	/**
	 * Whether the dropdown is open by default 
	 */
	defaultOpen?: boolean;
	/**
	 * Whether the dropdown should appear focused by default 
	 */
	defaultFocused?: boolean;
	/**
	 * Options for the dropdown
	 */
	options: DropdownOption[];
	/**
	 * Selected value (controlled)
	 */
	value?: string;
	/**
	 * Default value (uncontrolled)
	 */
	defaultValue?: string;
	/**
	 * Placeholder text
	 */
	placeholder?: string;
	/**
	 * Whether the dropdown is disabled
	 */
	disabled?: boolean;
	/**
	 * Optional icon to display on the left
	 */
	iconLeft?: preact.ComponentChildren;
	/**
	 * Callback when selection changes
	 */
	onChange?: (value: string) => void;
	/**
	 * Additional className
	 */
	className?: string;
}

/**
 * Dropdown component with theme-aware styling
 */
export function Dropdown({
	label,
	required = false,
	showRequiredIndicator = true,
	options,
	value: controlledValue,
	defaultValue,
	placeholder,
	disabled = false,
	iconLeft,
	defaultOpen = false,
	defaultFocused = false,
	ariaLabel,
	onChange,
	className = '',
}: DropdownProps) {
	const hasLabel = Boolean(label);
	const [isOpen, setIsOpen] = useState(defaultOpen);
	const [isFocused, setIsFocused] = useState(defaultFocused);
	const [internalValue, setInternalValue] = useState(defaultValue || '');
	const [focusedIndex, setFocusedIndex] = useState(-1);
	const dropdownRef = useRef<HTMLDivElement>(null);
	const listRef = useRef<HTMLUListElement>(null);

	const isControlled = controlledValue !== undefined;
	const selectedValue = isControlled ? controlledValue : internalValue;
	const selectedOption = options.find((opt) => opt.value === selectedValue);

	// Generate unique IDs
	const dropdownId = `dropdown-${Math.random().toString(36).substr(2, 9)}`;
	const labelId = `${dropdownId}-label`;
	const listboxId = `${dropdownId}-listbox`;

	// Close dropdown when clicking outside
	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (
				dropdownRef.current &&
				!dropdownRef.current.contains(event.target as Node)
			) {
				setIsOpen(false);
				setFocusedIndex(-1);
			}
		};

		if (isOpen) {
			document.addEventListener('mousedown', handleClickOutside);
		}

		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, [isOpen]);

	// Handle keyboard navigation
	const handleKeyDown = (e: KeyboardEvent) => {
		if (disabled) return;

		switch (e.key) {
			case 'Enter':
			case ' ':
				e.preventDefault();
				if (!isOpen) {
					setIsOpen(true);
				} else if (focusedIndex >= 0) {
					handleSelect(options[focusedIndex].value);
				}
				break;
			case 'Escape':
				e.preventDefault();
				setIsOpen(false);
				setFocusedIndex(-1);
				break;
			case 'ArrowDown':
				e.preventDefault();
				if (!isOpen) {
					setIsOpen(true);
				} else {
					setFocusedIndex((prev) =>
						prev < options.length - 1 ? prev + 1 : prev
					);
				}
				break;
			case 'ArrowUp':
				e.preventDefault();
				if (isOpen) {
					setFocusedIndex((prev) => (prev > 0 ? prev - 1 : 0));
				}
				break;
			case 'Home':
				e.preventDefault();
				if (isOpen) {
					setFocusedIndex(0);
				}
				break;
			case 'End':
				e.preventDefault();
				if (isOpen) {
					setFocusedIndex(options.length - 1);
				}
				break;
		}
	};

	useEffect(() => {
		if (isOpen && focusedIndex >= 0 && listRef.current) {
			const focusedElement = listRef.current.children[
				focusedIndex
			] as HTMLElement;
			if (focusedElement) {
				focusedElement.scrollIntoView({ block: 'nearest' });
			}
		}
	}, [focusedIndex, isOpen]);

	const handleSelect = (value: string) => {
		if (!isControlled) {
			setInternalValue(value);
		}
		setIsOpen(false);
		setFocusedIndex(-1);
		if (onChange) {
			onChange(value);
		}
	};

	const handleToggle = (e: JSX.TargetedMouseEvent<HTMLButtonElement>) => {
		if (!disabled) {
			e.preventDefault();
			e.stopPropagation();
			setIsOpen(!isOpen);
			if (!isOpen) {
				const selectedIndex = options.findIndex(
					(opt) => opt.value === selectedValue
				);
				setFocusedIndex(selectedIndex >= 0 ? selectedIndex : 0);
			}
		}
	};

	const visualState = disabled
		? 'disabled'
		: isOpen || isFocused
			? 'focus'
			: selectedOption
				? 'selected'
				: 'default';

	const buttonBaseClasses = [
		'w-full',
		'h-12',
		'px-4',
		'text-base',
		'font-body',
		'text-left',
		'transition-colors',
		'duration-200',
		'focus:outline-none',
		'disabled:cursor-not-allowed',
		'flex',
		'items-center',
		'justify-between',
	];

	const borderClasses = {
		default: 'border border-solid border-grey-400',
		focus: 'border border-solid border-grey-400 shadow-sm',
		selected: 'border border-solid border-grey-400',
		disabled: 'border border-solid border-grey-300',
	};

	const bgClasses = {
		default: 'bg-white',
		focus: 'bg-white',
		selected: 'bg-white',
		disabled: 'bg-grey-200',
	};

	const textClasses = {
		default: 'text-text-secondary',
		focus: 'text-text-primary',
		selected: 'text-text-primary',
		disabled: 'text-text-disabled',
	};

	const buttonClasses = [
		...buttonBaseClasses,
		borderClasses[visualState],
		bgClasses[visualState],
		textClasses[visualState],
		'rounded-md',
		!selectedOption && !placeholder && !className ? 'min-w-[330px]' : '', // default width if empty and no custom class
		className,
	]
		.filter(Boolean)
		.join(' ');

	const labelColorClass = disabled ? 'text-text-disabled' : 'text-text-primary';
	const requiredColorClass = 'text-[#fc4c02]';

	return (
		<div className="w-full" ref={dropdownRef}>
			{label && (
				<label
					id={labelId}
					htmlFor={dropdownId}
					className={`block text-sm font-medium mb-2 ${labelColorClass}`}
				>
					{label}
				</label>
			)}

			<div className="relative">
				{iconLeft && (
					<div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-text-secondary pointer-events-none z-10">
						{iconLeft}
					</div>
				)}

				<button
					id={dropdownId}
					type="button"
					disabled={disabled}
					className={buttonClasses}
					aria-haspopup="listbox"
					aria-expanded={isOpen}
					aria-labelledby={hasLabel ? labelId : undefined}
					aria-label={hasLabel ? undefined : ariaLabel || placeholder || 'Select'}
					aria-required={required}
					aria-controls={listboxId}
					onMouseDown={(e) => {
						e.preventDefault(); 
						handleToggle(e);
					}}
					onKeyDown={handleKeyDown}
					onFocus={() => setIsFocused(true)}
					onBlur={(e) => {
						if (!dropdownRef.current?.contains(e.relatedTarget as Node)) {
							setIsFocused(false);
						}
					}}
					style={iconLeft ? { paddingLeft: '2.5rem' } : undefined}
				>
					<span className="flex items-center truncate">
						{selectedOption ? selectedOption.label : placeholder || label}
					</span>
					<span className="ml-3 flex items-center justify-center">
						{isOpen || isFocused ? (
							<FiChevronUp
								aria-hidden="true"
								className={disabled ? 'text-text-disabled' : 'text-text-primary'}
								size={18}
							/>
						) : (
							<FiChevronDown
								aria-hidden="true"
								className={disabled ? 'text-text-disabled' : 'text-text-primary'}
								size={18}
							/>
						)}
					</span>
				</button>

				{isOpen && !disabled && (
					<ul
						id={listboxId}
						ref={listRef}
						role="listbox"
						aria-labelledby={labelId}
						className="absolute z-50 w-full mt-2 bg-white border border-grey-300 rounded-md shadow-lg max-h-60 overflow-auto focus:outline-none"
					>
						{options.map((option, index) => {
							const isSelected = option.value === selectedValue;
							const isFocused = index === focusedIndex;

							return (
								<li
									key={option.value}
									role="option"
									aria-selected={isSelected}
									className={[
										'px-4 py-3 cursor-pointer transition-colors text-text-primary',
										isFocused ? 'bg-grey-100' : '',
										isSelected ? 'font-medium' : 'font-normal',
									]
										.filter(Boolean)
										.join(' ')}
									onClick={() => handleSelect(option.value)}
									onMouseEnter={() => setFocusedIndex(index)}
								>
									{option.label}
								</li>
							);
						})}
					</ul>
				)}
			</div>

			{required && showRequiredIndicator && (
				<div className="mt-2">
					<span className={`text-sm ${requiredColorClass}`}>*required</span>
				</div>
			)}
		</div>
	);
}
