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
  $(".slider").slick({
    autoplay: true, // Auto-play slides
    arrows: false, // Display navigation arrows
    dots: false, // Display navigation dots
    slidesToShow: 4,
    responsive: [
      {
        breakpoint: 768, // Adjust this breakpoint as needed
        settings: {
          slidesToShow: 2, // Display two slides on smaller screens
        },
      },
      {
        breakpoint: 576, // Adjust this breakpoint as needed
        settings: {
          slidesToShow: 1, // Display one slide on even smaller screens
        },
      },
    ],
  });

  // Handle "Next" button click
  $(".next-button").click(function () {
    $(".slider").slick("slickNext"); // Go to the next slide
  });

  // Handle "Previous" button click
  $(".prev-button").click(function () {
    $(".slider").slick("slickPrev"); // Go to the previous slide
  });
});

$(document).ready(function () {
  $(".news_post_two_column_content_slider_content").slick({
    autoplay: true, // Auto-play slides
    arrows: false, // Display navigation arrows
    dots: false, // Display navigation dots
    responsive: [
      {
        breakpoint: 768, // Adjust this breakpoint as needed
        settings: {
          slidesToShow: 2, // Display two slides on smaller screens
        },
      },
      {
        breakpoint: 576, // Adjust this breakpoint as needed
        settings: {
          slidesToShow: 1, // Display one slide on even smaller screens
        },
      },
    ],
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

$(document).ready(function () {
  $(".you_also_like_post_list").slick({
    autoplay: true, // Auto-play slides
    arrows: false, // Display navigation arrows
    dots: false, // Display navigation dots
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 768, // Adjust this breakpoint as needed
        settings: {
          slidesToShow: 2, // Display two slides on smaller screens
        },
      },
      {
        breakpoint: 576, // Adjust this breakpoint as needed
        settings: {
          slidesToShow: 1, // Display one slide on even smaller screens
        },
      },
    ],
  });

  // Handle "Next" button click
  $(".next-button").click(function () {
    $(".you_also_like_post_list").slick("slickNext"); // Go to the next slide
  });

  // Handle "Previous" button click
  $(".prev-button").click(function () {
    $(".you_also_like_post_list").slick("slickPrev"); // Go to the previous slide
  });
});
