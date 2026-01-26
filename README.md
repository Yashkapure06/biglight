# Biglight Component Library - Technical Challenge

A multi-brand component library built with Preact, Tailwind CSS, and Storybook. This project demonstrates a complete design-to-code workflow with design token integration, theme switching, and comprehensive component documentation.

##  Quick Start

### Prerequisites

- Node.js 18+ and npm

### Installation

```bash
npm install
```

### Development

Start the development server:

```bash
npm run dev
```

The app will be available at `http://localhost:5173/`

### Storybook

Start Storybook to view all components and their variants:

```bash
npm run storybook
```

Storybook will be available at `http://localhost:6006/`

### Build

Build for production:

```bash
npm run build
```

Build Storybook for deployment:

```bash
npm run build-storybook
```

## Theme Switching

### In Storybook

Use the **Theme** toolbar control in Storybook to switch between:
- **Brand A**: Orange/teal color scheme (as shown in Figma)
- **Brand B**: Different visual styling (explore the JSON tokens to see differences)

The theme switcher is located in the Storybook toolbar at the top of the screen.

### In Code

Components automatically use CSS custom properties that change based on the `data-theme` attribute:

```tsx
<div data-theme="brandA">
  <Button variant="primary">Click me</Button>
</div>

<div data-theme="brandB">
  <Button variant="primary">Click me</Button>
</div>
```

##  Components

### Button
- **Variants**: Primary, Secondary, Tertiary
- **States**: Default, Hover, Disabled, Focus
- **Features**: Icon support (left/right), multiple sizes

### Input
- **States**: Default, Focus, Filled, Disabled, Error, Success
- **Features**: Label, placeholder, required indicator, error/success messages, icon support

### Dropdown
- **States**: Default, Focus, Selected, Disabled, Opened
- **Features**: Keyboard navigation, search, custom options

### Card
- **Variants**: Small (mobile), Medium, Large (desktop)
- **Features**: Composes Button component, promotional layout

### Login Drawer
- **Features**: Modal/drawer pattern, composes all components, form validation, responsive layout

## Project Structure

```
src/
├── components/          # Component library
│   ├── Button/
│   ├── Input/
│   ├── Dropdown/
│   ├── Card/
│   └── LoginDrawer/
├── tokens/              # Design token system
│   ├── source/          # Source JSON from Figma
│   ├── parser.ts        # Token parser
│   ├── themes.ts        # Theme system
│   ├── tokens.css       # CSS variables
│   └── generate-css.ts  # CSS generator utility
├── providers/           # React/Preact providers
│   └── ThemeProvider.tsx
└── style.css           # Global styles + Tailwind
```

## Design Tokens

Design tokens are stored in `src/tokens/source/figma-tokens.json` and are automatically parsed and converted to:

1. **CSS Custom Properties** - For runtime theme switching
2. **Tailwind Config** - For utility class generation
3. **TypeScript Types** - For type-safe token access

### Regenerating Tokens

When the `figma-tokens.json` file is updated:

```bash
npm run generate-tokens
```

This will regenerate `src/tokens/tokens.css` from the JSON file. See `APPROACH.md` for detailed information about the design-to-code workflow.

##  Storybook Stories

Each component has comprehensive stories showing:
- All variants
- All states
- Interactive controls
- Theme switching
- Responsive layouts

##  Accessibility

All components include:
- Keyboard navigation support
- ARIA attributes
- Focus management
- Screen reader support
- Semantic HTML

##  Tech Stack

- **Preact** - Lightweight React alternative
- **Tailwind CSS** - Utility-first CSS framework
- **Storybook** - Component documentation and testing
- **TypeScript** - Type safety
- **Vite** - Fast build tool


## AI Usage

Here's how AI was used:

### AI-Assisted Tasks:
- **Code scaffolding**: Initial component structure and boilerplate
- **TypeScript types**: Type definitions and interfaces
- **Documentation**: Initial README and APPROACH structure
- **Code suggestions**: Implementation patterns and best practices
- **Debugging**: Help identifying and fixing issues
- **Refactoring**: Code organization suggestions
- **Accessibility**: ARIA attributes, keyboard navigation patterns
- **CSS from tokens**: Used Cursor AI to help generate CSS from design tokens.





