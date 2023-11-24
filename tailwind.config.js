/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{html,js,svelte,ts}'],
    darkMode: ['class', "[class~='dark']"],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#52a6de',
                    dark: '#3d8abd',
                    light: '#7fbce8',
                },
                darkMode: {
                    DEFAULT: '#2a2a2a',
                    dark: '#1f1f1f',
                    light: '#343434',
                },
                darkmode_elevated: {
                    DEFAULT: '#3a3a3a',
                    dark: '#2f2f2f',
                    light: '#454545',
                },
                lightmode: {
                    DEFAULT: '#f5f5f5',
                    dark: '#e0e0e0',
                    light: '#ffffff',
                },
                lightmode_elevated: {
                    DEFAULT: '#eaeaea',
                    dark: '#d5d5d5',
                    light: '#f0f0f0'
                },
            },
        },
    },
    plugins: [],
}

