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
        boxShadow: {
          "pricing": '0px 2px 8px rgba(0, 0, 0, 0.25)'
        },
        borderWidth: {
          "3": "3px"
        },
        maxWidth: {
            'xxs' : "240px"
        },
        fontSize: {
          "h2": ["40px", {lineHeight: 1.5}],
          "h3": ["32px", {lineHeight: 1.5}],
          "h4-small": ["20px", {lineHeight: 1.5}],
          "h4": ["22px", {lineHeight: 1.5}],
          "h4-large": ["24px", {lineHeight: '40px'}],
          "h6": ["16px", {lineHeight: 1.5}],
          "p-l": ["18px", {lineHeight: "28px"}],
          "p-m": ["16px", {lineHeight: "28px"}],
        },
        backgroundPosition:{
          'center-top' : 'center top'
        },
        backgroundImage: {
            'bg-1': "url(../images/bg/bg-1.svg)",
            'bg-1-dark': "url(../images/bg/bg-1-dark.svg)",
            'bg-2': "url(../images/bg/bg-2.svg)",
            'bg-2-dark': "url(../images/bg/bg-2-dark.svg)",
            'star-full': "url(../images/icons/star-full.svg)",
            'star-empty': "url(../images/icons/star-empty.svg)",
        },
        colors: {
          "second-text": "#AFAFAF",
          "light" : '#BCD0E5',
          "secondary": '#173A56',
          "primary" : '#02897A',
          "gray": {
              "1000" : "#DEDEDE",
              "1001" : "#EFEFEF",
              "1002" : "#737373",
          },
          "dark" : {
            "DEFAULT" : '#1F2E35',
            "800": '#22343D',
            "900": '#2F281E'
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
  