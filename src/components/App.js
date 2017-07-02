import React from 'react';
import Slider from '../containers/Slider.js';
import Checkout from '../containers/Checkout.js';
import Content from './Content.js';
import '../styles/app.css';


class App extends React.Component {
  render() {
    return (
      <div>
        <div className="wrapperTop">
          <div className="container">  
            <div className="title">
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
