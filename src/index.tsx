import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";
import { setDefaultTheme } from "./themes/index.tsx";

import App from "./App.tsx";

const root = document.getElementById("root");

if (root != null) {
    setDefaultTheme();

    createRoot(root).render(
        <StrictMode>
            <App />
        </StrictMode>,
    );
}
