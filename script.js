const contateNos = document.querySelector('.ct')
const spanContatenos = document.getElementById('spanContatenos')
const addClassInSpan = () =>{
    spanContatenos.classList.add('ativo')
}

const removeClassInSpan = () =>{
  spanContatenos.classList.remove('ativo')
}

contateNos.addEventListener('mouseover',addClassInSpan)
contateNos.addEventListener('mouseout',removeClassInSpan)