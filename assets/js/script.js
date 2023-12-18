$(document).ready(function () {
  // Ent Execution

  var sections = $(".entp_exe_lst"),
    nav = $(".entp_exe_lf");
  $(window).on("scroll", function () {
    var s = $(this).scrollTop();
    sections.each(function () {
      var t = $(this).offset().top - 100,
        e = t + $(this).outerHeight();
      if (s >= t && s <= e) {
        nav.find("a").removeClass("active");
        sections.removeClass("active");
        $(this).addClass("active");
        nav.find('a[secid="#' + $(this).attr("id") + '"]').addClass("active");
      }
    });
  });
  nav.find("a").on("click", function () {
    var t = $(this).attr("secid");
    $("html, body").animate(
      {
        scrollTop: $(".entp_exe_lst" + t).offset().top - 100,
      },
      500
    );
    return false;
  });

  // Ent Vision

  $(".partnrs-slider").slick({
    mobileFirst: true,
    dots: false,
    arrows: true,
    infinite: true,
    speed: 300,
    autoplay: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    prevArrow: $(".partnrs-slider-prev"),
    nextArrow: $(".partnrs-slider-next"),
    responsive: [
      {
        breakpoint: 300,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          rows: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          rows: 1,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          rows: 2,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 4,
          rows: 2,
        },
      },
    ],
  });
});
