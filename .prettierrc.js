module.exports = {
    arrowParens: 'avoid',
    bracketSpacing: true,
    overrides: [
        {
            files: '*.yaml',
            options: {
                singleQuote: false,
                tabWidth: 2
            }
        },
        {
            files: '*.md',
            options: {
                tabWidth: 2
            }
        }
    ],
    printWidth: 80,
    semi: true,
    singleQuote: true,
    tabWidth: 4,
    trailingComma: 'none',
    useTabs: false
};
