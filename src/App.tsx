import { Component } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import Navbar from "./components/navbar/Navbar";
import BadgesPage from "./pages/BadgesPage/BadgesPage";
import HomePage from "./pages/HomePage/HomePage";
import UsersPage from "./pages/UsersPage/UsersPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";

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
          <Route path="/home" element={<HomePage />} />
          <Route path="/users" element={<UsersPage />} />
          <Route path="/badges" element={<BadgesPage />} />
            <Route path="*" element={<NotFoundPage />} />

          <Route path="*" element={<Navigate to="/home" replace />} />
        </Routes>
      </div>
    );
  }
}

export default App;
