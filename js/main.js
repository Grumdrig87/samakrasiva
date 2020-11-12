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
  var $sliderLess = $('[data-less]');
	if($sliderLess.length>0){
		$sliderLess.slick({
			dots: false,
			speed: 300,
      slidesToShow: 6,
      asNavFor: '[data-cardvideo]',
      arrows: false,
      focusOnSelect: true
		});
  }
  var $sliderLessVid = $('[data-cardvideo]');
	if($sliderLessVid.length>0){
		$sliderLessVid.slick({
			dots: false,
			speed: 300,
      slidesToShow: 1,
      asNavFor: '[data-less]',
      arrows: false,
      centerMode: true,
      focusOnSelect: true,
      variableWidth: true
		});
	}
  $(document).ready(function(){
    $('[data-nav]').on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
});
      // tabs
    $('[data-prog]').on('click', function() {
      $('[data-less]').slick('unslick'); 
      $('[data-cardvideo]').slick('unslick');
        $(this).addClass('active').siblings().removeClass('active')
          .closest('.prog__page').find('div.prog__content').removeClass('active').eq($(this).index()).addClass('active');
          $('[data-less]').slick({
            dots: false,
            speed: 300,
            slidesToShow: 6,
            asNavFor: '[data-cardvideo]',
            arrows: false,
            focusOnSelect: true
          });  
          $('[data-cardvideo]').slick({
            dots: false,
            speed: 300,
            slidesToShow: 1,
            asNavFor: '[data-less]',
            arrows: false,
            centerMode: true,
            focusOnSelect: true,
            variableWidth: true
          });
        });
    // // faq
    // $('[data-faq]').click(function(){
    //   $(this).toggleClass('open');
    //   $(this).find('.faq__card-help').toggleClass('open');
    //   $(this).find('p').slideToggle(300);
    // })
      // adaptive

      if ($(window).width() < 993) {
        var $slidersec = $('[data-prog]');
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