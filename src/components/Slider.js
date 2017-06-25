import React, { Component } from 'react';
import { connect } from 'react-redux';
import { sendSlideValue } from '../helpers/helper.js';
import $ from 'jquery';

import '../styles/slider.css';
import '../styles/sliderCSS.css';



class Slider extends Component {
 constructor(props) {
  super(props)
  this.slajd = this.slajd.bind(this)
  this.slajder = this.slajder.bind(this)
  this.state = { slidValue : '5000' }
  this.checkStawka = this.checkStawka.bind(this)
 }

checkStawka(){
  const range = this.state.slidValue;
  console.log(range)
}

slajd() {
  const {dispatch} = this.props;
  var val= $('#slajder').val(); //doc.getelement??
  this.setState({ slidValue : val })

  dispatch( sendSlideValue( val ) );
}

slajder(dir) {
 if (dir==='down') {
  console.log(dir)
 } else
 if (dir==='up') {
  console.log(dir)
 }
}

  render() {
   const slidValue = this.state.slidValue;
   return (
  <div>
              <div>


         <div className="grid__slider">
          <h1>Suma ubezpieczenia</h1>
          <input id="slajder"
             type="range"
             className="myslider"
             min="100"
             max="10000"
             step="100"
             defaultValue="5000"
                 onChange={ () => this.slajd()} />

        <div className="grid__helpers">
            <div className="grid__helpers__left">100</div>
            <div className="grid__helpers__right text-right">10 000</div>
              <div className="slider__value">{slidValue}</div>

        <div className="mobile__display">
            <div className="mobilka_wrap1"><span className="glyphicon glyphicon-chevron-left"
                 onClick={()=>this.slajder('down')} ></span></div>
              <div className="mobilka_wrap2">{slidValue}</div>
            <div className="mobilka_wrap3"><span className="glyphicon glyphicon-chevron-right"
                 onClick={()=>this.slajder('up')} ></span></div>
          </div>
        </div>



    </div>
 </div>
 </div>

   )
}}


const mapStateToProps = (state, props) => {
    return {
       stawka: state.skladka.stawka
    }
}

export default connect(mapStateToProps)(Slider);


//export default Slider;