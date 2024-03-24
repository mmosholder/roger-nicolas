/** @type {import('tailwindcss').Config} */
import { fontFamily, spacing } from './tailwind.config.json'

module.exports = {
  content: ['storyblok/**/*.{vue,js}', 'components/**/*.{vue,js}', 'pages/**/*.vue'],
  theme: {
    
    fontFamily,
    spacing
  }
}
