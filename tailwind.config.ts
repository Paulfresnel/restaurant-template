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
        primary: {
          DEFAULT: '#8B4513',
          light: '#A0522D',
          dark: '#654321',
        },
        secondary: {
          DEFAULT: '#F4A460',
          light: '#DEB887',
          dark: '#CD853F',
        },
        background: {
          DEFAULT: '#FFFAF0',
          dark: '#2D2D2D',
        },
        text: {
          DEFAULT: '#333333',
          light: '#FFFFFF',
        }
      },
      fontFamily: {
        heading: ['Playfair Display', 'serif'],
        body: ['Lato', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
