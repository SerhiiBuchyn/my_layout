module.exports = {
    env: {
        commonjs: true,
        es2021: true,
        node: true
    },
    extends: ["react-app", "react-app/jest", "prettier"],
    parserOptions: {
        ecmaFeatures: {jsx: true},
        ecmaVersion: 2020,
        sourceType: "module"
    },
    plugins: ["react"],
    rules: {
        indent: "off",
        "jsx-quotes": ["warn", "prefer-double"],
        "max-len": [
            "warn",
            {
                code: 90
            }
        ],
        "no-console": "warn",
        "no-duplicate-imports": "warn",
        "no-unused-vars": "warn",
        "object-curly-spacing": ["warn", "always"],
        "react/jsx-indent-props": ["error", 4],
        "react/prop-types": "warn"
    }
};