const cardNumber = document.getElementById('numero')

cardNumber.addEventListener('keyup', () => {
  //  on recupere la val de l'input
  let val = cardNumber.value;

  // on créer une variable pour la future valeur
  let newVal = "";

  // on nettoie notre valeur
  val = val.replace(/\s/g, "");

  // cette boucle rajoute un espace sur notre input apres 4 chiffres
  for(let i = 0; i < val.length; i++){
    if( i % 4 === 0 && i > 0 ){
     newVal = newVal.concat('  ');
    }
    newVal = newVal.concat(val[i])
  }
  cardNumber.value = newVal;
}) 


