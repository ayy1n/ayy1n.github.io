$(document).ready(function(){


    // allows each cell to be resizable with a click and drag handle
    // set max height so it doesn't exceed the content div height, autohide the handlebar unless hovering over it
	$(".row td").resizable({
        maxHeight: 800,
        maxWidth: 600,
        minHeight: 100,
        minWidth: 50,
        autoHide: true,
      });

    // when a resize event occurs:
    $(".row td").on("resize", function(event, ui){

        // add 'shadow' class to current div to make it stand out
        $(this).find(".content").addClass("shadow");

        // find all other cells in this row and change their height to the height of the current div
        $(this).parent().find("td").height(ui.size.height);

       var width = $(this).width();
       console.log(width);
    });

    // remove the shadow once we stop resizing
    $(".row td").on("resizestop", function(event, ui){
        $(this).find(".content").removeClass("shadow");
    });

    $("img").draggable();

    // add shadows on hover as well
    $(".content").hover(
        function(){
            $(this).addClass("shadow");
        },
        function(){
            $(this).removeClass("shadow");
        }
    );
  
});


