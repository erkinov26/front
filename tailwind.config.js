// tailwind.config.js

module.exports = {
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 4s linear infinite',
        'bounce-slow': 'bounce 2s infinite',
      },
      fontFamily: {
        poppins: ['var(--font-poppins)'],
        bebas: ['var(--font-bebas)'],
      },
    },
  },
  plugins: [],
}
