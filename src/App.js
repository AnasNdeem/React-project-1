import React from "react";

import {Blog,  Footer, Header,Features,  Possibilties, WhatGpt3} from './containers';
import { Brand, Cta, Feature, Article, Navbar} from './components';
import './App.css'
const App = () => {
    return (
        <div className="App">
           <Navbar />
           <Header />
           <Brand />
           <WhatGpt3 />
           <Features />
           <Feature/>
           <Possibilties />
           <Cta />
           <Blog />
          <Article />
          
           
           <Footer />
        </div>
    )
}
export default App