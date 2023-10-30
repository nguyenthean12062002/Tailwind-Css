/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      spacing: {
        35: "35px",
      },
      colors: {
        gray333: "#333",
        red1: "red",
      },
    },
  },
  plugins: [],
  purge: [
    "./src/**/*.html",
    "./src/**/*.js",
    "./src/App.css",
    // Thêm đường dẫn tới các tệp tin CSS của bạn nếu cần thiết
  ],
};
