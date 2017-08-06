module.exports = {
  plugins: {
    'rucksack-css': {
      clearFix:                true,
      shorthandPosition:       true,
      inputPseudo:             true,
      rangeElements:           true,
      alias:                   false,
      fallbacks:               false,
      responsiveType:          true,
      fontPath:                false,
      autoprefixer:            false,
      quantityPseudoSelectors: true,
    },
    'postcss-cssnext': {
      messages: {
        browser: false,
        console: false,
      },
      features: {
        customProperties:  false,
        customMedia:       true,
        mediaQueriesRange: false,
        customSelectors:   true,
        colorFunction:     true,
      },
      autoprefixer: false,
    },
    'postcss-reporter': {},
    // 'postcss-pxtorem':  {
    //   rootValue:     16,
    //   unitPrecision: 5,
    //   propWhiteList: [
    //     'font',
    //     'font-size',
    //     'letter-spacing',
    //     'margin',
    //     'margin-top',
    //     'margin-right',
    //     'margin-bottom',
    //     'margin-left',
    //     'padding',
    //     'padding-top',
    //     'padding-right',
    //     'padding-bottom',
    //     'padding-left',
    //   ],
    //   mediaQuery: true,
    // },
  },
};
