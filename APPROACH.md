# Design-to-Code Workflow & Approach

This document explains the complete design-to-code workflow, token management strategy, theme switching mechanism, and architectural decisions made for this component library.

## Overview

The goal was to build a maintainable, scalable component library the way that:
1. Translates Figma designs into pixel-perfect components
2. Supports multiple brands/themes from a single codebase
3. Maintains design-code synchronization through design tokens
4. Provides excellent developer experience and documentation

## Design-to-Code Workflow

### Step 1: Token Extraction

**Source**: `src/tokens/source/figma-tokens.json`

The design tokens JSON file contains:
- **Primitives/Default**: Base tokens (colors, spacing, typography)
- **Alias colors/BrandA & BrandB**: Brand-specific color aliases
- **Mapped/BrandA & BrandB**: Component-specific mapped tokens

**Process**:
1. Design tokens were already provided
2. JSON is placed in `src/tokens/source/`
3. Token parser (`src/tokens/parser.ts`) reads and processes the JSON

### Step 2: Token Processing

**File**: `src/tokens/parser.ts`

The parser:
- Reads the JSON structure
- Resolves token references 
- Flattens nested structures into dot-notation keys
- Extracts tokens for both Brand A and Brand B


### Step 3: Theme Generation

**File**: `src/tokens/themes.ts`

Themes are structured TypeScript objects that:
- Map token paths to semantic names (e.g., `button.primary.default`)
- Provide type safety and autocomplete
- Include all necessary design values (colors, spacing, typography)

**Theme Structure is in the following manner**:
```typescript
{
  colors: {
    primary, secondary, tertiary,
    button: { primary, secondary, tertiary },
    text: { primary, secondary, disabled, error, success },
    border: { primary, disabled, error, success, focus }
  },
  spacing: { xs, sm, md, lg, xl, 2xl, 3xl },
  borderRadius: { sm, md, lg, xl, round },
  typography: { fontFamily, fontWeight }
}
```

### Step 4: CSS Variable Generation

**File**: `src/tokens/tokens.css`

CSS custom properties are generated for runtime theme switching:

```css
[data-theme="brandA"] {
  --color-button-primary: #00a896;
  --spacing-md: 16px;
  /* ... */
}

[data-theme="brandB"] {
  --color-button-primary: #8b2635;
  --spacing-md: 16px;
  /* ... */
}
```


### Step 5: Tailwind Integration

**File**: `tailwind.config.js`

Tailwind is configured to use CSS variables:

```javascript
theme: {
  extend: {
    colors: {
      'button-primary': 'var(--color-button-primary)',
      // ...
    }
  }
}
```

- Components use Tailwind utilities (e.g., `bg-button-primary`)
- Values automatically change based on theme
- Type-safe through TypeScript

### Step 6: Component Implementation

Components consume tokens through:
1. **Tailwind utilities**: `bg-button-primary`, `text-text-primary`
2. **CSS variables**: Direct access when needed
3. **Theme context**: For programmatic access (if needed)

## Token Management

### Token Structure

Tokens are organized hierarchically:

```
Primitives/Default
  ├── Colour (base colors)
  ├── Scale (spacing values)
  └── Font (typography)

Alias colours/BrandA
  ├── Primary (brand-specific colors)
  ├── Secondary
  └── Tertiary

Mapped/BrandA
  ├── Surface/Colour (component colors)
  ├── Text/Colour
  ├── Border/Colour
  └── Font
```

### Token Resolution

The parser resolves references recursively:

1. `{Primary.Default}` → Looks in `Alias colours/BrandA`
2. `{Colour.Brand.BrandA.Orange.Default}` → Looks in `Primitives/Default`
3. Continues until a concrete value is found

### Token Consumption

Components access tokens in three different ways:


1. **Via Tailwind**:
   ```tsx
   <button className="bg-button-primary text-white">
   ```

2. **Via CSS Variables**:
   ```tsx
   <div style={{ color: 'var(--color-text-primary)' }}>
   ```

3. **Via Theme Object**:
   ```tsx
   const { tokens } = useTheme();
   const primaryColor = tokens.colors.button.primary.default;
   ```

## Theme Switching

### How It Works

1. **CSS Variables**: All token values are CSS custom properties
2. **Data Attribute**: Theme is set via `data-theme="brandA"` or `data-theme="brandB"`
3. **Automatic Updates**: Components automatically use the correct theme values

### Implementation

**Storybook Integration**:
- Global toolbar control for theme switching
- Decorator applies `data-theme` attribute to story container
- All components inherit theme automatically

**Code Example**:
```tsx

<div data-theme="brandA">
  <Button variant="primary">Click me</Button>
</div>
```

### Theme Differences

