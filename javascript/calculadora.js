function calcular() {
    let val1 = parseInt(document.getElementById("val1").value);
    let val2 = parseInt(document.getElementById("val2").value);
    let sinal = document.getElementById("sinal").value;
    let result = document.getElementById("result");

    console.log("valor 1: ", val1)
    console.log("valor 2: ", val2)

    if (sinal == "+") result.value = val1 + val2;
    if (sinal == "-") result.value = val1 - val2;
    if (sinal == "*") result.value = val1 * val2;
    if (sinal == "/") result.value = val1 / val2;

    console.log(val1, " + ", val2, " = ", result)
}


