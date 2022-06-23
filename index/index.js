$(document).ready(function(){

    // logo hover, change navbar background color
    $(".logo").hover(function(){
        $("#topnav").css("background-color", "var(--blue)");
    }, function(){
        $("#topnav").css("background-color", "var(--white)");
    });

    // filter background of act images
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

