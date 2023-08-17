/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html", 
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#025464",
        bgColor: "#F8F1F1",
      },
    },
  },
  plugins: [],
}

