module.exports = {
	env: {
		commonjs: true,
		es2021: true,
		node: true
	},
	root: true,
	extends: ["react-app", "react-app/jest", "plugin:prettier/recommended"],
	parser: "@typescript-eslint/parser",
	parserOptions: {
		ecmaFeatures: { jsx: true },
		ecmaVersion: 2020,
		sourceType: "module"
	},
	rules: {
		"prettier/prettier": [
			"error",
			{
				semi: true,
				printWidth: 90,
				singleQuote: false,
				useTabs: true,
				tabWidth: 2,
				trailingComma: "none",
				jsxBracketSameLine: true
			}
		]
	}
};
