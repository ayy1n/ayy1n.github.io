$(document).ready(function(){

    // behaves like the p5.js map function
    function map(value, a, b, c, d) {
        value = (value - a) / (b - a);
        return c + value * (d - c);
    }    
 
    
    // allows each cell to be resizable with a click and drag handle
    // set max height so it doesn't exceed the content div height, autohide the handlebar unless hovering over it
	$(".row td").resizable({
        maxHeight: 600,
        maxWidth: 800,
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

        // update all divs on the same row
        $(this).parent().find("td").each(function(){

            // note their width and map onto hue, with range determined by a colour class
            var width = $(this).width();
            if ($(this).hasClass("orange") == true){
                var hue = map(width, 50, 800, 0, 70);                
            }
            if ($(this).hasClass("lime") == true){
                var hue = map(width, 50, 800, 40, 110);                
            }
            if ($(this).hasClass("teal") == true){
                var hue = map(width, 50, 800, 150, 240);                
            }
            if ($(this).hasClass("purple") == true){
                var hue = map(width, 50, 800, 200, 300);                
            }
            if ($(this).hasClass("pink") == true){
                var hue = map(width, 50, 800, 280, 359);                
            }

            // a second hue for the bottom of the gradient that spans the entire colour spectrum
            var hue2 = map(width, 50, 600, 0, 359);  

            // note their height and map onto luminosity
            var height = $(this).height();
            var lum = map(height, 100, 800, 50, 90);

            // $(this).find(".content").css("background-color", "hsl("+hue+", 100%, "+lum+"%)");
            $(this).find(".content").css("background", "linear-gradient(hsl("+hue+", 100%, "+lum+"%), hsl("+hue2+", 100%, "+lum+"%))");
        });

    });

    // remove the shadow once we stop resizing
    $(".row td").on("resizestop", function(event, ui){
        $(this).find(".content").removeClass("shadow");

        // remove the intro text
        $(".intro").fadeOut();
    });


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

