import { nextui } from "@nextui-org/react";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/components/(button|ripple|spinner).js"
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)",
        primary75: "var(--color-primary-75)",
        primary50: "var(--color-primary-50)",
        primary25: "var(--color-primary-25)",
        primary10: "var(--color-primary-10)",
        accent: "var(--color-accent)",
        table: "var(--color-table)",
        information: "var(--color-information)",
        success: "var(--color-success)",
        dangerous: "var(--color-dangerous)",
        attention: "var(--color-attention)",
        warning: "var(--color-warning)",
        warning25: "var(--color-warning-25)",
        white: "var(--color-white)",
        black: "var(--color-black)",
        subtitle: "var(--color-subtitle)",
        mute: "var(--color-mute)",
        middle: "var(--color-middle)",
        "mono-alternate": "var(--color-mono-alternate)",
        "mono-primary": "var(--color-mono-primary)",
        secondary: "var(--color-secondary)",
        alternate: "var(--color-alternate)",
      },
      backgroundImage: {
        home: "url('/images/home-background.svg')",
        game: "url('/images/game-background.svg')",
      },
      boxShadow: {
        number: "inset 0px 0px 10px 0px rgba(0, 0, 0, 0.60)",
        button:
          "inset -10px -10px 6px 0px rgba(0, 0, 0, 0.10), 0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
      },
      container: {
        screens: {
          xl: "1920px", // full width at screen width 1440px
        },
      },
      padding: {
        containerDesktop: "160px",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
export default config;
