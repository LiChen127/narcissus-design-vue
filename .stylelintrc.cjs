module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-prettier'],
  rules: {
    'indentation': 2,
    'string-quotes': 'single',
    'color-no-invalid-hex': true,
    'property-no-unknown': [
      true,
      {
        ignoreProperties: ['composes'],
      },
    ],
    'declaration-colon-space-after': 'always',
    'block-opening-brace-newline-after': 'always',
    'block-closing-brace-newline-before': 'always',
    'selector-list-comma-space-before': 'never',
    'max-empty-lines': 1,
    'max-line-length': 80,
    'function-url-quotes': 'always',
    'media-feature-colon-space-after': 'always',
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['extend', 'include', 'mixin'],
      },
    ],
    'prettier/prettier': true,
  },
};
