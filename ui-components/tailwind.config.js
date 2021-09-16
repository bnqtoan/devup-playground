module.exports = {
    mode: 'jit',
    purge: [
      "**/*.html"
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
      container: {
        center: true
      },
      extend: {
          colors: {
            'theme-gray': '#E6E6E6',
            primary: {
              DEFAULT: '#0321CC'
            },
            secondary: {
              DEFAULT: '#FFCF06'
            },
          },
          borderRadius: {
            3: '3px'
          }
      },
    },
    variants: {
      extend: {},
    },
    plugins: [],
  }
  