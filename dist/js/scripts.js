$(document).ready(function() {
  var toggle = 0;
  $('.hide-resume-button').on('click', function() {

    if (toggle % 2 == 0) {
      $(this).html('<a href="#">Show Resume [+]</a>');
      toggle++;
    }
    else {
      $(this).html('<a href="#">Hide Resume [-]</a>');
      toggle++;
    }
    $(".hide-resume").slideToggle();
  });
  $('.category').append(" [-]");
  $('.category').on('click', function() {
    $(this).toggleClass('toggle');
    $(this).siblings().toggle();
    var text = $(this).html();
    var length = text.length;
    var html = '';
    for (i = 0; i < text.length-4; i++) {
      html += text[i];
    }
    if ($(this).hasClass('toggle')) {
    $(this).html(html + ' [+]');
    }
    else {
    $(this).html(html + ' [-]');
    }
  })
});
