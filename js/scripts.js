$(document).ready(function() {
    $(".design").click(function() {
      $(".design").toggle();
      $(".para1-hidden").toggle();
    });
  })

$(document).ready(function(){
    $(".development").click(function() {
        $("development").toggle();
        $(".para2-hidden").toggle();
    });
});

$(document).ready(function(){
    $(".product").click(function() {
        $("product").toggle();
        $(".para3-hidden").toggle();
    });
});