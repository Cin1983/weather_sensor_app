import React from "react";
import ReactDOM from "react-dom";

const App = () => {
    
    window.navigator.geolocation.getCurrentPosition(
        position => console.log(position),
        error => console.log(error)
    );
    
    return <div>Hey you, doe je best he!</div>
     };












ReactDOM.render(<App />,
    document.querySelector("#root")
)

export default App;
