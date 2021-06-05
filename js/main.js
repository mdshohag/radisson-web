$(document).ready(function () {
    'use strict';

    //Navbar Background
    $(function () {
        $(document).scroll(function () {
            var $nav = $(".navbar-fixed-top");
            $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
        });
    });

     // Animate loader off screen
     $('.se-pre-con').fadeOut('slow');


    
});
/*
found this function here 
http://stackoverflow.com/a/26831113
*/

function inViewport($el) {
  var H = $(window).height(),
    r = $el[0].getBoundingClientRect(),
    t = r.top,
    b = r.bottom;
  return Math.max(0, t > 0 ? H - t : b < H ? b : H);
}

// $(window).on("scroll resize", function () {
//   var window_offset = inViewport($(".intro"));
//   $(".overlay").height(window_offset);
//   $(".caption").css("bottom", window_offset / 4);
// });

$(document).ready(function(){
    $('.customer-logos').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: false,
        dots: false,
        pauseOnHover: false,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 4
            }
        }, {
            breakpoint: 520,
            settings: {
                slidesToShow: 3
            }
        }]
    });
    // Slide For dots Four
  $('.four_slide-dots').slick({
    slidesToShow:4,
    arrows: true,
    autoplay:true,
    dots: true,
    responsive: [
    {
      breakpoint:1199,
      settings: {
      arrows: true,
      slidesToShow:3
      }
    },
    {
      breakpoint: 768,
      settings: {
      arrows: true,
      slidesToShow:2
      }
    },
    {
      breakpoint: 480,
      settings: {
      arrows: true,
      slidesToShow:1
      }
    }
    ]
  });
});