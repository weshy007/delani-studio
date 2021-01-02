$("form#form").on("submit",function(event) {
  event.preventDefault();
  let name = $("input#name").val();
  
  var results = (name + ", your message was received. Thank you for contacting us");
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
$(".para3-hidden").click(function() {
  $(".para3-hidden").toggle();
  $(".product").toggle();
})
