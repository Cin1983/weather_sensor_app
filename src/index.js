// import { render } from "@testing-library/react";
import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";

class App extends React.Component {
  state = { latitude: null, errorMessage: "" };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ latitude: position.coords.latitude }),
      (error) => this.setState({ errorMessage: error.message })
    );
  }
  renderContent() {
    if (this.state.errorMessage && !this.state.latitude) {
      return <div> Error: {this.state.errorMessage}</div>;
    }
    if (!this.state.erroMessage && this.state.latitude) {
      return <SeasonDisplay latitude={this.state.latitude} />;
    }
    return <Spinner message="Please accept location request..." />;
  }

  // REACT WANTS US TO DEFINE RENDER!!
  render() {
    return <div className="border-red">{this.renderContent()}</div>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;

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
