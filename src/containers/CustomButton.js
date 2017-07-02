import CustomButton from '../components/CustomButton.js';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    selected: state.sel_btn_a,
    selectedb: state.sel_btn_b
  };
};

export default connect(mapStateToProps)(CustomButton);
