import {Component} from "react"

import Button from "../../components/Button/Button";


interface HomePageProps {}

interface HomePageState {
  counter: number;
  error?: string;
}


class HomePage extends Component<HomePageProps,HomePageState>{
    readonly state: HomePageState = { counter: 0 , error:""};
    /*
    componentDidMount(){
      console.log("componentDidMount")
    }
    
    componentDidUpdate(prevProps: Readonly<AppProps>, prevState: Readonly<AppState>, snapshot?: any): void {
      console.log("componentDidUpdate")
    }
    */
      setCounterValue = (increase: boolean) => {
        this.setState(({counter}) => {
          const newValue = increase ? counter + 1 : counter - 1;
          if (newValue < 0){
            return { counter: 0, error: "Nem mehetünk 0 alá!" };
          }
          else{
            return { counter: newValue, error: "" };
          }
        });
      };
    
      clearValue = () => {
        this.setState({ counter: 0, error: "" });
      };

      render(){ 
        return(
          <div className="container d-flex justify-content-center">
         <div className="card my-4  p-4 bg-white shadow text-center">
            <h5>Counter: {this.state.counter}</h5>
            <div className="d-flex justify-content-center flex-wrap gap-2">

            <Button 
            onClick={() => this.setCounterValue(true)} 
            className="py-4"
            >
              Increase +
            </Button>

            <Button 
             onClick={() => this.setCounterValue(false)} 
            className="py-4"
            color="secondary"
            >
             Decrease +
            </Button>

            <Button 
            onClick={this.clearValue}
            className="py-4"
            color="danger"
            >
              Clear
            </Button>

            </div>
            {this.state.error ?  <p>{this.state.error}</p> : "" }
            </div>
          </div>
      )}  
}

export default HomePage;