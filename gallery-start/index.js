const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Looping through images */
for (let i = 1; i <= 5; i++) {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', 'images/pic' + i + '.jpg');
    thumbBar.appendChild(newImage);

    newImage.addEventListener('click', function() {
        var source = newImage.getAttribute('src');
        RetornaScr(source);
        // console.log(newImage);
    })
}

function RetornaScr (src) {
    displayedImage.setAttribute('src', src);
    // console.log(displayedImage)
}

btn.addEventListener('click', function() {
    var btn_estado = btn.getAttribute('class');
    // console.log(btn_estado);

    if (btn_estado === 'dark') {
        btn.setAttribute('class', 'light');
        // console.log(btn);
        // console.log(btn.textContent)
        btn.textContent= 'Lighter';
        overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
    }
    else {
        btn.setAttribute('class', 'dark');
        // console.log(btn);
        // console.log(btn.textContent)
        btn.textContent= 'Darker';
        overlay.style.backgroundColor = 'rgba(0,0,0,0)';
    }
})




/* Wiring up the Darken/Lighten button */
