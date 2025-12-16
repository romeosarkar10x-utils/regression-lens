import "./App.scss";

import Header from "./Header";
import { useState } from "react";
import Main from "./Main";

function App() {
    const [sideBarIsOpen, setSideBarIsOpen] = useState<boolean>(false);

    return (
        <>
            <Header
                onSidebarToggle={() => {
                    setSideBarIsOpen((value) => !value);
                }}
            />
            <Main sideBarIsOpen={sideBarIsOpen} />
        </>
    );
}

export default App;
