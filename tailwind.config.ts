import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens : {
     'xsm' : '470px'
        

      },

      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontSize: {
        '7xl': '76px',
        'xl': '20px',
        '2xl': '36px'
      },
      fontFamily: {
        affection: ['Affectionately Yours', 'sans-serif'],
        sans: ["DM Sans", "sans-serif"]
      },

    },
  },
  plugins: [],
} satisfies Config;
