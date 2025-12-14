// import { text0, text1 } from "./sample";
import { cn } from "@/lib/utils";

function Header() {
    return (
        <header>
            <h1>Header... </h1>
        </header>
    );
}

function Footer() {
    return <footer>Footer...</footer>;
}

function Article() {
    return (
        <article>
            <Demo />
        </article>
    );
}

export default function Main({ sideBarIsOpen }: { sideBarIsOpen: boolean }) {
    let marginLeftClass = "ml-[max(20px,5%)]";

    if (sideBarIsOpen) {
        marginLeftClass = "ml-[calc(max(20px,5%)+16rem)]";
    }

    return (
        <main
            className={cn(
                marginLeftClass,
                "mt-16 mr-[max(20px,5%)]",
                "transition-all duration-200 ease-in-out",
            )}
        >
            <Header />
            <Article />
            <Footer />
        </main>
    );
}

function Demo() {
    return (
        <>
            {/* Header Section */}
            <header>
                <h1>HTML5 Test Page</h1>
                <nav>
                    <ul>
                        <li>
                            <a href="#text">Text</a>
                        </li>
                        <li>
                            <a href="#lists">Lists</a>
                        </li>
                        <li>
                            <a href="#tables">Tables</a>
                        </li>
                        <li>
                            <a href="#forms">Forms</a>
                        </li>
                        <li>
                            <a href="#media">Media</a>
                        </li>
                    </ul>
                </nav>
            </header>

            <main>
                {/* Headings */}
                <section id="headings">
                    <header>
                        <h2>Headings</h2>
                    </header>
                    <h1>Heading 1</h1>
                    <h2>Heading 2</h2>
                    <h3>Heading 3</h3>
                    <h4>Heading 4</h4>
                    <h5>Heading 5</h5>
                    <h6>Heading 6</h6>
                </section>

                {/* Text Semantics */}
                <section id="text">
                    <header>
                        <h2>Text Semantics</h2>
                    </header>
                    <p>
                        This is a standard paragraph. It contains{" "}
                        <strong>strong emphasis</strong>,{" "}
                        <em>emphasized text</em>, <mark>marked text</mark>,{" "}
                        <small>small print</small>, <del>deleted text</del>, and{" "}
                        <ins>inserted text</ins>.
                    </p>
                    <p>
                        We can also use <sub>subscript</sub> and{" "}
                        <sup>superscript</sup> characters. Here is a link to{" "}
                        <a
                            href="https://example.com"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Example.com
                        </a>
                        .
                    </p>
                    <p>
                        <code>console.log("This is inline code");</code>
                    </p>
                    <pre>
                        {`function blockCode() {
  return "This is preformatted text block";
}`}
                    </pre>
                    <blockquote>
                        <p>
                            This is a blockquote. It is used for quoting text
                            from another source.
                        </p>
                        <cite>- Source Name</cite>
                    </blockquote>
                    <hr />
                    <address>
                        Written by{" "}
                        <a href="mailto:webmaster@example.com">Jon Doe</a>.
                        <br />
                        Visit us at:
                        <br />
                        Example.com
                        <br />
                        Box 564, Disneyland
                        <br />
                        USA
                    </address>
                </section>

                {/* Lists */}
                <section id="lists">
                    <header>
                        <h2>Lists</h2>
                    </header>

                    <h3>Unordered List</h3>
                    <ul>
                        <li>List item one</li>
                        <li>
                            List item two
                            <ul>
                                <li>Nested list item A</li>
                                <li>Nested list item B</li>
                            </ul>
                        </li>
                        <li>List item three</li>
                    </ul>

                    <h3>Ordered List</h3>
                    <ol>
                        <li>First item</li>
                        <li>Second item</li>
                        <li>Third item</li>
                    </ol>

                    <h3>Definition List</h3>
                    <dl>
                        <dt>HTML</dt>
                        <dd>HyperText Markup Language</dd>
                        <dt>CSS</dt>
                        <dd>Cascading Style Sheets</dd>
                    </dl>
                </section>

                {/* Tables */}
                <section id="tables">
                    <header>
                        <h2>Tables</h2>
                    </header>
                    <table border={1} cellPadding={5} cellSpacing={0}>
                        <caption>Employee Data</caption>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Role</th>
                                <th>Salary</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>101</td>
                                <td>John Doe</td>
                                <td>Developer</td>
                                <td>$70,000</td>
                            </tr>
                            <tr>
                                <td>102</td>
                                <td>Jane Smith</td>
                                <td>Designer</td>
                                <td>$65,000</td>
                            </tr>
                            <tr>
                                <td>103</td>
                                <td>Bob Johnson</td>
                                <td>Manager</td>
                                <td>$85,000</td>
                            </tr>
                        </tbody>
                        <tfoot>
                            <tr>
                                <td colSpan={3}>Total Employees</td>
                                <td>3</td>
                            </tr>
                        </tfoot>
                    </table>
                </section>

                {/* Forms */}
                <section id="forms">
                    <header>
                        <h2>Forms & Inputs</h2>
                    </header>
                    <form action="#" method="post">
                        <fieldset>
                            <legend>Personal Information</legend>

                            <label htmlFor="fname">First name:</label>
                            <br />
                            <input
                                type="text"
                                id="fname"
                                name="fname"
                                placeholder="John"
                                required
                            />
                            <br />
                            <br />

                            <label htmlFor="email">Email:</label>
                            <br />
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="john@example.com"
                            />
                            <br />
                            <br />

                            <label htmlFor="pwd">Password:</label>
                            <br />
                            <input type="password" id="pwd" name="pwd" />
                            <br />
                            <br />

                            <label htmlFor="bio">Biography:</label>
                            <br />
                            <textarea
                                id="bio"
                                name="bio"
                                rows={4}
                                cols={50}
                                defaultValue="Describe yourself here..."
                            />
                            <br />
                            <br />
                        </fieldset>

                        <fieldset>
                            <legend>Preferences</legend>

                            <p>Choose your favorite language:</p>
                            <input
                                type="radio"
                                id="html_opt"
                                name="fav_language"
                                value="HTML"
                            />
                            <label htmlFor="html_opt">HTML</label>
                            <br />
                            <input
                                type="radio"
                                id="css_opt"
                                name="fav_language"
                                value="CSS"
                            />
                            <label htmlFor="css_opt">CSS</label>
                            <br />
                            <input
                                type="radio"
                                id="js_opt"
                                name="fav_language"
                                value="JavaScript"
                            />
                            <label htmlFor="js_opt">JavaScript</label>
                            <br />
                            <br />

                            <p>Select skills:</p>
                            <input
                                type="checkbox"
                                id="coding"
                                name="coding"
                                value="Coding"
                                defaultChecked
                            />
                            <label htmlFor="coding">Coding</label>
                            <br />
                            <input
                                type="checkbox"
                                id="design"
                                name="design"
                                value="Design"
                            />
                            <label htmlFor="design">Design</label>
                            <br />
                            <br />

                            <label htmlFor="cars">Choose a car:</label>
                            <select id="cars" name="cars">
                                <optgroup label="Swedish Cars">
                                    <option value="volvo">Volvo</option>
                                    <option value="saab">Saab</option>
                                </optgroup>
                                <optgroup label="German Cars">
                                    <option value="mercedes">Mercedes</option>
                                    <option value="audi">Audi</option>
                                </optgroup>
                            </select>
                        </fieldset>

                        <fieldset>
                            <legend>Advanced Inputs</legend>

                            <label htmlFor="color">Color Picker:</label>
                            <input
                                type="color"
                                id="color"
                                name="color"
                                defaultValue="#ff0000"
                            />
                            <br />
                            <br />

                            <label htmlFor="date">Date:</label>
                            <input type="date" id="date" name="date" />
                            <br />
                            <br />

                            <label htmlFor="vol">Volume (Range):</label>
                            <input
                                type="range"
                                id="vol"
                                name="vol"
                                min="0"
                                max="50"
                            />
                            <br />
                            <br />

                            <label htmlFor="file">File Upload:</label>
                            <input type="file" id="file" name="file" />
                            <br />
                            <br />
                        </fieldset>

                        <br />
                        <button type="button">Regular Button</button>
                        <input type="submit" value="Submit Form" />
                        <input type="reset" value="Reset" />
                    </form>
                </section>

                {/* Media & Objects */}
                <section id="media">
                    <header>
                        <h2>Media & Interactive</h2>
                    </header>

                    <figure>
                        <img
                            src="https://via.placeholder.com/150"
                            alt="Placeholder Image"
                            width="150"
                            height="150"
                        />
                        <figcaption>Fig.1 - A placeholder image.</figcaption>
                    </figure>

                    <h3>Progress Bar</h3>
                    <label htmlFor="file_prog">Downloading:</label>
                    <progress id="file_prog" value="32" max="100">
                        {" "}
                        32%{" "}
                    </progress>

                    <h3>Meter</h3>
                    <label htmlFor="disk_c">Disk usage C:</label>
                    <meter id="disk_c" value="2" min="0" max="10">
                        2 out of 10
                    </meter>

                    <h3>Details & Summary</h3>
                    <details>
                        <summary>Click to expand for more info</summary>
                        <p>
                            This is hidden content that is revealed when the
                            user clicks the summary.
                        </p>
                    </details>
                </section>
            </main>

            <aside>
                <h3>Sidebar</h3>
                <p>
                    This is an aside section, often used for sidebars or related
                    content.
                </p>
            </aside>

            {/* Footer */}
            <footer>
                <p>&copy; 2024 Test Page. All rights reserved.</p>
                <p>
                    <a href="#">Privacy Policy</a> |{" "}
                    <a href="#">Terms of Service</a>
                </p>
            </footer>
        </>
    );
}
