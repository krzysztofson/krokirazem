module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'main': ['Poppins', 'sans-serif'],
        'heading': ['Noto Serif', 'sans-serif'],
      },
      colors: {
        'primary': {
          '100': '#faf0e6',
          '200': '#fff0db',
          '300': '#eed9c4',
          '400': '#e4d5b7',
          '500': '#d9b99b',
        },
      },
    },
  },
  variants: {},
  plugins: [],
}
