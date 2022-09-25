import { Component } from "react";
import Button from "../../components/button/button";

interface HomePageProps {}
interface HomePageState {
  counter: number;
}

class HomePage extends Component<HomePageProps, HomePageState> {
  readonly state: HomePageState = { counter: 0 };

  private warnMessage: boolean = false;

  componentDidMount() {
    console.log("Mikor fut le.");
  }
  componentDidUpdate(
    prevProps: Readonly<HomePageProps>,
    prevState: Readonly<HomePageState>,
    snapshot?: any
  ): void {
    console.log("Update meghívódik.");
  }

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
    console.log("render");

    return (
      <div className="container d-flex justify-content-center">
        <div className="card my-4  p-4 bg-white shadow text-center">
          {this.warnMessage === true && (
            <div className="pb-2 text-warning">
              Vigyázz! <br /> A számláló értéke nem lehet kisebb, mint 0!
            </div>
          )}
          <h5>Counter: {this.state.counter}</h5>
          <div className="d-flex justify-content-center flex-wrap gap-2">
            <Button
              color="primary"
              onClick={() => this.setCounterValue(true)}
              className=""
            >
              Increase +
            </Button>
            <Button
              color="secondary"
              onClick={() => this.setCounterValue(false)}
              className=""
            >
              Decrease -
            </Button>
            <Button color="danger" onClick={this.clearValue} className="">
              Töröl
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;
