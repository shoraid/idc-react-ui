import type { Config } from "tailwindcss"
import forms from "@tailwindcss/forms"

const config: Config = {
  darkMode: "selector",
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
    },
  },
  plugins: [forms],
}

export default config;