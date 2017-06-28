import React, { Component } from 'react';
import { connect } from 'react-redux';


class CustomButton extends Component {

 handleClick = () => this.props.onClick(this.props.id)

 render() {
 
let klasa;
 
  let aktyw = this.props.selected;
  if (aktyw === this.props.id) {
        klasa = "btn-active"
  } else klasa = "btn-rata";



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
    selected : state.selbtns
  }
}

export default connect(mapStateToProps)(CustomButton)