/* stoquer les images dans un tableau */
const items = document.querySelectorAll('img');
console.log(items);

/* nombre total d'images */
const nbrItems = items.length;
console.log(nbrItems)

/* button previous */
const precedent = document.querySelector('.left');

/* button next */
const suivant = document.querySelector('.right');
console.log(precedent, suivant)

/* compteur */
let count = 0;

function slideSuivante(){
    items[count].classList.remove('active');

    if(count < nbrItems - 1) {
        count++;
    }else{
        count = 0;
    }

    items[count].classList.add('active');
    console.log(count);
}

suivant.addEventListener('click', slideSuivante); 

function slidePrecedent(){
    items[count].classList.remove('active');

    if(count > 0) {
        count--;
    }else{
        count = nbrItems - 1;
    }

    items[count].classList.add('active');
    console.log(count)
}

precedent.addEventListener('click', slidePrecedent);

/* slider automatic run with setInterval */
setInterval(slideSuivante, 3000);

/* keydown touch */

function keyPress(e) {
    if(e.keyCode === 37) {
        slidePrecedent();
    }else if(e.keyCodegit === 39) {
        slideSuivante();
    }
}

document.addEventListener('keydown', keyPress);