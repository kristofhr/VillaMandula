  $(window).scroll(function(){

    var wScroll = $(this).scrollTop();

    $('.first-logo').css({
      'transform' : 'translate(0px, '+ wScroll /2.16 +'%)'
    });

});
