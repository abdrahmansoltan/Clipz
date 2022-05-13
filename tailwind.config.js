module.exports = {
  content: ["./src/**/*.{html,ts}", "./projects/**/*.{html,ts}"],
  theme: {
    extend: {
      // changing button's styles when disabled
      opacity: ['disabled'],
      backgroundColor:['disabled']
    },
  },
  plugins: [],
};
