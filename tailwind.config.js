/** @type {import('tailwindcss').Config} */
module.exports = {
   prefix: 'tw-',               // Add a prefix to avoid collisions with existing CSS
  corePlugins: {
    preflight: false,          // Disable Tailwind’s CSS reset to preserve your legacy styles
  },
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Scan all React components for Tailwind classes
  ],
  theme: {
    extend: {},                // Keep default theme; extend if needed
  },
  plugins: [],                 // Add plugins later if needed
}

