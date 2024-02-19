// Defining functional component
function Greeting(props) {
    return `
        <div>
            <h1>Hello, ${props.name}!</h1>
            <p>${props.message}</p>
        </div>
    `;
}

// Defining functional component
function App() {
    return `
        <div>
            <h1>Welcome to My App</h1>
            ${Greeting({ name: 'Hans', message: 'Basic Components!' })}
            ${rude({fruit: "I F**KING HATE IT", rudetext: 'I HATE YOU TOO'})}
        </div>
    `;
}

function rude(props) { 
    return `
        <div> 
            <h1> I hate bananas, ${props.fruit}!</h1>
            <p>${props.rudetext}</p>
        </div>
    `;
}

// Render the App component into the root element
document.getElementById('root').innerHTML = App();


//ttt