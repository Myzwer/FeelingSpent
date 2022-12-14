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
        DEFAULT: '#E8E4D8',
      },
      black: {
        DEFAULT: '#333333',
      },
      orange: {
        DEFAULT: '#DA895B',
      },
      yellow: {
        DEFAULT: '#EEBC35',
      },
      red: {
        DEFAULT: '#D96058',
      },
      green: {
        DEFAULT: '#657C13',
      },
    },
  },
  plugins: [],
}
