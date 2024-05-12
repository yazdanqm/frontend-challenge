/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                purple: "#845dda",
                lowPurple: "#f8f5fe",
                lowGray: "#eceaeb",
                description: "#b1b6c1",
                title: "#121421",
                border: "#eaeff2",
            },
            fontSize: {
                s24: "24px",
                s24sm: "22px",
                s18 : "18px",
                s18sm : "18px",
                s16 : "16px",
                s16sm : "14px",
                s12 : "12px",
                s12sm : "10px",
            },
            fontWeight: {
                ultralight: '100',
                light: '200',
                regular: '300',
                medium: '400',
                semibold: '500',
                bold: '600',
                extraBold: '700',
                black: '800',
                heavy: '900',
            },
        },
    },
    plugins: [],
}

