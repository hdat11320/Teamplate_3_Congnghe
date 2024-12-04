import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: '1rem',
        screens: {
          sm: "100%", // Full width for small screens
          md: "100%", // Full width for medium screens
          lg: "1024px", // Fixed width for large screens
          xl: "1380px", // Fixed width for extra-large screens
        },
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        customDarkBlue: "#262051",
      },
    },
  },
  plugins: [],
};

export default config;

