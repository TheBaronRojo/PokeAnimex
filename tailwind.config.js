/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary-black': '#1A232E',
        'secondary-black': '#212B38',
        'purple': '#5051F9',
        'purple-light': '#9494FF',
      }
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}
