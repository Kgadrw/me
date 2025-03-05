    /** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customColor: "#EB8921",
        cardcolor: "#1B5A8B",
        HeaderColor: "#1b5a8b",
        light: '#ff7961',
        main: '#f44336',
        dark: '#ba000d',
        contrastText: '#000',
        categorycard: '#45a99b',
        darkblue: '#00008B',
      },
 
      fontFamily: {
        custom: ['Stratum', 'Barlow', 'Helvetica', 'Arial', 'sans-serif'],
      },
    },
    fontFamily: {
      body: ["Poppins", "CustomFont"],
      custom: ['Stratum', 'Barlow', 'Helvetica', 'Arial', 'sans-serif'], 
    },
  },
  
  darkMode: 'class', 
  variants: {},
  plugins: [],
};
