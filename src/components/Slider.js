import React, { Component } from 'react';
import { connect } from 'react-redux';
import { sendSlideValue } from '../helpers/helper.js';
import ReactSlider from 'react-slider';
 
import '../styles/slider.css';



class Slider extends Component {
 constructor(props) {
  super(props)
   this.handleSlider = this.handleSlider.bind(this)
   this.handleSliderDirection = this.handleSliderDirection.bind(this)
 }
 
handleSlider() {
  const {dispatch} = this.props;
  var sliderValue = this._ReactSlider.getValue();
    
  dispatch( sendSlideValue( sliderValue ) ); 
}

handleSliderDirection(dir) {
  const {dispatch} = this.props;
  var sliderValue  = this.props.sliderValue;
 
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
 
        <ReactSlider className="slider"
                     handleClassName="handle"
                     handleActiveClassName="active" 
                     defaultValue={5000} min={0} max={10000} step={100}
                     onAfterChange={ ()=> this.handleSlider() } 
                     ref={(child) => { this._ReactSlider = child; }}
                     value={ this.props.sliderValue}
                     withBars/>
   
        <div className="grid__helpers">
           <div className="grid__helpers__left">100</div>
           <div className="grid__helpers__right text-right">10 000</div>
           <div className="slider__value">{sliderValue}</div>

        <div className="mobile__display">
           <div className="mobile__helper1">
              <span className="glyphicon glyphicon-chevron-left"
                    onClick={()=>this.handleSliderDirection('down')} >
              </span>
            </div>
            <div className="mobile__helper2">{sliderValue}</div>
            <div className="mobile__helper3">
              <span className="glyphicon glyphicon-chevron-right"
                    onClick={()=>this.handleSliderDirection('up')} >
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
 
 