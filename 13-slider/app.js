const images = document.querySelectorAll('img');
const slider = images.length;
const suivant = document.querySelector('#suivant');
const precedent = document.querySelector('#precedent');
let compteur = 0;

setInterval(function(){
    images[compteur].classList.remove('active');

    if(compteur < slider - 1){
        compteur++;
    } else {
        compteur = 0;
    }

    images[compteur].classList.add('active')
    console.log(compteur);
    
}, 2000)



function slidePrecedente(){
    images[compteur].classList.remove('active');

    if(compteur > 0){
        compteur--;
    } else {
        compteur = slider - 1;
    }

    images[compteur].classList.add('active')
    // console.log(count);
    
}
precedent.addEventListener('click', slidePrecedente)

function keyPress(e){
    console.log(e);
    
    if(e.keyCode === 37){
        slidePrecedente();
    } else if(e.keyCode === 39){
        slideSuivante();
    }
}
document.addEventListener('keydown', keyPress)