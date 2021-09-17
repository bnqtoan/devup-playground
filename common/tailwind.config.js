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
      extend: {},
    },
    variants: {
      extend: {},
    },
    plugins: [
      require('@tailwindcss/line-clamp')
    ],
  }
  