
function addition(){
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);
    let result = parseFloat(num1 + num2);
    document.getElementById('result').innerHTML = result;
}

function subtraction(){
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);
    let result = parseFloat(num1 - num2);
    document.getElementById('result').innerHTML = result;
}

function multiplication(){
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);
    let result = parseFloat(num1 * num2);
    document.getElementById('result').innerHTML = result;
}

function division(){
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);
    let result = parseFloat(num1 / num2);
    document.getElementById('result').innerHTML = result;
}