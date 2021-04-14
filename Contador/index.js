// var para = document.querySelector('p');
var button = document.querySelector('button');
var output = document.querySelector('.output');

button.addEventListener('click', function() {
    
    for(var i = 10; i > 0; i--) {
        var span = document.createElement('span');
        output.appendChild(span);
        span.textContent = i + ' ';
    }
    
})