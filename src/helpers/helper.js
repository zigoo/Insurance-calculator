export function sendHowManyRates(howmany) {
  return {
    type: 'HOW_MANY_RATES',
    howmany
  }
 }

export function sendDamage(damage) {
  return {
    type: 'IS_DAMAGE',
    damage
  }
}

export function sendSlideValue(val) {
  return {
    type: 'SEND_SLIDE_VALUE',
    val
  }
} 

export function totalpay(total) {
  return {
    type: 'PAYMENT_TOTAL',
    total
  }
}

export function toggleselected(selected){
  return {
    type:'SELECT_BTN',
    selected
  }
}
