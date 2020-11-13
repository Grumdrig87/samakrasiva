jQuery(document).ready(function($){    

    var $slider = $('[data-result]');
    if($slider.length>0){
      $slider.slick({
        dots: true,
        speed: 300,
        slidesToShow: 2,
        responsive: [{
          breakpoint: 993,
          settings: {
            slidesToShow: 1
          }
        }]
      });
    }
    function sliderless () {
      var $sliderLess = $('[data-less]');
      if($sliderLess.length>0){
        $sliderLess.slick({
          dots: false,
          speed: 300,
          slidesToShow: 6,
          asNavFor: '[data-cardvideo]',
          arrows: false,
          focusOnSelect: true,
          responsive: [{
            breakpoint: 993,
            settings: {
              slidesToShow: 4,
              arrows: false
            }
          },
          {
              breakpoint: 768,
              settings: {
                slidesToShow: 2,
                arrows: false
              }
          }]
        });
      }
    };
    function slidervid () {
      var $sliderLessVid = $('[data-cardvideo]');
      if($sliderLessVid.length>0){
        $sliderLessVid.slick({
          dots: false,
          speed: 300,
          slidesToShow: 1,
          asNavFor: '[data-less]',
          arrows: true,
          centerMode: true,
          focusOnSelect: true,
          variableWidth: true,
          responsive: [{
            breakpoint: 993,
            settings: {
              slidesToShow: 1,
              centerMode: false,
              variableWidth: false,
            }
          }]
        });
      }
    };
    sliderless ();
    slidervid ();

    // slide to id
    $('[data-nav]').on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
      // tabs
    $('[data-prog]').on('click', function() {
      $('[data-less]').slick('unslick'); 
      $('[data-cardvideo]').slick('unslick');
        $(this).addClass('active').siblings().removeClass('active')
          .closest('.prog__page').find('div.prog__content').removeClass('active').eq($(this).index()).addClass('active');
          sliderless ();
          slidervid ();
        });
      //adaptive
      if ($(window).width() < 993) {
        var $slidersec = $('[data-progs]');
        if($slidersec.length>0){
          $slidersec.slick({
            dots: true,
            speed: 300,
            slidesToShow: 2,
            responsive: [{
              breakpoint: 768,
              settings: {
                slidesToShow: 1
              }
            }]
          });
        }
        var $sliderwho = $('[data-who]');
        if($sliderwho.length>0){
          $sliderwho.slick({
            dots: true,
            speed: 300,
            slidesToShow: 2,
            responsive: [{
              breakpoint: 768,
              settings: {
                slidesToShow: 1
              }
            }]
          });
        }
      }
})