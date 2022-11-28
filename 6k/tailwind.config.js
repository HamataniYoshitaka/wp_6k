/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        ".text-blur": {
          textShadow: "0px 0px 25px rgba(0,0,0,0.8)"
        },
      };

      addUtilities(newUtilities);
    }
  ],
}
