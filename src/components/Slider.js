import React  from 'react';
import ReactSlider from 'react-slider';
import { sendSlideValue } from '../helpers/helper.js';
import '../styles/slider.css';
 

class Slider extends React.Component {
 constructor(props) {
  super(props)
   this.handleSliderUpdate = this.handleSliderUpdate.bind(this)
   this.handleSliderDirection = this.handleSliderDirection.bind(this)
 }
 
handleSliderUpdate() {
  const {dispatch} = this.props;
  let sliderValue = this._ReactSlider.getValue();
    
  dispatch( sendSlideValue( sliderValue ) ); 
}

handleSliderDirection(dir) {
  const {dispatch} = this.props;
  let sliderValue  = this.props.sliderValue;
 
   sliderValue = parseInt(sliderValue, 10)

   if (dir==='down') {
        sliderValue -= 100;
   } else  if (dir==='up') {
        sliderValue += 100; }

   dispatch( sendSlideValue( sliderValue ) );
}

  render() {
   const sliderValue = this.props.sliderValue;
   return (
    <div>
     <div className="slider">
       <h1>Suma ubezpieczenia</h1>
 
        <ReactSlider className="__slider"
                     handleClassName="handle"
                     handleActiveClassName="active" 
                     defaultValue={5000} min={0} max={10000} step={100}
                     onAfterChange={ ()=> this.handleSliderUpdate() } 
                     ref={(child) => { this._ReactSlider = child; }}
                     value={ this.props.sliderValue}
                     withBars/>
   
        <div className="slider__helpers">
           <div className="slider__helpers--left">100</div>
           <div className="slider__helpers--right text-right">10 000</div>
           <div className="slider__value">{sliderValue}</div>

        <div className="slider__mobile__display">
           <div className="slider__mobile--helperLeft">
              <span className="glyphicon glyphicon-chevron-left"
                    onClick={()=>this.handleSliderDirection('down')} >
              </span>
            </div>
            <div className="slider__mobile--helperMiddle">{sliderValue}</div>
            <div className="slider__mobile--helperRight">
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

export default Slider;