/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.tsx'],
    theme: {
        extend: {
            backgroundImage: {
                mainDesktop: 'url(./src/assets/bg-main-desktop.png)',
                mainMobile: 'url(./src/assets/bg-main-mobile.png)'
            }
        }
    },
    plugins: []
};
