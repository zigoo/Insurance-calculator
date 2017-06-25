/* eslint-disable */
 

const SEND_SLIDE_VALUE = 'SEND_SLIDE_VALUE';
const HOW_MANY_RATES = 'HOW_MANY_RATES';
const IS_DAMAGE = 'IS_DAMAGE';
const PAYMENT_TOTAL = 'PAYMENT_TOTAL';

const initialState = {
  sliderValue: 5000,
  szkoda: false,
  ileRat: 1,
  payTotal:0
};


export default function prodReducer (state = initialState , action ) {
  switch (action.type) {
    case SEND_SLIDE_VALUE:
     console.log(typeof action.val)
      return {
          ...state,
             sliderValue: action.val
        }
    case HOW_MANY_RATES:
     console.log(state)
      return {
        ...state,
            ileRat: action.howmany
      }
    case IS_DAMAGE:
    console.log(state)
      return {
        ...state,
           szkoda: action.damage
      }
    case PAYMENT_TOTAL:
     return {
      ...state,
        payTotal : action.total
     }
    default: 
      return state;
    }
}

