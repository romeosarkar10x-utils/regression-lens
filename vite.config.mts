import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
    plugins: [react(), tailwindcss()],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "src"),
            "%": __dirname,
        },
    },
    root: ".",
    base: "./",
    /*
    "css": {
        "preprocessorOptions": {
            "sass"
        }
    }
        */
    /*
    build: {
        rollupOptions: {
            input: {
                index: "src/index.html",
            },
        },
    },
    */
});

// console.log(__dirname);
