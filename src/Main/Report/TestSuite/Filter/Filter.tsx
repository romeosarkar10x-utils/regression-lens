import type { MouseEventHandler } from "react";

type tFilter = "all" | "passed" | "failed";

/*
export function FilterGroup({
    filter,
    onFilterChange,
}: {
    filter: tFilter;
    onFilterChange: (filter: tFilter) => void;
}) {
    const totalTests = "${totalTests}";
    const passedTests = "${passedTests";
    const failedTests = "${failedTests}";

    return (
        <div className="mb-4 flex items-center justify-between">
            <h2 className="text-xl font-semibold">Test Results</h2>
            <div className="flex gap-2">
                <button
                    onClick={() => onFilterChange("all")}
                    className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                        filter === "all"
                            ? "bg-primary text-primary-foreground"
                            : "bg-muted text-muted-foreground hover:bg-muted/80"
                    }`}
                >
                    All ({totalTests})
                </button>
                <button
                    onClick={() => onFilterChange("passed")}
                    className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                        filter === "passed"
                            ? "bg-success text-white"
                            : "bg-muted text-muted-foreground hover:bg-muted/80"
                    }`}
                >
                    Passed ({passedTests})
                </button>
                <button
                    onClick={() => onFilterChange("failed")}
                    className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                        filter === "failed"
                            ? "text-destructive-foreground bg-destructive"
                            : "bg-muted text-muted-foreground hover:bg-muted/80"
                    }`}
                >
                    Failed ({failedTests})
                </button>
            </div>
        </div>
    );
}
    */
export function FilterGroup({
    filter,
    onFilterChange,
}: {
    filter: tFilter;
    onFilterChange: (filter: tFilter) => void;
}) {
    const totalTests = "${totalTests}";
    const passedTests = "${passedTests";
    const failedTests = "${failedTests}";

    return (
        <div className="mb-4 flex items-center justify-between">
            <h2 className="text-xl font-semibold">Test Results</h2>
            <div className="flex gap-2">
                <button
                    onClick={() => onFilterChange("all")}
                    className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                        filter === "all"
                            ? "bg-primary text-primary-foreground"
                            : "bg-muted text-muted-foreground hover:bg-muted/80"
                    }`}
                >
                    All ({totalTests})
                </button>
                <button
                    onClick={() => onFilterChange("passed")}
                    className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                        filter === "passed"
                            ? "bg-success text-white"
                            : "bg-muted text-muted-foreground hover:bg-muted/80"
                    }`}
                >
                    Passed ({passedTests})
                </button>
                <button
                    onClick={() => onFilterChange("failed")}
                    className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                        filter === "failed"
                            ? "text-destructive-foreground bg-destructive"
                            : "bg-muted text-muted-foreground hover:bg-muted/80"
                    }`}
                >
                    Failed ({failedTests})
                </button>
            </div>
        </div>
    );
}

export function FilterToggleButton({
    children,
    onClick,
    selected,
}: {
    children: string;
    onClick: MouseEventHandler<HTMLButtonElement>;
    selected: boolean;
}) {
    return (
        <button
            onClick={onClick}
            className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                selected
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
            }`}
        >
            {/*All ({totalTests})*/}
            {children}
        </button>
    );
}
