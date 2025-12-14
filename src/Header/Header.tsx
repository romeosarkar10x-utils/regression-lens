import "./index.scss";
import logo from "@/assets/logo.svg";
import { Menu, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import ThemeSelect from "./ThemeSelect";
import { cn } from "@/lib/utils";

import { repo } from "%/package.json";
const githubURL = repo.url;

interface HeaderProps {
    onSidebarToggle?: () => void;
}

export default function Header({ onSidebarToggle }: HeaderProps) {
    return (
        <header
            className={cn(
                "text-left text-[2rem]",
                "fixed top-0 z-50 h-13 w-full",
                "border-b border-border",
                "bg-background/95 backdrop-blur-sm",
                "flex items-center justify-between px-4",
            )}
        >
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

                <img className="logo h-10" src={logo} />
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
                        href={githubURL}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub repository"
                    >
                        <Github className="h-5 w-5" />
                    </a>
                </Button>

                <ThemeSelect />
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

// <div className=""></div>
//</div>
