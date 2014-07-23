var divBlog = $("#blog"), 
    paragraphBlog = $(".excerpt");
$(document).ready(function() {
  var heading = divBlog.find("h3");
  function showParagraph(currentHeading) {
   var currentParagraph = currentHeading.next();
    paragraphBlog.each(function() {
      if($(this).attr("id") == currentParagraph.attr("id")) {
      	$(this).show();
      }
      else {
      	$(this).hide();
      }
    });
  }

  heading.on("click",function() {
    showParagraph($(this));
  });
});