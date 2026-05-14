/**
 * Color theme configuration for the portfolio
 * Pastel Tech - Cute Feminine Matte Palette
 */

export const themeConfig = {
  // Main accent colors - pastel feminine palette
  primary: '#d9a8c7',      // Warm lavender
  secondary: '#f2a8c5',    // Soft pink
  accent: '#a8d8f2',       // Light blue
  accent2: '#c8b8e8',      // Soft purple
  accent3: '#f5d1c8',      // Peach

  // Base colors
  backgroundColor: '#faf8f5', // Cream white
  surfaceColor: '#ffffff',    // Pure white for cards
  textPrimary: '#4a4a52',     // Soft dark gray
  textSecondary: '#8a8a92',   // Medium gray
  borderColor: '#f0e8f0',     // Very light lavender

  // Derived accent colors
  primaryHover: '#c697b8',
  primaryActive: '#b583a8',
  primaryLight: 'rgba(217, 168, 199, 0.15)',
  primaryMedium: 'rgba(217, 168, 199, 0.3)',

  // Glassmorphism
  glassBackground: 'rgba(255, 255, 255, 0.72)',
  glassBorder: 'rgba(217, 168, 199, 0.25)',
  glassShadow: '0 8px 32px rgba(217, 168, 199, 0.15)',

  // Gradient definitions
  gradient: {
    primary: 'linear-gradient(135deg, #d9a8c7 0%, #f2a8c5 100%)',
    hero: 'linear-gradient(135deg, rgba(217,168,199,0.1) 0%, rgba(168,216,242,0.1) 100%)',
    surface: 'linear-gradient(180deg, #ffffff 0%, #faf8f5 100%)',
  },
}

/**
 * Generate CSS variables from the theme config
 */
export const generateCSSVariables = (config: typeof themeConfig) => {
  return `
    :root {
      --color-primary: ${config.primary};
      --color-secondary: ${config.secondary};
      --color-accent: ${config.accent};
      --color-accent2: ${config.accent2};
      --color-accent3: ${config.accent3};
      --color-bg: ${config.backgroundColor};
      --color-surface: ${config.surfaceColor};
      --color-text-primary: ${config.textPrimary};
      --color-text-secondary: ${config.textSecondary};
      --color-border: ${config.borderColor};
      --color-primary-hover: ${config.primaryHover};
      --color-primary-active: ${config.primaryActive};
      --color-primary-light: ${config.primaryLight};
      --color-primary-medium: ${config.primaryMedium};
      --glass-bg: ${config.glassBackground};
      --glass-border: ${config.glassBorder};
      --glass-shadow: ${config.glassShadow};
    }
  `
}

export default themeConfig
