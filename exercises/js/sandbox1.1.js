$(document).ready(function() {
  //Selecting all the image elements on the page
	$("img").each(function() {
    console.log($(this).attr("alt"));
  });

  /*Select the search input text box, then traverse up to the form 
    and add a class to the form */
  $("label[for = q]").closest("form").addClass("current");

  /*Select the list item inside #myList that has a class of "current" and 
    remove that class from it; add a class of "current" to the next list item */
  var currentElement = $("#myList").find(".current");
  currentElement.removeClass(); 
  currentElement.next().addClass("current"); 

  //Select the select element inside #specials; traverse your way to the submit button
  var selectElem =  $("#specials").find("select");
  selectElem.closest("ul").find("input").css("background-color", "yellow");

  /* Select the first list item in the #slideshow element; add the class "current" to it,
    and then add a class of "disabled" to its sibling elements */
  var firstLiItem = $("#slideshow li:eq(0)");
  firstLiItem.addClass("current");
  var siblingElements = firstLiItem.siblings("li");
  siblingElements.each(function() {
    $(this).addClass("disabled");
  });

});