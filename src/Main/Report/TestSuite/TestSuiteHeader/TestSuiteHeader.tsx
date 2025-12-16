import { Clock, TrendingUpIcon } from "lucide-react";
// import { Badge } from "@/components/ui/badge";
import type { tTestSuiteWithStats } from "@/lib/stats";

export default function TestSuiteHeader({
    testSuiteWithStats,
}: {
    testSuiteWithStats: tTestSuiteWithStats;
}) {
    const dateTime = new Date(testSuiteWithStats.testSuite.timeUnixMillis);
    const { appName, uuid } = testSuiteWithStats.testSuite;
    const numTests = testSuiteWithStats.testSuite.tests.length;
    const { numPassedTests, numFailedTests } = testSuiteWithStats;

    return (
        <div className="border-b border-border bg-card">
            <div className="container mx-auto px-4 py-8">
                <div className="mb-6 flex items-start justify-between">
                    <div className="space-y-2">
                        <h1 className="text-4xl font-bold tracking-tight text-balance">
                            {appName}
                        </h1>
                        <div className="flex items-center gap-3 text-sm text-muted-foreground">
                            <div className="flex items-center gap-1.5">
                                <Clock className="h-4 w-4" />
                                <span>
                                    {dateTime.toLocaleDateString()} at{" "}
                                    {dateTime.toLocaleTimeString()}
                                </span>
                            </div>
                            <span className="text-border">•</span>
                            <code className="rounded bg-muted px-2 py-1 font-mono text-xs">
                                {uuid}
                            </code>
                        </div>
                    </div>
                    {/*
                    <Badge
                        variant={
                            numFailedTests === 0 ? "default" : "destructive"
                        }
                        className="px-4 py-2 text-lg"
                    >
                        {(numPassedTests / numTests) * 100}% Pass Rate
                    </Badge> */}
                    <PassRateBadge
                        percentage={(numPassedTests / numTests) * 100}
                        // percentage={}
                    />
                </div>

                <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
                    <div className="rounded-lg border border-border bg-background p-4">
                        <div className="mb-1 text-sm text-muted-foreground">
                            Tests
                        </div>
                        <div className="text-3xl font-bold">{numTests}</div>
                    </div>
                    <div className="rounded-lg border border-success/20 bg-background p-4">
                        <div className="mb-1 text-sm text-muted-foreground">
                            Passed
                        </div>
                        <div className="text-3xl font-bold text-success">
                            {numPassedTests}
                        </div>
                    </div>
                    <div className="rounded-lg border border-destructive/20 bg-background p-4">
                        <div className="mb-1 text-sm text-muted-foreground">
                            Failed
                        </div>
                        <div className="text-3xl font-bold text-destructive">
                            {numFailedTests}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function PassRateBadge({ percentage }: { percentage: number }) {
    return (
        <div className="group relative">
            <div
                className={`absolute inset-0 rounded-2xl blur-xl transition-all duration-500 ${
                    percentage === 100
                        ? "bg-success/30 group-hover:bg-success/40"
                        : "bg-destructive/30 group-hover:bg-destructive/40"
                }`}
            />
            <div
                className={`relative rounded-2xl border px-6 py-4 backdrop-blur-sm ${
                    percentage === 100
                        ? "border-success/30 bg-success/10"
                        : "border-destructive/30 bg-destructive/10"
                }`}
            >
                <div className="mb-1 flex items-center gap-1.5 text-sm text-muted-foreground">
                    <TrendingUpIcon className="h-3.5 w-3.5" />
                    Pass Rate
                </div>
                <div
                    className={`text-4xl font-bold tracking-tight ${
                        percentage === 100 ? "text-success" : "text-destructive"
                    }`}
                >
                    {percentage}%
                </div>
            </div>
        </div>
    );
}
