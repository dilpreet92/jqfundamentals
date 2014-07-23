$(document).ready(function() {
  var blog = $("#blog");
  blog.find("h3")
    .each(function() {
      var targetDiv = $("<div></div>").insertAfter($(this));
      $(this).data("targetDiv",targetDiv);
    })
    .click(function(event) {
      var anchor = $(this).find("a"),
          targetDiv = $(this).data("targetDiv"),
          href = anchor.attr("href"),
          url = href.split("#")[0],
          id = href.split("#")[1];
      event.preventDefault();
      targetDiv.load(url + " #" +id);
    });
});