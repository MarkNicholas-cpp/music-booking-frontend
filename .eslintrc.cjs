/* ESLint configuration for React + TypeScript */
module.exports = {
    env: {
        browser: true,
        es2023: true,
        node: true,
    },
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: { jsx: true },
        project: null,
    },
    settings: {
        react: { version: "detect" },
    },
    plugins: [
        "react",
        "react-hooks",
        "@typescript-eslint",
    ],
    extends: [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:react-hooks/recommended",
        "prettier",
    ],
    rules: {
        // General quality rules (airbnb-ish lean set)
        "eqeqeq": ["error", "always"],
        "consistent-return": "error",
        "no-console": ["warn", { allow: ["warn", "error"] }],
        "no-debugger": "error",

        // TypeScript-specific
        "@typescript-eslint/no-unused-vars": [
            "warn",
            { argsIgnorePattern: "^_", varsIgnorePattern: "^_", ignoreRestSiblings: true },
        ],
        "@typescript-eslint/ban-ts-comment": ["warn", { "ts-ignore": "allow-with-description" }],
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/explicit-function-return-type": "off",

        // React-specific
        "react/react-in-jsx-scope": "off",
        "react/jsx-boolean-value": ["warn", "never"],
        "react/jsx-key": "error",
        "react/prop-types": "off",
    },
    overrides: [
        {
            files: ["**/*.ts", "**/*.tsx"],
            rules: {
                "no-unused-vars": "off",
            },
        },
    ],
};
