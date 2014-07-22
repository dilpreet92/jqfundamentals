var labelElement = $("label[for=q]"),
    labelText = labelElement.text(),
    hintInputElement = $("input[name=q]");

$(document).ready(function() {
  labelElement.remove();
  blurInput();
  hintInputElement.bind({
    "focus" : function() { focusInput();},
    "blur" : function() { blurInput();}
  });
});

function blurInput() {
  hintInputElement.val(labelText);
  hintInputElement.addClass("hint");
}

function focusInput() {
  hintInputElement.val("");
  hintInputElement.removeClass("hint");
}