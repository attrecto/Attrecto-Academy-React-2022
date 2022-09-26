import { Component } from "react";

import Button from "../../components/button/Button";

interface HomePageProps {}

interface HomePageState {
  counter: number;
  isNegative: boolean;
}

class HomePage extends Component<HomePageProps, HomePageState> {
  readonly state: HomePageState = { counter: 0, isNegative: true };

  setCounterValue = (increase: boolean) => {
    this.setState(({ counter }) => {
      const newValue = increase ? counter + 1 : counter - 1;
      const negative = (newValue >= 0)? true : false;
      return { counter: negative ? newValue:0, isNegative: negative};
    });
  };

  clearValue = () => {
    this.setState({ counter: 0, isNegative: true });
  };

  render() {
    return (
      <div className="container d-flex justify-content-center">
        <div className="card my-4  p-4 bg-white shadow text-center">
          <h5>Counter: {this.state.counter}</h5>
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
