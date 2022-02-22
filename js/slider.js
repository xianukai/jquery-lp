$('.pickup__slider').slick({
  appendArrows: $(".pickup"),
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive:[
    {
        breakpoint: 960,
        settings:{
            slidesToShow:2,
        }
    },
    {
        breakpoint: 600,
        settings:{
            slidesToShow:1,
        }
    }
  ]
});
