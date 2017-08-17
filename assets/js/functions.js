// Nav-Scroll Function
$(document).ready(function scrollControll(){
  if ($(window).width() > 640) {
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
  };

  if ($(window).width() <= 1024 && $(window).width() > 640) {
    $(window).scroll(function navScroll() {
      if ($(document).scrollTop() > 110) {
        $('.menu').addClass('hide');
        $('.menu-collapse').removeClass('hide');
      } else {
        $('.menu').removeClass('hide');
        $('.menu-collapse').addClass('hide');
      };
    });
  };

  if ($(window).width() <= 640) {
    $('.nav-main').addClass('nav-scroll');
    $('.nav-main-container').addClass('nav-main-container-scroll');
    $('.logo-small').removeClass('hide');
    $('.ux-btn').addClass('ux-btn-scroll');
    $('.logo').addClass('hide');
    $('.menu-collapse').removeClass('hide');
    $('<div class="scroll-fixer"></div>').insertBefore('.scroll-fixer-controll');
  };
});

// $(window).resize(function(){
//   clearTimeout(window.resizedFinished);
//   window.resizedFinished = setTimeout(function(){ location.reload(); }, 600);
// });

// Video Player Button
$('.video-cover i').on('click', function(){
  $('.about-video iframe')[0].src += "&autoplay=1";
  $('.video-cover').animate({
    opacity: '0'
  }, {duration: '1200'});
  setTimeout(function(){ $('.video-cover').css({display: 'none'}); }, 1200);
  ev.preventDefault();
});

// Search Box
$('#search-btn').on('click', function(){
  if ($(window).width() > 640) {
    if ($(document).scrollTop() < 111) {
      $(window).scrollTop(111);
    };
  };
  $('.menu').addClass('hide');
  $('.search-form').removeClass('hide');
  $('.ux-btn').addClass('hide');
  setTimeout(function(){ $('#search-box').focus(); }, 200);
});

if ($(window).width() > 1024) {
  $('.search-btn-close').on('click', function(){
    $('.menu').removeClass('hide');
    $('.search-form').addClass('hide');
    $('.ux-btn').removeClass('hide')
  });
};

if ($(window).width() < 1024) {
  $('.search-btn-close').on('click', function(){
    $('.search-form').addClass('hide');
    $('.ux-btn').removeClass('hide')
  });
};

if ($(window).width() > 640) {
  $(window).scroll(function () {
    if ($(document).scrollTop() < 111) {
      $('.menu').removeClass('hide');
      $('.search-form').addClass('hide');
      $('.ux-btn').removeClass('hide')
    }
  });
};

// Side Bar
if ($(window).width() > 640) {
  $('.menu-collapse').on('click', function(){
    $('.side-bar').removeClass('hide');
    $('.side-bar-overlay').removeClass('hide');
    $('.side-bar').animate({left: '0'}, {duration: '500'});
    $('.side-bar-overlay').animate({opacity: '1'}, {duration: '500'});
  });

  $('.side-bar-overlay').on('click', function(){
    $('.side-bar').animate({left: '-55%'}, {duration: '500'});
    $('.side-bar-overlay').animate({opacity: '0'}, {duration: '500'});
    setTimeout(function(){$('.side-bar').addClass('hide'); $('.side-bar-overlay').addClass('hide');}, 500);
  });
};

if ($(window).width() < 640) {
  $('.menu-collapse').on('click', function(){
    $('.side-bar').removeClass('hide');
    $('.side-bar-overlay').removeClass('hide');
    $('.side-bar').animate({left: '0'}, {duration: '500'});
    $('.side-bar-overlay').animate({opacity: '1'}, {duration: '500'});
  });

  $('.side-bar-overlay').on('click', function(){
    $('.side-bar').animate({left: '-75%'}, {duration: '500'});
    $('.side-bar-overlay').animate({opacity: '0'}, {duration: '500'});
    setTimeout(function(){$('.side-bar').addClass('hide'); $('.side-bar-overlay').addClass('hide');}, 500);
  });
};
