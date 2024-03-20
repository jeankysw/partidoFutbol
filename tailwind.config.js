/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/formulario/formulario.component.{html,ts,css}"
  ],
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/dasborad'),],
}

