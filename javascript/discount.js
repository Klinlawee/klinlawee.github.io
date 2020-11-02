
function discountPrice() {
    //INPUT
    let subTotal = parseFloat(document.getElementById("subTotal").value);
    let now = new Date();
    let dayOfWeek = now.getDay();
    let discountPercentage = 0.1;
    let saleTax = 0.06;
    let discountAmount;
    let taxAmount;
    let total;
    //PROCESSING
    if (((dayOfWeek == 2) || (dayOfWeek == 3)) && (subTotal > 50)) {
        discountAmount =  subTotal - subTotal * discountPercentage
        taxAmount = discountAmount * saleTax
        total = discountAmount + taxAmount
        let digits = 2;
        let multiplier = Math.pow(10, digits);
        total = Math.round(total * multiplier) / multiplier;
    }
    else {
        total = subTotal * saleTax + subTotal
        let digits = 2;
        let multiplier = Math.pow(10, digits);
        total = Math.round(total * multiplier) / multiplier;
    }
    //OUTPUT
    document.getElementById("output").innerHTML = total;
}