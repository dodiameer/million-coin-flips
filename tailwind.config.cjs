const forms = require("@tailwindcss/forms");

const config = {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    extend: {},
    container: {
      center: true,
      padding: "2rem",
    },
  },

  plugins: [forms],
};

module.exports = config;
