/** @type {import('tailwindcss').Config} */
export default {
 content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],  theme: {
    extend: {
      colors: {
        orange: "#ec6707",
        "off-white": "#f5f5f5",
        "gray-white": "#dedede",
        gray: "#646464",
        "light-gray": "#4A4A4A",
        "netural": "#191919"
      }
      ,
      fontSize: {
        "3xl":"32px"
      }
      , borderRadius: { 32: "32px", 24: "24px", 12: "12px" },
      lineHeight: {
        110:"110%",
        120:"120%",
        130:"130%",
        140:"140%",
        150:"150%",
        160:"160%",
      }
      
    },
  },
  plugins: [],
}

