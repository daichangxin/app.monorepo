const getSizeTokens = () => {
    const sizes = {};
    for (let i = 0; i <= 200; i += 0.5) {
        sizes[i] = `${i / 4}rem`;
    }
    return sizes;
};

const sizeTokens = getSizeTokens();

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{html,js,ts,jsx,tsx}'],
    darkMode: 'class',
    theme: {
        extend: {
            width: {
                ...sizeTokens,
            },
            height: {
                ...sizeTokens,
            },
            gap: {
                ...sizeTokens,
            },
            minWidth: {
                ...sizeTokens,
            },
            maxWidth: {
                ...sizeTokens,
            },
            minHeight: {
                ...sizeTokens,
            },
            maxHeight: {
                ...sizeTokens,
            },
            margin: {
                ...sizeTokens,
            },
            padding: {
                ...sizeTokens,
            },
        },
    },
};
