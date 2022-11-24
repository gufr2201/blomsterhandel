$(document).ready(function(){
    

    $(".card-btn-info1").click(function() {
        const displayState = $("id").css("display")
        console.log("DISPLAY", displayState)
        if(displayState === "block") {
            $(this).text("Mer information")
        }
        else {
            $(this).text("Dölj information")
        }
        $("#plant-info1").toggle();
    });
    $(".card-btn-info2").click(function() {
        const displayState = $("id").css("display")
        console.log("DISPLAY", displayState)
        if(displayState === "block") {
            $(this).text("Mer information")
        }
        else {
            $(this).text("Dölj information")
        }
        $("#plant-info2").toggle();
    });
    })