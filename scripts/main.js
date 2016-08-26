$(window).on('scroll',function(){
    if($(window).scrollTop()){
        $('.main').addClass('navbar-min');
    }else{
        $('.main').removeClass('navbar-min');
    }
});
