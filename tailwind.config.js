/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'ocean-blue': '#0A3D62',
        'mangrove-green': '#1E8449',
        'golden-sunset': '#F39C12',
        'night-sea': '#1A1A2E',
      },
      fontFamily: {
        'playfair': ['"Playfair Display"', 'serif'],
        'inter': ['Inter', 'sans-serif'],
        'cormorant': ['"Cormorant Garamond"', 'serif'],
      },
    },
  },
  plugins: [],
}