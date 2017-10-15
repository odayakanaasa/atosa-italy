// General
$(document).ready(function (){
  if ($(window).width() > 1024) {
    if ($('#offers-home-selector .product-card') > 3) {
      $('#offers-home-selector .product-card').last().hide();
    }
  }
});
// Nav-Scroll Function
$(document).ready(function scrollControll(){
  var scrollControll = true;
  $(window).scroll(function navScroll() {
    if ($(document).scrollTop() > 110) {
      $('.nav-main').addClass('nav-scroll');
      $('.nav-main-container').addClass('nav-main-container-scroll');
      $('.logo-small').removeClass('hide');
      $('.ux-btn').addClass('ux-btn-scroll');
      $('.logo').addClass('hide');
      $('.menu-ipad').addClass('hide');
      $('.menu-collapse').removeClass('hide');
      $('#nav-mobile').removeClass('nav-scroll');

      if (scrollControll == true) {
        $('<div class="scroll-fixer"></div>').insertBefore('.scroll-fixer-controll');
        scrollControll = false;
      }

    } else {
      $('.nav-main').removeClass('nav-scroll');
      $('.logo').removeClass('hide');
      $('.logo-small').addClass('hide');
      $('.ux-btn').removeClass('ux-btn-scroll');
      $('.menu-ipad').removeClass('hide');
      $('.menu-collapse').addClass('hide');
      $('#nav-mobile').removeClass('nav-scroll');
      scrollControll = true;
      $('.scroll-fixer').remove();
    }
  });
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

// Search Box
$('.search-btn').on('click', function(){
  if ($(window).width() > 640) {
    if ($(document).scrollTop() < 111) {
      $(window).scrollTop(111);
    };
  }
  $('.search-form').removeClass('hide');
  if ($(window).width() > 1024) {
    $('.menu').addClass('hide');
  }
  setTimeout(function(){ $('.search-box').focus(); }, 200);
});

$('.search-btn-close').on('click', function(){
  $('.search-form').addClass('hide');
  if ($(window).width() > 1024) {
    $('.menu').removeClass('hide');
  }
});

$(window).scroll(function () {
  if ($(window).width() > 640) {
    if ($(document).scrollTop() < 111) {
      $('.search-form').addClass('hide');
      $('.menu').removeClass('hide');
    }
  }
});

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

// Alert
$(document).ready(function() {
  $('.alert-close').on('click', function(){
    $(this).closest('.alert').addClass('hide');
  });
});

// Products description
$(document).ready(function() {
  if ($('.info-specs-table tbody tr td:nth-child(2)') == 0) {
    $(this).closest('.info-specs-table tbody tr').addClass('hide');
  };
});

//Terms Slide
$('.terms-nav a[href^="#"]').click(function (e) {
    e.preventDefault();

    var id = $(this).attr('href');
    var scrollTo = $(id).offset().top-110;

    $('html,body').animate({
        'scrollTop': scrollTo
    }, 700, 'swing');
});

//Maps Unlocker
$('.contact-map').on('click', function(){
  $(this).closest('iframe').css('pointer-events', 'all');
});

//Contact Selector
$('#mail-list').change(function(){
  var mailSelected = $('#mail-list').val();
  console.log(mailSelected);
  // $('#form-mail').attr('action', 'Silvia Palumbo');
  switch (mailSelected) {
    case 'UfficioCommerciale':
        $('#form-mail').attr('action', 'https://formspree.io/'+'info'+'@atosa-italy.it');
        break;

    case 'Amministrazione':
        $('#form-mail').attr('action', 'https://formspree.io/'+'amministrazione'+'@atosa-italy.it');
        break;
  };
});

//SearchBox-Results
$('#search-input').on('input', function(){
  $('#results-container').css('padding', '15px');
});

$('#search-input').on('input', function(){
  if ($('#search-input').val() == '') {
    setTimeout(function(){$('#results-container').css('padding', '0');}, 100);
  };
});

$('#search-input-2').on('input', function(){
  $('#results-container-2').css('padding', '30px 60px');
});

$('#search-input-2').on('input', function(){
  if ($('#search-input-2').val() == '') {
    setTimeout(function(){$('#results-container-2').css('padding', '0');}, 100);
  };
});

$('#search-input-3').on('input', function(){
  $('#results-container-3').css('padding', '30px 60px');
});

$('#search-input-3').on('input', function(){
  if ($('#search-input-3').val() == '') {
    setTimeout(function(){$('#results-container-3').css('padding', '0');}, 100);
  };
});
