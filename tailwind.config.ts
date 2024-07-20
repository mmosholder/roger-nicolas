/** @type {import('tailwindcss').Config} */
import { fontFamily, spacing, gridTemplateColumns, gridTemplateRows } from './tailwind.config.json'

module.exports = {
  content: ['storyblok/**/*.{vue,js}', 'components/**/*.{vue,js}', 'pages/**/*.vue', 'layouts/**/*.vue'],
  theme: {
    fontFamily,
    spacing,
    gridTemplateColumns,
    gridTemplateRows
  }
}
