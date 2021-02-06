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
    margin: 10,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
          items:2,
          nav:true
      },
      1000:{
        items:3,
        nav:true
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