import { Component } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import Navbar from "./components/navbar/Navbar";
import BadgesPage from "./pages/BadgesPage/BadgesPage";
import HomePage from "./pages/HomePage/HomePage";
import UsersPage from "./pages/UsersPage/UsersPage";
import ErrorPage from "./pages/ErrorPage/ErrorPage";

interface AppProps {}

interface AppState {
  counter: number;
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
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/users" element={<UsersPage />} />
          <Route path="/badges" element={<BadgesPage />} />
          <Route path="/error" element={<ErrorPage />} />
          <Route path="*" element={<Navigate to="/error" replace />} />
        </Routes>
      </div>
    );
  }
}

export default App;
