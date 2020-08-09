import React from 'react';
import './App.css';
import { Switch, Route, Redirect} from "react-router-dom";
import Home from "./Components/Home"
import About from "./Components/About"
import Service from "./Components/Service"
import Contact from "./Components/Contact"
const App = () => {
  return (
    <>
      <Switch>
          <Route exact path="/react-calipso" component={ Home } />
          <Route exact path="/react-calipso/about" component={ About } />
          <Route exact path="/react-calipso/service" component={ Service } />
          <Route exact path="/react-calipso/contact" component={ Contact }  />
          <Redirect to="/react-calipso" />
      </Switch>
    </>
  );
}

export default App;
