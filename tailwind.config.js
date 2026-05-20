module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {},
    fontSize: {
      xs: '0.875rem', // 14px (era 12px)
      sm: '1rem',     // 16px (era 14px)
      base: '1.125rem', // 18px (era 16px)
      lg: '1.25rem',  // 20px (era 18px)
      xl: '1.5rem',   // 24px (era 20px)
      '2xl': '1.875rem', // 30px (era 24px)
      '3xl': '2.25rem', // 36px (era 30px)
      '4xl': '3rem',  // 48px (era 36px)
      '5xl': '3.75rem', // 60px (era 48px)
      '6xl': '4.5rem', // 72px (era 60px)
      '7xl': '6rem',  // 96px (era 72px)
      '8xl': '8rem',  // 128px (era 96px)
      '9xl': '9rem',  // 144px (era 128px)
    },
  },
  plugins: [],
};
