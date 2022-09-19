import { Component } from "react";
import { Routes,Route, Navigate } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import HomePage from "./pages/HomePage/HomePage";
import UsersPage from "./pages/Users/UsersPage";
import BadgesPage from "./pages/BadgesPage/BadgesPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";

interface AppProps {}

interface AppState {
  counter: number;
  error?: string;
}



class App extends Component<AppProps, AppState> {
 
  render() {
    console.log("render");
    return (
      <div className="App">
        <header className="App-header">
          <Navbar />
        </header>  
          <Routes>
              <Route path="/home" element={<HomePage/>}/>
              <Route path="/users" element={<UsersPage/>}/>
              <Route path="/badges" element={<BadgesPage/>}/>
              <Route path="/notfound" element={<NotFoundPage/>}/>
              <Route path="/" element={<Navigate to="/home" replace />}/>
              <Route path="*" element={<Navigate to="/notfound" replace />}/>
          </Routes>
        </div>
    );
  }
}

export default App;
