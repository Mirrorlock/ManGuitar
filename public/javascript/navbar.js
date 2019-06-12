$(document).ready(() => {
    setButtonTrigger();
})

function setButtonTrigger(){
    var isON = false;
    $("button#nav-small-trigger").click(() => {
        if(!isON){
            $("#nav-small-dropdown").css("display", "flex");
            
        }else{
            $("#nav-small-dropdown").css("display", "none");
        }
        isON = !isON;
    });
}