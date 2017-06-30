import Checkout from '../components/Checkout.js';
import { connect } from 'react-redux';

const mapStateToProps = (state, props) => {
    return {  
       insuranceValue: state.slider_value,
       hasbeenDamage : state.is_damage,
       howManyRates  : state.rates_quantity,
       totalToPay    : state.pay_total,
    }
}

export default connect(mapStateToProps)(Checkout);