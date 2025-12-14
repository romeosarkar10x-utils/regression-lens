import { useMemo } from "react";
import { diffLines as computeDiff } from "diff";
import { Card } from "@/components/ui/card";

interface DiffViewerProps {
    text0: string;
    text1: string;
}

interface DiffRow {
    left: {
        content: string;
        lineNum: number | null;
        type: "added" | "removed" | "unchanged";
    };
    right: {
        content: string;
        lineNum: number | null;
        type: "added" | "removed" | "unchanged";
    };
}

export default function DiffView({ text0, text1 }: DiffViewerProps) {
    const rows: DiffRow[] = useMemo(() => {
        const diff = computeDiff(text0, text1);
        const result: DiffRow[] = [];
        let line1 = 1;
        let line2 = 1;

        diff.forEach((part) => {
            const lines = part.value.split("\n").filter((line, idx, arr) => {
                return idx < arr.length - 1 || line !== "";
            });

            if (part.added) {
                // For added lines, create rows with empty left side
                lines.forEach((line) => {
                    result.push({
                        left: { content: "", lineNum: null, type: "removed" },
                        right: { content: line, lineNum: line2, type: "added" },
                    });
                    line2++;
                });
            } else if (part.removed) {
                // For removed lines, create rows with empty right side
                lines.forEach((line) => {
                    result.push({
                        left: {
                            content: line,
                            lineNum: line1,
                            type: "removed",
                        },
                        right: { content: "", lineNum: null, type: "added" },
                    });
                    line1++;
                });
            } else {
                // For unchanged lines, both sides have content
                lines.forEach((line) => {
                    result.push({
                        left: {
                            content: line,
                            lineNum: line1,
                            type: "unchanged",
                        },
                        right: {
                            content: line,
                            lineNum: line2,
                            type: "unchanged",
                        },
                    });
                    line1++;
                    line2++;
                });
            }
        });

        return result;
    }, [text0, text1]);

    return (
        <Card className="overflow-hidden bg-card">
            <div className="flex border-b border-border">
                {/* Left side - Text1 */}
                <div className="flex-1 border-r border-border">
                    <div className="border-b border-border bg-muted/50 px-4 py-3 text-sm font-semibold">
                        Original
                    </div>
                    <div className="overflow-x-auto font-mono text-sm">
                        {rows.map((row, idx) => (
                            <div
                                key={`left-${idx}`}
                                className="flex min-h-6 hover:bg-muted/30"
                            >
                                <div className="w-12 flex-shrink-0 border-r border-border bg-muted/30 px-2 py-1 text-right text-xs text-muted-foreground select-none">
                                    {row.left.lineNum || ""}
                                </div>
                                <div
                                    className={`flex-1 px-4 py-1 break-words whitespace-pre-wrap ${
                                        row.left.type === "removed"
                                            ? "bg-red-500/20"
                                            : ""
                                    }`}
                                >
                                    {row.left.content || "\u00A0"}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right side - Text2 */}
                <div className="flex-1">
                    <div className="border-b border-border bg-muted/50 px-4 py-3 text-sm font-semibold">
                        Modified
                    </div>
                    <div className="overflow-x-auto font-mono text-sm">
                        {rows.map((row, idx) => (
                            <div
                                key={`right-${idx}`}
                                className="flex min-h-6 hover:bg-muted/30"
                            >
                                <div className="w-12 flex-shrink-0 border-r border-border bg-muted/30 px-2 py-1 text-right text-xs text-muted-foreground select-none">
                                    {row.right.lineNum || ""}
                                </div>
                                <div
                                    className={`flex-1 px-4 py-1 break-words whitespace-pre-wrap ${
                                        row.right.type === "added"
                                            ? "bg-green-500/20"
                                            : ""
                                    }`}
                                >
                                    {row.right.content || "\u00A0"}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </Card>
    );
}
