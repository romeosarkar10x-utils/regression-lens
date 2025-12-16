import { useState, type MouseEventHandler } from "react";
import { ChevronRight, CheckCircle2, XCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import type {
    tAssertionWithStats,
    tTestSuiteWithStats,
    tTestWithStats,
} from "@/lib/stats";

function AssertionItem({
    assertionWithStats,
}: {
    assertionWithStats: tAssertionWithStats;
}) {
    const { passed } = assertionWithStats;

    return (
        <a
            href={"#"}
            className={cn(
                "flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm",
                "text-foreground hover:bg-muted",
                "transition-colors duration-150",
                "ml-6",
            )}
        >
            {passed ? (
                <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-600" />
            ) : (
                <XCircle className="h-4 w-4 shrink-0 text-red-500" />
            )}

            <span className="line-clamp-2 min-w-0 flex-1 leading-snug">
                {assertionWithStats.assertion.id}
            </span>

            {/*<Badge
                variant={passed ? "default" : "destructive"}
                className={cn(
                    "shrink-0",
                    passed && "bg-emerald-600 hover:bg-emerald-700",
                )}
            >
                {passed ? "Pass" : "Fail"}
            </Badge>*/}
        </a>
    );
}

function TestItem({ testWithStats }: { testWithStats: tTestWithStats }) {
    const [isOpen, setIsOpen] = useState(false);
    const numAssertions = testWithStats.test.assertions.length;
    const { numFailedAssertions, numPassedAssertions } = testWithStats;
    const allPassed = numFailedAssertions === 0;

    return (
        <Collapsible open={isOpen} onOpenChange={setIsOpen} className="w-full">
            <CollapsibleTrigger asChild>
                <Button
                    variant="ghost"
                    className={cn(
                        "w-full justify-start gap-2 rounded-md py-2 text-sm font-medium",
                        "text-foreground hover:bg-muted",
                        "h-auto min-h-10 pl-6",
                    )}
                >
                    <ChevronRight
                        className={cn(
                            "h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200",
                            isOpen && "rotate-90",
                        )}
                    />

                    <span className="min-w-0 flex-1 truncate text-left">
                        {testWithStats.test.id}
                    </span>

                    <Badge
                        variant="secondary"
                        className={cn(
                            "shrink-0",
                            allPassed
                                ? "bg-emerald-100 text-emerald-700 hover:bg-emerald-100"
                                : "bg-amber-100 text-amber-700 hover:bg-amber-100",
                        )}
                    >
                        {numPassedAssertions}/{numAssertions}
                    </Badge>
                </Button>
            </CollapsibleTrigger>
            <CollapsibleContent className="data-[state=closed]:animate-collapse data-[state=open]:animate-expand overflow-hidden">
                <div className="py-1">
                    {testWithStats.assertionsWithStats.map(
                        (assertionWithStats, i) => (
                            <AssertionItem
                                key={i}
                                assertionWithStats={assertionWithStats}
                            />
                        ),
                    )}
                </div>
            </CollapsibleContent>
        </Collapsible>
    );
}

export function TestSuiteItem({
    testSuiteWithStats,
    isActive,
    onClick,
}: {
    testSuiteWithStats: tTestSuiteWithStats;
    onClick: MouseEventHandler<HTMLSpanElement>;
    isActive: boolean;
}) {
    const numTests = testSuiteWithStats.testSuite.tests.length;
    const { numPassedTests, numFailedTests } = testSuiteWithStats;
    const [isOpen, setIsOpen] = useState(false);
    // const stats = getSuiteStats(suite.tests);
    const allPassed = numFailedTests === 0;

    return (
        <Collapsible open={isOpen} onOpenChange={setIsOpen} className="w-full">
            <CollapsibleTrigger asChild>
                <Button
                    variant="ghost"
                    className={cn(
                        "w-full justify-start gap-2 rounded-md py-2 text-sm font-semibold",
                        // "text-foreground hover:bg-muted",
                        "h-auto min-h-11",
                        isOpen && "bg-muted",
                        isActive &&
                            "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground",
                    )}
                >
                    <ChevronRight
                        className={cn(
                            "h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200",
                            isOpen && "rotate-90",
                        )}
                    />

                    <span
                        onClick={(e) => {
                            return (e.stopPropagation(), onClick(e));
                        }}
                        className="min-w-0 flex-1 cursor-pointer truncate text-left hover:underline"
                    >
                        {testSuiteWithStats.testSuite.name}
                    </span>

                    <Badge
                        variant="secondary"
                        className={cn(
                            "shrink-0",
                            allPassed
                                ? "bg-emerald-100 text-emerald-700 hover:bg-emerald-100"
                                : "bg-amber-100 text-amber-700 hover:bg-amber-100",
                        )}
                    >
                        {numPassedTests}/{numTests}
                    </Badge>
                </Button>
            </CollapsibleTrigger>
            <CollapsibleContent className="data-[state=closed]:animate-collapse data-[state=open]:animate-expand overflow-hidden">
                <div className="ml-3 border-l-2 border-border py-1 pl-2">
                    {testSuiteWithStats.testsWithStats.map(
                        (testWithStats, i) => (
                            <TestItem key={i} testWithStats={testWithStats} />
                        ),
                    )}
                </div>
            </CollapsibleContent>
        </Collapsible>
    );
}
