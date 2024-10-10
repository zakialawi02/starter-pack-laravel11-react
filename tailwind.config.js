import forms from "@tailwindcss/forms";
import typography from "@tailwindcss/typography";
import aspectRatio from "@tailwindcss/aspect-ratio";
import containerQueries from "@tailwindcss/container-queries";

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.jsx",
        "./resources/js/**/*.js",
    ],

    theme: {
        screens: {
            sm: "640px",
            md: "768px",
            lg: "1024px",
            xl: "1280px",
            "2xl": "1440px",
            "3xl": "1600px",
        },
        extend: {
            container: {
                center: true,
                padding: "2rem",
            },

            width: {
                "1/4-custom": "calc(100% / 4.1)",
                "1/3-custom": "calc(100% / 3.1)",
            },

            fontFamily: {
                Poppins: ["Poppins", "sans-serif"],
                Lato: ["Lato", "sans-serif"],
                Montserrat: ["Montserrat", "sans-serif"],
            },

            colors: {
                backend: {
                    primary: "#5664d2",
                    secondary: "#4aa3ff",
                    accent: "#2E5E93",
                    neutral: "#F1F1F1",
                    "base-100": "#FAFBFF",
                    info: "#4aa3ff",
                    success: "#1cbb8c",
                    warning: "#fcb92c",
                    error: "#ff3d60",
                    light: "#eff2f7",
                    dark: "#192134",
                    muted: "#393D3F",
                },
                frontend: {
                    primary: "#2e62af",
                    secondary: "#162f55",
                    accent: "#ca8a04",
                    neutral: "#ded9da",
                    "base-100": "#f2f2f2",
                    info: "#aea679",
                    success: "#31A640",
                    warning: "#EDAE49",
                    error: "#D1495B",
                    light: "#fafbfc",
                    dark: "#02132B",
                    muted: "#767676",
                },
            },

            keyframes: {
                scaleUp: {
                    "0%": { transform: "scale(0.5)" },
                    "100%": { transform: "scale(1)" },
                },
                slaceDown: {
                    "0%": { transform: "scale(1)" },
                    "100%": { transform: "scale(0.5)" },
                },
                floatingImg: {
                    "0%, 100%": { transform: "translateY(0rem)" },
                    "50%": { transform: "translateY(-1.1rem)" },
                },
                bounceHero: {
                    "0%, 100%": { transform: "translateY(0rem)" },
                    "50%": { transform: "translateY(-1.2rem)" },
                },
            },
            animation: {
                scaleUp: "scaleUp 0.2s ease forwards",
                scaleDown: "scaleDown 0.2s ease forwards",
                floatingImg: "floatingImg 5s linear infinite",
                bounceHero4s: "bounceHero 4s linear infinite",
                bounceHero6s: "bounceHero 6s linear infinite",
                bounceHero8s: "bounceHero 8s linear infinite",
                skeleton: "pulse 1.0s cubic-bezier(0.4, 0, 0.6, 1) infinite",
            },
        },
    },

    plugins: [forms, typography, aspectRatio, containerQueries],
};
