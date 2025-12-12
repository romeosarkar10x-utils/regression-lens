/**
 * @type {import("tailwindcss").Config}
 */

import tailwindAnimatePlugin from "tailwindcss-animate";

const config = {
    content: ["src/**/*.{ts,tsx}", "./index.html"],

    theme: {
        extend: {},
    },
    plugins: [tailwindAnimatePlugin],
};

export default config;
