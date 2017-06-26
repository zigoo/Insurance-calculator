import React, { Component } from 'react';
import { connect } from 'react-redux';
import {totalpay} from '../helpers/helper.js';
import '../styles/checkout.css';


function between(x, min, max) {
  return x >= min && x <= max;
}

class Checkout extends Component {
 constructor(){
   super()
   this.handleClick = this.handleClick.bind(this)
 }

 handleClick() { 
  var {insuranceValue, hasbeenDamage, howManyRates, dispatch} = this.props;
  var stawka = 130;
  var topaytotal = 130;

  insuranceValue = parseInt(insuranceValue,10);
 
  if (between(insuranceValue, 100, 1000)) {stawka=20;} 
  else if (between(insuranceValue, 1001, 3000)) {stawka=70}
  else if (between(insuranceValue, 3001, 6000)) {stawka=130}
  else if (between(insuranceValue, 6001, 9000)) {stawka=180} 
  else if (between(insuranceValue, 9001, 10000)) {stawka=200}
   
 topaytotal = stawka;
  
 if (hasbeenDamage) {
   topaytotal = topaytotal * 1.08
 } else if (!hasbeenDamage) {
   topaytotal = topaytotal * 0.95
 }

 if (howManyRates === 1) { 
  topaytotal = topaytotal * 0.98
 } else if (howManyRates === 4) {
  topaytotal = topaytotal * 1.04
 }

  topaytotal = Math.ceil(topaytotal);
  dispatch( totalpay(topaytotal) );
 }

  render() {
    const paymentTotal = (this.props.totalToPay !== 0) ? (this.props.totalToPay +' zl') : '';
    return (
     <div>    
       <div className="button__wrapper">
         <button className="button__calc"
                 onClick={()=> this.handleClick()}>
                    Oblicz rate
         </button>
         <div className="totalPay__field">
                  {paymentTotal} 
        </div>   
      </div> 
     </div>
    )
  }
 }

const mapStateToProps = (state, props) => {
    return {  
       insuranceValue: state.sliderValue,
       hasbeenDamage : state.szkoda,
       howManyRates  : state.ileRat,
       totalToPay    : state.payTotal,
    }
}

export default connect(mapStateToProps)(Checkout);