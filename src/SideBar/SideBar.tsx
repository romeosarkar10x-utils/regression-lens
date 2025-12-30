import { FlaskConical, CheckCircle2, XCircle } from "lucide-react";
import { TestSuiteItem } from "./SideBarItem";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import type { tReportWithStats } from "@/lib/stats";

export default function SideBar({
    isOpen,
    reportWithStats,
    selectedTestSuiteIndex,
    setSelectedTestSuiteIndex,
}: {
    isOpen: boolean;
    reportWithStats: tReportWithStats;
    selectedTestSuiteIndex: number;
    setSelectedTestSuiteIndex: (index: number) => void;
}) {
    const numTestSuites = reportWithStats.report.length;
    const { numPassedTestSuites, numFailedTestSuites } = reportWithStats;
    const allPassed = numFailedTestSuites === 0;

    return (
        <aside
            className={cn(
                "fixed top-13 left-0 h-[calc(100vh-3.5rem)] w-[16rem]",
                "border-r border-border bg-background",
                "transition-transform duration-200 ease-in-out",
                isOpen ? "translate-x-0" : "-translate-x-full",
            )}
        >
            {/* Header */}
            <header className="flex h-16 items-center gap-3 border-b border-border px-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                    <FlaskConical className="h-5 w-5" />
                </div>
                <div>
                    <h1 className="text-base font-semibold text-foreground">
                        Test Report
                    </h1>
                    <p className="text-xs text-muted-foreground">v1.0.0</p>
                </div>
            </header>

            {/* Overall Results */}
            <article className="border-b border-border px-4 py-4">
                <div className="mb-3 flex items-center justify-between">
                    <span className="text-sm font-medium text-foreground">
                        Overall Results
                    </span>
                    <Badge
                        variant={allPassed ? "default" : "secondary"}
                        className={cn(
                            allPassed
                                ? "bg-emerald-600 hover:bg-emerald-700"
                                : "bg-amber-100 text-amber-700 hover:bg-amber-100",
                        )}
                    >
                        {numPassedTestSuites}/{numTestSuites}
                    </Badge>
                </div>

                <Progress
                    value={numPassedTestSuites / numTestSuites}
                    className="h-2"
                />

                <div className="mt-3 flex items-center justify-between text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                        <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" />
                        {numPassedTestSuites} passed
                    </span>
                    <span className="flex items-center gap-1">
                        <XCircle className="h-3.5 w-3.5 text-red-500" />
                        {numFailedTestSuites} failed
                    </span>
                </div>
            </article>

            {/* Navigation */}
            <nav className="flex-1 overflow-y-auto px-2 py-3">
                <p className="mb-2 px-2 text-xs font-medium tracking-wider text-muted-foreground uppercase">
                    Test Suites
                </p>
                <div className="space-y-1">
                    {reportWithStats.testSuitesWithStats.map(
                        (testSuiteWithStats, i) => (
                            <TestSuiteItem
                                key={i}
                                testSuiteWithStats={testSuiteWithStats}
                                onClick={() => setSelectedTestSuiteIndex(i)}
                                isActive={i === selectedTestSuiteIndex}
                            />
                        ),
                    )}
                </div>
            </nav>
        </aside>
    );
}
