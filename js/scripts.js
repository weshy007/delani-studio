$("form#form").on("submit",function(event) {
  event.preventDefault();
  let name = $("input#name").val();
  
  var results = (name + ", your message was received. Thank you for contacting us");
  $("#output").text(results); 
});

$(document).ready(function() {
    $(".design").click(function() {
      $(".design").slideToggle();
      $(".para1-hidden").slideToggle();
    });
    $(".para1-hidden").click(function() {
      $(".para1-hidden").slideToggle();
      $(".design").slideToggle();
    });
  });

$(".development").click(function() {
  $(".development").slideToggle();
  $(".para2-hidden").slideToggle();
});
$(".para2-hidden").click(function() {
  $(".para2-hidden").slideToggle();
  $(".development").slideToggle();
});

$(".product").click(function() {
    $(".product").slideToggle();
    $(".para3-hidden").slideToggle();
});
$(".para3-hidden").click(function() {
  $(".para3-hidden").slideToggle();
  $(".product").slideToggle();
})
