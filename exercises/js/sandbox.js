$(document).ready(function() {
  // 1.Select all of the div elements that have a class of "module"
  $("div.module").css("background-color", "yellow");

  // 2.Selecting third item in the #myList
  // a)Directly Picking the li item by it's ID.
  $("#myListItem").css("background-color", "yellow");

   b).By Picking Id of Second Li Element and then taking out the sibling.
  //$("#listItem_2").next().css("background-color", "yellow");

   c). By picking the Id of the list and finding the children li element
  $("#myList li:eq(2)").css("background-color", "yellow");

  // d).By picking the Id of the list and finding the children li element using find.
  $("#myList").find("#myListItem").css("background-color", "yellow");

  //The most Effective way of getting the third element index would be through its id
  //As it would be independent of the Dom Structure.

  //3.Selecting label for the search input using an attribute selector
  $("label[for = q]").css("background-color", "yellow");

  //4.Number of hidden page elements
  var hiddenElements = $("body").find(":hidden").not("script");
  alert("No. of hidden Elements are : " + hiddenElements.length);

  //5.Number of image elements having alt attribute
  var imageAltElements = $("img[alt]").length;
  alert("No. of Image Elements having alt attribute is :" + imageAltElements);

  //6.Select all of the odd table rows in the table body
  $("tr:odd").css("background-color", "yellow");
  
});
