//input part of the program
function Addnumber() {
    let x = parseFloat(document.getElementById(demo).Value);
    let y = parseFloat(document.getElementById(demo).Value);
    //processing
    let sum = x + y
    //Output
    document.getElementById('out').innerHTML = "The sum of " + x  + "  and " + y + " equals to " + sum +"!";
}