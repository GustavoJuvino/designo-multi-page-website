/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        "peach": "#E7816B",
        "light-peach": "#FFAD9B",
        "black": "#1D1C1E",
        "dark-grey": "#333136",
        "light-grey": "#F1F3F5"
      },
      fontSize: {
        base: ["1rem", {
          lineHeight: "1.625rem",
          lineHeight: "14px",
          letterSpacing: "2px",
        }],
        xl: ["1.25rem", {
          lineHeight: "1.625rem",
          letterSpacing: "5px",
          fontWeight: "500"
        }],
        "4xl": ["2.5rem", {
          lineHeight: "3rem",
          letterSpacing: "2px",
          fontWeight: "500"
        }],
        "5xl": ["3rem", {
          lineHeight: "3rem",
          fontWeight: "500"
        }]
      }
    },
  },
  plugins: [],
}
 