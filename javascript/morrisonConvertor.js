/* Defining Table
 INPUT:  Get two numbers from two different input boxes - x and y
 PROCESSING: Add the two numbers together store in sum
 OUTPUT: Display sum on the document
*/ 

function addNumbers() {
	//INPUT
	 let number1 = parseFloat(document.getElementById('number1').value);
     //let number2 = parseFloat(document.getElementById('number2').value);
     let number2 = 0.45359237;//converting unit from pounds to kilogram
	//PROCESSING
	 let sum = number1 * number2;
	//OUTPUT
	 document.getElementById('output').innerHTML = sum.toFixed(1) + " kilograms";
}