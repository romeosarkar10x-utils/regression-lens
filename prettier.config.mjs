/**
 * @see https://prettier.io/docs/configuration
 * @type { import("prettier").Config & import("prettier-plugin-tailwindcss").PluginOptions }
 */

const config = {
    trailingComma: "all",
    tabWidth: 4,
    printWidth: 80,
    plugins: ["prettier-plugin-tailwindcss"],
    tailwindStylesheet: "src/index.css",
};

export default config;
