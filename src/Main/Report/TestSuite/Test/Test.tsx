import { CheckCircle2, XCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Assertion from "./Assertion";
import type { tTestWithStats } from "@/lib/stats";
import { useState } from "react";

export default function Test({
    testWithStats,
    // testWithStats,
    // testIndex,
    // isExpanded,
    // onToggle,
}: {
    testWithStats: tTestWithStats;
}) {
    // const { test, passed, total, isPassing } = testWithStats;
    // const isPassing: boolean = true;
    // const passed = "passed";
    // const total = "total";
    // const testIndex = "testIndex";
    // const isExpanded = false;
    // const isExpanded = true;
    const [isExpanded, setIsExpanded] = useState<boolean>(false);
    const numAssertions = testWithStats.test.assertions.length;
    const { passed, numPassedAssertions } = testWithStats;
    const { inputKafkaTopic } = testWithStats.test;

    return (
        <div className="mb-2 overflow-hidden rounded-lg border border-border bg-card">
            <button
                onClick={() => {
                    console.log("0j2093 Implement onToggle()");
                    setIsExpanded((v) => !v);
                }}
                className="flex w-full items-center gap-4 px-6 py-4 transition-colors hover:bg-muted/50"
            >
                <div
                    className={`flex h-10 w-10 items-center justify-center rounded-full ${
                        passed ? "bg-success/10" : "bg-destructive/10"
                    }`}
                >
                    {passed ? (
                        <CheckCircle2 className="h-5 w-5 text-success" />
                    ) : (
                        <XCircle className="h-5 w-5 text-destructive" />
                    )}
                </div>
                <div className="flex-1 text-left">
                    <div className="mb-1 font-semibold text-foreground">
                        {testWithStats.test.id}
                    </div>
                    <div className="font-mono text-sm text-muted-foreground">
                        {inputKafkaTopic}
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    <Badge
                        variant={passed ? "default" : "destructive"}
                        className="font-mono"
                    >
                        {numPassedAssertions}/{numAssertions}
                    </Badge>
                    <svg
                        className={`h-5 w-5 text-muted-foreground transition-transform ${isExpanded ? "rotate-180" : ""}`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                        />
                    </svg>
                </div>
            </button>

            {isExpanded && (
                <div className="border-t border-border bg-muted/20 px-6 py-4">
                    <div className="space-y-3">
                        {testWithStats.assertionsWithStats.map(
                            (assertionWithStats, i) => (
                                <Assertion
                                    key={i}
                                    assertionWithStats={assertionWithStats}
                                    // index={assertionIndex}
                                />
                            ),
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}
