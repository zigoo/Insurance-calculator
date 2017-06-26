import React, { Component } from 'react';
import Slider from './Slider.js';
import Baton from './Baton.js';
import Raty from './Raty.js';
import '../styles/app.css';




class App extends Component {
  render() {
    return (
    <div>
      <div className="wrapper__top">  
       <div className="container">     
        <div className="top_title">
            Kalkulator
        </div>    
       </div> 
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div>
              <Slider />
              <Raty />
            </div>
          </div>
            <Baton />     
       </div>
     </div>
    </div>
    );
  }
}

export default App;
