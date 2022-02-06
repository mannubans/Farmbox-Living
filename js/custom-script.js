$(document).ready(function(){
	 $("#configure").click(function(e){
     $("#navbar-wrap").slideToggle();
	 e.preventDefault();
	 
    });


	 $('.single-item').slick({
         autoplay:false,
         autoplaySpeed:2000,
         arrows:true,
         dots:false,
         centerMode:true,
		 centerPadding: '0px',
         slidesToShow:1,
         slidesToScroll:1, 
	responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
       
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
		arrows:false,
		autoplay:true,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
    });     

    /* slider for lunch page */
    $('.tripple-item').slick({
      autoplay:false,
      autoplaySpeed:2000,
      arrows:true,
      dots:false,
      centerMode:true,
      centerPadding: '0px',
      slideMargin: 30,
      slidesToShow:3,
      slidesToScroll:1, 
responsive: [
 {
   breakpoint: 1024,
   settings: {
     slidesToShow: 3,
     slidesToScroll: 1
   }
 },
 {
   breakpoint: 767,
   settings: {
     slidesToShow: 2,
     slidesToScroll: 1
   }
 },
 {
   breakpoint: 480,
   settings: {
 arrows:false,
 autoplay:true,
     slidesToShow: 1,
     slidesToScroll: 1
   }
 }
]
 });    
    
});
