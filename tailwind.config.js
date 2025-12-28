/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: "tw-", // Add a prefix to avoid collisions with existing CSS
  important: true,
  corePlugins: {
    preflight: false, // Disable Tailwind’s CSS reset to preserve your legacy styles
  },
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Scan all React components for Tailwind classes
  ],
  theme: {
    screens: {
      'tw-max-xs': { max: '479px'},
      'tw-max-sm': { max: '639px'},
      'tw-max-md': { max: '768px'},
    }, // Change default to max-width or range-based queries
    extend: {}, // Keep default theme; extend if needed
  },
  plugins: [], // Add plugins later if needed
};
