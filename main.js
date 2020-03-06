  
// Simple Addition Calculator

// Event Listener
document.getElementById('calc-btn').addEventListener('click', calcTotal);

//Event Function
function calcTotal() {
    //INPUT - Get two numbers
    let b1 = Number(document.getElementById('num1').value);
    let b2 = Number(document.getElementById('num2').value);
    let h = Number(document.getElementById('num3').value);


    console.log(num1);
    console.log(typeof(num1));
    console.log(num2);
    console.log(typeof(num2));
    console.log(num3);
    console.log(typeof(num3));

    //PROCESS - Add the two numbers 
    let area = ((b1 + b2)/2)*h + " units²";

    //OUTPUT - Display the total
    document.getElementById('result').innerHTML = area;

}