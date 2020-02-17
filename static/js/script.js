$(document).ready(function(){

   // jQuery.scrollSpeed(100, 800);
    
  $('#richText').fadeIn();
  $("#card").fadeIn(2000);
  $("#card2").fadeIn(3000);
  $("#card3").fadeIn(4000);
  $("#card4").fadeIn(2000);
  $("#card5").fadeIn(3000);
  $("#card6").fadeIn(4000);
   
    window.onscroll = function() {scrollFunction()};
      
      function scrollFunction() {
        
      if (document.body.scrollTop >= 200 || document.documentElement.scrollTop >= 200) {
        $("#suscribe").animate({
          opacity: '2',
        },4000) 
      }
      
  
    }


});
  

$(document).ready(function(){
  $('.display_image').fadeIn(5000);
  $('.banner-heading').fadeIn(7000);
  $('.button').animate({
    opacity: '2',
  },10000,'swing') 

  if (document.body.scrollTop >= 300 || document.documentElement.scrollTop >= 300) {
        $(".abouts").fadeIn(4000);
           
    };

});
