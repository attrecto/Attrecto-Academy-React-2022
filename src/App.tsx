import { Component} from "react";
import React from "react";

import Navbar from "./components/navbar/Navbar";
import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import UsersPage from "./pages/UsersPage/UsersPage";
import UserPage from "./pages/UserPage/UserPage";
import BadgesPage from "./pages/BadgesPage/BadgesPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";

interface AppProps {}

interface AppState {
  isMobile: boolean;
}

class App extends Component<AppProps, AppState> {
  //const [width, setWidth] = useState<number>(window.innerWidth);
  readonly state: AppState = { isMobile: window.innerWidth <= 768};
  componentDidMount(){
    window.addEventListener('resize', this.windowsWidthChange);
    return () => {
      window.removeEventListener('resize', this.windowsWidthChange);
  }
  };

 
  windowsWidthChange=() =>{
    this.setState({ isMobile: window.innerWidth <= 768});

  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Navbar />
        </header>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route
            path="*"
            element={<Navigate to="/pagenotfound" replace={true} />}
          ></Route>
          <Route path="/home" element={<HomePage />}></Route>
          <Route path="/users" element={<UsersPage isMobile={this.state.isMobile}/>}></Route>
          <Route path="/badges" element={<BadgesPage />} />
          <Route path="/pagenotfound" element={<NotFoundPage />} />
          <Route path="/user/:id" element={<UserPage />} />
          <Route path="/user" element={<UserPage />} />
        </Routes>
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
