module.exports = {
  env: {
    'react-native/react-native': true,
    es6: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-native/all',
    'airbnb',
    'prettier',
    'prettier/react',
  ],
  plugins: ['react', 'react-native', 'prettier'],
  parser: 'babel-eslint',
  rules: {
    'react/jsx-filename-extension': [
      2,
      {
        extensions: ['.js', '.jsx'],
      },
    ],
    'prettier/prettier': [
      'error',
      {
        bracketSpacing: true,
        jsxBracketSameLine: true,
        trailingComma: 'all',
        arrowParens: 'avoid',
      },
    ],
    'react-native/no-unused-styles': 2,
    'react/jsx-uses-vars': 2,
    'react-native/no-color-literals': [0],
    'react/forbid-prop-types': [0],
    'react/require-default-props': [0],
    'global-require': [0],
    'no-underscore-dangle': [0],
    indent: ['error', 2],
    'linebreak-style': ['error', 'unix'],
    quotes: [1, 'double'],
    semi: ['error', 'always'],
    'max-len': [
      'error',
      {code: 100, ignorePattern: '^import\\s.+\\sfrom\\s.+;$'},
    ],
  },
};
