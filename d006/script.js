function converterT(){
    var tempC = prompt("Digite uma temperatura em ºC (Celsius)");
    var tempK = parseFloat(tempC) + 273.15;
    var tempF = (parseFloat(tempC)*9/5)+32;

    document.getElementById("Subs").innerHTML="Temperatura em graus Celsius: "+
    tempC+" ºC.";
    
    document.body.innerHTML += "<h3>Temperatura em graus Kelvin: "+
    tempK+" ºK.<h3>";

    document.body.innerHTML += "<h3>Temperatura em graus Fahrenheit: "+
    tempF+" ºF.</h3>";
}