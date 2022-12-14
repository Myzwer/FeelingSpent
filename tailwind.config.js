module.exports = {
  /*
   *
   * More information: https://tailwindcss.com/blog/tailwindcss-v3
   */
  theme: {
    screens: {
      sm: '39.9375em',
      // => @media (min-width: 640px) { ... }

      md: '63.9375em',
      // => @media (min-width: 768px) { ... }

      lg: '64em',
      // => @media (min-width: 1024px) { ... }

      xl: '74.9375em',
      // => @media (min-width: 1280px) { ... }
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      /* HEY FUTURE JOSH HERE'S HOW TO USE THIS
       *
       * Default is the normal base color.
       * Plug in the wedding colors, and adjust slightly for the gradient color.
       *
       * Classes are named text-CLASSNAME
       *
       * https://tailwindcss.com/docs/customizing-colors#custom-colors
       * */
      white: {
        DEFAULT: '#eae5df',
      },
      black: {
        DEFAULT: '#333333',
      },
      primary: {
        DEFAULT: '#bd477d',
        alt: '#c20d6b',
      },
      secondary: {
        DEFAULT: '#771639',
        alt: '#b02c5e',
      },
      tertiary: {
        DEFAULT: '#b9a9a7',
        alt: '#f5e0db',
      },
      accent: {
        DEFAULT: '#686aa8',
      },
    },
  },
  plugins: [],
}
