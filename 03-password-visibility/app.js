const inp = document.querySelector('.inp')
const icon = document.querySelector('.icon')

let toggle = true;

icon.addEventListener('click', () => {
  if(toggle){
    inp.setAttribute('type', 'text')
    icon.innerHTML = `<ion-icon name="eye-off-outline"></ion-icon>`;
    toggle = false;
  }else {
    inp.setAttribute("type", "password");
    icon.innerHTML = `<ion-icon name="eye-outline"></ion-icon>`;
    toggle = true;
  }
}) 