import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import MemeEdit from "./components/MemeEdit";
import MemeList from "./components/MemeList";
import axios from "axios";
import Background from "./img/bg3.png";
import MemeGenerated from "./components/MemeGenerated";

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
        <div style={siteBackgroundStyle}>
          <div style={cardArea}>
            <div style={cardContainer}>
              <Route
                exact
                path="/"
                render={(props) => (
                  <React.Fragment>
                    <MemeList memes={memes} />
                  </React.Fragment>
                )}
              />
            </div>
          </div>

          <Route
            path="/edit"
            render={(props) => (
              <React.Fragment>
                <MemeEdit memes={memes} />
              </React.Fragment>
            )}
          />
          <Route path="/generated">
            <MemeGenerated />
          </Route>
        </div>
      </div>
    </Router>
  );
}

export default App;

const siteBackgroundStyle = {
  // background: `url(${Background}) no-repeat center center fixed`,
  // backgroundSize: 'contain'
};

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
