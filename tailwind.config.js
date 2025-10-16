/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './_includes/**/*.html',
    './_layouts/**/*.html',
    './_posts/**/*.md',
    './_pubs/**/*.md',
    './_talks/**/*.md',
    './_resources/**/*.md',
    './pages/**/*.{html,md}',
    './index.html',
    './index.md'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1E3A8A',
        accent: '#0EA5E9',
      },
      fontFamily: {
        sans: ['system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
