import "./index.scss";
import logo from "@/assets/logo.svg";

/*
export default function Header() {
    return (
        <header className="component_header">
            <h1>Regression lens</h1>
        </header>
    );
}
    */

// import { useState, useEffect } from "react";
import { Menu, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import ThemeSelect from "./ThemeSelect";

interface HeaderProps {
    onSidebarToggle?: () => void;
}

export default function Header({ onSidebarToggle }: HeaderProps) {
    // const [isDark, setIsDark] = useState(false);

    /*
    useEffect(() => {
        (async function () {
            const isDarkMode =
                document.documentElement.classList.contains("dark");
            setIsDark(isDarkMode);
        })();
    }, []);

    */

    return (
        <header className="component_header">
            <div className="flex h-14 items-center justify-between px-4">
                {/* Left section - Sidebar toggle and title */}
                <div className="flex items-center gap-3">
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={onSidebarToggle}
                        className="shrink-0"
                        aria-label="Toggle sidebar"
                    >
                        <Menu className="h-5 w-5" />
                    </Button>

                    <img className="logo" src={logo} />
                    <h1 className="text-xl font-semibold tracking-tight text-foreground">
                        Regression lens
                    </h1>
                </div>

                {/* Right section - GitHub and dark mode toggle */}
                <div className="flex items-center gap-1">
                    <Button
                        variant="ghost"
                        size="icon"
                        asChild
                        className="shrink-0"
                    >
                        <a
                            href="https://github.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="GitHub repository"
                        >
                            <Github className="h-5 w-5" />
                        </a>
                    </Button>

                    <ThemeSelect />
                </div>
            </div>
        </header>
    );
}

/*
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={toggleDarkMode}
                        className="shrink-0"
                        aria-label="Toggle dark mode"
                    >
                        {isDark ? (
                            <Sun className="h-5 w-5" />
                        ) : (
                            <Moon className="h-5 w-5" />
                        )}
                    </Button>
                    */
