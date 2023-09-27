/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.{html,js,css}"],
  theme: {
    extend: {
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