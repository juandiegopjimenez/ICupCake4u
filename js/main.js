$(document).ready(function() {
  var imgItems = $(".slider li").length;
  var imgPos = 1;

  for (i = 1; i <= imgItems; i++) {
    $(".pagination").append("<li><i class='fas fa-circle'></i></li>");
  }

  $(".slider li").hide();
  $(".slider li:first").show();
  $(".pagination li:first").css({ color: "#000" });

  $(".pagination li").click(pagination);
  $(".right i").click(nextSlider);
  $(".left i").click(prevSlider);

  setInterval(function() {
    nextSlider();
  }, 4000);

  function pagination() {
    let paginationPos = $(this).index() + 1;
    console.log(paginationPos);

    $(".slider li").hide();
    $(".slider li:nth-child(" + paginationPos + ")").fadeIn();

    $(".pagination li").css({ color: "rgba(0, 0, 0, 0.5)" });
    $(this).css({ color: "#000" });

    imgPos = paginationPos;
  }

  function nextSlider() {
    if (imgPos >= imgItems) {
      imgPos = 1;
    } else {
      imgPos++;
    }
    $(".pagination li").css({ color: "rgba(0, 0, 0, 0.5)" });
    $(".pagination li:nth-child(" + imgPos + ")").css({ color: "#000" });
    $(".slider li").hide();
    $(".slider li:nth-child(" + imgPos + ")").fadeIn();
  }

  function prevSlider() {
    if (imgPos <= 1) {
      imgPos = imgItems;
    } else {
      imgPos--;
    }
    $(".pagination li").css({ color: "rgba(0, 0, 0, 0.5)" });
    $(".pagination li:nth-child(" + imgPos + ")").css({ color: "#000" });
    $(".slider li").hide();
    $(".slider li:nth-child(" + imgPos + ")").fadeIn();
  }
});
