/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.{html,js,css}", "./src/*.{html,js,css}"],
  theme: {
    screens: {
      'sm': '576px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1440px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      spacing: {
        '17': '68px',
      },
      screens: { 
        '3xl': '1600px',
        // => @media (min-width: 1536px) { ... }
      },
      colors: {
        primary:"#003ECB",
        success:"#2FCD82",
        warning:"#FAB426",
      },
      fontFamily: {
        "open-sans": ["Open Sans", "sans-serif"],
        "inter": ["Inter", "sans-serif"],
        "poppins": ["Poppins", "sans-serif"],
      },
      fontSize: {
        '4.5xl': ['2.661rem', {
          lineHeight: '2.661rem',
          letterSpacing: '-0.01em',
          fontWeight: '600',
        }],
      }
    },
  },
  plugins: [],
};