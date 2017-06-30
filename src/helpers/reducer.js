const SEND_SLIDE_VALUE = 'SEND_SLIDE_VALUE';
const HOW_MANY_RATES = 'HOW_MANY_RATES';
const IS_DAMAGE = 'IS_DAMAGE';
const PAYMENT_TOTAL = 'PAYMENT_TOTAL';
const SELECT_BTN = 'SELECT_BTN';
const SELECT_BTNB = 'SELECT_BTNB';

const initialState = {
  slider_value: 5000,
  is_damage: false,
  rates_quantity: 1,
  pay_total:0,
  sel_btn_a:'',
  sel_btn_b:''
};


export default function prodReducer (state = initialState , action ) {
  switch (action.type) {
    case SEND_SLIDE_VALUE:   
      return {
        ...state,
           slider_value: action.val
        }
    case HOW_MANY_RATES:    
      return {
        ...state,
           rates_quantity: action.howmany
      }
    case IS_DAMAGE: 
      return {
        ...state,
           is_damage: action.damage
      }
    case PAYMENT_TOTAL:
      return {
        ...state,
           pay_total : action.total
     }
    case SELECT_BTN:
      return {
        ...state,
           sel_btn_a:  action.selected
      }
    case SELECT_BTNB:
      return {
        ...state,
           sel_btn_b:  action.selected
      }
    default: 
      return state;
    }
}


