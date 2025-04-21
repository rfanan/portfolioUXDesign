/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    screens: {
      sm: "576px",
      md: "768px",
      lg: "1024px",
      xl: "1512px",
    },
    container: {
      center: true,
      padding: "20px",
    },
    extend: {
      utilities: {
        'writing-vertical-lr': {
          writingMode: 'vertical-lr',
        },
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        PrimaryBlack: "#1e1e1e",
        WhitePrimary: "#E3FDFD",
      },
      textColor: {
        textPrimary: "#1E201E",
        whitePrimary: "#E3FDFD",
      },
      gridTemplateColumns: {
        24: "repeat(24, minmax(0, 1fr))",
      },
      gridColumn: {
        "span-13": "span 13 / span 13",
        "span-14": "span 14 / span 14",
        "span-15": "span 15 / span 15",
        "span-16": "span 16 / span 16",
        "span-17": "span 17 / span 17",
        "span-18": "span 18 / span 18",
        "span-19": "span 19 / span 19",
        "span-20": "span 20 / span 20",
        "span-21": "span 21 / span 21",
        "span-22": "span 22 / span 22",
        "span-23": "span 23 / span 23",
        "span-24": "span 24 / span 24",
      },
    },
  },
  plugins: [require("tailwind-corner-smoothing")],
};
