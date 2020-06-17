$(document).ready(function () {
  /* Sticky Navigation */
  $(".js--section-features").waypoint(
    function (direction) {
      if (direction == "down") {
        $("nav").addClass("sticky");
      } else {
        $("nav").removeClass("sticky");
      }
    },
    {
      offset: "77px",
    }
  );

  /* Scroll on btn click */
  $(".js--scroll-rsvp").click(function () {
    $("html,body").animate(
      { scrollTop: $(".js--section-rsvp").offset().top },
      1000
    );
  });

  /* Smooth Scroll on nav click (from css-tricks) */

  $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function (event) {
      // On-page links
      if (
        location.pathname.replace(/^\//, "") ==
          this.pathname.replace(/^\//, "") &&
        location.hostname == this.hostname
      ) {
        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length
          ? target
          : $("[name=" + this.hash.slice(1) + "]");
        // Does a scroll target exist?
        if (target.length) {
          // Only prevent default if animation is actually gonna happen
          event.preventDefault();
          $("html, body").animate(
            {
              scrollTop: target.offset().top,
            },
            1000,
            function () {
              // Callback after animation
              // Must change focus!
              var $target = $(target);
              $target.focus();
              if ($target.is(":focus")) {
                // Checking if the target was focused
                return false;
              } else {
                $target.attr("tabindex", "-1"); // Adding tabindex for elements not focusable
                $target.focus(); // Set focus again
              }
            }
          );
        }
      }
    });

  /* Animations on scroll */
  $(".js--wp-1").waypoint(
    function (direction) {
      $(".js--wp-1").addClass("animated fadeIn");
    },
    {
      offset: "50%",
    }
  );

  $(".js--wp-2").waypoint(
    function (direction) {
      $(".js--wp-2").addClass("animated fadeIn");
    },
    {
      offset: "55%",
    }
  );
  $(".js--wp-3").waypoint(
    function (direction) {
      $(".js--wp-3").addClass("animated fadeIn");
    },
    {
      offset: "70%",
    }
  );

  $(".js--wp-4").waypoint(
    function (direction) {
      $(".js--wp-4").addClass("animated pulse");
    },
    {
      offset: "50%",
    }
  );

  /* Mobile-Nav click */
  $(".js--nav-icon").click(function () {
    let nav = $(".js--main-nav");
    let icon = $(".js--nav-icon img");

    nav.slideToggle(200);

    temp = icon.attr("src");
    icon.attr("src", icon.attr("data-alt-src"));
    icon.attr("data-alt-src", temp);
  });

  var $form = $('form#rsvp-form'),
    url =
      "https://script.google.com/macros/s/AKfycbxaxjKgLF03sGcaP8LXEiELELHeZCHC82Sfs8LkeoXdrZ6cpMUJ/exec";

  $("#submit-form").on("click", function (e) {
    console.log("submitted");
    e.preventDefault();
    var jqxhr = $.ajax({
      url: url,
      method: "GET",
      dataType: "json",
      data: $form.serialize(),
      success: function() {
      // do something
      console.log("you have successfully rsvp'd!")
      }
    })
  });

  
});
