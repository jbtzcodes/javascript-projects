const cartes = document.querySelectorAll('.carte');
let carteRetourner = false;
let premiereCarte, secondeCarte;
let verouillage = false;


cartes.forEach(carte => {
  carte.addEventListener('click', retourneCarte)
})


function retourneCarte(){

  this.childNodes[1].classList.toggle('active')
if( ! carteRetourner){
  carteRetourner = true;
  premiereCarte = this;
  return;
}
carteRetourner = false;
secondeCarte = this;

correspondance();
}

function correspondance(){
  if(premiereCarte.getAttribute('data-attr') === secondeCarte.getAttribute('data-attr')){
    premiereCarte.removeEventListener('click', retourneCarte)
    secondeCarte.removeEventListener('click', retourneCarte)
  }else {
    verouillage = true;
    setTimeout(()=> {
      premiereCarte.childNodes[1].classList.remove('active');
      secondeCarte.childNodes[1].classList.remove('active');
        verouillage = false;
    }, 1500)
  }
}

function aleatoire(){
  cartes.forEach(card => {
    let randomPos = Math.floor(Math.random()*12);
    card.style.order = randomPos;
  })
}

aleatoire();