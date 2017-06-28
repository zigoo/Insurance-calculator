const SEND_SLIDE_VALUE = 'SEND_SLIDE_VALUE';
const HOW_MANY_RATES = 'HOW_MANY_RATES';
const IS_DAMAGE = 'IS_DAMAGE';
const PAYMENT_TOTAL = 'PAYMENT_TOTAL';
const SELECT_BTN = 'SELECT_BTN';

const initialState = {
  sliderValue: 5000,
  szkoda: false,
  ileRat: 1,
  payTotal:0,
  selbtns:''
};


export default function prodReducer (state = initialState , action ) {
  switch (action.type) {
    case SEND_SLIDE_VALUE:   
      return {
        ...state,
           sliderValue: action.val
        }
    case HOW_MANY_RATES:    
      return {
        ...state,
           ileRat: action.howmany
      }
    case IS_DAMAGE: 
      return {
        ...state,
           szkoda: action.damage
      }
    case PAYMENT_TOTAL:
      return {
        ...state,
           payTotal : action.total
     }
    case SELECT_BTN:
      return {
        ...state,
        selbtns:  action.selected
      }
    default: 
      return state;
    }
}


