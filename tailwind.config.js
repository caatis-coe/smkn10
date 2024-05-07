import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
    ],

    theme: {
        extend: {
            colors : {
                white : "#F0EFEF",
                grey : "#CDCDCD",
                lightgrey : "#EAEAEA",
                black : "#2C2C2C",
                primary : "#010038",
                secondary : "#293A80",
                tertiary : "#537EC5",
                lighttertiary : "#7E9FD4",
                //red : "#C55353",
                lightred : "#E67C7C",
                // green : "#71C553",
                lightgreen : "#99DC82",
            },
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
            },
        },
    },

    plugins: [forms],
};
