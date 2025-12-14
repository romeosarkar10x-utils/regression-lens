import z from "zod";
import { CheckCircle2, XCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Assertion from "./Assertion";
import type { sTest } from "@/schemas/test";

// import type { Test } from "../test-report-dashboard";

/*
interface TestWithStats {
    test: Test;
    passed: number;
    total: number;
    isPassing: boolean;
}

interface TestCardProps {
    testWithStats: TestWithStats;
    testIndex: number;
    isExpanded: boolean;
    onToggle: () => void;
}
    */

type tTest = z.infer<typeof sTest>;

export default function Test({
    test,
    // testWithStats,
    // testIndex,
    // isExpanded,
    // onToggle,
}: {
    test: tTest;
}) {
    // const { test, passed, total, isPassing } = testWithStats;
    const isPassing: boolean = true;
    const passed = "passed";
    const total = "total";
    const testIndex = "testIndex";
    // const isExpanded = false;
    const isExpanded = true;

    return (
        <div className="overflow-hidden rounded-lg border border-border bg-card">
            <button
                onClick={() => {
                    console.log("0j2093 Implement onToggle()");
                }}
                className="flex w-full items-center gap-4 px-6 py-4 transition-colors hover:bg-muted/50"
            >
                <div
                    className={`flex h-10 w-10 items-center justify-center rounded-full ${
                        isPassing ? "bg-success/10" : "bg-destructive/10"
                    }`}
                >
                    {isPassing ? (
                        <CheckCircle2 className="text-success h-5 w-5" />
                    ) : (
                        <XCircle className="h-5 w-5 text-destructive" />
                    )}
                </div>
                <div className="flex-1 text-left">
                    <div className="mb-1 font-semibold text-foreground">
                        Test {testIndex + 1}
                    </div>
                    <div className="font-mono text-sm text-muted-foreground">
                        {test.inputKafkaTopic}
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    <Badge
                        variant={isPassing ? "default" : "destructive"}
                        className="font-mono"
                    >
                        {passed}/{total}
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
                        {test.assertions.map((assertion, i) => (
                            <Assertion
                                key={i}
                                assertion={assertion}
                                // index={assertionIndex}
                            />
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}
