// import { render } from "@testing-library/react";
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
//React say we have to define render!!
class App extends React.Component{

    constructor(props) {
        super(props);
// THIS IS THE ONLY TIME WE DO DIRECT ASSIGNMENT TO THIS.STATE
        this.state = { latitude: null, errorMessage:"" };

        window.navigator.geolocation.getCurrentPosition(
            position => {
                // WE CALLED SETSTATE!!!
                this.setState({ latitude: position.coords.latitude });
            },
            error => {
                this.setState({ errorMessage: error.message })
            }
        );

    };
// REACT WANTS US TO DEFINE RENDER!!
    render() {
            if (this.state.errorMessage && !this.state.latitude){
                return <div> Error: {this.state.errorMessage}</div>
            }
            // <br/>
            // Error:{this.state.errorMessage}
        
        // </div>
        // )
    }
}





ReactDOM.render(<App />,
    document.querySelector("#root")
)

export default App;
