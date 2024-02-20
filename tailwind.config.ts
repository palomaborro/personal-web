import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "blue-violet": {
          "50": "#eff2fe",
          "100": "#e3e6fc",
          "200": "#ccd1f9",
          "300": "#acb2f5",
          "400": "#8c8bee",
          "500": "#796fe5",
          "600": "#6550d7",
          "700": "#5944be",
          "800": "#483a99",
          "900": "#3e357a",
          "950": "#261f47",
        },
      },
      screens: {
        xl: "1400px",
      },
    },
  },
  plugins: [],
};

//#6550d7
export default config;
