import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontSize: {
        '7xl': '76px',
        'xl': '20px'
      },
      fontFamily: {
        affection: ['Affectionately Yours', 'sans-serif'],
      },
      backgroundImage:{
        'gradient': `linear-gradient(0deg, rgba(255, 255, 255, 0.44) 0%, rgba(255, 255, 255, 0.44) 100%),
        radial-gradient(96.33% 55.41% at 612.38% 99.08%, rgba(249, 108, 136, 0.20) 0%, rgba(254, 254, 254, 0.20) 100%),
        radial-gradient(68.91% 63.13% at 137.29% -16.95%, rgba(253, 213, 76, 0.20) 0%, rgba(251, 216, 97, 0.20) 13%, rgba(249, 221, 126, 0.20) 31%, rgba(247, 225, 147, 0.20) 43%, rgba(240, 240, 240, 0.20) 100%),
        radial-gradient(121.33% 121.31% at -291.08% 47.45%, rgba(64, 134, 244, 0.20) 0%, rgba(242, 242, 242, 0.20) 100%)`
      }

    },
  },
  plugins: [],
} satisfies Config;
