let numeroAleatorio = Math.floor(Math.random() * 100) + 1;

let palpites = document.querySelector('.palpites');
let ultimoResultado = document.querySelector('.ultimoResultado');
let baixoOuAlto = document.querySelector('.baixoOuAlto');

let campoPalpite = document.querySelector('.campoPalpite');
let envioPalpite = document.querySelector('.envioPalpite');

let contagemPalpites = 1;
let botaoReinicio;

function conferirPalpite() {
    let palpiteUsuario = Number(campoPalpite.value); // Number() só para ter certeza de que o valor vai ser um numero.

    if (contagemPalpites === 1) {
        palpites.textContent = 'Palpites anteriores: ';
    }
    palpites.textContent += palpiteUsuario + ' ';

    if (palpiteUsuario == numeroAleatorio) {
        ultimoResultado.textContent = 'Parabanes! Você acertou!';
        ultimoResultado.style.backgroundColor = 'green';
        baixoOuAlto.textContent = ' ';
        configFimDeJogo();
    }

    else if (contagemPalpites === 10) {
        ultimoResultado.textContent = "!!!FIM DE JOGO!!!";
        ultimoResultado.style.backgroundColor = 'red';
        baixoOuAlto.textContent = ' ';
        configFimDeJogo();
    }
    else {
        ultimoResultado.textContent = 'Errado';
        ultimoResultado.style.backgroundColor = 'red';

        if (palpiteUsuario < numeroAleatorio) {
            baixoOuAlto.textContent = 'Mais';
        }
        else {
            baixoOuAlto.textContent = 'Menos';
        }
    }
    contagemPalpites++;
    campoPalpite.value = ' ';
    campoPalpite.focus();
}
