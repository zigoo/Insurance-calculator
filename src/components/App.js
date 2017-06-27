import React, { Component } from 'react';
import Slider from './Slider.js';
import Checkout from './Checkout.js';
import Content from './Content.js';
import '../styles/app.css';


class App extends Component {
  render() {
    return (
    <div>
      <div className="wrapper__top">  
       <div className="container">     
        <div className="top_title">
            <h1>Kalkulator</h1>
        </div>    
       </div> 
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div>
              <Slider />
              <Content />
            </div>
          </div>
              <Checkout />     
       </div>
     </div>
    </div>
    );
  }
}

export default App;
