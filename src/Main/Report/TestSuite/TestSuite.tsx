import DockerImageComparison from "./DockerImageComparison";
import TestSuiteHeader from "./TestSuiteHeader";
import Test from "./Test";
// import Filter from "./Filter";
import type { tTestSuiteWithStats } from "@/lib/stats";

export default function TestSuite({
    testSuiteWithStats,
}: {
    testSuiteWithStats: tTestSuiteWithStats;
}) {
    const { testSuite } = testSuiteWithStats;
    // const [filter, setFilter] = useState<"all" | "passed" | "failed">("all");
    // const [expandedTest, setExpandedTest] = useState<string | null>(null);

    /*
    const filteredTests = testsWithStats.filter((item) => {
        if (filter === "passed") return item.isPassing;
        if (filter === "failed") return !item.isPassing;
        return true;
    });
    */

    // console.log("tests:", testSuite.tests);
    return (
        <div className="min-h-screen bg-background">
            <TestSuiteHeader
                testSuiteWithStats={testSuiteWithStats} /*stats={stats} */
            />

            <div className="container mx-auto px-4 py-6">
                <DockerImageComparison
                    dockerImageURL={testSuite.dockerImageURL}
                />

                {/*<Filter
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
                />
                        */}

                {testSuiteWithStats.testsWithStats.map((testWithStats) => (
                    <Test testWithStats={testWithStats} />
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
