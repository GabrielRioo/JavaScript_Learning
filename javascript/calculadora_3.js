const botao = document.querySelector('button');
var displayBuffer = "";
var numero = "";
var termos = [undefined,undefined,undefined];
// botao.addEventListener('click', pressNum)

function pressNum(num) {

    numero = numero.concat(num.innerHTML);
    showDisplay(num.innerHTML);
    
}

function pressOperator(op) {
    termos[0] = numero;
    termos[1] = op.innerHTML;
    showDisplay(op.innerHTML)
}

function clearAll() {
    numero = "";
    displayBuffer = "";
    var tela = document.getElementById('display');
    tela.value = displayBuffer;
}

function showDisplay(conteudo) {
    displayBuffer = displayBuffer.concat(conteudo);
    var tela = document.getElementById('display');

    tela.value = displayBuffer;
}