**Brand A** (from Figma):
- Primary: Teal green (#00a896)
- Secondary: Black
- Tertiary: White with black border

**Brand B** (from tokens):
- Primary: Burgundy/red (#8b2635)
- Different color palette
- Same structure, different values

## Token Update Process



### Current Process (Semi-Automated)

```bash
# 1. Replace JSON file: src/tokens/source/figma-tokens.json
# 2. Regenerate CSS: npm run generate-tokens (or manually update tokens.css)
# 3. Components automatically use new values (via CSS variables)
```

**Implementation Details:**
- **Parser** (`src/tokens/parser.ts`): Reads JSON, resolves references, extracts brand tokens
- **Theme System** (`src/tokens/themes.ts`): Creates structured theme objects from parsed tokens
- **CSS Generator** (`src/tokens/generate-css.ts`): Converts themes to CSS custom properties
- **Generator Script** (`src/tokens/generate-tokens.ts`): Utility to regenerate `tokens.css` from JSON

The `tokens.css` file can be manually maintained as well as auto-generated. The generator script demonstrates the automated approach, but manual updates are also acceptable for this challenge scope.

### Things I would implement if time permitted 

With more time, I would implement:

1. **Build script** that:
   - Reads JSON on build
   - Generates CSS automatically
   - Validates token structure
   - Type-checks token usage

2. **CI/CD integration**:
   - Auto-generate CSS on token file changes
   - Validate token references
   - Run visual regression tests

3. **Design token sync tool**:
   - Watch for Figma API updates
   - Auto-pull latest tokens
   - Generate PR with changes

##  Component Architecture

### Component Structure

Each component follows this pattern:

```
ComponentName/
  ├── ComponentName.tsx      # Component implementation
  ├── ComponentName.stories.tsx  # Storybook stories
  └── index.ts              # Exports
```

### Design Principles

1. **Composition over Configuration**: Components compose well (Card uses Button)
2. **Props-based API**: Clear, typed props interface
3. **Accessibility First**: ARIA, keyboard navigation, focus management
4. **Theme-Aware**: All styling uses tokens/CSS variables
5. **Responsive**: Mobile-first, breakpoint-aware

### Example: Button Component

```tsx
<Button
  variant="primary"    // Uses --color-button-primary
  size="md"            // Uses --spacing-* tokens
  disabled={false}
  iconLeft={<Icon />}
>
  Click me
</Button>
```

The component:
- Uses Tailwind classes that reference CSS variables
- Automatically adapts to theme changes
- Maintains consistent styling across brands

## What I Would Do Differently

### With More Time

1. **Automated Token Pipeline**:
   - Build script to generate CSS from JSON
   - Type generation from token structure
   - Validation of token references

2. **Design Token Sync**:
   - Figma API integration
   - Automated token updates
   - Change detection and notifications

3. **Enhanced Testing**:
   - Visual regression tests
   - Accessibility testing automation
   - Cross-browser testing

4. **Documentation**:
   - Auto-generated prop tables
   - Interactive examples
   - Design guidelines integration

### With Different Tools

1. **Style Dictionary**: For more robust token transformation
2. **Theo**: Alternative token processing tool
3. **Figma Plugin**: Direct token extraction from designs (but token was already provided)
4. **Design Tokens Community Format**: Standardized token format

### In Production

1. **Token Versioning**: Track token changes over time
2. **Migration Tools**: Help migrate components when tokens change
3. **Token Validation**: Ensure all tokens are used correctly
4. **Performance**: Optimize CSS variable usage
5. **Documentation**: Comprehensive design system docs

##  Trade-offs and Limitations

### Current Limitations

1. **Semi-Automated CSS Generation**: `tokens.css` can be manually maintained or generated via script
   - **Current**: Generator script exists (`src/tokens/generate-tokens.ts`) but requires manual execution
   - **Trade-off**: Simplicity vs. full automation
   - **Solution**: Integrate into build process or CI/CD pipeline

2. **Token Resolution**: Basic reference resolution
   - **Trade-off**: Works for current needs, may need enhancement for complex cases
   - **Solution**: More robust parser for nested references

3. **Theme Switching**: CSS-only (no JavaScript theme context)
   - **Trade-off**: Simpler, but less flexible
   - **Solution**: Add ThemeProvider for programmatic access

4. **Type Safety**: Partial type safety for tokens
   - **Trade-off**: Works but could be better
   - **Solution**: Generate TypeScript types from token structure

### Design Decisions

1. **CSS Variables over JavaScript**: 
   - ✅ Simpler, works everywhere
   - ✅ No runtime overhead
   - ❌ Less flexible for complex logic

2. **Tailwind over CSS Modules**:
   - ✅ Utility classes are fast to write
   - ✅ Consistent spacing/colors
   - ❌ Larger CSS bundle (mitigated by purging)

3. **Preact over React**:
   - ✅ Smaller bundle size
   - ✅ Faster performance
   - ❌ Smaller ecosystem

##  Token Usage Examples

### Button Colors

```css
/* Brand A */
--color-button-primary: #00a896;
--color-button-primary-hover: #000000;

/* Brand B */
--color-button-primary: #8b2635;
--color-button-primary-hover: #000000;
```

### Spacing

```css
/* Same for both brands */
--spacing-xs: 4px;
--spacing-sm: 8px;
--spacing-md: 16px;
```

### Typography

```css
/* Brand A */
--font-heading: Inter;
--font-body: Inter;

/* Brand B */
--font-heading: mencken-std-head-narrow;
--font-body: Open Sans;
```

## Token Reference Resolution

Example resolution chain:

1. Component uses: `bg-button-primary`
2. Tailwind maps to: `var(--color-button-primary)`
3. CSS variable defined in: `[data-theme="brandA"]`
4. Value comes from: `Mapped/BrandA/Surface/Colour/Action/Primary`
5. Which references: `{Tertiary.Default}`
6. Which resolves to: `Alias colours/BrandA/Tertiary/Default`
7. Final value: `#00a896`

## Key Learnings

1. **Token Structure Matters**: Well-organized tokens make implementation easier
2. **CSS Variables are Powerful**: Enable runtime theme switching without rebuilds
3. **Type Safety Helps**: TypeScript catches token usage errors early
4. **Documentation is Critical**: Clear docs help maintain consistency
5. **Automation Saves Time**: Manual processes should be automated when possible

## Conclusion

This approach provides a solid foundation for a multi-brand component library. The token pipeline is simple but effective, and components are well-structured and maintainable. With additional time and tooling, the process could be further automated and enhanced, but the current implementation demonstrates a clear understanding of design-to-code workflows and token management.

The system is designed to be:
- **Maintainable**: Clear structure, good documentation
- **Scalable**: Easy to add new components and brands
- **Flexible**: Theme switching works seamlessly
- **Accessible**: All components follow best practices
