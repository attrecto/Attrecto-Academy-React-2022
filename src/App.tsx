import { Component } from "react";
import React from "react";

import Navbar from "./components/navbar/Navbar";

interface AppProps {}

interface AppState {
  counter: number;
}

class App extends Component<AppProps, AppState> {
  readonly state: AppState = { counter: 0 };
  private warnMessage: boolean = false;

  UserGreeting() {
    return <h1>Üdv újra!</h1>;
  }

  setCounterValue = (increase: boolean) => {
    this.setState(({ counter }) => {
      const newValue = increase ? counter + 1 : counter - 1;
      if (newValue < 0) {
        this.warnMessage = true;
        return { counter: 0 };
      }
      this.warnMessage = false;
      return { counter: newValue };
    });
  };

  clearValue = () => {
    this.warnMessage = false;
    this.setState({ counter: 0 });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Navbar />
        </header>
        <div className="container d-flex justify-content-center">
          <div className="card my-4  p-4 bg-white shadow text-center">
            {this.warnMessage === true && (
              <div className="pb-2 text-warning">
                Vigyázz! <br /> A számláló értéke nem lehet kisebb, mint 0!
              </div>
            )}
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
          </div>
        </div>
      </div>
    );
  }
}
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <Navbar />
//       </header>
//     </div>
//   );
// }

export default App;
