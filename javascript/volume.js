function volumeofCylinder() {
    //import
    let height = parseFloat(document.getElementById('height').value);
    let raduis = parseFloat(document.getElementById('radius').value);
    //processing
    let area =height * raduis **2
    //output
    document.getElementById('output').innerHTML = 'The area of the Cylinder is ' + area + '  kilogram';
}