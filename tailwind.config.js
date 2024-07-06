/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    fontFamily: {
      other: ['Playwrite ES Deco', 'cursive'],
    },
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')],
};
