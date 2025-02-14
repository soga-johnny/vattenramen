(function ($) {
  var $nav = $("#navArea");
  var $btn = $(".toggle_btn");
  var $mask = $("#mask");
  var open = "open"; // class
  // menu open close
  $btn.on("click", function () {
    if (!$nav.hasClass(open)) {
      $nav.addClass(open);
    } else {
      $nav.removeClass(open);
    }
  });
  // mask close
  $mask.on("click", function () {
    $nav.removeClass(open);
  });
})(jQuery);

(function ($) {
  // scroll fade-in animation
  $(window).scroll(function () {
    $(".js-fadein").each(function () {
      var elemPos = $(this).offset().top,
        scroll = $(window).scrollTop(),
        windowHeight = $(window).height();

      if (scroll > elemPos - windowHeight + 250) {
        $(this).addClass("js-scrollin");
      }
    });
  });
})(jQuery);
