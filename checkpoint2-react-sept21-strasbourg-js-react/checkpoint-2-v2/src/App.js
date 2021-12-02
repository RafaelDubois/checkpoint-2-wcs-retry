import React, { useContext } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import GameLIst from "./components/GameList";
import Header from "./components/Header";
import GameDetails from "./components/GameDetails";

function App() {
  return (
    <Router>
      <div className="App">
        <Header name={"React Game"} />
        <Switch>
          <Route exact path="/">
            <GameLIst />
          </Route>
          <Route path="/games/:id" component={GameDetails} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
