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
  // $('.banner-heading').fadeIn(7000);
  $('.button').animate({
    opacity: '2',
  },10000,'swing')
  $('.banner-heading').animate({
    opacity: '2',
    marginLeft: '600px'
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
    //select box syntax
    $('.catss').click(function(){
      var value =   $('.catss option:selected').text()
      switch(value){
        case "Choose Category":
          alert('rada');
          break;
        case "TRM for Children":
          alert('rada');
          break;
        case "TRM for Teens":
          alert('rada');
          break;
        case "TRM for Young Adults":
            alert('rada');
        case "TRM for Adults":
            alert('rada');
        case "TRM for Enterpreneurs":
            alert('rada');
        case "TRM for the retired":
            alert('rada');
      }
    });
});
