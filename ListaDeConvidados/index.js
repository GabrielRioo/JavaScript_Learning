var people = ['Chris', 'Anne', 'Colin', 'Terri', 'Phil', 'Lola', 'Sam', 'Kay', 'Bruce'];

var admitted = document.querySelector('.admitted');
var refused = document.querySelector('.refused');

admitted.textContent = 'Admit: ';
refused.textContent = 'Refuse: '

do {
    if(people[i] === 'Phil' || people[i] === 'Lola') {
        refused.textContent += people + ', ';
    } else {
        admitted.textContent += people + ', ';
    }
    
    i++;

} while (i < people.length);

refused.textContent = refused.textContent.slice(0, refused.textContent.length-2) + '.';
admitted.textContent = admitted.textContent.slice(0, admitted.textContent.length-2) + '.';
// var i = 0;

// refused.textContent += ;
// admitted.textContent += ;
