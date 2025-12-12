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
            <p>Hello world</p>
            <div className="content-wrapper">
                <h1>Heading Level 1</h1>
                <p>
                    This is a standard introductory paragraph. It contains{" "}
                    <strong>bold text for emphasis</strong>,{" "}
                    <em>italicized text for nuance</em>, and{" "}
                    <small>small text for fine print</small>. You might also
                    encounter a <a href="#">hyperlink</a> or some{" "}
                    <mark>highlighted text</mark> within the flow.
                </p>

                <h2>Heading Level 2</h2>
                <p>
                    Below is an example of a code snippet embedded in text using
                    the <code>&lt;code&gt;</code> tag, followed by a
                    preformatted block:
                </p>
                <pre>
                    {`
function helloWorld() {
  console.log("Hello, World!");
}
    `}
                </pre>

                <h3>Heading Level 3</h3>
                <p>Here is an unordered list to test bullet points:</p>
                <ul>
                    <li>First item in the list</li>
                    <li>
                        Second item with a sub-list:
                        <ul>
                            <li>Nested item A</li>
                            <li>Nested item B</li>
                        </ul>
                    </li>
                    <li>Third item</li>
                </ul>

                <h4>Heading Level 4</h4>
                <p>Here is an ordered list for testing numbering:</p>
                <ol>
                    <li>Step one: Initialize</li>
                    <li>Step two: Execute</li>
                    <li>Step three: Terminate</li>
                </ol>

                <h5>Heading Level 5</h5>
                <blockquote>
                    "This is a blockquote element. It is often used to highlight
                    a specific section of text or a quote from an external
                    source."
                    <cite>— Author Name</cite>
                </blockquote>

                <h6>Heading Level 6</h6>
                <p>Finally, here is a definition list:</p>
                <dl>
                    <dt>HTML</dt>
                    <dd>HyperText Markup Language</dd>
                    <dt>CSS</dt>
                    <dd>Cascading Style Sheets</dd>
                </dl>

                <hr />

                <p class="footer">
                    <em>End of test content.</em>
                </p>
            </div>
        </>
    );
}

export default App;
