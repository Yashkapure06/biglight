/**
 * Design Token Parser
 * 
 * Parses the Figma tokens JSON file and extracts structured token values
 * for Brand A and Brand B, resolving token references.
 */

import tokensData from './source/figma-tokens.json';

type TokenValue = string | number;
type TokenType = 'color' | 'number' | 'text';

interface Token {
	value: TokenValue;
	type: TokenType;
}

type TokenSet = Record<string, Token | TokenSet>;

/**
 * Resolves token references like "{Primary.Default}" to actual values
 */
function resolveTokenReference(
	path: string,
	tokenSets: Record<string, TokenSet>
): TokenValue | null {
	// Remove curly braces: "{Primary.Default}" -> "Primary.Default"
	const cleanPath = path.replace(/[{}]/g, '');
	const parts = cleanPath.split('.');

	let current: TokenSet | Token | undefined = tokenSets;
	
	for (const part of parts) {
		if (!current || typeof current === 'string' || typeof current === 'number') {
			return null;
		}
		
		if ('value' in current && 'type' in current) {
			// This is a token, check if value is another reference
			const token = current as Token;
			if (typeof token.value === 'string' && token.value.startsWith('{')) {
				return resolveTokenReference(token.value, tokenSets);
			}
			return token.value;
		}
		
		current = (current as TokenSet)[part];
	}
	
	if (current && 'value' in current) {
		const token = current as Token;
		// If it's another reference, resolve it
		if (typeof token.value === 'string' && token.value.startsWith('{')) {
			return resolveTokenReference(token.value, tokenSets);
		}
		return token.value;
	}
	
	return null;
}

/**
 * Extracts a token value, resolving references
 */
function extractTokenValue(
	token: Token | TokenSet,
	tokenSets: Record<string, TokenSet>
): TokenValue | null {
	if ('value' in token && 'type' in token) {
		const tokenValue = token as Token;
		if (typeof tokenValue.value === 'string' && tokenValue.value.startsWith('{')) {
			return resolveTokenReference(tokenValue.value, tokenSets);
		}
		return tokenValue.value;
	}
	return null;
}

/**
 * Flattens nested token structure into dot-notation keys
 */
function flattenTokens(
	tokenSet: TokenSet,
	prefix = '',
	tokenSets: Record<string, TokenSet>
): Record<string, TokenValue> {
	const result: Record<string, TokenValue> = {};
	
	for (const [key, value] of Object.entries(tokenSet)) {
		const fullKey = prefix ? `${prefix}.${key}` : key;
		
		if ('value' in value && 'type' in value) {
			// It's a token
			const resolved = extractTokenValue(value, tokenSets);
			if (resolved !== null) {
				result[fullKey] = resolved;
			}
		} else {
			// It's a nested object
			Object.assign(result, flattenTokens(value as TokenSet, fullKey, tokenSets));
		}
	}
	
	return result;
}

/**
 * Parses tokens for a specific brand
 */
export function parseBrandTokens(brand: 'BrandA' | 'BrandB') {
	const tokenSets = tokensData as Record<string, TokenSet>;
	
	// Get the mapped tokens for the brand
	const mappedKey = `Mapped/${brand}`;
	const aliasKey = `Alias colours/${brand}`;
	const primitivesKey = 'Primitives/Default';
	
	const mappedTokens = tokenSets[mappedKey] as TokenSet | undefined;
	const aliasTokens = tokenSets[aliasKey] as TokenSet | undefined;
	const primitiveTokens = tokenSets[primitivesKey] as TokenSet | undefined;
	
	if (!mappedTokens) {
		throw new Error(`Tokens not found for ${brand}`);
	}
	
	// Combine all token sets for resolution
	const allTokenSets: Record<string, TokenSet> = {
		[primitivesKey]: primitiveTokens || {},
		[aliasKey]: aliasTokens || {},
		[mappedKey]: mappedTokens,
	};
	
	// Flatten and resolve tokens
	const flattened = flattenTokens(mappedTokens, '', allTokenSets);
	
	// Also include alias tokens for easier access
	if (aliasTokens) {
		const flattenedAlias = flattenTokens(aliasTokens, 'Alias', allTokenSets);
		Object.assign(flattened, flattenedAlias);
	}
	
	return flattened;
}

/**
 * Gets a specific token value by path
 */
export function getToken(
	brand: 'BrandA' | 'BrandB',
	path: string
): TokenValue | undefined {
	const tokens = parseBrandTokens(brand);
	return tokens[path];
}

/**
 * Gets all tokens for both brands
 */
export function getAllTokens() {
	return {
		brandA: parseBrandTokens('BrandA'),
		brandB: parseBrandTokens('BrandB'),
	};
}
