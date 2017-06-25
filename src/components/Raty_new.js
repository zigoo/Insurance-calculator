import React, { Component } from 'react';
import { connect } from 'react-redux';
import toggleClasses from '../helpers/helper.js'
import '../styles/raty.css';
import '../styles/stan.css';

import {sendHowManyRates, sendDamage} from '../helpers/helper.js';

 import $ from 'jquery';


class Raty extends Component {
 constructor(){
    super()
    this.handleClick = this.handleClick.bind(this)
 }

handleClick(el){ 
  const {dispatch} = this.props;

 //  toggleClasses()
  dispatch( sendHowManyRates(el) );  
}

handleSzkoda (el){
  const {dispatch} = this.props;
  dispatch( sendDamage(el));
}   

render() { 
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
              <div className="col-sm-3">
                <button type="button" className="btn-stan" onClick={()=> this.handleSzkoda(false) }>brak szkod</button>
              </div>
              <div className="col-sm-3">
                <button type="button" className="btn-stan" onClick={()=> this.handleSzkoda(true) } >wyrzadzona szkoda</button>
              </div>
              <div className="col-sm-6">
                <div className="stan__right">
                  Brak wyboru oznacza nowego klienta bez przeszlosci
                </div>
              </div>
           </div>
         </div>
         </div>
    </div>
  </div>
 )
}}

export default connect(null)(Raty);
