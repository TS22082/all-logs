import React, { useState, useEffect } from "react";
import "@fontsource/roboto";
import axios from "axios";
import UserContext from "./Context/UserContext";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Landing from "./Pages/Landing/Landing";
import Home from "./Pages/Home/Home";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [userData, setUserData] = useState({
    user: undefined,
    token: undefined,
  });

  const checkLoggedIn = async () => {
    let token = localStorage.getItem("auth-token");

    if (token === null) {
      localStorage.setItem("auth-token", "");
      token = "";
    }

    const tokenRes = await axios.get("/users/tokenIsValid", {
      headers: { "x-auth-token": token },
    });

    if (tokenRes.data) {
      const userRes = await axios.get("/users/", {
        headers: { "x-auth-token": token },
      });

      setUserData({
        token,
        user: userRes.data,
      });
    }
  };

  const logout = () => {
    setUserData({
      token: undefined,
      user: undefined,
    });

    localStorage.setItem("auth-token", "");
  };

  useEffect(() => {
    checkLoggedIn();
  }, []);

  return (
    <div className="App">
      <ToastContainer
        toastStyle={{
          backgroundColor: "crimson",
        }}
      />
      <BrowserRouter>
        <UserContext.Provider value={{ userData, setUserData }}>
          <Switch>
            <Route exact path="/">
              <Landing toast={toast} />
            </Route>
            <Route path="/home">
              <Home logout={logout} />
            </Route>
          </Switch>
        </UserContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
