import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { StarshipProvider, useElements } from "../contexts/ShipsContext";
import StarshipList from "../components/Ships";
import Navbar from "../components/Navbar";
import WelcomePage from "./WelcomePage";
import Signup from "./Signup";
import Login from "./Login";
import ProtectedRoute from "../utils/ProtectedRoute";

const App: React.FC = () => {
  const { isUserLoggedIn } = useElements();
  return (
    <div className="app-container">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<WelcomePage />}></Route>
          <Route path="/users" element={<Signup />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route
            element={
              <ProtectedRoute
                canActivate={isUserLoggedIn}
                redirectPath="/login"
              />
            }
          >
            <Route
              path="/starships"
              element={
                <StarshipProvider>
                  <StarshipList />
                </StarshipProvider>
              }
            ></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
