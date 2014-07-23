$(document).ready(function() {
  //Add five new list items to the end of the unordered list #myList
  for(var i = 0; i < 5; i++) {
    $("#myList").append("<li>New List Item</li>") ;
  }  

  //Remove the odd list items
  $("#myList li:odd").remove();

  //Add another h2 and another paragraph to the last div.module
  var heading = $("<h2>This is a new Heading</h2>");
  var paragraph = $("<p>This is a new paragraph</p>");
  $("div.module:last").append(heading).append(paragraph);

  //Add another option to the select element; give the option the value "Wednesday"
  var newOption = $("<option>Wednesday</option>").attr("value", "Wednesday");
  $("select").append(newOption);

  //Add a new div.module to the page after the last one; put a copy of one of the existing images inside of it
  var lastDiv = $("<div></div>").attr("class", "module").insertAfter("div.module:last");
  $("img[alt='bread']").clone().appendTo(lastDiv);
});