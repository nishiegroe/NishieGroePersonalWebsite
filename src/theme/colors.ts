/**
 * Color theme configuration for the portfolio
 * Change the accentColor to easily update the entire site's color scheme
 */

export const themeConfig = {
  // Main accent color - change this to update your entire site's accent color
  accentColor: '#36c0f0', // Blue (current)
  // Alternative accent colors to try:
  // '#00d4ff' - Cyan (vibrant)
  // '#6366f1' - Indigo (professional)
  // '#ec4899' - Pink (bold)
  // '#10b981' - Emerald (fresh)
  // '#f97316' - Orange (warm)
  // '#8b5cf6' - Violet (creative)
  // '#3b82f6' - Sky Blue (classic)

  // Base colors
  backgroundColor: '#faf1e6',
  textPrimary: '#333333',
  textSecondary: '#666666',
  borderColor: '#e0d5c8',
  cardBackground: '#ffffff',

  // Derived colors (automatically adjusted based on accent)
  accentLight: 'rgba(54, 192, 240, 0.1)',
  accentMedium: 'rgba(54, 192, 240, 0.2)',
  accentHover: '#2ba8d8',
  accentActive: '#1f8fc0',
}

/**
 * Generate CSS variables from the theme config
 * This ensures all components use the same color palette
 */
export const generateCSSVariables = (config: typeof themeConfig) => {
  return `
    :root {
      --color-accent: ${config.accentColor};
      --color-accent-light: rgba(54, 192, 240, 0.1);
      --color-accent-medium: rgba(54, 192, 240, 0.2);
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
