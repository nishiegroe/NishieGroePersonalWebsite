# Theme & Accent Color Guide

## Quick Start: Change Your Accent Color

To change your site's accent color, edit this one file:

**File**: `src/theme/colors.ts`

```typescript
export const themeConfig = {
  accentColor: '#36c0f0', // Change this to your desired color
  // ... rest of config
}
```

That's it! The entire site will update automatically.

## Preset Accent Colors

Here are some great accent colors to try:

### Cool Tones
- **Current (Blue)**: `#36c0f0` - Professional, modern, trustworthy
- **Cyan**: `#00d4ff` - Vibrant, energetic, cutting-edge
- **Sky Blue**: `#3b82f6` - Classic, clean, reliable
- **Indigo**: `#6366f1` - Creative, sophisticated, premium

### Warm Tones
- **Orange**: `#f97316` - Warm, approachable, energetic
- **Warm Amber**: `#f59e0b` - Professional, inviting
- **Rose**: `#f43f5e` - Bold, memorable, modern

### Nature Tones
- **Emerald**: `#10b981` - Fresh, growth-oriented, natural
- **Teal**: `#14b8a6` - Balanced, calm, professional
- **Violet**: `#8b5cf6` - Creative, artistic, distinctive

### Bold Tones
- **Pink**: `#ec4899` - Bold, confident, creative
- **Red**: `#ef4444` - Strong, energetic, attention-grabbing

## How It Works

The theme system uses CSS variables for universal color application:

1. **Theme Configuration** (`src/theme/colors.ts`)
   - Central source of truth for all colors
   - Easy to modify and preview changes

2. **Theme Hook** (`src/theme/useTheme.ts`)
   - Automatically applies CSS variables to the document
   - Called once in `App.jsx`

3. **Global Styles** (`src/styles/global.css`)
   - Uses CSS variables throughout
   - Ensures consistency across all components

4. **MUI Component Styling**
   - Components use color variables via `sx` props
   - Automatically updates with theme changes

## Color Palette

Beyond the accent color, you can customize:

```typescript
export const themeConfig = {
  accentColor: '#36c0f0',      // Primary accent
  accentHover: '#2ba8d8',       // Hover state
  accentActive: '#1f8fc0',      // Active/pressed state

  backgroundColor: '#faf1e6',   // Page background
  textPrimary: '#333333',       // Main text
  textSecondary: '#666666',     // Secondary text
  borderColor: '#e0d5c8',       // Borders
  cardBackground: '#ffffff',    // Card backgrounds
}
```

## CSS Variables in Global Styles

All colors are injected as CSS variables:

```css
:root {
  --color-accent: #36c0f0;
  --color-accent-light: rgba(54, 192, 240, 0.1);
  --color-accent-medium: rgba(54, 192, 240, 0.2);
  --color-accent-hover: #2ba8d8;
  --color-accent-active: #1f8fc0;
  --color-bg: #faf1e6;
  --color-text-primary: #333333;
  --color-text-secondary: #666666;
  --color-border: #e0d5c8;
  --color-card-bg: #ffffff;
}
```

Use these in any CSS or styled component:

```css
.my-element {
  color: var(--color-accent);
  background-color: var(--color-accent-light);
  border: 1px solid var(--color-border);
}
```

## Accent Color in Components

The accent color is automatically applied to:

- **Links & buttons** — Hover states change to `--color-accent-hover`
- **Form focus states** — Border and shadow use accent color
- **Navigation elements** — Links use accent color
- **Project cards** — Project headers use accent color variants
- **Gallery navigation** — Prev/next buttons and dots use accent color
- **Icons & badges** — Status indicators use accent color

## Animation & Motion

Enhanced animations have been added:

- **Fade-in**: Elements fade in on page load
- **Slide-up**: Elements slide up with fade effect
- **Hover effects**: Cards lift slightly on hover
- **Transition timing**: Uses CSS variables for consistent timing

Use these classes:

```jsx
<div className="fade-in">Fades in on load</div>
<div className="slide-up">Slides up on load</div>
<div className="stagger-item">Part of staggered sequence</div>
```

## Applying Custom Theme at Runtime

If you want to change the theme dynamically (e.g., via a settings menu):

```typescript
import { useTheme } from './theme/useTheme'

function MyComponent() {
  const [customColor, setCustomColor] = useState('#36c0f0')

  useTheme({
    accentColor: customColor,
  })

  return (
    <input
      type="color"
      value={customColor}
      onChange={(e) => setCustomColor(e.target.value)}
    />
  )
}
```

## UI/UX Improvements Made

1. **Better Typography Hierarchy** — Improved font sizes and weights
2. **Refined Spacing** — More consistent padding and margins
3. **Smooth Transitions** — All interactive elements have smooth transitions
4. **Focus States** — Better keyboard navigation with visible focus states
5. **Micro-interactions** — Hover effects, click feedback, animations
6. **Card Elevation** — Subtle shadows and hover lift effects
7. **Consistent Colors** — All colors tied to the theme system
8. **Accessibility** — Focus-visible states, color contrast improvements

## Testing Your Accent Color

Before finalizing your accent color choice:

1. Check how it looks on different backgrounds
2. Test the hover state (`accentHover`) for readability
3. Verify the light variant (`accentLight`) works for backgrounds
4. Look at both light and dark UI elements with the color

## Future Customization

To add a theme picker UI:

```jsx
import { useState } from 'react'
import { useTheme } from './theme/useTheme'
import themeConfig from './theme/colors'

const accentOptions = [
  { name: 'Blue', color: '#36c0f0' },
  { name: 'Indigo', color: '#6366f1' },
  { name: 'Pink', color: '#ec4899' },
  { name: 'Emerald', color: '#10b981' },
]

function ThemePicker() {
  const [accent, setAccent] = useState(themeConfig.accentColor)
  useTheme({ accentColor: accent })

  return (
    <div>
      {accentOptions.map((option) => (
        <button
          key={option.color}
          onClick={() => setAccent(option.color)}
          style={{
            backgroundColor: option.color,
            border: accent === option.color ? '2px solid black' : 'none'
          }}
        >
          {option.name}
        </button>
      ))}
    </div>
  )
}
```

## Need Help?

Check these files:
- **Colors**: `src/theme/colors.ts`
- **Hook**: `src/theme/useTheme.ts`
- **Global Styles**: `src/styles/global.css`
- **App Setup**: `src/App.jsx`
