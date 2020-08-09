import React from 'react';
import './App.css';
import { Switch,Route} from "react-router-dom";
import Home from "./Components/Home"
import About from "./Components/About"
import Service from "./Components/Service"
import Contact from "./Components/Contact"
const App = () => {
  return (
    <>
      <Switch>
          <Route exact path="/" component={ Home } />
          <Route exact path="/about" component={ About } />
          <Route exact path="/service" component={ Service } />
          <Route exact path="/contact" component={ Contact }  />
      </Switch>
    </>
  );
}

export default App;
