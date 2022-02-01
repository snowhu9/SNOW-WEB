/* Start button for mune */
$(function() {
    $(".btn").on("click", function(){
        if($(".item").hasClass("active")){
            $(".item").removeClass("active");
            $("span").removeClass("span-active");
        }
        else{
            $(".item").addClass("active");
            $("span").addClass("span-active");
        }
    })
})
/* End button for mune */