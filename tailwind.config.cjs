/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                BrightBlue: 'hsl(220, 98%, 61%)',
                CheckBgFrom: 'hsl(192, 100%, 67%)',
                CheckBgTo: 'hsl(280, 87%, 65%)',
                // Light Mode
                VeryLightGray: 'hsl(0, 0%, 98%)',
                VeryLightGrayishBlue: 'hsl(236, 33%, 92%)',
                LightGrayishBlue: 'hsl(233, 11%, 84%)',
                DarkGrayishBlue: 'hsl(236, 9%, 61%)',
                VeryDarkGrayishBlue: 'hsl(235, 19%, 35%)',
                // Dark Mode
                VeryDarkBlue: 'hsl(235, 21%, 11%)',
                VeryDarkDesaturatedBlue: 'hsl(235, 24%, 19%)',
                LightGrayishBlue: 'hsl(234, 39%, 85%)',
                LightGrayishBlueHover: 'hsl(236, 33%, 92%)',
                DarkGrayishBlue: 'hsl(234, 11%, 52%)',
                VeryDarkGrayishBlue: 'hsl(233, 14%, 35%)',
                VeryDarkGrayishBlue: 'hsl(237, 14%, 26%)',
            },
            fontSize: {
                body: '18px',
            },
            fontFamily: {
                josefin: ['Josefin Sans', 'sans-serif'],
            },
        },
    },
    darkMode: 'class',
    plugins: [],
}
