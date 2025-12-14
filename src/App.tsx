import "./App.scss";

import Header from "./Header";
import SideBar from "./SideBar";
import { useState } from "react";
import Main from "./Main";

function App() {
    const [sideBarIsOpen, setSideBarIsOpen] = useState(false);

    return (
        <>
            <Header
                onSidebarToggle={() => {
                    setSideBarIsOpen((value) => !value);
                }}
            />
            <div className="w-full">
                <SideBar isOpen={sideBarIsOpen} />
                <Main sideBarIsOpen={sideBarIsOpen} />
            </div>
        </>
    );
}

export default App;
