// Validação para o formulário. Alertar sempre que houver campos vazios.

const form = document.querySelector('form');
const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const submit = document.getElementById('submit');
const para = document.querySelector('p');

form.addEventListener('submit', function(e) {
    if(fname.value === '' || lname.value === '') {
        e.preventDefault();
        para.textContent = 'You need to fill in both names!';
    }
})