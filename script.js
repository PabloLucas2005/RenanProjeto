const contateNos = document.querySelectorAll('.ct')
const spanContatenos = document.querySelectorAll('#spanContatenos')
const mobileMenu = document.querySelector('.mobile-menu')
const nav = document.querySelector('nav')
const addClassInSpan = () => {
  spanContatenos.forEach(item => {
    item.classList.add('ativo')
  })

}

const removeClassInSpan = () => {
  spanContatenos.forEach(item => {
    item.classList.remove('ativo')
  })
}

const openMenuHamburguer = () => {
  nav.classList.toggle('ativa')
}


contateNos.forEach((item) => {
  item.addEventListener('mouseover', addClassInSpan)
  item.addEventListener('mouseout', removeClassInSpan)
})

mobileMenu.addEventListener('click', openMenuHamburguer)

//Script dos cards

// Selecionar todos os cards
const cards = document.querySelectorAll('.card');

// Função para detectar dispositivo móvel
function isMobile() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}


const observador = new IntersectionObserver((observar) => {
  observar.forEach((entrada) => {
    if (entrada.isIntersecting) {
      entrada.target.classList.add('show')
    } else {
      entrada.target.classList.remove('show')
    }
  })
})

const elements = document.querySelectorAll('.hidden')

elements.forEach((element) => observador.observe(element))



const observador2 = new IntersectionObserver((observar2) => {
  observar2.forEach((entrada2) => {
    if (entrada2.isIntersecting) {
      entrada2.target.classList.add('show2')
    } else {
      entrada2.target.classList.remove('show2')
    }
  })
})

const elements2 = document.querySelectorAll('.hidden2')

elements2.forEach((element) => observador2.observe(element))


let lastScrollY = window.scrollY;
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
  const currentScrollY = window.scrollY;

  if (currentScrollY < lastScrollY) {
    // Scroll para cima
    header.classList.add('visible');
  } else {
    // Scroll para baixo
    header.classList.remove('visible');
  }

  lastScrollY = currentScrollY;
});
// Define o número de telefone do WhatsApp (com DDI e DDD)
const whatsappNumber = "5581984098501"; // Substitua pelo seu número do WhatsApp

// Função para redirecionar para o WhatsApp com a mensagem desejada
function enviarMensagem(planoId) {
  let message = "";

  // Define a mensagem com base no ID do botão clicado
  switch (planoId) {
    case "plano1":
      message = "teste plano 1";
      break;
    case "plano2":
      message = "teste plano 2";
      break;
    case "plano3":
      message = "teste plano 3";
      break;
    default:
      message = "Olá! Gostaria de informações sobre seus planos.";
  }

  // Cria o link do WhatsApp com a mensagem correspondente
  const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  // Redireciona para o WhatsApp
  window.open(url, '_blank');
}

// Adiciona eventos de clique para cada botão
document.getElementById("plano1").addEventListener("click", function (event) {
  event.preventDefault();
  enviarMensagem("plano1");
});

document.getElementById("plano2").addEventListener("click", function (event) {
  event.preventDefault();
  enviarMensagem("plano2");
});

document.getElementById("plano3").addEventListener("click", function (event) {
  event.preventDefault();
  enviarMensagem("plano3");
});
