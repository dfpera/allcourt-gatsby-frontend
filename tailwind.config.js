module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // 'transparent': 'transparent',
        'gray-light': '#f7f7f7',
        'gray': '#b3b3b3',
        'sandalwood': '#535050',
        'onyx': '#000',
        'papaya': '#f15a24',
        'tangerine': '#f7931e',
        'kumquat': '#fbb03b',

        'primary': '#f15a24',
        'secondary': '#f7931e',
        'bg': '#FFFBF5',
      },
    },
    fontFamily: {
      // need to escape the space in font names
      // 'mono': ['"JetBrains Mono"', 'monospace']
    },
  },
  plugins: [],
}
