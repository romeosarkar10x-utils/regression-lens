import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";
import { genJSONSchema } from "./plugins/genJSONSchema.mjs";
import path from "path";

export default defineConfig({
    plugins: [react(), tailwindcss(), genJSONSchema()],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "src"),
            "%": __dirname,
        },
    },
    root: ".",
    base: "./",
});
