module.exports = {
    env: {
        browser: true,
        es2021: true
    },
    extends: ["plugin:react/recommended", "standard"],
    parser: "babel-eslint",
    parserOptions: {
        ecmaFeatures: {
            experimentalObjectRestSpread: true,
            jsx: true,
            modules: true
        },
        ecmaVersion: 12,
        sourceType: "module"
    },
    plugins: ["react"],
    rules: {
        semi: [2, "always"],
        indent: ["error", 4],
        "space-before-function-paren": ["error", "never"],
        "multiline-ternary": ["error", "never"],
        quotes: [
            "error",
            "double",
            {
                allowTemplateLiterals: true
            }
        ],
        "no-unused-vars": [
            "error",
            {
                varsIgnorePattern: "^[A-Z]"
            }
        ]
    }
};
