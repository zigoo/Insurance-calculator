import React, { Component } from 'react';
import { connect } from 'react-redux';
import toggleClasses from '../helpers/helper.js'
import '../styles/raty.css';
import '../styles/stan.css';
 import $ from 'jquery';

 function sendHowManyRates(howmany) {
  return {
    type: 'HOW_MANY_RATES',
    howmany
  }
 }

function sendDamage(damage) {
  return {
    type: 'IS_DAMAGE',
    damage
  }
}
class Raty extends Component {
 constructor(){
    super()
    this.handleClick = this.handleClick.bind(this)
    this.state = { rata_selected : 9,
             szkoda : false }
   }

handleClick(el){ 
    const {dispatch} = this.props;

   this.setState({ rata_selected : el})


  //  toggleClasses()
    dispatch( sendHowManyRates( el ) );
   
  
  


}

handleSzkoda (el){
   const {dispatch} = this.props;
   const szkoda = this.state.szkoda;   
    this.setState({ szkoda: el })
       dispatch(sendDamage( el ));
 
}   

render() {
	 console.log(this.state.szkoda)
  return (

  <div>
    <div className ="raty">
      <h1 className ="h1raty">Ilosc rat</h1>
       <div className ="raty_butt">
          <div className="row">
            <div className="col-sm-3">
              <button type="button" className="btn-rata" onClick={()=>this.handleClick(1)}>1 rata</button>
            </div>
            <div className="col-sm-3">
              <button type="button" className="btn-rata" onClick={()=>this.handleClick(2)}>2 raty</button>
            </div>
            <div className="col-sm-3">
              <button type="button" className="btn-rata" onClick={()=>this.handleClick(3)}>3 raty</button>
            </div>
            <div className="col-sm-3">
              <button type="button" className="btn-rata" onClick={()=>this.handleClick(4)}>4 raty</button>
            </div>
          </div>
        </div>
    </div>
	<div className ="stan">
      <h1 className ="h1stan">Stan</h1>
       <div className ="stan_butt">
         <div className="stan__left">
           <div className="btn-group row">
              <div className="col-sm-6">
                <button type="button" className="btn-stan" onClick={()=> this.handleSzkoda(false) }>brak szkod</button>
              </div>
              <div className="col-sm-6">
                <button type="button" className="btn-stan" onClick={()=> this.handleSzkoda(true) } >wyrzadzona szkoda</button>
              </div>
           </div>
         </div>
         <div className="stan__right">
               Brak wyboru oznacza nowego klienta bez przeszlosci
         </div>
         </div>
    </div>




  </div>

   )
}}

const mapStateToProps = (state, props) => {
    return {
       iloscRat : state.ileRat,
       szkoda   : state.szkoda
    }
}

export default connect(mapStateToProps)(Raty);
