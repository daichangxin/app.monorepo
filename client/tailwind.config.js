/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{html,js,ts,jsx,tsx}'],
    darkMode: 'class',
    corePlugins: {
        preflight: false,
    },
    theme: {
        extend: {},
    },
    plugins: [require('@tailwindcss/line-clamp')],
};
