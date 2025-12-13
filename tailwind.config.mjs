/**
 * @type {import("tailwindcss").Config}
 */

import tailwindAnimatePlugin from "tailwindcss-animate";

const config = {
    content: ["src/**/*.{ts,tsx}"],

    theme: {
        extend: {},
    },
    plugins: [tailwindAnimatePlugin],
};

export default config;
