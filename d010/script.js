function calcDelta(){
    var a = prompt("Digite o valor de a:");
    var b = prompt("Digite o valor de b:");
    var c = prompt("Digite o valor de c:");

    var delta = b**2 - 4*a*c;

    document.getElementById("Subs").innerHTML="<h2>Calculando Delta</h2>";

    document.body.innerHTML += "<h3>A equação atual é: "+
    a+"x² + "+b+"x + "+c+" = 0 <p></p>O cálculo realizado será: △ = "+
    b+"² - 4 . "+a+" . "+c+"<p></p>△ = "+delta+". </h3>";

    var x1 = (-b - delta**(1/2))/2*a;
    var x2 = (-b + delta**(1/2))/2*a;

    document.body.innerHTML += "<h2>Calculando Bháskara</h2>";
    document.body.innerHTML += "<h3>O cálculo realizado será: X = (-"+b+" ∓ √"+
    delta+") / 2 . "+a+" <p></p>X₁ = "+x1.toFixed(2)+", X₂ = "+x2.toFixed(2)+"</h3>";

}
