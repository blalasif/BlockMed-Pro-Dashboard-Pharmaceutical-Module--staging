/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["var(--inter)"],
      },
      colors: {
        white: "#ffffff",
        black: "#141414",
        blue: "#007EE0",
        red: "#C9311A",
        purple: "#AD00FF",
        "disabled-gray": "#D1D1D1",
        "dark-purple": "#7649f2",
        "off-white": "#f8f9fa",
        "dull-white": "#FAFAFA",
        "light-off-white": "#F3F3F3",
        "light-gray": "#ededed",
        "dark-gray": "#969696",
        "dark-blue": "#0d2a52",
        "light-blue": "#EDF9FF",
      },
      backgroundImage: {
        'light-blue-gradient': 'linear-gradient(165deg, #AD00FF 0%, #007EE0 40%)',
        'dark-blue-gradient': 'linear-gradient(150deg, #600faf 0%, #0061ac 80%)',
      },
      fontSize: {
        h1: ["var(--h1)"],
        h2: ["var(--h2)"],
        h3: ["var(--h3)"],
        h4: ["var(--h4)"],
        h5: ["var(--h5)"],
        h6: ["var(--h6)"],
        xl: ["var(--xl)"],
        lg: ["var(--lg)"],
        md: ["var(--md)"],
        sm: ["var(--sm)"],
      },
    },
  },
  plugins: [],
};
