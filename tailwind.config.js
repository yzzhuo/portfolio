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
      sans: ['-apple-system', 'BlinkMacSystemFont', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
      serif: ['-apple-system-ui-serif', 'ui-serif', 'Georgia', 'serif'],
      mono: ['ui-monospace', 'SFMono-Regular', 'ui-monospace', 'Monaco', 'Andale Mono', 'Ubuntu Mono', 'monospace']
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

