import "./light.scss";
import "./dark.scss";

interface iTheme {
    id: string;
    label: string;
}

export const themes = [
    { id: "light", label: "Light" },
    { id: "dark", label: "Dark" },
] as const satisfies iTheme[];

export function setDefaultTheme() {
    document.documentElement.setAttribute("data-theme", themes[0].id);
}

export function setTheme(themeID: (typeof themes)[number]["id"]) {
    document.documentElement.setAttribute("data-theme", themeID);
}
