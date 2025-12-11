import "./index.scss";

import { FileText, BookOpen, Sparkles, Users, HelpCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface SidebarProps {
    isOpen: boolean;
}

const tableOfContents = [
    { id: "welcome", title: "Welcome to Regression Lens", icon: BookOpen },
    { id: "getting-started", title: "Getting Started", icon: FileText },
    {
        id: "understanding",
        title: "Understanding Regression Analysis",
        icon: FileText,
    },
    { id: "advanced", title: "Advanced Features", icon: Sparkles },
    { id: "best-practices", title: "Best Practices", icon: FileText },
    { id: "community", title: "Community and Support", icon: Users },
];

export default function Sidebar({ isOpen }: SidebarProps) {
    const handleScrollTo = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    return (
        <aside
            className={cn(
                "fixed top-14 left-0 h-[calc(100vh-3.5rem)] w-64 border-r border-border bg-background transition-transform duration-200 ease-in-out",
                isOpen ? "translate-x-0" : "-translate-x-full",
            )}
        >
            <div className="flex h-full flex-col">
                {/* Table of Contents header */}
                <div className="border-b border-border px-4 py-3">
                    <h2 className="text-sm font-semibold text-foreground">
                        Table of Contents
                    </h2>
                </div>

                {/* Navigation links */}
                <nav className="flex-1 overflow-y-auto p-3">
                    <ul className="space-y-1">
                        {tableOfContents.map((item) => (
                            <li key={item.id}>
                                <button
                                    onClick={() => handleScrollTo(item.id)}
                                    className="flex w-full items-center gap-3 rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                                >
                                    <item.icon className="h-4 w-4 shrink-0" />
                                    <span className="truncate text-left">
                                        {item.title}
                                    </span>
                                </button>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Footer */}
                <div className="border-t border-border p-4">
                    <button className="flex w-full items-center gap-3 rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground">
                        <HelpCircle className="h-4 w-4 shrink-0" />
                        <span>Help & Documentation</span>
                    </button>
                </div>
            </div>
        </aside>
    );
}
