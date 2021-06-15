module.exports = {
    env: {
        es2020: true,
        node: true
    },
    extends: [
        'airbnb-base'
    ],
    parserOptions: {
        ecmaVersion: 12,
        sourceType: 'module'
    },
    rules: {
        'arrow-body-style': 'off',
        'indent': 'off',
        'import/extensions': 'off',
        'linebreak-style': 'off',
        'consistent-return': 'off',
        'max-len': ['error', { 'code': 140 }],
        'comma-dangle': ['error', 'never'],
        'template-curly-spacing': ['error', 'always']
    }
};
