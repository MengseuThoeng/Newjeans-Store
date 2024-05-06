import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "node_modules/flowbite-react/lib/esm/**/*.js"
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))"
      },
      fontFamily: {
        Staatliches: "Staatliches, sans-serif"
      },
      screens: {
        lg: { max: "1030px" },
        mds: { max: "830px" },
        sms: { max: "680px" },
        sml: { max: "430px" },
        xll: { max: "1280px" }
      }
    }
  },
  plugins: [require("flowbite/plugin")]
};
export default config;
