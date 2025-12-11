import "./App.scss";
import { DiffViewer } from "./Diff";

import { text0, text1 } from "./sample";
import Header from "./Header";
import SideBar from "./SideBar";
import { useState } from "react";

function App() {
    const [sideBarIsOpen, setSideBarIsOpen] = useState(false);

    return (
        <>
            <Header
                onSidebarToggle={() => {
                    setSideBarIsOpen((value) => !value);
                }}
            />
            <SideBar isOpen={sideBarIsOpen} />
            <DiffViewer text0={text0} text1={text1} />
        </>
    );
}

export default App;
