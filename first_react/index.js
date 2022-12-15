// Put text inside div
ReactDOM.render(
    // Wrapped it in a div
    <div>
    <h1>Hi, my name is Bob!</h1>
    <ul>
        <li>Text 1</li>
        <li>Text 2</li>
    </ul>
    </div>, 
    document.getElementById("root")
)

// Custom react component
function MainContent() {
    return (
        <h1>"I'm learning React"</h1>
    )
}

ReactDOM.render(
    <MainContent />,
    document.getElementById("main")
)

// Vanilla Javascript
const h1 = document.createElement("h1")
h1.textContent = "This is an imperative way to program"
h1.className = "header"
document.getElementById("vanilla").append(h1)

// Using variables
const page = (
    <div>
        <h1 className="header">This is JSX</h1>
        <p>This is a paragraph</p>
    </div>
)
ReactDOM.render(
    page,
    document.getElementById("variable")
)

const nav = (
    <nav>
        <h1>Website</h1>
        <ul>
            <li>Pricing</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </nav>
)
ReactDOM.render(
    nav,
    document.getElementById("root")
)



