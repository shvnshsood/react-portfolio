import React from "react";

import Home from "./Home"

import {Switch,Route} from "react-router-dom";
import Aboutus from "./pages/About";

import Contact from "./pages/Contact";
import Services from "./pages/Services";
import Errors from "./pages/Error";



const App = () => {
  return (<>

    <Switch>
    <Route exact path = "/" component ={Home} />
    <Route path = "/about" component ={Aboutus} />
    <Route path = "/contact" component ={Contact} />
    <Route path = "/services" component ={Services} />
    <Route component={Errors}></Route>
    </Switch>
  </>
  );
};

export default App;