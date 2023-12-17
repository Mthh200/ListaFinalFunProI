function comprarProduto(){
    var produto = prompt("Qual produto você está comprando?");
    var preco = prompt("Qual o valor de "+produto+"?");
    var valPago = prompt("Quanto você deu em dinheiro?");
    var troco = valPago-preco;

    alert("Você comprou um(a) "+produto+", que custou R$ "+preco+
    ".\nVocê deu R$ "+valPago+" em dinheiro e vai receber R$ "+troco.toFixed(2)+
    " de troco. \nVolte sempre!")

}