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
  $(document).ready(function(){
    $('[data-nav]').on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
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