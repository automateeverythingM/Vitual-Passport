module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true,
    },
    extend: {},
  },
  variants: {
    extend: {
      boxShadow: ["active"],
      textColor: ["active"],
    },
  },
  plugins: [],
  // corePlugins: {
  //   preflight: false,
  // },
};
