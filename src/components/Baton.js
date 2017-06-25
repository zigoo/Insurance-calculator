import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../styles/baton.css';

function totalpay(total) {
  return {
    type: 'PAYMENT_TOTAL',
    total
  }
}


function between(x, min, max) {
  return x >= min && x <= max;
}

class Baton extends Component {
 constructor(){
   super()
   this.handleClick = this.handleClick.bind(this)
   this.state = { totalpay : 0}
 }

 handleClick() {
  var {insuranceValue, hasbeenDamage, howManyRates, dispatch} = this.props;
  var stawka = 130;
  var toPay = 130;

  insuranceValue = parseInt(insuranceValue,10);
   console.log(insuranceValue)
  if (between(insuranceValue, 100, 1000)) {
      stawka=20;
  } else if (between(insuranceValue, 1001, 3000)) {
      stawka=70
  } else if (between(insuranceValue, 3001, 6000)) {
    stawka=130
  } else if (between(insuranceValue, 6001, 9000)) {
    stawka=180
  } else if (between(insuranceValue, 9001, 10000)) {
      stawka=200
  }
   
 toPay = stawka;
 console.log('__szkoda?? '+ hasbeenDamage)
 if (hasbeenDamage) {
   toPay = toPay * 1.08
 }
 else if (!hasbeenDamage) {
   toPay = toPay * 0.95
 }

 if (howManyRates === 1) { 
  toPay = toPay * 0.98
 } else if (howManyRates === 4) {
  toPay = toPay * 1.04
 }

  toPay = Math.ceil(toPay);
  this.setState({totalpay : toPay})

  dispatch( totalpay(toPay))
 }

  render() {
    const paymentTotal = this.props.totalToPay !== 0 ? this.props.totalToPay : '';
    return (
     <div >
       <div className="button__wrapper">
          
           <button className="button__calc"
                 onClick={()=> this.handleClick()}>
             Oblicz rate
           </button>
           <div className="totalPay__field">
              {paymentTotal} zl
           </div>   
       </div>
     </div>
    )
  }
 }

const mapStateToProps = (state, props) => {
    return {  
       insuranceValue: state.skladka.sliderValue,
       hasbeenDamage : state.skladka.szkoda,
       howManyRates  : state.skladka.ileRat,
       totalToPay  : state.skladka.payTotal,
    }
}

export default connect(mapStateToProps)(Baton)