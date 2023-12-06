/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      'sm': '500px',
      // => @media (min-width: 640px) { ... }

      'md': '620px',
      // => @media (min-width: 768px) { ... }

      'lg': '930px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1160px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1300px',
      // => @media (min-width: 1536px) { ... }
    }
  },
  plugins: [],
  
}
