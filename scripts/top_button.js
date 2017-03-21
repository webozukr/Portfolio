  var top_show = 150;
  var delay_ms = 1000;
  $(document).ready(function () {
      $('#top-button').fadeOut();
      $(window).scroll(function () {
          if ($(this).scrollTop() > top_show) {
              $('#top-button').fadeIn();
          } else {
              $('#top-button').fadeOut();
          }
      });
      $('#top-button').click(function () {
          $('body, html').animate({scrollTop: 0}, delay_ms);
      });
  });
