const off = 0;
const error = 2;

module.exports = {
  parser: '@typescript-eslint/parser',
  env: {
    browser: true,
    es6: true,
    jest: true
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  settings: {
    react: {
      version: 'detect'
    },
    'import/resolver': {
      node: {
        paths: ['src'],
        extensions: ['.ts', '.tsx']
      }
    }
  },
  plugins: ['react-hooks', '@typescript-eslint', 'import'],
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'airbnb',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
  ],
  rules: {
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        ts: 'never',
        tsx: 'never'
      }
    ],
    'import/prefer-default-export': off,
    'react/display-name': off,
    'react/prop-types': off,
    'react/jsx-filename-extension': off,
    '@typescript-eslint/explicit-function-return-type': [
      off,
      {
        allowExpressions: true,
        allowTypedFunctionExpressions: true
      }
    ],
    '@typescript-eslint/camelcase': off,
    '@typescript-eslint/prefer-interface': off,
    '@typescript-eslint/no-explicit-any': off,
    '@typescript-eslint/no-empty-interface': off,
    '@typescript-eslint/no-namespace': off,
    '@typescript-eslint/interface-name-prefix': off,
    'react-hooks/rules-of-hooks': error,
    'react-hooks/exhaustive-deps': off,
    'import/no-unresolved': off,
    'jsx-a11y/anchor-is-valid': [
      error,
      {
        components: ['Link'],
        specialLink: ['to']
      }
    ],
    'import/no-extraneous-dependencies': error,
    'react/destructuring-assignment': off,
    'react/button-has-type': error,
    'no-underscore-dangle': off,
    'lines-between-class-members': off,
    'jsx-a11y/label-has-associated-control': off,
    'jsx-a11y/label-has-for': off,
    'jsx-a11y/interactive-supports-focus': off,
    'jsx-a11y/click-events-have-key-events': off,
    'jsx-a11y/no-noninteractive-element-interactions': off,
    'react/jsx-props-no-spreading': off
  }
};
