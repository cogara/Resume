$(document).ready(function() {
  var toggle = 0;
  $('.hide-resume-button').on('click', function() {

    if (toggle % 2 == 0) {
      $(this).html('<a href="#">Show Resume +</a>');
      toggle++;
    }
    else {
      $(this).html('<a href="#">Hide Resume -</a>');
      toggle++;
    }
    $(".hide-resume").slideToggle();
  });
});
