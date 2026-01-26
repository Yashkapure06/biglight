/**
 * Theme Provider
 * 
 * Provides theme context for components to access design tokens
 */

import { createContext } from 'preact';
import { useContext, useState } from 'preact/hooks';
import type { ThemeTokens, Theme } from '../tokens/themes';
import { getTheme } from '../tokens/themes';

interface ThemeContextValue {
	theme: Theme;
	tokens: ThemeTokens;
	setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextValue | null>(null);

export function ThemeProvider({
	children,
	defaultTheme = 'brandA',
}: {
	children: preact.ComponentChildren;
	defaultTheme?: Theme;
}) {
	const [currentTheme, setCurrentTheme] = useState<Theme>(defaultTheme);
	const tokens = getTheme(currentTheme);

	const value: ThemeContextValue = {
		theme: currentTheme,
		tokens,
		setTheme: setCurrentTheme,
	};

	return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
	const context = useContext(ThemeContext);
	if (!context) {
		throw new Error('useTheme must be used within ThemeProvider');
	}
	return context;
}
