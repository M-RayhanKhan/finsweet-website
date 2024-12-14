import daisyui from 'daisyui'
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      textColor: {
        title: "#1d2130",
        description: '#1d2130',
        btnColor: "#ffffff"
      },
      backgroundColor: {
        BtnBg: '#1d2130'
      }
    },
  },
  plugins: [daisyui],
}

