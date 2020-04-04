module.exports = {
  theme: {
    screens: {
      'sm': '320px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
    container:{
      center: true,
      padding: '15px'
    },
    extend: {
      
      colors: {
        main:{
          dark: '#373833',
          light: '#E8EAE3',
          red: '#FA2742'
        },
        indigo: {
          lighter: '#b3bcf5',
          default: '#5c6ac4',
          dark: '#202e78',
        }
      }
    }
  },
  variants: {},
  plugins: []
}
