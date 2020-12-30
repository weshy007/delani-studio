$(document).ready(function() {
    $(".design").click(function() {
      $(".design").toggle();
      $(".para1-hidden").toggle();
    });
  })

$(".development").click(function() {
        $("development").toggle();
        $(".para2-hidden").toggle();
});

$(".product").click(function() {
    $("product").toggle();
    $(".para3-hidden").toggle();
});