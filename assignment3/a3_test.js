$(document).ready(function(){

    // allows elements to be resizable
    $( ".box" ).resizable({
        maxWidth: 800,
        minHeight: 100,
        minWidth: 100,
        autoHide: true,
    });

    $(".box").on("resizestart", function(event, ui){
        $(this).addClass("blue");

        // note all the other 
    });
   
    // as the box is being dragged:
    $(".box").on("resize", function(event, ui){

        $(this).addClass("shadow"); 
        // note down this particular box's dimensions
        var cheight = $(this).height();
        var cwidth = $(this).width();
        var cpos = $(this).position();

        // testing stuff, to see dimensions etc
        $(".box").not($(this)).each(function(){
            // var height = $(this).height();
            // var width = $(this).width();
            // var pos = $(this).position();
            $("#main").css({"align-items":"stretch"});
            // $('p', this).text(
            //     'width and height: ' + height + ' , ' + width + 
            //     ' position: ' + pos.top + ',' + pos.left +
            //     ' current box: ' + cpos.top + ',' + cpos.left + 
            //     ' cheight: ' + cheight
            // );
             // find other boxes with the same position, and adjust their height/width accordingly            
            // if (pos.top == cpos.top){
            //     $(this).height(cheight);
            // }
            
            // if (pos.left == cpos.left){
            //     $(this).css({"width": cwidth});

            // }

        });
    });

    // when the box stops being dragged:
    $( ".box" ).on( "resizestop", function( event, ui ) {        
        $(this).removeClass("blue");

    } );


    //bring the element being hovered over/selected to the front and give it a shadow
    $(".box").hover(
        function(){
            $(this).addClass("shadow");
        },
        function(){
            $(this).removeClass("shadow");
        }
    );
   



});


