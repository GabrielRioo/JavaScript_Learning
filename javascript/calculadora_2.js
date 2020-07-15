function calc() {
    let num = document.querySelecto("numero").value();
    let tela = document.getElementById("tela");
    let operacao = document.getElementById("operacao");

    tela = num + operacao + num;
    console.log("numero: ", num)
    
}

