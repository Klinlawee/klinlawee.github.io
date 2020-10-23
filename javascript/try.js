//input part of the program
function addNumbers() {
    let x = parseFloat(document.getElementById("demo1").value);
    let y = parseFloat(document.getElementById("demo2").value);
    //processing

    let regular = 15.00 * x;
    let overTime = 20 * y;
    let subTotal = regular + overTime;
    let tax = 0.15 * subTotal;
    let totalTakehome = subTotal - tax;
    //Output
    document.getElementById('output').innerHTML ="The take home salary is " + "$" + totalTakehome 
}