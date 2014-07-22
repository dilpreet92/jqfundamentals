$(document).ready(function() {
  //Add five new list items to the end of the unordered list #myList
  for(var i = 0; i < 5; i++) {
    $("#myList").append("<li>New List Item</li>") ;
  }  

  //Remove the odd list items
  $("#myList li:odd").remove();

  //Add another h2 and another paragraph to the last div.module
  $("<h2>Hello</h2> <p>World!!!</p>").appendTo("div.module:last");

  //Add another option to the select element; give the option the value "Wednesday"
  $("select").append("<option value='wednesday'>Wednesday</option>");

  //Add a new div.module to the page after the last one; put a copy of one of the existing images inside of it
  $("<div>Hello</div>").attr("class", "module").insertAfter("div.module:last").append("<img src='images/bread.jpg' alt='bread' />");
});