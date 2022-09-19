import React from "react";

import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>
    </div>
  );
}

export default App;
import React from "react";
import { Component } from "react";

import Navbar from "./components/navbar/Navbar";

interface AppProps {}

interface AppState {
  counter: number;
  errormsg: string;
  errorstate: boolean;
}

class App extends Component<AppProps, AppState> {
  readonly state: AppState = { counter: 0, errormsg: "", errorstate: false };

  setCounterValue = (increase: boolean) => {
    this.setState(({ counter }) => {
      var newValue = counter;
      // alert(newValue);
      if(!increase && newValue <= 0) {
          this.setState({ errormsg: "A Counter nem lehet kisebb mint 0." });
          this.setState({ errorstate: true });
          // document.getElementById("error_msg").style.display = "block";
          return { counter : newValue};
      } else {
        this.setState({ errormsg: "" });
        this.setState({ errorstate: false });
        newValue = increase ? counter + 1 : counter - 1;
      }
      return { counter: newValue };
    });
  };


  clearValue = () => {
    this.setState({ counter: 0 });
    this.setState({ errormsg: "" });
    this.setState({ errorstate: false });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Navbar />
        </header>
        <div className="container d-flex justify-content-center">
          <div id ="container" className="card my-4  p-4 bg-white shadow text-center">
            <h5>Counter: {this.state.counter}</h5>
            <div className="d-flex justify-content-center flex-wrap gap-2">
              <button
                className="btn btn-primary"
                onClick={() => this.setCounterValue(true)}
              >
                Increase +
              </button>
              <button
                className="btn btn-secondary"
                onClick={() => this.setCounterValue(false)}
              >
                Decrease -
              </button>
              <button className="btn btn-danger" onClick={this.clearValue}>
                Clear
              </button>
            </div>
            <div className="m-3 p-2 alert alert-danger" style={{display: '{this.state.errorstate ? show : none}'}} >{this.state.errormsg}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

