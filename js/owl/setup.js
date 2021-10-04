$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 10,
  dots: false,
  responsive: {
    0: {
      items: 2,
      nav: false,
    },
    600: {
      items: 3,
      nav: true,
    },
    1000: {
      items: 5,
      nav: true,
    },
    1400: {
      items: 6,
      nav: true,
    },
  },
});
