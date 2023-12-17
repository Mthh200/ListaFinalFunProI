function verificar(){
    var valAnt = prompt("Digite o valor antigo do produto");
    var valDep = prompt("Digite o valor atual do produto");
    valAnt = parseFloat(valAnt);
    valDep = parseFloat(valDep);

    var dif = valAnt-valDep;
    
    if (valAnt > valDep){
        var variacao = valAnt/valDep*100;
        var status = "O produto está mais barato.";
        var status2 = "O preço caiu R$ "+dif+" em relação ao preço anterior";
        var status3 = "Houve uma variação de "+variacao+"% para baixo"
    } else if (valAnt < valDep){
        var variacao = valDep/valAnt*100;
        var status = "O produto está mais caro";
        var status2 = "O preço subiu R$ "+dif*(-1)+" em relação ao preço anterior"
        var status3 = "Houve uma variação de "+variacao+"% para cima"
    } else {
        var status = "Não houve alteração de preço";
        var status2 = "O preço continuou R$ "+valAnt;
        var status3 = "Houve uma variação de 0%"
    }
    

    document.getElementById("Subs").innerHTML="<h2>Analisando os valores informados</h2>";
    document.body.innerHTML += "<h3>O produto custava R$ "+
    valAnt+" e agora custa R$ "+valDep+"<p></p>"+status+"<p></p>"+
    status2+"<p></p>"+status3+" </h3>"

}