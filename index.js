// navbar
$(window).scroll(function () {
    if($(window).scrollTop()){
        $(".navbar").addClass("fixed");
    }
    else{
        $(".navbar").removeClass("fixed");
    }
});