import React from 'react';
import { connect } from 'react-redux';
import { sendHowManyRates, 
         sendDamage, toggleselected} from '../helpers/helper.js';
import CustomButton from './CustomButton.js'
import App from './App.js'
import '../styles/content.css';

 
class Content extends React.Component {
 constructor(){
    super()
    this.handleClick = this.handleClick.bind(this)
 }

handleClick(id){ 
  const {dispatch} = this.props;
   
  dispatch( toggleselected(id))
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
                            onClick={this.handleClick} />
            
              <CustomButton id={2}  text="2 raty"
                            onClick={this.handleClick} />
             
              <CustomButton id={3}  text="3 raty"
                            onClick={this.handleClick} />
            
              <CustomButton id={4}  text="4 raty"
                            onClick={this.handleClick} />
          </div>
        </div>
    </div>
    <div className ="stan">
      <h1>Stan</h1>
       <div className ="stan_butt">
         <div className="stan__left">
           <div className="btn-group row">
               <CustomButton id={5}  text="bez szkód"
                             onClick={this.handleClick} />

               <CustomButton id={6}  text="wyrządzona szkoda"
                             onClick={this.handleClick} />

                <div className="col-sm-6">
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

export default connect(App)(Content)