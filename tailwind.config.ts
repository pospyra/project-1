// tailwind.config.ts

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx,css}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx,css}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx,css}",
    "./src/ui/**/*.{js,ts,jsx,tsx,mdx,css}",
  ],
  theme: {
    extend: {
      colors: {
        black: "#27272A",
        greydark: "#696969",
        greysilver: "#E5E7EB",
        white: "#FCFBFA",
        lavender: "#7E3AF2",
        red: "#E02424",
      },
      spacing: {
        '85px': '85px',
      },
      backgroundImage: {
        gradient: "url('../assets/images/background.png')",
        "eclipsegradient": "url('../assets/images/ellipse-background.png')",
        "getInTouchBg": "url('../assets/images/GetInTouchBackground.png')",

        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};

export default config;
