import React, { Component } from 'react';
import { connect } from 'react-redux';
import { sendSlideValue } from '../helpers/helper.js';
import $ from 'jquery';

import '../styles/slider.css';
import '../styles/sliderCSS.css';


class Slider extends Component {
 constructor(props) {
  super(props)
   this.handleSlider = this.handleSlider.bind(this)
   this.slajder = this.slajder.bind(this)
 }


handleSlider() {
  const {dispatch} = this.props;
  var val= $('#slajder').val(); //doc.getelement??
  
  dispatch( sendSlideValue( val ) );
}

slajder(dir) {
  const {dispatch} = this.props;
  var sliderValue = this.props.sliderValue;
   
  sliderValue = parseInt(sliderValue, 10)

   if (dir==='down') {
     sliderValue -= 100;
   } else  if (dir==='up') {
     sliderValue += 100;
  }
  dispatch( sendSlideValue( sliderValue ) );
}

  render() {
   const sliderValue = this.props.sliderValue;
   return (
    <div>
     <div className="grid__slider">
       <h1>Suma ubezpieczenia</h1>
        <input id="slajder"
             type="range" className="myslider" min="100" max="10000"
             step="100"  defaultValue="5000"  onChange={ () => this.handleSlider()} />

        <div className="grid__helpers">
           <div className="grid__helpers__left">100</div>
           <div className="slider__value">{sliderValue}</div>
           <div className="grid__helpers__right text-right">10 000</div>

        <div className="mobile__display">
           <div className="mobile__helper1">
              <span className="glyphicon glyphicon-chevron-left"
                    onClick={()=>this.slajder('down')} >
              </span>
            </div>
            <div className="mobile__helper2">{sliderValue}</div>
            <div className="mobile__helper3">
              <span className="glyphicon glyphicon-chevron-right"
                    onClick={()=>this.slajder('up')} >
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
   )
}}


const mapStateToProps = (state, props) => {
    return {
       sliderValue : state.sliderValue 
    }
}

export default connect(mapStateToProps)(Slider);
 