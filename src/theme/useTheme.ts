import { useEffect } from 'react'
import themeConfig, { generateCSSVariables } from './colors'

/**
 * Custom hook to apply theme configuration to the document
 * Call this in your main App component to enable theming
 */
export const useTheme = (customConfig?: Partial<typeof themeConfig>) => {
  useEffect(() => {
    const config = { ...themeConfig, ...customConfig }

    // Generate and inject CSS variables
    const styleElement = document.getElementById('theme-variables') || document.createElement('style')
    styleElement.id = 'theme-variables'
    styleElement.textContent = generateCSSVariables(config)

    if (!document.head.contains(styleElement)) {
      document.head.appendChild(styleElement)
    }

    return () => {
      // Cleanup if needed
    }
  }, [customConfig])

  return themeConfig
}

export default useTheme
