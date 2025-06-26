// .eslintrc.js
export const plugins = ['unused-imports']
export const rules = {
    'no-unused-vars': 'off', // Disable default unused var rule
    'unused-imports/no-unused-imports': 'error', // Error for unused imports
    'unused-imports/no-unused-vars': [
        // Warn for unused variables
        'warn',
        {
            vars: 'all',
            varsIgnorePattern: '^_',
            args: 'after-used',
            argsIgnorePattern: '^_',
        },
    ],
}
