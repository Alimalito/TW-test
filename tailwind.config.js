module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
      screens:{
        sm:'320px',
        md:'768px',
        lg:'960px',
        xl:'1440px',
        xxl:'1920px',
      },  
      extend: {
        colors:{
            primary: 'hsl(237,100%,100%)',
            secondary: 'hsl(170,100%,40%)',
        },
      },
    },
    plugins: [],
  }