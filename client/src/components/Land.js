import React, { Fragment } from "react";

import Home from "./Home";
import About from "./About";
import Contact from "./Contact";

const Land = () =>{
    return(
        <Fragment>
        <main>
              <Home/>
              <About/>
              <Contact/>
        </main>
        </Fragment>
        
    );
}

export default Land;