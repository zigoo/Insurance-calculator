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
  switch(true) {
   case( selected <= 4):
    return {
     type:'SELECT_BTN',
     selected
    }
   case( selected >= 5):
    return {
     type:'SELECT_BTNB',
     selected
    } 
  }
}
