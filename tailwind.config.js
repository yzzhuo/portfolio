/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        sm: '16px'
      },
    },
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1013px',
    },
    fontFamily: {
      sans: ['New York Medium', 'Graphik', 'sans-serif'],
      serif: ['New York', 'serif'],
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

