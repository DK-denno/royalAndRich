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
        
      if (document.body.scrollTop >= 1000 || document.documentElement.scrollTop >= 1000) {
        $("#suscribe").animate({
          opacity: '2',
        },10000) 
      }
      
  
    }


});
  

$(document).ready(function(){
  $('.display_image').fadeIn(5000);
  // $('.banner-heading').fadeIn(7000);
  $('.button').animate({
    opacity: '2',
  },10000,'swing')
  $('.banner-heading').animate({
    opacity: '2',
    marginLeft: '400px'
  },4000,'swing')
  
  $('.cont').animate({
    opacity: '2',
    marginLeft: '50px'
  },5000,'swing') 

  $('.display_image').animate({
    opacity: '2',
    marginTop: '100px'
  },4000,'swing') 

  if (document.body.scrollTop >= 300 || document.documentElement.scrollTop >= 300) {
        $(".abouts").fadeIn(4000);
           
    };

    function goAnimations(element){
        $(element).animate({
          opacity:'0',
          marginRight:'700px',
          marginTop:'-600',
        });
        // $('children').fadeIn(3000);
    }
    function comeAnimations(element){
      $(element).animate({
        opacity:'2',
        alignment:'center',
        marginRight:'0',
        marginTop:'0',
        height:'600',
      });
      $('.children').fadeIn(3000);
    }
    //select box syntax
    // $('.catss').click(function(){
    //   var value =   $('.catss option:selected').text()
    //   switch(value){
    //     case "Choose Category":
    //       comeAnimations(".child");
    //       comeAnimations(".teen");
    //       comeAnimations(".youngAdult");
    //       comeAnimations(".Adult");
    //       comeAnimations(".entrepreneur");
    //       comeAnimations(".retired");        
    //       break;
    //     case "TRM for Children":
    //       comeAnimations(".child");
    //       goAnimations(".teen");
    //       goAnimations(".youngAdult");
    //       goAnimations(".Adult");
    //       goAnimations(".entrepreneur");
    //       goAnimations(".retired");   
    //       break;
    //     case "TRM for Teens":
    //       goAnimations(".child");
    //       comeAnimations(".teen");
    //       goAnimations(".youngAdult");
    //       goAnimations(".Adult");
    //       goAnimations(".entrepreneur");
    //       goAnimations(".retired");     
    //       break;
    //     case "TRM for Young Adults":
    //       goAnimations(".child");
    //       goAnimations(".teen");
    //       comeAnimations(".youngAdult");
    //       goAnimations(".Adult");
    //       goAnimations(".entrepreneur");
    //       goAnimations(".retired");   
    //     case "TRM for Adults":
    //       goAnimations(".child");
    //       goAnimations(".teen");
    //       goAnimations(".youngAdult");
    //       comeAnimations(".Adult");
    //       goAnimations(".entrepreneur");
    //       goAnimations(".retired");   
    //     case "TRM for Entrepreneurs":
    //       goAnimations(".child");
    //       goAnimations(".teen");
    //       goAnimations(".youngAdult");
    //       goAnimations(".Adult");
    //       comeAnimations(".entrepreneur");
    //       goAnimations(".retired");      
    //     case "TRM for the retired":
    //       goAnimations(".child");
    //       goAnimations(".teen");
    //       goAnimations(".youngAdult");
    //       goAnimations(".Adult");
    //       goAnimations(".entrepreneur");
    //       comeAnimations(".retired");   
    //   }
    // });
});
