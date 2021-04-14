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
    var num = input.value;
    para.textContent = '';

    for (let i = 0; i < num; i++) {
        var sqRoot = Math.sqrt(i);

        if (Math.floor(sqRoot) !== sqRoot) {
            continue;
        }

        para.textContent += i + ' ';
        
    }
    
});