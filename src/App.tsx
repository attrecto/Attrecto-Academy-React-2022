import { Component } from "react";
import React from "react";

import Navbar from "./components/navbar/Navbar";
import Button from "./components/button/button";
import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import UserPage from "./pages/UserPage/UserPage"; 
import BadgesPage from "./pages/BadgesPage/BadgesPage"

interface AppProps {}

interface AppState {
  counter: number;
}

class App extends Component<AppProps, AppState> {
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Navbar />
        </header>
        <Routes>
          <Route path="/home" element={<HomePage />}></Route>
          <Route path="*" element={<Navigate to="/home" replace={true} />}></Route>
          <Route path="/users" element={<UserPage/>}></Route>
          <Route path="/badges" element={<BadgesPage />} />
          <Route path="*" element={<Navigate to="/home" replace />} />

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
