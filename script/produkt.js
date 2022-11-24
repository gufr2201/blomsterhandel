$(document).ready(function(){
    //Denna kod är för att kunna visa och dölja information på detaljsidan
$(".info-header").click(function () {

    $header = $(this);
    $content = $header.next();
  
    $content.slideToggle(500, function () {
      
        $header.text(function () {
            return $content.is(":visible") ? "Stäng" : "Läs mer om suckulenter";
        });
    });

});
})