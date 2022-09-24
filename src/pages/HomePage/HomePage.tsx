import { Component } from "react";

import Button from "../../components/button/Button";

interface HomePageProps {}

interface HomePageState {
  counter: number;
  isValid: boolean;
}

class HomePage extends Component<HomePageProps, HomePageState> {
  readonly state: HomePageState = { counter: 0 , isValid: true};

  setCounterValue = (increase: boolean) => {
    this.setState(({ counter }) => {
      const newValue = increase ? counter + 1 : counter - 1;
      const validate = (newValue >= 0) ? true : false;
      return { counter: validate ? newValue : 0, isValid: validate };
    });
  };

  clearValue = () => {
    this.setState({ counter: 0 , isValid: true});
  };

  render() {
    return (
      <div className="container d-flex justify-content-center">
        <div className="card my-4  p-4 bg-white shadow text-center">
          <h5>Counter: {this.state.counter}</h5>
          <p>{this.state.isValid ? "" : "A counter értéke nem lehet negatív!"}</p>
          <div className="d-flex justify-content-center flex-wrap gap-2">
            <Button onClick={() => this.setCounterValue(true)}>
              Increase +
            </Button>

            <Button
              color="secondary"
              onClick={() => this.setCounterValue(false)}
            >
              Decrease -
            </Button>

            <Button color="danger" onClick={this.clearValue}>
              Clear
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;
