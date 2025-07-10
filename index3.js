const display= document.getElementById("display");
function todisplay(input) {
    display.value += input;
}
function toclear(input){
    display.value = "";
}
function todelete(){

    display.value = display.value.slice(0, -1);
}
function calculator(){
display.value = eval(display.value);
}




