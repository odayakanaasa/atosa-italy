// Nav-Scroll Function
var scrollControll = true;
$(window).scroll(function navScroll() {
  if ($(document).scrollTop() > 110) {
    $('.nav-main').addClass('nav-scroll');
    $('.nav-main-container').addClass('nav-main-container-scroll');
    $('.logo-small').removeClass('hide');
    $('.ux-btn').addClass('ux-btn-scroll');
    $('.logo').addClass('hide');

    if (scrollControll == true) {
      $('<div class="scroll-fixer"></div>').insertBefore('.scroll-fixer-controll');
      scrollControll = false;
    }

  } else {
    $('.nav-main').removeClass('nav-scroll');
    $('.logo').removeClass('hide');
    $('.logo-small').addClass('hide');
    $('.ux-btn').removeClass('ux-btn-scroll');
    scrollControll = true;
    $('.scroll-fixer').remove();
  }
});

// Video Player Button
$('.video-cover i').on('click', function(){
  $('.about-video iframe')[0].src += "&autoplay=1";
  $('.video-cover').animate({
    opacity: '0'
  }, {duration: '1200'});
  setTimeout(function(){ $('.video-cover').css({display: 'none'}); }, 1200);
  ev.preventDefault();
});
