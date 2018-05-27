/*$(window).scroll(function(){
    
    var ratio = ( $(window).scrollTop() / ($(document).height() - $(window).height() )) * 100;
    
    
    $('#float-btn').css({'transform' : 'translate(' + ($("#header-site").height() +          )+')'});
});*/
    
    


    $('img#open-menu').click(function() {
        $('#menu-site').css('display', 'block');
    });
    
    $('#close-menu').click(function(){
        $('#menu-site').css('display', 'none');
    });
  