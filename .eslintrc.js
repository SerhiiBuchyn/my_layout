module.exports = {
    'env': {
        'commonjs': true,
        'es2021': true,
        'node': true
    },
    'extends': [
        'eslint:recommended'
    ],
    'parserOptions': {
        'ecmaFeatures': { 'jsx': true },
        'ecmaVersion': 2020,
        "sourceType": "module",
    },
    'plugins': ['react'
    ],
    rules: {
        indent: [
            'error',
            4
        ],
        'jsx-quotes': [
            'warn',
            'prefer-double'
        ],
        'max-len': [
            'warn',
            {
                code: 80
            }
        ],
        'no-console': 'warn',
        'no-duplicate-imports': 'warn',
        'no-unused-vars': 'warn',
        'object-curly-spacing': [
            'warn',
            'always'
        ],
        'react/jsx-indent-props': [
            'error',
            4
        ],
        'react/prop-types': 'warn',
    },
};