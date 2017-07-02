import React from 'react';
import PropTypes from 'prop-types';
import { totalpay } from '../helpers/helper.js';
import '../styles/checkout.css';


function between(x, min, max) {
  return x >= min && x <= max;
}


class Checkout extends React.Component {
  handleClick() {
    const { hasbeenDamage, howManyRates, dispatch } = this.props;
    let { insuranceValue } = this.props;
    let rate = 130;
    let topaytotal = 130;

    insuranceValue = parseInt(insuranceValue, 10);

    if (between(insuranceValue, 100, 1000)) { rate = 20; }
    else if (between(insuranceValue, 1001, 3000)) { rate = 70; }
    else if (between(insuranceValue, 3001, 6000)) { rate = 130; }
    else if (between(insuranceValue, 6001, 9000)) { rate = 180; }
    else if (between(insuranceValue, 9001, 10000)) { rate = 200; }

    topaytotal = rate;

    if (hasbeenDamage) {
      topaytotal *= 1.08;
    } else if (!hasbeenDamage) {
      topaytotal *= 0.95;
    }

    if (howManyRates === 1) {
      topaytotal *= 0.98;
    } else if (howManyRates === 4) {
      topaytotal *= 1.04;
    }

    topaytotal = Math.ceil(topaytotal);
    dispatch(totalpay(topaytotal));
  }

  render() {
    const paymentTotal = (this.props.totalToPay !== 0) ? this.props.totalToPay + ' zl' : '';
    return (
      <div>
        <div className="button__wrapper">
          <button
            className="button__calc"
            onClick={() => this.handleClick()}
          >
                    Oblicz rate
         </button>
          <div className="totalPay__field text-right">
            {paymentTotal}
          </div>
        </div>
      </div>
    );
  }
}

Checkout.propTypes = {
  insuranceValue: PropTypes.number.isRequired,
  hasbeenDamage: PropTypes.bool.isRequired,
  howManyRates: PropTypes.number.isRequired,
  totalToPay: PropTypes.number.isRequired,
  dispatch: PropTypes.func.isRequired,
};
export default Checkout;
