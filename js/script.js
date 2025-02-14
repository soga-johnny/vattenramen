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

//TOP main 背景動画
const videoContainer = document.querySelector(".bg-video");
const videoTile = document.querySelector(".bg-video video");
const mainElement = document.querySelector("main");

function tileVideos() {
  const videoWidth = videoTile.offsetWidth;
  const videoHeight = videoTile.offsetHeight;
  const containerWidth = mainElement.offsetWidth;
  const containerHeight = mainElement.offsetHeight;

  const numCols = Math.ceil(containerWidth / videoWidth);
  const numRows = Math.ceil(containerHeight / videoHeight);

  // 既存のvideo要素をクリア（初回は不要）
  while (videoContainer.children.length > 1) {
    videoContainer.removeChild(videoContainer.lastChild);
  }

  // 必要な数だけvideo要素を複製して追加
  for (let i = 0; i < numRows; i++) {
    for (let j = 0; j < numCols; j++) {
      const clonedVideo = videoTile.cloneNode(true); // deep clone
      clonedVideo.play().catch((e) => {
        //自動再生をミュートで再試行
        console.warn("Autoplay failed:", e);
        clonedVideo.muted = true;
        clonedVideo.play();
      });
      videoContainer.appendChild(clonedVideo);
    }
  }
}

// 初回実行
tileVideos();

// ウィンドウリサイズ時に再計算 (必要に応じて)
// window.addEventListener("resize", tileVideos);
