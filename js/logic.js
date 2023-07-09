var flag = true;
var textEmpty = "";
function remplazarVision() {
    var textVision = document.getElementById("text-h4-vision");
    if (flag == true) {
        textVision.style.color="white";
    } else{
        textVision.style.color="black";

    }
    flag = !flag;
    return flag;
}
function remplazarMision() {
    var textMision = document.getElementById("text-h4-mision");
    if (flag == true) {
        textMision.style.color="white";
    } else{
        textMision.style.color="black";
    }
    flag = !flag;
    return flag;
}
function remplazarPrinciples() {
    var textPrinciples = document.getElementById("text-h4-principles");
    if (flag == true) {
        textPrinciples.style.color="white";
    } else{
        textPrinciples.style.color="black";
    }
    flag = !flag;
    return flag;
}