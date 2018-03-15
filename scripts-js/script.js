$( document ).ready(function() {
  // буp
$('.menu-icon').bind('click', function() {
  $(this).toggleClass('active');
  $(this).find('div').removeClass('no-animation');
  $(".header").toggle();
});

$('.gallery__miniature').slick({
  arrows: false,
  variableWidth: true,
  infinite: true,
  slidesToShow: 1,
  speed: 800,
  // draggable: false,
  touchMove: false,
  touchThreshold: 100

  // responsive: [
  //   {
  //     breakpoint: 1160,
  //     settings: {
  //       slidesToShow: 6,
  //       slidesToScroll: 6
  //     }
  //   },
  //   {
  //     breakpoint: 768,
  //     settings: {
  //       slidesToShow: 3,
  //       slidesToScroll: 1
  //     }
  //   },
  //   {
  //     breakpoint: 480,
  //     settings: {
  //       slidesToShow: 1,
  //       slidesToScroll: 1
  //     }
  //   }
  //   // You can unslick at a given breakpoint now by adding:
  //   // settings: "unslick"
  //   // instead of a settings object
  // ]
});

$('.instructor__conteiner').slick({
  arrows: false,
  variableWidth: true,
  infinite: false,
  slidesToShow: 1,
  speed: 800,
  // draggable: false,
  touchMove: false,
  touchThreshold: 100

  // responsive: [
  //   {
  //     breakpoint: 1160,
  //     settings: {
  //       slidesToShow: 6,
  //       slidesToScroll: 6
  //     }
  //   },
  //   {
  //     breakpoint: 768,
  //     settings: {
  //       slidesToShow: 3,
  //       slidesToScroll: 1
  //     }
  //   },
  //   {
  //     breakpoint: 480,
  //     settings: {
  //       slidesToShow: 1,
  //       slidesToScroll: 1
  //     }
  //   }
  //   // You can unslick at a given breakpoint now by adding:
  //   // settings: "unslick"
  //   // instead of a settings object
  // ]
});
});