$(document).ready(function(){


 $nav=$('.nav');
 $toggleCollapse=$('.toggle-collapse');


//click event on toggle menu /
 $toggleCollapse.click(function () {
     $nav.toggleClass('collapse')
 })
   //owl carousel for blog 
   $('.owl-carousel').owlCarousel({
     loop:true,
    autoplay:true,
    autoplayTimeout:3000,
    dots:false,
    nav:true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:5,
            nav:true,
            loop:false
        },
      },
    navText:[$('.owl-navigation .owl-nav-prev'), $('.owl-navigation .owl-nav-next')]
   });

$('.move-up span').click(function(){
  $('html,body').animate({
    scrollTop:0
  },1000)
})


});