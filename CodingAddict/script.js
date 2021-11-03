const button_toggle = $(".nav-toggle");
const toggle_list = $("#toggle-list");
const show_links = "show-links";

$(window).resize(function () {
  if ($(window).width() > 1050) {
    toggle_list.height(0);
    toggle_list.removeClass(show_links);
    animateRotate(0);
  }
});

button_toggle.click(() => {
  if (toggle_list.hasClass(show_links)) {
    $("." + show_links).animate({ height: "0" });
    toggle_list.removeClass(show_links);
    animateRotate(0);
  } else {
    toggle_list.addClass(show_links);
    $("." + show_links).animate({ height: "10.8rem" });
    animateRotate(90);
  }
});

function animateRotate(angle) {
  let $elem = button_toggle;

  $($elem).animate(
    { deg: angle },
    {
      duration: 500,
      step: function (now) {
        $elem.css({
          transform: "rotate(" + now + "deg)",
        });
      },
    }
  );
}
