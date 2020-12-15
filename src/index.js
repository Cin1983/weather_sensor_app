import React from "react";
import ReactDOM from "react-dom";

// functional component
// const App = () => {
    
//     window.navigator.geolocation.getCurrentPosition(
//         position => console.log(position),
//         error => console.log(error)
//     );
    
//     return <div>Latitude:</div>
//      };

// class based component
class App extends React.Component{
    render() {
        window.navigator.geolocation.getCurrentPosition(
                    position => console.log(position),
                    error => console.log(error)
        );
        return <div>Latitude: </div>
    }
}









ReactDOM.render(<App />,
    document.querySelector("#root")
)

export default App;
