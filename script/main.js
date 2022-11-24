$(document).ready(function(){
    //denna kod Gör att man på förstasidan kan trycka på mer information om varorna för att få mer information och sedan trycka på dölj information för att dölja informationen

    $(".card-btn-info1").click(function() {
        const displayState = $("id").css("display")
        console.log("DISPLAY", displayState)
        if(displayState === "block") {
            $(this).text("Mer information")
        }
        else {
            $(this).text("Dölj information")
        }
        $("#plant-info1").toggle()
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
        $("#plant-info2").toggle()
    });
    $(".card-btn-info3").click(function() {
        const displayState = $("id").css("display")
        console.log("DISPLAY", displayState)
        if(displayState === "block") {
            $(this).text("Mer information")
        }
        else {
            $(this).text("Dölj information")
        }
        $("#plant-info3").toggle()
    });
    $(".card-btn-info4").click(function() {
        const displayState = $("id").css("display")
        console.log("DISPLAY", displayState)
        if(displayState === "block") {
            $(this).text("Mer information")
        }
        else {
            $(this).text("Dölj information")
        }
        $("#plant-info4").toggle()
            });
            $(".card-btn-info5").click(function() {
                const displayState = $("id").css("display")
                console.log("DISPLAY", displayState)
                if(displayState === "block") {
                    $(this).text("Mer information")
                }
                else {
                    $(this).text("Dölj information")
                }
                $("#plant-info5").toggle();
                    });
                    $(".card-btn-info6").click(function() {
                        const displayState = $("id").css("display")
                        console.log("DISPLAY", displayState)
                        if(displayState === "block") {
                            $(this).text("Mer information")
                        }
                        else {
                            $(this).text("Dölj information")
                        }
                        $("#plant-info6").toggle()
                            });
    })