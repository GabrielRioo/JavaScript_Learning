var btn = document.querySelector('button');
var input = document.querySelector('input');
var select = document.querySelector('select');
var message = input.value;
var type = select.value;

select.onchange = function () {
    type = select.value;
    message = input.value;
}

btn.onclick = function() {
    displayMessage(message, type);
}

function displayMessage(msgText, msgType) {
    var html = document.querySelector('html');
    
    // criar um elemento 'div' para uma caixa de mensagem.
    var panel = document.createElement('div');
    panel.setAttribute('class', 'msgBox'); // adicionar uma classe a tag div
    html.appendChild(panel); //identifica onde o panel(filho) irá aparecer na pagina
    
    var msg = document.createElement('p');
    msg.textContent = msgText;
    msg.style.backgroundImage = msgType;
    panel.appendChild(msg);
    
    var closeBtn = document.createElement('button');
    closeBtn.textContent = 'x';
    closeBtn.style.color = 'red';
    panel.appendChild(closeBtn);
    
    // quando clicar no 'X', vai remover a div 
    closeBtn.onclick = function() {
        panel.parentNode.removeChild(panel); //remove um elemento filho (panel)
    }

    if (msgType === 'warning') {
        msg.style.backgroundImage = 'url(icons/warning.png)';
        panel.style.backgroundColor = 'red';
    } else if (msgType === 'chat') {
        msg.style.backgroundImage = 'url(icons/chat.png)';
        panel.style.backgroundColor = 'aqua';
    } else {
        msg.style.paddingLeft = '20px';
    }
}