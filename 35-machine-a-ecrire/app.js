
const title = document.querySelector('h1')

const txt = "Hello the world"

function writer(word, index){
  if(index < word.length){
    setTimeout(()=> {
      title.innerHTML += `<span>${word[index]}</span>`
      writer(txt, index +1)
    },300)
  }
}

setTimeout(()=> {
  writer(txt,0)
}, 500)