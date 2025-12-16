import type { tAssertion } from "@/schemas/assertion";
import type { tReport } from "@/schemas/report";
import type { tTest } from "@/schemas/test";
import type { tTestSuite } from "@/schemas/testSuite";

export type tReportWithStats = {
    report: tReport;
    numPassedTestSuites: number;
    numFailedTestSuites: number;
    testSuitesWithStats: tTestSuiteWithStats[];
};

export function getReportWithStats(report: tReport): tReportWithStats {
    const testSuitesWithStats = report.map(getTestSuiteWithStats);

    let numPassedTestSuites = 0;
    let numFailedTestSuites = 0;

    testSuitesWithStats.forEach((testSuiteWithStats) => {
        if (testSuiteWithStats.passed) {
            numPassedTestSuites++;
        } else {
            numFailedTestSuites++;
        }
    });

    return {
        report,
        testSuitesWithStats,
        numPassedTestSuites,
        numFailedTestSuites,
    };
}

export type tTestSuiteWithStats = {
    testSuite: tTestSuite;
    numPassedTests: number;
    numFailedTests: number;
    testsWithStats: tTestWithStats[];
    passed: boolean;
};

export function getTestSuiteWithStats(
    testSuite: tTestSuite,
): tTestSuiteWithStats {
    let numPassedTests = 0;
    let numFailedTests = 0;
    // const numFailedTests =

    const testsWithStats = testSuite.tests.map(getTestWithStats);

    testsWithStats.forEach((testWithStats) => {
        if (testWithStats.passed) {
            numPassedTests++;
        } else {
            numFailedTests++;
        }
    });

    return {
        testSuite,
        numFailedTests,
        numPassedTests,
        testsWithStats,
        passed: numFailedTests === 0,
    };

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

export type tTestWithStats = {
    test: tTest;
    numPassedAssertions: number;
    numFailedAssertions: number;
    assertionsWithStats: tAssertionWithStats[];
    passed: boolean;
};

function getTestWithStats(test: tTest): tTestWithStats {
    let numFailedAssertions = 0;
    let numPassedAssertions = 0;

    const assertionsWithStats = test.assertions.map(getAssertionWithStats);

    assertionsWithStats.forEach((assertionWithStats) => {
        if (assertionWithStats.passed) {
            numPassedAssertions++;
        } else {
            numFailedAssertions--;
        }
    });

    return {
        numPassedAssertions,
        numFailedAssertions,
        assertionsWithStats,
        test,
        passed: numFailedAssertions === 0,
    };
}

export type tAssertionWithStats = {
    assertion: tAssertion;
    passed: boolean;
};

function getAssertionWithStats(assertion: tAssertion): tAssertionWithStats {
    const baselineVal = assertion.baseline.trim();
    const underTestVal = assertion.underTest.trim();

    const formattedBaselineVal = formatVal(baselineVal);
    const formattedUnderTestVal = formatVal(underTestVal);

    return {
        assertion,
        passed: compare(formattedBaselineVal, formattedUnderTestVal),
    } as const;
}

function formatVal(v: string) {
    try {
        const o = JSON.parse(v);
        return JSON.stringify(o, null, 4).split("\n");
    } catch {
        return v.split("\n");
    }
}

function compare(a: string[], b: string[]) {
    if (a.length !== b.length) {
        return false;
    }

    for (let i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) {
            return false;
        }
    }

    return true;
}
