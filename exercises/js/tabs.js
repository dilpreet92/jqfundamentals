var divModule = $("div.module");
$(document).ready(function() {
  //Hide all the modules
  divModule.hide();

  //Create an unordered list element before the first module
  var unorderedList = $("<ul></ul>");
  unorderedList.insertBefore("div.module:first");

  //Iterate Over the module and adding li items to the Ul Element
  divModule.each(function(index, element) {
    var listItem = $("<li></li>");
    listItem.text($(this).find("h2").text()).attr("id", "listItem" + index);
    unorderedList.append(listItem);
  });
 
  //List Items in Unordered List Element
  var unorderedListItem = unorderedList.find("li");
  
  //Show Related Div Elements and Hiding Others
  function showDiv(textValue) {
    divModule.each(function() {
      if ($(this).find("h2").text() == textValue) {
        $(this).show();
      }
      else {
        $(this).hide();
      }
    });
  }

  //Changing Class of the clicked List item and Removing The class From others.
  function changeClass(currenListItem) {
    unorderedListItem.each(function() {
      if ($(this).attr("id") == currenListItem.attr("id")) {
        $(this).addClass("current");
      }
      else {
        $(this).removeClass("current");
      }
    });
  }

  //Bind Events
  unorderedListItem.on("click", function() {
    showDiv($(this).text());
    changeClass($(this)); 
  });
  
});
