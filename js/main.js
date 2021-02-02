(function ($) {
  "use strict";

  //  Team Ranndomizer
  $(".scrolling-wrapper").html($(".col-sm-6").sort(function(){
    return Math.random()-0.2;
  }));

  // loader
  var loader = function () {
    setTimeout(function () {
      if ($("#ftco-loader").length > 0) {
        $("#ftco-loader").removeClass("show");
      }
    }, 1);
  };
  loader();

  // Navbar on Scroll
  var scrollWindow = function () {
    $(window).scroll(function () {
      var $w = $(this),
        st = $w.scrollTop(),
        navbar = $(".ftco_navbar"),
        sd = $(".js-scroll-wrap");

      if (st > 150) {
        if (!navbar.hasClass("scrolled")) {
          navbar.addClass("scrolled");
        }
      }
      if (st < 150) {
        if (navbar.hasClass("scrolled")) {
          navbar.removeClass("scrolled sleep");
        }
      }
      if (st > 30) {
        if (!navbar.hasClass("awake")) {
          navbar.addClass("awake");
        }

        if (sd.length > 0) {
          sd.addClass("sleep");
        }
      }
      if (st < 30) {
        if (navbar.hasClass("awake")) {
          navbar.removeClass("awake");
          navbar.addClass("sleep");
        }
        if (sd.length > 0) {
          sd.removeClass("sleep");
        }
      }
    });
  };
  scrollWindow();

  document.getElementById('scroller').addEventListener("mousewheel", scrollHorizontally, false);
  // Firefox
  document.getElementById('scroller').addEventListener("DOMMouseScroll", scrollHorizontally, false);

})(jQuery);

function scrollHorizontally(e) {
  var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
  var scrollSpeed = 16;
  document.getElementById('scroller').scrollLeft -= (delta * scrollSpeed);
  e.preventDefault();
}