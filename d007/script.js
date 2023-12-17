var cotacaoDolar = prompt("Qual a cotação do dólar atual?");

function converterRS(){
    var valReal = prompt("Quantos reais você tem?")

    var valDolar = valReal/cotacaoDolar;

    document.getElementById("Subs").innerHTML="Com R$ "+valReal+
    " reais, você consegue comprar US$ "+valDolar.toFixed(2)+" dólar(es)";
}