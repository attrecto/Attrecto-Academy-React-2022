import { Component } from "react";

import Navbar from "./components/navbar/Navbar";

interface AppProps {}




interface AppState {
  counter: number;
  alert: boolean;
}

class AlertDialog extends Component{
  render() {
    return (
        <div className="alert alert-warning" role="alert">
          Nyeee negatív! ;(
        </div>
    );
  }
}
class App extends Component<AppProps, AppState> {
  readonly state: AppState = { counter: 0, alert: false};
  setCounterValue = (increase: boolean) => {
    this.setState(({ counter }) => {
      const attemptGoUnderZero = counter - 1 < 0;
      const newValue = increase ? counter + 1 : attemptGoUnderZero ? 0 : counter - 1;

      if(!increase && attemptGoUnderZero) {
        this.setState(({alert}) => {
          return { alert: true};
        });
      }
      else if (increase && this.state.alert)
      {
        this.setState(({alert}) => {
          return { alert: false};
        });
      }

      return { counter: newValue };
    });
  };

  clearValue = () => {
    this.setState({ counter: 0, alert: false });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Navbar />
        </header>
        <div className="container d-flex justify-content-center">
          <div className="card my-4  p-4 bg-white shadow text-center">
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
            { this.state.alert ?
                <div>
                  <br/>
                  <AlertDialog/>
                </div> : <br/>
            }
          </div>
        </div>
      </div>
    );
  }
}

export default App;
