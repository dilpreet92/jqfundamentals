$(document).ready(function() {

  $("#nav li").hover(function() {
      $(this).find("ul").show();
      $(this).find("ul").addClass("hover");
    },
    function() {
      $(this).find("ul").hide();	
      $(this).find("ul").removeClass("hover");	  
  });
});