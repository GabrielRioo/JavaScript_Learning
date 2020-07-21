// const botao = document.querySelector('button');
var displayBuffer = "";
var numero = "";
var termos = [undefined, undefined, undefined];
var resultado = undefined;
// botao.addEventListener('click', pressNum)

function pressNum(num) {

    numero = numero.concat(num.innerHTML);
    showDisplay(num.innerHTML);

}

function pressOperator(op) {
    if (termos[1] == undefined) {
        termos[0] = numero;
        termos[1] = op.innerHTML;
        showDisplay(op.innerHTML);
        numero = "";
    }
    //fora da condição nada acontece

}

function pressEqual() {
    if (termos[0] != undefined && termos[1] != undefined && numero != "") {
        termos[2] = numero;
        var keepresultado;
        switch (termos[1]) {
            case '+':
                resultado = parseInt(termos[0]) + parseInt(termos[2]);
                break;

            case '-':
                resultado = parseInt(termos[0]) - parseInt(termos[2]);
                break;

            case 'x':
                resultado = parseInt(termos[0]) * parseInt(termos[2]);
                break;

            case '/':
                resultado = parseInt(termos[0]) / parseInt(termos[2]);
                break;
        }
        keepresultado = resultado;
        clearDisplay();
        showDisplay(resultado);
        clearMemory();
        numero = keepresultado.toString();
    }

}

function clearMemory() {
    numero = "";
    termos = [undefined, undefined, undefined];
    resultado = undefined;
}

function clearDisplay() {
    displayBuffer = "";
    var tela = document.getElementById('display');
    tela.value = displayBuffer;
}

function clearAll() {
    clearDisplay();
    clearMemory();
}

function showDisplay(conteudo) {
    displayBuffer = displayBuffer.concat(conteudo);
    var tela = document.getElementById('display');
    tela.value = displayBuffer;
}