function poundsTokilograms(){
    //INPUT
    let pound = parseFloat(document.getElementById('pounds').value);
    //PROCESSING
    let kilogram = 0.45359237;
    let convertor = pound * kilogram;
    //OUTPUT
     document.getElementById('output').innerHTML = convertor.toFixed(2) + "kg";
}