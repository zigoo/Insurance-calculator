import Slider from '../components/Slider.js';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    sliderValue: state.slider_value 
  };
};

export default connect(mapStateToProps)(Slider);

