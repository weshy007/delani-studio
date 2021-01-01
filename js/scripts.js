function feedback() {
  var nn = document.getElementById("name");
  var ee = document.getElementById("email");
  var mm = document.getElementById("message");

  if (mm === "")
  alert("please enter a message")

  else if (ee === "")
  alert("please enter an email")

  else if (nn === "")
  alert("enter your name")

}




$(document).ready(function() {
    $(".design").click(function() {
      $(".design").toggle();
      $(".para1-hidden").toggle();
    });
  });

$(".development").click(function() {
        $(".development").toggle();
        $(".para2-hidden").toggle();
});

$(".product").click(function() {
    $(".product").toggle();
    $(".para3-hidden").toggle();
});
