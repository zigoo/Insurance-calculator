import React from 'react';
import { connect } from 'react-redux';
 

class CustomButton extends React.Component {

 handleClick = () => this.props.onClick(this.props.id)

 render() {
 
 let klasa;
 let aktyw  = this.props.selected;
 let aktyw2 = this.props.selectedb;

 if (aktyw === this.props.id && this.props.id <= 4) {
      klasa = "btn-active"
 } else if (aktyw2 === this.props.id && this.props.id >= 5) {
      klasa = "btn-active"
 } else klasa = "btn-rate";


  return (
    <div className="col-sm-3">
      <button type="button" 
              className={klasa}
              onClick={this.handleClick}>
                {this.props.text}  
     </button>
    </div>
  )
}}


const mapStateToProps = (state, props) => {
  return {
    selected  : state.sel_btn_a,
    selectedb : state.sel_btn_b
  }
}

export default connect(mapStateToProps)(CustomButton)