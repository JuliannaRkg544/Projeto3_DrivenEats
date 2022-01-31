let comida;
let bebida;
let sobremesa;
let preco;
let precoTotal;

function botao(){
    if ((comida!=undefined) && (bebida!= undefined) && (sobremesa !=undefined)){
        document.getElementById("botao").style.backgroundColor = "#32b72f";
        document.getElementById("desabilitado").style.display="none";
        document.getElementById("habilitado").style.display="block";

        precoTotal = parseFloat(precoComida) + parseFloat(precoBebida) + parseFloat(precoSobremesa);
       
    }

}

function coxinha(){
    document.getElementById("coxinha").style.boxShadow = "inset 0 0 0 5px #32B72F";
    document.getElementById("coxinha_icon").style.display = "block";

    document.getElementById("quiabo").style.boxShadow = "inset 0 0 0 5px #ffffff";
    document.getElementById("quiabo_icon").style.display = "none";

    document.getElementById("sanduba").style.boxShadow = "inset 0 0 0 5px #ffffff";
    document.getElementById("sanduba_icon").style.display = "none";
    
    comida = "coxinha";
    precoComida ="5.50";

    botao()
}
function quiabo(){
    document.getElementById("coxinha").style.boxShadow = "inset 0 0 0 5px #ffffff";
    document.getElementById("coxinha_icon").style.display = "none";

    document.getElementById("quiabo").style.boxShadow = "inset 0 0 0 5px #32B72F";
    document.getElementById("quiabo_icon").style.display = "block";

    document.getElementById("sanduba").style.boxShadow = "inset 0 0 0 5px #ffffff";
    document.getElementById("sanduba_icon").style.display = "none";
    
    comida = "quiabo";
    precoComida ="8.90";

    botao()
}

function sanduba(){
    document.getElementById("coxinha").style.boxShadow = "inset 0 0 0 5px #ffffff";
    document.getElementById("coxinha_icon").style.display = "none";

    document.getElementById("quiabo").style.boxShadow = "inset 0 0 0 5px #ffffff";
    document.getElementById("quiabo_icon").style.display = "none";

    document.getElementById("sanduba").style.boxShadow = "inset 0 0 0 5px #32B72F";
    document.getElementById("sanduba_icon").style.display = "block";
    
    comida = "sanduba";
    precoComida ="10.40";

    botao()
}

function suco(){
    document.getElementById("suco").style.boxShadow = "inset 0 0 0 5px #32B72F";
    document.getElementById("suco_icon").style.display = "block";

    document.getElementById("acai").style.boxShadow = "inset 0 0 0 5px #ffffff";
    document.getElementById("acai_icon").style.display = "none";

    document.getElementById("mate").style.boxShadow = "inset 0 0 0 5px #ffffff";
    document.getElementById("mate_icon").style.display = "none";
    
    bebida = "suco";
    precoBebida ="8.90";

    botao()
}
function mate(){
    document.getElementById("suco").style.boxShadow = "inset 0 0 0 5px #ffffff";
    document.getElementById("suco_icon").style.display = "none";

    document.getElementById("acai").style.boxShadow = "inset 0 0 0 5px #ffffff";
    document.getElementById("acai_icon").style.display = "none";

    document.getElementById("mate").style.boxShadow = "inset 0 0 0 5px #32b72f";
    document.getElementById("mate_icon").style.display = "block";
    
    bebida = "mate";
    precoBebida ="7.90";

    botao()
}
function acai(){
    document.getElementById("suco").style.boxShadow = "inset 0 0 0 5px #ffffff";
    document.getElementById("suco_icon").style.display = "none";

    document.getElementById("acai").style.boxShadow = "inset 0 0 0 5px #32b72f";
    document.getElementById("acai_icon").style.display = "block";

    document.getElementById("mate").style.boxShadow = "inset 0 0 0 5px #ffffff";
    document.getElementById("mate_icon").style.display = "none";
    
    bebida = "acai";
    precoBebida ="12.80";

    botao()
}
function mousse(){
    document.getElementById("mousse").style.boxShadow = "inset 0 0 0 5px #32b72f";
    document.getElementById("mousse_icon").style.display = "block";

    document.getElementById("brownie").style.boxShadow = "inset 0 0 0 5px #ffffff";
    document.getElementById("brownie_icon").style.display = "none";

    document.getElementById("maracuja").style.boxShadow = "inset 0 0 0 5px #ffffff";
    document.getElementById("maracuja_icon").style.display = "none";
    
    sobremesa = "mousse";
    precoSobremesa ="6.50";

    botao()
}
function brownie(){
    document.getElementById("mousse").style.boxShadow = "inset 0 0 0 5px #ffffff";
    document.getElementById("mousse_icon").style.display = "none";

    document.getElementById("brownie").style.boxShadow = "inset 0 0 0 5px #32b72f";
    document.getElementById("brownie_icon").style.display = "block";

    document.getElementById("maracuja").style.boxShadow = "inset 0 0 0 5px #ffffff";
    document.getElementById("maracuja_icon").style.display = "none";
    
    sobremesa = "brownie";
    precoSobremesa ="14.84";

    botao()
}
function maracuja(){
    document.getElementById("mousse").style.boxShadow = "inset 0 0 0 5px #ffffff";
    document.getElementById("mousse_icon").style.display = "none";

    document.getElementById("brownie").style.boxShadow = "inset 0 0 0 5px #ffffff";
    document.getElementById("brownie_icon").style.display = "none";

    document.getElementById("maracuja").style.boxShadow = "inset 0 0 0 5px #32b72f";
    document.getElementById("maracuja_icon").style.display = "block";
    
    sobremesa = "maracuja";
    precoSobremesa ="6.50";

    botao()
}

function finalizarPedido() {
    mensagem_wpp =
      "Olá, gostaria de fazer o pedido:" + "\n" +  " - Prato: " +
      comida + "\n" + " - Bebida: " + bebida +  "\n" +
      " - Sobremesa: " + sobremesa + "\n" +
      "Total: R$ " + precoTotal + "\n" 
    window.open(
      "https://wa.me/5522999279652?text=" + encodeURIComponent(mensagem_wpp)
    );}
