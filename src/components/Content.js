import React, { Component } from 'react';
import { connect } from 'react-redux';
import { sendHowManyRates, 
         sendDamage} from '../helpers/helper.js';
import '../styles/content.css';



 
class Content extends Component {
 constructor(){
    super()
    this.handleClick = this.handleClick.bind(this)
    this.state = {active: null}
 }

handleClick(id){ 
  const {dispatch} = this.props;
  this.setState({ active: id }) 
  dispatch( sendHowManyRates(id) );   
}

handleSzkoda (el){
  const {dispatch} = this.props;
  dispatch( sendDamage(el));
}   

render() { 
  return (
  <div>
    <div className ="raty">
      <h1>Ilosc rat</h1>
       <div className ="raty_butt">
          <div className="row">            
              <CustomButton id={1} className="btn-rata" text="1 rata"
                            active={this.state.active===1} onClick={this.handleClick} />
            
              <CustomButton id={2} className="btn-rata" text="2 raty"
                            active={this.state.active===2} onClick={this.handleClick} />
             
              <CustomButton id={3} className="btn-rata" text="3 raty"
                            active={this.state.active===3} onClick={this.handleClick} />
            
              <CustomButton id={4} className="btn-rata" text="4 raty"
                            active={this.state.active===4} onClick={this.handleClick} />
          </div>
        </div>
    </div>
	<div className ="stan">
      <h1>Stan</h1>
       <div className ="stan_butt">
         <div className="stan__left">
           <div className="btn-group row">
              <div className="col-sm-3">
                <button type="button" className="btn-stan" onClick={()=> this.handleSzkoda(false) }>brak szkod</button>
              </div>
              <div className="col-sm-3">
                <button type="button" className="btn-stan" onClick={()=> this.handleSzkoda(true) } >wyrzadzona szkoda</button>
              </div>
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


class CustomButton extends Component {
 handleClick = () => this.props.onClick(this.props.id)
 

 render() {
  return (
    <div className="col-sm-3">
      <button type="button" 
              className={this.props.active ? "btn-active" : this.props.className}
              onClick={ this.handleClick}>
                {this.props.text}
      </button>
    </div>
  )
}}

export default connect(null)(Content);
