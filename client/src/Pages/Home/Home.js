import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import UserContext from "../../Context/UserContext";
import axios from "axios";

const Home = (props) => {
  const { userData } = useContext(UserContext);
  const history = useHistory();

  useEffect(() => {
    if (!userData.user) {
      history.push("/");
    }
  }, [userData.user, history]);

  return (
    <div>
      <button onClick={() => props.logout()}>Logout</button>
      <h1>hello from home page</h1>
    </div>
  );
};

export default Home;
