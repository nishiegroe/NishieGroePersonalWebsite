/**
 * Color theme configuration for the portfolio
 * Change the accentColor to easily update the entire site's color scheme
 */

export const themeConfig = {
  // Main accent color - change this to update your entire site's accent color
  accentColor: '#d9a8c7', // Warm Lavender (Modern Feminine)
  // Alternative accent colors to try:
  // '#00d4ff' - Cyan (vibrant)
  // '#6366f1' - Indigo (professional)
  // '#ec4899' - Pink (bold)
  // '#10b981' - Emerald (fresh)
  // '#f97316' - Orange (warm)
  // '#8b5cf6' - Violet (creative)
  // '#3b82f6' - Sky Blue (classic)

  // Base colors
  backgroundColor: '#faf8f5',
  textPrimary: '#3a3531',
  textSecondary: '#7a7066',
  borderColor: '#ede8e0',
  cardBackground: '#ffffff',

  // Derived colors (automatically adjusted based on accent)
  accentLight: 'rgba(245, 184, 168, 0.1)',
  accentMedium: 'rgba(217, 168, 199, 0.2)',
  accentHover: '#c697b8',
  accentActive: '#b57fa7',
}

/**
 * Generate CSS variables from the theme config
 * This ensures all components use the same color palette
 */
export const generateCSSVariables = (config: typeof themeConfig) => {
  return `
    :root {
      --color-accent: ${config.accentColor};
      --color-accent-light: ${config.accentLight};
      --color-accent-medium: ${config.accentMedium};
      --color-accent-hover: ${config.accentHover};
      --color-accent-active: ${config.accentActive};
      --color-bg: ${config.backgroundColor};
      --color-text-primary: ${config.textPrimary};
      --color-text-secondary: ${config.textSecondary};
      --color-border: ${config.borderColor};
      --color-card-bg: ${config.cardBackground};
    }
  `
}

export default themeConfig
