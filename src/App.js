import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import MemeEdit from "./components/MemeEdit";
import MemeList from "./components/MemeList";
import axios from "axios";
import MemeGenerated from "./components/MemeGenerated";
import Chloe from "./img/chloe1.jpg";

function App() {
  const [memes, setMemes] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.imgflip.com/get_memes")
      .then((response) => setMemes(response.data.data.memes));
  }, []);

  return (
    <Router>
      <div className="App">
        <Header />
        <div className="siteBackground">
          
          <div style={cardArea}>
            <div style={cardContainer}>
              <Route
                exact
                path="/"
                render={(props) => (
                  <React.Fragment>
                    <img src={Chloe} alt="Chloe" className="chloe" />
                    <MemeList memes={memes} />
                  </React.Fragment>
                )}
              />
            </div>
          </div>
        </div>
        <Route
          path="/edit"
          render={(props) => (
            <div className="siteBackground">
              <MemeEdit memes={memes} />
            </div>
          )}
        />
        <Route path="/generated">
          <MemeGenerated />
        </Route>
      </div>
    </Router>
  );
}

export default App;

const cardArea = {
  width: "60%",
  margin: "auto",
};

const cardContainer = {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-evenly",
  alignItems: "center",
};

