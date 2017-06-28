import React, { Component } from 'react';
import { connect } from 'react-redux';
import { sendHowManyRates, 
         sendDamage, toggleselected} from '../helpers/helper.js';
import CustomButton from './CustomButton.js'
import '../styles/content.css';

 
class Content extends Component {
 constructor(){
    super()
    this.handleClick = this.handleClick.bind(this)
 }

handleClick(id){ 
  const {dispatch} = this.props;
   
  dispatch( toggleselected(id))
 
  let selected = this.props.selected 
  let idd = this.props.id;
 

  switch(true) {
     case (id <= 4):     
       dispatch( sendHowManyRates(id) );  
      break;
     case (id === 5):
       dispatch( sendDamage(false) );
      break;
     case (id === 6 ):
       dispatch( sendDamage(true) );
      break;
     default:
       break;
   }
 }


render() { 
  return (
  <div>
    <div className ="raty">
      <h1>Ilosc rat</h1>
       <div className ="raty_butt">
          <div className="row">            
              <CustomButton id={1}   text="1 rata"
                            btnGroup={1}
                            onClick={this.handleClick} />
            
              <CustomButton id={2}  text="2 raty"
                            btnGroup={1}
                            onClick={this.handleClick} />
             
              <CustomButton id={3}   text="3 raty"
                            btnGroup={1}
                            onClick={this.handleClick} />
            
              <CustomButton id={4}  text="4 raty"
                           btnGroup={1}
                            onClick={this.handleClick} />
          </div>
        </div>
    </div>
   <div className ="stan">
      <h1>Stan</h1>
       <div className ="stan_butt">
         <div className="stan__left">
           <div className="btn-group row">
                <CustomButton id={5}   text="bez szkod"
                              btnGroup={2}
                               onClick={ this.handleClick} />

                <CustomButton id={6}   text="szkoda"
                              btnGroup={2}
                               onClick={ this.handleClick} />

                <div className="col-sm-6 text-center">
                  <div className="stan__right text-center">
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


 const mapStateToProps = (state, props) => {
  return {
    selected : state.selbtns
  }
}

 export default connect(mapStateToProps)(Content)
 