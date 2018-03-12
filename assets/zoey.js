
 
$(document).ready(function(){

	

    $( "#tabs" ).tabs();

    $('.section-4-list a').on('click' , event =>{

    	$('.section-4-list a').removeClass('active-tab');

		$(event.currentTarget).addClass('active-tab');
	});

      

});

