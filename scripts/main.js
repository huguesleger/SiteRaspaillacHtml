
//Scroll Menu
$(window).on('scroll', function(){
	if( $(window).scrollTop()>100 ){
		$('.navbar-main').addClass('navbar-min');
		$('.navbar-main').addClass('navbar-brand-min');
		$('.navbar-main').addClass('navbar-nav-min');
		$('.navbar-main').removeClass('navbar-nav');
			$('.navbar-main').removeClass('navbar-brand');

	} else {
		$('.navbar-main').removeClass('navbar-min');
		$('.navbar-main').removeClass('navbar-brand-min');
		$('.navbar-main').removeClass('navbar-nav-min');
	}

});
