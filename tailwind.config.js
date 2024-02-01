/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'Nude':'#BCA88E',
        'Misty':'#E3E8E9',
        'Sage':'#9DA993',
        'Rosewater':'#E4B4B4',
        'Cream':'#F9F1F0',
        'Rose-Quartz':'#FADCD9',
        'Font':'#64804d',
      },
      keyframes: {
        shake: {
          '0%, 100%': { transform: 'translateX(0)' },
          '10%, 30%, 50%, 70%, 90%': { transform: 'translateX(-10px)' },
          '20%, 40%, 60%, 80%': { transform: 'translateX(10px)' },
        },
      },
      animation: {
        shake: 'shake 5s cubic-bezier(.36,.07,.19,.97) infinite',
      },
    },
  },
  plugins: [],
}
