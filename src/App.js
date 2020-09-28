import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import MemeEdit from "./components/MemeEdit";
import MemeList from "./components/MemeList";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Route
          exact
          path="/"
          render={(props) => (
            <React.Fragment>
              <MemeList />
            </React.Fragment>
          )}
        />
        <Route
          path="/edit"
          render={(props) => (
            <React.Fragment>
              <MemeEdit />
            </React.Fragment>
          )}
        />
      </div>
    </Router>
  );
}

export default App;
