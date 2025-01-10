export default {
  printWidth: 120,
  arrowParens: 'avoid',
  quoteProps: 'consistent',
  singleQuote: true,
  endOfLine: 'auto',
  overrides: [
    {
      files: ['**/*.(css|scss)'],
      options: {
        singleQuote: false,
      },
    },
  ],
};
