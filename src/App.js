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
          <Route exact path="https://chiranjibzlt.github.io/React-calipso/" component={ Home } />
          <Route exact path="https://chiranjibzlt.github.io/React-calipso/about" component={ About } />
          <Route exact path="https://chiranjibzlt.github.io/React-calipso/service" component={ Service } />
          <Route exact path="https://chiranjibzlt.github.io/React-calipso/contact" component={ Contact }  />
      </Switch>
    </>
  );
}

export default App;
