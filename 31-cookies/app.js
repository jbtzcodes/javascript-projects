const inputs = document.querySelectorAll('input');




// On commence par gerer la validation de nos inputs
inputs.forEach(input => {
  input.addEventListener('invalid', gestionValidation);
  input.addEventListener('input', gestionValidation);
})

function gestionValidation(e){
if(e.type === "invalid"){
  e.target.setCustomValidity('Remplissez les champs avant de valider')
}else{
  e.target.setCustomValidity('')
}
}

// on va ensuite gerer le comportement du formulaire

const form = document.querySelector('form');
form.addEventListener('submit', funcForm);
function funcForm(e){
  e.preventDefault();

  // on créer les nouveaux cookies
  const nouveauCookie = {};
  inputs.forEach(input => {
    const nameAttribute = input.getAttribute('name')
    nouveauCookie[nameAttribute] = input.value;
    // si on log on voit que si on rentre des infos on as bien notre cookie dans notre objet vide
    console.log(nouveauCookie);
  })

  // on gere ensuite la date dexpiration de nos cookies
  nouveauCookie.expires = new Date(new Date().getTime() + 7 * 24 * 60 * 60 * 1000);
  form.reset()
  // ce calcule va trouver une date pile une semaine apres la date de la création de notre cookie
  //  newDate().getTime() va nous donner le temps en milliseconde de la date actuelle


  // /on créer une fonction pour créeer de nouveau cookie
creationCookie(nouveauCookie)

}


function creationCookie(nouveauCookie){

  // on créerles toast
   if(toastCookie(nouveauCookie.name)) {
    creationToast({name: nouveauCookie.name, state: "modifié", color: "orange"})
  } 
  else {
    creationToast({name: nouveauCookie.name, state: "créé", color: "green"})
  }

  //  encodeURIcomponent = permet d'encoder du texte afin deviter les erreur
 document.cookie = `${encodeURIComponent(nouveauCookie.name)}=${encodeURIComponent(nouveauCookie.value)};expires=${nouveauCookie.expires.toUTCString()}`
//  toUTCString convertie une date en chaine de caractere selon le fuseau horraire UTC
if(cookiesList.children.length) {
    afficherCookie()
  }
}
function toastCookie(name) {

  const cookies = document.cookie.replace(/\s/g, "").split(";");
  const cookieName = cookies.map(cookie => cookie.split("=")[0])

  const cookiePresent = cookieName.find(cookie => cookie === encodeURIComponent(name))

  return cookiePresent;
}
const toasts = document.querySelector(".toasts")

function creationToast({name, state, color}){
  const toastInfo = document.createElement("p");
  toastInfo.className = "info";

  toastInfo.textContent = `Cookie "${name}" ${state}.`;
  toastInfo.style.backgroundColor = color;
  toasts.appendChild(toastInfo)

  setTimeout(() =>{
    toastInfo.remove()
  }, 2500)
}

// on gere le bouton pour afficher les cookies
const cookiesList = document.querySelector(".liste-cookies")
const btns = document.querySelector(".btns")
const infoTxt = document.querySelector(".info")

btns.addEventListener("click", afficherCookie)

let lock = false;
function afficherCookie(){
 
  if(cookiesList.children.length) cookiesList.textContent = "";

  const cookies = document.cookie.replace(/\s/g, "").split(";").reverse()
  console.log(cookies);

  if(!cookies[0]) {
    if(lock) return;

    lock = true;
    infoTxt.style.color = "red"
    infoTxt.textContent = "Pas de cookies à afficher, créez-en un!"

    setTimeout(() =>{
      infoTxt.textContent = "";
      lock = false;
    }, 1500)
    return;
  }

  creationElements(cookies)
}


function creationElements(cookies) {

  cookies.forEach(cookie => {
    const formatCookie = cookie.split("=");
    const listItem = document.createElement("li");
    const name = decodeURIComponent(formatCookie[0])
    listItem.innerHTML =  `
      <p>
        <span>Nom</span> : ${name}
      </p>
      <p>
        <span>Valeur</span>: ${decodeURIComponent(formatCookie[1])}
      </p>
      <button class="close">X</button>
    `;
    // on créer levenemnt pour le bouton close
    listItem.querySelector(".close").addEventListener("click", e => {
       creationToast({name:name, state: "supprimé", color: "red"})
      document.cookie = `${formatCookie[0]}=; expires=${new Date(0)}`
      e.target.parentElement.remove()
    })
    cookiesList.appendChild(listItem);
  
 })

}
