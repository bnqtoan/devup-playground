module.exports = {
    mode: 'jit',
    purge: [
      "**/*.html"
    ],
    darkMode: 'class', // or 'media' or 'class'
    theme: {
      container: {
        center: true
      },
      fontFamily: {
        'body': ["'Poppins', sans-serif"]
      },
      extend: {
        colors: {
          "light" : '#BCD0E5',
          "secondary": '#173A56',
          "primary" : '#02897A',
          "dark" : '#1F2E35',
        }
      },
    },
    variants: {
      extend: {
        backgroundColor: ['dark']
      },
    },
    plugins: [],
  }
  