import { getReportWithStats } from "@/lib/stats";
import type { tReportWithStats } from "@/lib/stats";
import { cn } from "@/lib/utils";
import { sReport, type tReport } from "@/schemas/report";
import { useEffect, useState } from "react";
import TestSuite from "./Report/TestSuite";
import SideBar from "@/SideBar";
// import FileUpload from "@/FileUpload";

function Header({ children }: { children: string }) {
    return (
        <header>
            <h1>{children}</h1>
        </header>
    );
}

function Footer() {
    return <footer>Footer...</footer>;
}

function Article({
    reportWithStats,
    sideBarIsOpen,
    selectedTestSuiteIndex,
}: {
    reportWithStats: tReportWithStats;
    sideBarIsOpen: boolean;
    selectedTestSuiteIndex: number;
}) {
    let marginLeftClass = "ml-[max(20px,5%)]";

    if (sideBarIsOpen) {
        marginLeftClass = "ml-[calc(max(20px,5%)+16rem)]";
    }

    return (
        <article
            className={cn(
                marginLeftClass,
                "transition-all duration-200 ease-in-out",
            )}
        >
            <Header>Regression Test</Header>
            <TestSuite
                testSuiteWithStats={
                    reportWithStats.testSuitesWithStats[selectedTestSuiteIndex]
                }
            />
            <Footer />
        </article>
    );
}

interface iMainState {
    data: {
        report: tReport;
        selectedTestSuiteIndex: number;
    } | null;
}

export default function Main({ sideBarIsOpen }: { sideBarIsOpen: boolean }) {
    const [state, setState] = useState<iMainState>({ data: null });
    // const [report, setReport] = useState<tReport>();
    /*
    const [selectedTestSuiteIndex, setSelectedTestSuiteIndex] = useState<
        number | null
    >(null);
    */

    useEffect(() => {
        (async function () {
            const res = await fetch("sampleData2.json");
            const jsonParsed = await res.json();
            const report = await sReport.parseAsync(jsonParsed);
            setState({ data: { report, selectedTestSuiteIndex: 0 } });
        })();
    }, []);

    if (state.data == null) {
        return <></>;
    }

    function setSelectedTestSuiteIndex(index: number) {
        setState((prevState) =>
            prevState.data == null
                ? prevState
                : {
                      data: {
                          report: prevState.data.report,
                          selectedTestSuiteIndex: index,
                      },
                  },
        );
    }

    const reportWithStats = getReportWithStats(state.data.report);

    return (
        <main
            className={cn(
                "mt-16 mr-[max(20px,5%)]",
                "transition-all duration-200 ease-in-out",
            )}
        >
            <SideBar
                selectedTestSuiteIndex={state.data.selectedTestSuiteIndex}
                setSelectedTestSuiteIndex={setSelectedTestSuiteIndex}
                isOpen={sideBarIsOpen}
                reportWithStats={reportWithStats}
            />
            <Article
                sideBarIsOpen={sideBarIsOpen}
                reportWithStats={reportWithStats}
                selectedTestSuiteIndex={state.data.selectedTestSuiteIndex}
            />
        </main>
    );
}
