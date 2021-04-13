var select = document.querySelector('select');
var list = document.querySelector('ul');
var h1 = document.querySelector('h1');

select.onchange = function () {
    var choice = select.value;
    var days = 31;
    if(choice === 'Fevereiro') {
        days = 28;
    }
    else if(choice === 'Abril' || choice === 'Junho' || choice === 'Setembro' || choice === 'Novembro') {
        days = 30;
    }

    createCalendar(days, choice);
}

function createCalendar(days, choice) {
    list.innerHTML = '';
    h1.textContent = choice;

    for (let i = 1; i <= days; i++) {
        var listItem = document.createElement('li');
        listItem.textContent = i;
        list.appendChild(listItem);
    }
}

createCalendar(31, 'January');

