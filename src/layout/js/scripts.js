import $ from "jquery";

$(".nav a").on("click", function () {
  $(".nav").find(".active").removeClass("active");
  $(this).parent().addClass("active");
});

$("form").on("keypress", function (event) {
  if (event.key === 13) {
    event.preventDefault();
    $(this)[0].reset();
  }
});
