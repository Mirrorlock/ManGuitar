
$(document).ready(() =>{
    setCarouselMoving();
})

function setCarouselMoving(){   
    var x_pos = 0;
    window.setInterval(() => {
        x_pos = (x_pos - (100 / 3.0))%(100);
        let newTranslate = "translateX(" + x_pos + "%)";
        $("div#carousel").css("transform", newTranslate );
    }, 5000);
}