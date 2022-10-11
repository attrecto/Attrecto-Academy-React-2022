import { Component } from "react";
import React from "react";

import Navbar from "./components/navbar/Navbar";
import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import UsersPage from "./pages/UsersPage/UsersPage";
import UserPage from "./pages/UserPage/UserPage";
import BadgesPage from "./pages/BadgesPage/BadgesPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import UsersTable from "./pages/UsersTable/UsersTable";

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
          <Route path="/" element={<HomePage />}></Route>
          <Route
            path="*"
            element={<Navigate to="/pagenotfound" replace={true} />}
          ></Route>
          <Route path="/home" element={<HomePage />}></Route>
          <Route path="/users" element={<UsersPage />}></Route>
          <Route path="/badges" element={<BadgesPage />} />
          <Route path="/pagenotfound" element={<NotFoundPage />} />
          <Route path="/user/:id" element={<UserPage />} />
          <Route path="/user" element={<UserPage />} />
          <Route path="/userstable" element={<UsersTable />} />

          
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
