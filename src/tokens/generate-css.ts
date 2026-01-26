/**
 * CSS Variable Generator
 * 
 * Generates CSS custom properties from design tokens
 * for runtime theme switching
 */

import { getTheme } from './themes';

/**
 * Converts a color value to CSS format
 */
function formatColor(value: string | number): string {
	if (typeof value === 'number') {
		return String(value);
	}
	return value;
}

/**
 * Generates CSS custom properties for a theme
 */
export function generateThemeCSS(theme: 'brandA' | 'brandB'): string {
	const tokens = getTheme(theme);
	
	const cssVars: string[] = [];
	
	// Colors
	cssVars.push(`  --color-primary: ${formatColor(tokens.colors.primary)};`);
	cssVars.push(`  --color-secondary: ${formatColor(tokens.colors.secondary)};`);
	cssVars.push(`  --color-tertiary: ${formatColor(tokens.colors.tertiary)};`);
	cssVars.push(`  --color-background: ${formatColor(tokens.colors.background)};`);
	cssVars.push(`  --color-surface: ${formatColor(tokens.colors.surface)};`);
	
	// Text colors
	cssVars.push(`  --color-text-primary: ${formatColor(tokens.colors.text.primary)};`);
	cssVars.push(`  --color-text-secondary: ${formatColor(tokens.colors.text.secondary)};`);
	cssVars.push(`  --color-text-disabled: ${formatColor(tokens.colors.text.disabled)};`);
	cssVars.push(`  --color-text-error: ${formatColor(tokens.colors.text.error)};`);
	cssVars.push(`  --color-text-success: ${formatColor(tokens.colors.text.success)};`);
	
	// Border colors
	cssVars.push(`  --color-border-primary: ${formatColor(tokens.colors.border.primary)};`);
	cssVars.push(`  --color-border-disabled: ${formatColor(tokens.colors.border.disabled)};`);
	cssVars.push(`  --color-border-error: ${formatColor(tokens.colors.border.error)};`);
	cssVars.push(`  --color-border-success: ${formatColor(tokens.colors.border.success)};`);
	cssVars.push(`  --color-border-focus: ${formatColor(tokens.colors.border.focus)};`);
	
	// Button colors
	cssVars.push(`  --color-button-primary: ${formatColor(tokens.colors.button.primary.default)};`);
	cssVars.push(`  --color-button-primary-hover: ${formatColor(tokens.colors.button.primary.hover)};`);
	cssVars.push(`  --color-button-primary-disabled: ${formatColor(tokens.colors.button.primary.disabled)};`);
	cssVars.push(`  --color-button-secondary: ${formatColor(tokens.colors.button.secondary.default)};`);
	cssVars.push(`  --color-button-secondary-hover: ${formatColor(tokens.colors.button.secondary.hover)};`);
	cssVars.push(`  --color-button-secondary-disabled: ${formatColor(tokens.colors.button.secondary.disabled)};`);
	cssVars.push(`  --color-button-tertiary: ${formatColor(tokens.colors.button.tertiary.default)};`);
	cssVars.push(`  --color-button-tertiary-hover: ${formatColor(tokens.colors.button.tertiary.hover)};`);
	cssVars.push(`  --color-button-tertiary-disabled: ${formatColor(tokens.colors.button.tertiary.disabled)};`);
	
	// State colors
	cssVars.push(`  --color-error: ${formatColor(tokens.colors.error)};`);
	cssVars.push(`  --color-success: ${formatColor(tokens.colors.success)};`);
	cssVars.push(`  --color-warning: ${formatColor(tokens.colors.warning)};`);
	
	// Spacing
	cssVars.push(`  --spacing-xs: ${tokens.spacing.xs}px;`);
	cssVars.push(`  --spacing-sm: ${tokens.spacing.sm}px;`);
	cssVars.push(`  --spacing-md: ${tokens.spacing.md}px;`);
	cssVars.push(`  --spacing-lg: ${tokens.spacing.lg}px;`);
	cssVars.push(`  --spacing-xl: ${tokens.spacing.xl}px;`);
	cssVars.push(`  --spacing-2xl: ${tokens.spacing['2xl']}px;`);
	cssVars.push(`  --spacing-3xl: ${tokens.spacing['3xl']}px;`);
	
	// Border radius
	cssVars.push(`  --radius-sm: ${tokens.borderRadius.sm}px;`);
	cssVars.push(`  --radius-md: ${tokens.borderRadius.md}px;`);
	cssVars.push(`  --radius-lg: ${tokens.borderRadius.lg}px;`);
	cssVars.push(`  --radius-xl: ${tokens.borderRadius.xl}px;`);
	cssVars.push(`  --radius-round: ${tokens.borderRadius.round}px;`);
	
	// Typography
	cssVars.push(`  --font-heading: ${tokens.typography.fontFamily.heading};`);
	cssVars.push(`  --font-body: ${tokens.typography.fontFamily.body};`);
	cssVars.push(`  --font-weight-regular: ${tokens.typography.fontWeight.regular};`);
	cssVars.push(`  --font-weight-medium: ${tokens.typography.fontWeight.medium};`);
	cssVars.push(`  --font-weight-bold: ${tokens.typography.fontWeight.bold};`);
	
	return `[data-theme="${theme}"] {\n${cssVars.join('\n')}\n}`;
}

/**
 * Generates CSS for both themes
 */
export function generateAllThemeCSS(): string {
	return [
		generateThemeCSS('brandA'),
		generateThemeCSS('brandB'),
	].join('\n\n');
}
