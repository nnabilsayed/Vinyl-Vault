module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        white: "#ffffff", // Customizing white background
        // Add more custom background colors if needed
      },
    },
  },
  plugins: [
    require("daisyui"),
    // Add other Tailwind plugins if used
  ],
};
