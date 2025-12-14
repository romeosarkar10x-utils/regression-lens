import z from "zod";
// import { useState } from "react";
import { sTestSuite } from "@/schemas/testSuite";
import DockerImageComparison from "./DockerImageComparison";
import TestSuiteHeader from "./TestSuiteHeader";
import Test from "./Test";
import Filter from "./Filter";

type tTestSuite = z.infer<typeof sTestSuite>;

export default function TestSuite({ testSuite }: { testSuite: tTestSuite }) {
    // const [filter, setFilter] = useState<"all" | "passed" | "failed">("all");
    // const [expandedTest, setExpandedTest] = useState<string | null>(null);

    const stats = getStats(testSuite);

    /*
    const filteredTests = testsWithStats.filter((item) => {
        if (filter === "passed") return item.isPassing;
        if (filter === "failed") return !item.isPassing;
        return true;
    });
    */

    console.log("tests:", testSuite.tests);
    return (
        <div className="min-h-screen bg-background">
            <TestSuiteHeader testSuite={testSuite} /*stats={stats} */ />

            <div className="container mx-auto px-4 py-6">
                <DockerImageComparison
                    dockerImageURL={testSuite.dockerImageURL}
                />

                <Filter
                // filter={filter}
                // onFilterChange={setFilter}
                // totalTests={testsWithStats.length}
                /*
                    passedTests={
                        testsWithStats.filter((t) => t.isPassing).length
                    }
                    failedTests={
                        testsWithStats.filter((t) => !t.isPassing).length
                    }
                        */
                />

                {testSuite.tests.map((test) => (
                    <Test test={test} />
                ))}
                {/*filteredTests.length === 0 && (
                    <div className="py-12 text-center text-muted-foreground">
                        No tests match the current filter
                    </div>
                )*/}
            </div>
        </div>
    );
}

function getStats(testSuite: tTestSuite) {
    const numTests = testSuite.tests.length;
    /*
    const numAssertions = testSuite.tests.reduce(
        (acc, test) => acc + test.assertions.length,
        0,
    );
    const passedAssertions = testSuite.tests.reduce(
        (acc, test) =>
            acc +
            test.assertions.filter((a) => a.baseline === a.underTest).length,
        0,
    );

    const failedAssertions = -passedAssertions;
    const successRate =
        totalAssertions > 0
            ? ((passedAssertions / totalAssertions) * 100).toFixed(1)
            : "0";

    const testsWithStats = testSuite.tests.map((test) => {
        const passed = test.assertions.filter(
            (a) => a.baseline === a.underTest,
        ).length;
        const total = test.assertions.length;
        const isPassing = passed === total;
        return { test, passed, total, isPassing };
    });

    return {
        totalTests,
        totalAssertions,
        passedAssertions,
        failedAssertions,
        successRate,
    };
    */
}

/*
                <TestList
                    testsWithStats={filteredTests}
                    expandedTest={expandedTest}
                    onToggleExpand={(id) =>
                        setExpandedTest(expandedTest === id ? null : id)
                    }
                />

                */
