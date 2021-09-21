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
        maxWidth: {
            'xxs' : "240px"
        },
        fontSize: {
          "h2": ["40px", {lineHeight: 1.5}],
          "h3": ["32px", {lineHeight: 1.5}],
          "h4": ["22px", {lineHeight: 1.5}],
          "h6": ["16px", {lineHeight: 1.5}],
          "p-l": ["18px", {lineHeight: "28px"}]
        },
        backgroundImage: {
            'bg-1': "url(../images/bg/bg-1.svg)",
            'bg-1-dark': "url(../images/bg/bg-1-dark.svg)",
        },
        colors: {
          "light" : '#BCD0E5',
          "secondary": '#173A56',
          "primary" : '#02897A',
          "dark" : {
            "DEFAULT" : '#1F2E35',
            "800": '#22343D'
          },
          "yellow": {
              1000: "#FF9900",
          },
          "red": {
            1000: "#F03E3D",
          }, 
          "blue": {
            1000: "#4D8DFF",
          }, 
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
  