const mdpLength = document.querySelector(".mdp-length input");
const btn = document.querySelector(".btn-generate");
const options = document.querySelectorAll('.option input')


// gestion de la longueur du mot de passe
const updateMdp = () => {
  console.log(mdpLength.value);
  document.querySelector(".mdp-length span").innerText = mdpLength.value;
}
updateMdp()


// GENERER LE MOT DE PASSE

const generateMdp = ()=> {
  let passwordBase = "";
  options.forEach(option => {
    if(option.checked){
      console.log(option);
    }
  })
}

mdpLength.addEventListener('input', updateMdp) 
btn.addEventListener('click', generateMdp) 