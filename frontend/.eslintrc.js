module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true
    },
    extends: 'airbnb-typescript/base',
    parserOptions: {
        ecmaVersion: 12,
        sourceType: 'module',
        project: './tsconfig.json'
    },
    rules: {
        '@typescript-eslint/comma-dangle': ['error', 'never'],
        'template-curly-spacing': ['error', 'always'],
        'max-len': ['error', { 'code': 140 }],
        '@typescript-eslint/indent': 'off',
        'class-methods-use-this': 'off',
        'import/prefer-default-export': 'off',
        'linebreak-style': 'off',
        'no-plusplus': 'off'
    }
};
