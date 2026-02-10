/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./components/**/*.{js,ts,jsx,tsx}",
        "./*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'safety-orange': '#ff5e00',
                'safety-orange-hover': '#e65500',
            },
            animation: {
                'pulse-fast': 'pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
            }
        },
    },
    plugins: [],
}
