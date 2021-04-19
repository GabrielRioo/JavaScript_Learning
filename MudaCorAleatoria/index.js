var btn = document.querySelector('button');

function random(number) {
    return Math.floor(Math.random()*number);
}

function bgChange(event) {
    var rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
    event.target.style.backgroundColor = rndCol;

    console.log(event);
}

btn.addEventListener('mouseover', bgChange);