var contacts = [
    'Chris:2232322',
    'Sarah:3434343',
    'Bill:7545757',
    'Mary:9995484',
    'Dianne:9631549'
];
var para = document.querySelector('p');
var input = document.querySelector('input');
var btn = document.querySelector('button');

btn.addEventListener('click', function () {
    var searchName = input.value; // pega o valor do input digitado e salva na variavel
    input.value = ''; // atribui uma string vazia apos salvar na variavel
    input.focus(); // bota o input como foco

    for(var i = 0; i < contacts.length; i++) { 
        var splitContact = contacts[i].split(':'); // separar a partir dos ":"

        if (splitContact[0] === searchName) { // se a primeira parte do split for igual ao nome digitado
            para.textContent = splitContact[0] + '\'s number is ' + splitContact[1] + '.'; // escreve no paragrafo
            break;
        } else {
            para.textContent = 'Contact not found.';
        }
    }
});