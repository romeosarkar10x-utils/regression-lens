import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { setDefaultTheme } from "./themes/index.tsx";
import "./index.css";

import App from "./App.tsx";

setDefaultTheme();
const root = document.getElementById("root");

if (root != null) {
    createRoot(root).render(
        <StrictMode>
            <App />
        </StrictMode>,
    );
}
