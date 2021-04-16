function displayMessage() {
    var html = document.querySelector('html');

    // criar um elemento 'div' para uma caixa de mensagem.
    var panel = document.createElement('div');
    panel.setAttribute('class', 'msgBox'); // adicionar uma classe a tag div
    html.appendChild(panel); //identifica onde o panel(filho) irá aparecer na pagina

    var msg = document.createElement('p');
    msg.textContent = 'This is a message box';
    panel.appendChild(msg);

    var closeBtn = document.createElement('button');
    closeBtn.textContent = 'x';
    panel.appendChild(closeBtn);

    // quando clicar no 'X', vai remover a div 
    closeBtn.onclick = function() {
        panel.parentNode.removeChild(panel); //remove um elemento filho (panel)
    }
}

displayMessage();