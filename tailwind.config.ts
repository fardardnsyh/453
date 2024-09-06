//#region Import
import type { Config } from "tailwindcss"

import FormPlugin from "@tailwindcss/forms"
import TypographyPlugin from "@tailwindcss/typography"
import AnimatePlugin from "tailwindcss-animate"
import TwPresetsPlugin from "tw-presets"
//#endregion

const config: Config = {
	content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
	darkMode: ["class"],
	plugins: [FormPlugin, AnimatePlugin, TypographyPlugin, TwPresetsPlugin],
	theme: {
		container: {
			center: true,
			padding: "2rem",
			screens: {
				"2xl": "1400px",
			},
		},
		extend: {
			animation: {
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
			},
			colors: {
				primary: {
					100: "#5450E2",
					200: "#433EE0",
					300: "#322CDD",
					400: "#2822D3",
					50: "#6661E5",
					500: "#251FC1",
					600: "#211DAF",
					700: "#1E1A9E",
					800: "#1B178C",
					900: "#17147B",
					950: "#141169",
					DEFAULT: "#141169",
				},
			},

			keyframes: {
				"accordion-down": {
					from: { height: "0" },
					to: { height: "var(--radix-accordion-content-height)" },
				},
				"accordion-up": {
					from: { height: "var(--radix-accordion-content-height)" },
					to: { height: "0" },
				},
			},

			screens: {
				xs: "576px",
			},
		},
	},
}

export default config
