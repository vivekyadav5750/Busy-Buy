/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  // content: ["*"],
  theme: {
    extend: {
      colors: {
        customPurple: '#551a8b',
        customBlue : '#224957',
        shadowWhite: '#f4f6f8',
        darkPurple: '#7064e5',
        lightPurple: "#f0f0fc",
      },
    },
  },
  plugins: [],
}

