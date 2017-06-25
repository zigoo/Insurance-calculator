 import $ from 'jquery';

export default function toggleClasses(element){
	
$(".btn-group > .btn-rata").click(function(){

    $(this).siblings().removeClass("active");
    $(this).addClass("active");
 
 
});

 $(".btn-group > .btn-stan").click(function(){
    $(this).addClass("active").siblings().removeClass("active");
});
}


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