/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        bg: "var(--bg)", ink: "var(--ink)", mute: "var(--mute)", line: "var(--line)",
        acc: "var(--acc)", card: "var(--card)", bad: "var(--bad)", good: "var(--good)", soft: "var(--soft)",
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
