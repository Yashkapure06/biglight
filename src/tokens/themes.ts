/**
 * Theme System
 * 
 * Provides structured theme objects for Brand A and Brand B
 * with easy access to design tokens for components
 */

import { parseBrandTokens } from './parser.js';

export type Theme = 'brandA' | 'brandB';

export interface ThemeTokens {
	colors: {
		primary: string;
		secondary: string;
		tertiary: string;
		background: string;
		surface: string;
		text: {
			primary: string;
			secondary: string;
			disabled: string;
			error: string;
			success: string;
		};
		border: {
			primary: string;
			disabled: string;
			error: string;
			success: string;
			focus: string;
		};
		button: {
			primary: {
				default: string;
				hover: string;
				disabled: string;
			};
			secondary: {
				default: string;
				hover: string;
				disabled: string;
			};
			tertiary: {
				default: string;
				hover: string;
				disabled: string;
			};
		};
		error: string;
		success: string;
		warning: string;
	};
	
	spacing: {
		xs: number;
		sm: number;
		md: number;
		lg: number;
		xl: number;
		'2xl': number;
		'3xl': number;
	};
	
	borderRadius: {
		sm: number;
		md: number;
		lg: number;
		xl: number;
		round: number;
	};
	
	typography: {
		fontFamily: {
			heading: string;
			body: string;
		};
		fontWeight: {
			regular: string;
			medium: string;
			bold: string;
		};
	};
}

/**
 * Creates a theme object from parsed tokens
 */
function createTheme(brand: 'BrandA' | 'BrandB', tokens: Record<string, any>): ThemeTokens {
	// Helper to get token with fallback
	const get = (path: string, fallback: any = null) => {
		return tokens[path] ?? fallback;
	};
	
	// Get scale values for spacing
	const scale = (key: string): number => {
		const value = get(`Scale.${key}`, 0);
		return typeof value === 'number' ? value : parseInt(String(value), 10) || 0;
	};
	
	return {
		colors: {
			primary: get('Surface.Colour.Brand Primary', '#000000'),
			secondary: get('Surface.Colour.Secondary', '#ffffff'),
			tertiary: get('Alias.Tertiary.Default', '#00a896'),
			background: get('Surface.Colour.Page', '#ffffff'),
			surface: get('Surface.Colour.Secondary', '#ffffff'),
			text: {
				primary: get('Text.Colour.Body', '#000000'),
				secondary: get('Text.Colour.Passive', '#767676'),
				disabled: get('Text.Colour.Disabled', '#949494'),
				error: get('Text.Colour.Error', '#d32f2f'),
				success: get('Text.Colour.Success', '#2e7d32'),
			},
			border: {
				primary: get('Border.Colour.Primary', '#000000'),
				disabled: get('Border.Colour.Disabled', '#cdcdcd'),
				error: get('Border.Colour.Error', '#d32f2f'),
				success: get('Border.Colour.Positive', '#2e7d32'),
				focus: get('Border.Colour.Action.Active', '#00a896'),
			},
			button: {
				primary: {
					default: get('Alias.Primary.Default', '#00a896'),
					hover: get('Surface.Colour.Action.Hover-Primary', '#000000'),
					disabled: get('Surface.Colour.Disabled-Light', '#f5f5f5'),
				},
				secondary: {
					default: get('Surface.Colour.Action.Secondary', '#000000'),
					hover: get('Surface.Colour.Action.Hover-Secondary', '#00a896'),
					disabled: get('Surface.Colour.Disabled-Light', '#f5f5f5'),
				},
				tertiary: {
					default: get('Surface.Colour.Secondary', '#ffffff'),
					hover: get('Surface.Colour.Action.Hover-Primary', '#000000'),
					disabled: get('Surface.Colour.Disabled-Light', '#f5f5f5'),
				},
			},
			error: get('Surface.Colour.Error', '#d32f2f'),
			success: get('Surface.Colour.Positive', '#2e7d32'),
			warning: get('Surface.Colour.Warning', '#ed6c02'),
		},
		spacing: {
			xs: scale('100'),
			sm: scale('200'),
			md: scale('400'),
			lg: scale('600'),
			xl: scale('800'),
			'2xl': scale('1000'),
			'3xl': scale('1200'),
		},
		borderRadius: {
			sm: scale('100'),
			md: scale('200'),
			lg: scale('500'),
			xl: scale('1000'),
			round: scale('3000'),
		},
		typography: {
			fontFamily: {
				heading: get('Font.Font family.Headings', 'Inter'),
				body: get('Font.Font family.Paragraph', 'Inter'),
			},
			fontWeight: {
				regular: get('Font.Font weight.Paragraph.Regular', 'Regular'),
				medium: get('Font.Font weight.Paragraph.Medium', 'Medium'),
				bold: get('Font.Font weight.Paragraph.Bold', 'Bold'),
			},
		},
	};
}

/**
 * Get theme tokens for a specific brand
 */
export function getTheme(brand: Theme): ThemeTokens {
	const brandKey = brand === 'brandA' ? 'BrandA' : 'BrandB';
	const tokens = parseBrandTokens(brandKey);
	return createTheme(brandKey, tokens);
}

// Lazy initialization for themes to avoid circular dependencies
let _themes: { brandA: ThemeTokens; brandB: ThemeTokens } | null = null;

/**
 * All available themes (lazy-loaded)
 */
export function getThemes() {
	if (!_themes) {
		_themes = {
			brandA: getTheme('brandA'),
			brandB: getTheme('brandB'),
		};
	}
	return _themes;
}
