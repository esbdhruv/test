// home_top_slider
function home_top_slider(){
  $('.ht_slider').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:false,
    autoplaySpeed:5000,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
};
// home_top_slider_end

// ourteam_slider
function team_member_slider(){
  $('.team_member_slider').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow:4,
    slidesToScroll: 1,
    autoplay:true,
    autoplaySpeed:5000,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow:3,
          slidesToScroll: 1,
          infinite: true,
          dots:false
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow:2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint:768,
        settings: {
          slidesToShow:1,
          slidesToScroll: 1
        }
      }
    ]
  });
};
// ourteam_slider_end

function header_mobile_menu(){
  $("#header-inner .et_mobile_menu .menu-item-has-children").click(function(){
    $(this).append('<span class="toggle_btn"></span>');
  });
}
jQuery(document).ready(function(){
  $("#header-inner .et_mobile_menu .menu-item-has-children").click(function(){
    $(this).append('<span class="toggle_btn"></span>');
  });
  $("#header-inner .et_mobile_menu .menu-item-has-children > .toggle_btn").click(function(){
    $(this).parent().toggleClass("active_sub_menu");
  }); 
});


jQuery(document).ready(function(){
  home_top_slider();
  team_member_slider();
});

// client_testimonial_slider
$('.slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.slider-nav',
  adaptiveHeight: true,
});
$('.slider-nav').slick({
  slidesToShow: 7,
  slidesToScroll: 1,
  asNavFor: '.slider-for',
  dots:false,
  centerMode: true,
  centerPadding: '0px',
  focusOnSelect: true,
  responsive: [
      {
        breakpoint:768,
        settings: {
          slidesToShow:5,
          slidesToScroll: 1,
          dots:false
        }
      },
      {
        breakpoint:576,
        settings: {
          slidesToShow:3,
          slidesToScroll: 1,
          dots:false
        }
      },
      {
        breakpoint:375,
        settings: {
          slidesToShow:1,
          slidesToScroll: 1,
          dots:false
        }
      }
    ]
});
// client_testimonial_slider_end

// init Isotope
var $grid = $('.grid').isotope({
  itemSelector: '.element-item',
  layoutMode: 'fitRows',
  getSortData: {
    name: '.name',
    symbol: '.symbol',
    number: '.number parseInt',
    category: '[data-category]',
    weight: function( itemElem ) {
      var weight = $( itemElem ).find('.weight').text();
      return parseFloat( weight.replace( /[\(\)]/g, '') );
    }
  }
});
var filterFns = {
  numberGreaterThan50: function() {
    var number = $(this).find('.number').text();
    return parseInt( number, 10 ) > 50;
  },
  ium: function() {
    var name = $(this).find('.name').text();
    return name.match( /ium$/ );
  }
};
$('#filters').on( 'click', 'button', function() {
  var filterValue = $( this ).attr('data-filter');
  filterValue = filterFns[ filterValue ] || filterValue;
  $grid.isotope({ filter: filterValue });
});
$('#sorts').on( 'click', 'button', function() {
  var sortByValue = $(this).attr('data-sort-by');
  $grid.isotope({ sortBy: sortByValue });
});
$(".filter_btns .button").click(function(){
  $(".filter_btns .button").removeClass("is-checked");
  $(this).addClass("is-checked");
});
// init Isotope end

// faq
$(function() {
    var Accordion = function(el, multiple) {
        this.el = el || {};
        this.multiple = multiple || false;

        var links = this.el.find('.faq_header');
        links.on('click', {
            el: this.el,
            multiple: this.multiple
        }, this.dropdown)
    }

    Accordion.prototype.dropdown = function(e) {
        var $el = e.data.el;
        $this = $(this),
            $next = $this.next();

        $next.slideToggle();
        $this.parent().toggleClass('open');

        if (!e.data.multiple) {
            $el.find('.faq_details').not($next).slideUp().parent().removeClass('open');
        };
    }
    var accordion = new Accordion($('.faq_sec'), false);
});

$(document).on('click', function (event) {
  if (!$(event.target).closest('#faq_accordion').length) {
    $this.parent().toggleClass('open');
  }
});
// faq-end

// slide-up script
    $('.tap_to_top_btn').click(function(){
        $('html').animate({scrollTop: 0});
        $('html').css("scrollBehavior", "auto");
    });
    $('a').click(function(){
        $('html').css("scrollBehavior", "smooth");
    });
    $('body').removeClass("home");
// slide-up script end

// number_counter
var a = 0;
  $(window).scroll(function() {
      if ($('#achievement_counter').length) { // checking if CountTo section exists in the page, if not it will not run the script and avoid errors   
          var oTop = $('#achievement_counter').offset().top - window.innerHeight;
          if (a == 0 && $(window).scrollTop() > oTop) {
          $('.achievement_number').each(function () {
              $(this).prop('Counter',0).animate({
                  Counter: $(this).text()
              }, {
                  duration: 2000,
                  easing: 'swing',
                  step: function (now) {
                      $(this).text(Math.ceil(now));
                  }
              });
          });
          a = 1;
          }
      }
  });
// number_counter_end

// mobile_menu
$(".navabar_toggle").click(function(){
  $(this).toggleClass("close");
  $(".site_header .navbar_nav_collapse").slideToggle();
});
if ($(window).width() < 992) {
  $(".site_header .menu_link").click(function(){
    $(".site_header .navbar_nav_collapse").slideUp();
    $(".navabar_toggle").removeClass("close");
  });      
}
else {
}
// mobile_menu
