(function ($) {
  $(function () {
    var slider = $(".slider").flickity({
      imagesLoaded: true,
      percentPosition: false,
      initialIndex: 1,
      cellAlign: "center",
      contain: true,
      wrapAround: false,
      lazyLoad: false,
      pageDots: false,
      groupCells: 1,
      selectedAttraction: 0.2,
      friction: 0.8,
      draggable: true,
      prevNextButtons: false,
    });

    //enable clicking on cards
    slider.on(
      "staticClick.flickity",
      function (event, pointer, cellElement, cellIndex) {
        if (typeof cellIndex == "number") {
          slider.flickity("selectCell", cellIndex);
        }
      }
    );

    var flkty = slider.data("flickity");
    flkty.resize();
    flkty.reposition();

    flkty.on("settle", () => {
      flkty.resize();
      flkty.reposition();
    });

    $(".previous").on("click", function () {
      $(".slider").flickity("previous");
    });

    $(".next").on("click", function () {
      $(".slider").flickity("next");
    });

    function updateContent() {
      var i = flkty.selectedIndex;
      if (i != 0 || i != 4) {
        $(".paper1").removeClass("invisible");
        $(".paper2").removeClass("invisible");
      } else if (i == 0) {
        $(".paper1").addClass("invisible");
      } else if (i == 4) {
        $(".paper2").addClass("invisible");
      }
    }
    updateContent();
    slider.on("change.flickity", updateContent);
  });
})(jQuery);

var faPrev = {
  prefix: "fac",
  iconName: "prev",
  icon: [
    100,
    100,
    [],
    null,
    "M80.61,48.83H22.7L51.07,20.46a1.18,1.18,0,0,0,0-1.65,1.16,1.16,0,0,0-1.65,0L19.05,49.18h0l-.83.82.83.82h0L49.42,81.19a1.14,1.14,0,0,0,.82.34,1.16,1.16,0,0,0,.83-.34,1.18,1.18,0,0,0,0-1.65L22.7,51.17H80.61a1.17,1.17,0,0,0,0-2.34Z",
  ],
};

var faNext = {
  prefix: "fac",
  iconName: "next",
  icon: [
    100,
    100,
    [],
    null,
    "M81,50.83l.82-.83L81,49.18h0L50.58,18.81a1.16,1.16,0,0,0-1.65,0,1.18,1.18,0,0,0,0,1.65L77.31,48.83H19.39a1.17,1.17,0,0,0,0,2.34H77.31L48.93,79.54a1.18,1.18,0,0,0,0,1.65,1.18,1.18,0,0,0,1.66,0L81,50.83Z",
  ],
};

FontAwesome.library.add(faPrev, faNext);

// TOGGLE SIDEBAR
$(document).ready(function () {
  const sidebar = $(".sidebar");
  const toggleButton = $(".toggleSidebar");
  const closeSidebarButton = $("#toggleSidebarClose");
  const submenuItems = $(".menu > li");
  const hamburgerButton = toggleButton.find(".hamburger");
  const overlay = $("#overlay");

  sidebar.hide();
  overlay.hide();

  function openSidebar() {
    sidebar.show("slide", { direction: "left" }, 300);
    overlay.show();
    hamburgerButton.addClass("active");
  }

  function closeSidebar() {
    sidebar.hide("slide", { direction: "left" }, 300);
    overlay.hide();
    hamburgerButton.removeClass("active");
  }

  toggleButton.on("click", function () {
    openSidebar();
  });

  overlay.on("click", function () {
    closeSidebar();
  });

  closeSidebarButton.on("click", function () {
    closeSidebar();
  });

  submenuItems.on("click", function () {
    const submenu = $(this).find(".submenu");
    submenu.slideToggle(200);
  });

  $(".menu a").on("click", function (e) {
    e.preventDefault();
    const content = $(this).text();
    $("#mainContent").html(`<p>${content} Page Content</p>`);
  });
});

$(function () {
  $("#menu").menu();
});

$(function () {
  $("#sidemenu").menu();
});

$(function () {
  $("#tabs").tabs();
});

$(document).ready(function () {
  $(".news_post_two_column_content_slider_content").slick({
    autoplay: true, // Auto-play slides
    arrows: false, // Display navigation arrows
    dots: false, // Display navigation dots
  });

  // Handle "Next" button click
  $(".next-button").click(function () {
    $(".news_post_two_column_content_slider_content").slick("slickNext"); // Go to the next slide
  });

  // Handle "Previous" button click
  $(".prev-button").click(function () {
    $(".news_post_two_column_content_slider_content").slick("slickPrev"); // Go to the previous slide
  });
});

$("#dropdown_link").click(function () {
  $("#sidemenu_dropdown").toggleClass("dropdown");
  $("i").toggleClass("active");
});
