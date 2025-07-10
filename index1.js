function Result() {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let choose = parseFloat(document.getElementById("choose").value);
    if (choose == 1){
        let result = parseFloat(num1 + num2);
        document.getElementById("result").innerHTML =  result;
    }
    else if (choose == 2){
        let result = parseFloat(num1 - num2);
        document.getElementById("result").innerHTML = result;
    }
    else if (choose == 3){
        let result = parseFloat(num1 / num2);
        document.getElementById("result").innerHTML = result;
    }
    else if (choose == 4){
        let result = parseFloat(num1*num2)
        document.getElementById("result").innerHTML =  result;
    }
}