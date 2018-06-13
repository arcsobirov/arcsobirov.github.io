/*$(window).scroll(function(){
    
    var ratio = ( $(window).scrollTop() / ($(document).height() - $(window).height() )) * 100;
    
    
    $('#float-btn').css({'transform' : 'translate(' + ($("#header-site").height() +          )+')'});
});*/
    
    


    $('button#open-menu').click(function() {
        $('#menu-site').css('display', 'block');
    });
    
    $('#close-menu').click(function(){
        $('#menu-site').css('display', 'none');
    });
  


(function () {
  var toggle = document.querySelector('.nav-toggle');
  
  toggle.addEventListener('click', function(e) {
    this.classList.toggle('opened');
  });
})();


 $('#makerow').click(function() {
        $('.good-inside .goods-box').addClass('makerow');
     $('button#makerow').css('background-image', 'url(img/ord2.png)');
});
 $('#makeflat').click(function() {
        $('.good-inside .goods-box').removeClass('makerow');
     $('button#makerow').css('background-image', 'url(img/ord-hover2.png)');
});