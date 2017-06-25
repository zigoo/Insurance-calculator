 import $ from 'jquery';

function toggleClasses(element){
	
$(".btn-group > .btn-rata").click(function(){

    $(this).siblings().removeClass("active");
    $(this).addClass("active");
 
 
});

 $(".btn-group > .btn-stan").click(function(){
    $(this).addClass("active").siblings().removeClass("active");
});
}

export default toggleClasses;