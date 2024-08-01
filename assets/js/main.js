$(window).scroll(function () {
  var sticky = $(".sticky-top"),
    scroll = $(window).scrollTop();

  if (scroll >= 300) sticky.addClass("fixed");
  else sticky.removeClass("fixed");
});
$(".owl-carousel ").owlCarousel({
  autoplay: true,
  smartSpeed: 1000,
  margin: 20,
  loop: true,
  dotsData: true,
  center: false,
  responsive: {
    0: {
      items: 1,
    },
    768: {
      items: 2,
    },
    992: {
      items: 3,
    },
    1200: {
      items: 4,
    },
  },
});
$(".two ").owlCarousel({
  loop: true,
  autoplay: true,
  margin: 20,
  item: 3,
  nav: true,
});

wow = new WOW({
  boxClass: "wow", // default
  animateClass: "fadeinup", // default
  offset: 0, // default
  mobile: true, // default
  live: true, // default
});
wow.init();
