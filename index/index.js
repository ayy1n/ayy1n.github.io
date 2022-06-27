$(document).ready(function(){

  // PARALLAX ON TITLE
  var $win = $(window);
  $win.scroll(function() {
    var scrollTop = $win.scrollTop();
    var imgPos = scrollTop * 4/5 + 'px';
    $(".title").css('transform', 'translateY(' + imgPos + ')');
  });

  // logo hover, change navbar backgsround color
  $(".logo").hover(function(){
      $("#topnav").css("background-color", "var(--blue)");
  }, function(){
      $("#topnav").css("background-color", "var(--white)");
  });

    // filter background of act 1 image
    $("#css-typeface").hover(function(){
      $(".act-img1").removeClass("act-filter");
      $(".act-img1").attr("src", "../assignment1/type_sketches_1.png")
  }, function() {
      $(".act-img1").addClass("act-filter");
  });

    // filter background of act 1 image
    $("#poster").hover(function(){
      $(".act-img1").removeClass("act-filter");
      $(".act-img1").attr("src", "../assignment2/pics/poster_Page_5.png")
  }, function() {
      $(".act-img1").addClass("act-filter");
  });

  // filter background of act 2 image
  $("#interactive-website").hover(function(){
      $(".act-img2").removeClass("act-filter");
  }, function() {
      $(".act-img2").addClass("act-filter");
  });


  $(".hamburger").hover(function(){
    $(".bar").addClass("bar-hover");
  }, function(){
    $(".bar").removeClass("bar-hover");
  });

  // toggle menu on hamburger click/close
  $(".hamburger").click(function(){
    if ($(".topnav-right").hasClass("topnav-active") == true){
      $(".bar").removeClass("hamburger-active");
      $(".topnav-right").removeClass("topnav-active");
    }else{
      $(".bar").addClass("hamburger-active");
      $(".topnav-right").addClass("topnav-active");        
    }
  });

  $(".topnav-right").click(function(){
    $(this).removeClass("topnav-active");
    $(".bar").removeClass("hamburger-active");
  })

  var prevScrollpos = window.pageYOffset;
  window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos ) {
      document.getElementById("topnav").style.top = "0";

    // if user has menu open, don't hide navbar on scroll
    } else if ($(".topnav-right").hasClass("topnav-active") == false){
      document.getElementById("topnav").style.top = "-100px";
    }
    prevScrollpos = currentScrollPos;
  }

})

