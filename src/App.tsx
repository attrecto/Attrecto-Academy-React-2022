import { Component } from "react";

import Navbar from "./components/navbar/Navbar";

interface AppProps {}

interface AppState {
  counter: number;
  notificationMessage: string;
  isNotificationMSGHidden: boolean;
}

class App extends Component<AppProps, AppState> {
  readonly state: AppState = { counter: 0, notificationMessage: "⠀", isNotificationMSGHidden: true };

  setNotficationMessage = (message: string) => {
    this.setState(({notificationMessage}) => {
      return {notificationMessage: message};
    });
  };

  setNotificationMessageHidden = (hiddenState: boolean) => {
    this.setState(({isNotificationMSGHidden}) => {
      return {isNotificationMSGHidden: hiddenState};
    });
  };

  setCounterValue = (increase: boolean) => {
    this.setState(({ counter }) => {
      var newValue = 0;
      if (counter === 0 && !increase) {
        if (this.state.isNotificationMSGHidden) {
          this.setNotificationMessageHidden(false);
          this.setNotficationMessage("A számláló nem mehet 0 alá!");
          newValue = 0;
        }
        else if (!this.state.isNotificationMSGHidden) {
          this.setNotficationMessage("A számláló nem mehet 0 alá!");
          newValue = 0;
        }
      }
      else if (counter === 0 && increase && !this.state.isNotificationMSGHidden) {
        this.setNotificationMessageHidden(true);
        this.setNotficationMessage("⠀");
        newValue = counter + 1;
      }
      else if (increase) {
        newValue = counter + 1;
      }
      else if (!increase) {
        newValue = counter - 1;
      }
      return {counter: newValue};
    });
  };

  clearValue = () => {
    if (!this.state.isNotificationMSGHidden) {
      this.setNotificationMessageHidden(true);
      this.setNotficationMessage("⠀");
    }
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
            <div className="ntfMessageCard my-2 p-1 bg-black shadow text-center">
              <h5 className="ntfMsg" style={{color: "white"}}>{this.state.notificationMessage}</h5>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;