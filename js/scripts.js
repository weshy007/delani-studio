// function feedback() {
//   var nn = document.getElementById("name");
//   var ee = document.getElementById("email");
//   var mm = document.getElementById("message");

//   if (mm === "")
//   alert("please enter a message")

//   else if (ee === "")
//   alert("please enter an email")

//   else if (nn === "")
//   alert("enter your name")
// }

$("form#form").on("submit",function(event) {
  event.preventDefault();
  let name = $("input#name").val();
  // let email = $("input#email").val();
  // let message = $("input#message").val();

  var results = (name + ", thank you for contacting us");
  $("#output").text(results); 
});




$(document).ready(function() {
    $(".design").click(function() {
      $(".design").toggle();
      $(".para1-hidden").toggle();
    });
    $(".para1-hidden").click(function() {
      $(".para1-hidden").toggle();
      $(".design").toggle();
    });
  });

$(".development").click(function() {
  $(".development").toggle();
  $(".para2-hidden").toggle();
});
$(".para2-hidden").click(function() {
  $(".para2-hidden").toggle();
  $(".development").toggle();
});

$(".product").click(function() {
    $(".product").toggle();
    $(".para3-hidden").toggle();
});

