const input = document.querySelector('.header__input-input');
const area = document.querySelector('.header__area-recent');
const arrow = document.querySelector('.arrow');
const arrowLeft = document.querySelector('.arrow-left');
const list = document.querySelector('.list')
const video1 = document.querySelector('.video1')
const video2 = document.querySelector('.video2')
const play1 = document.querySelector('.play1')
const play2 = document.querySelector('.play2')
const html = document.documentElement;


const outSideClick = (element) => {
  html.addEventListener('click', (objeto) => {
    if(!objeto.target.classList.contains('header__input-input')) {
      area.setAttribute('style', 'display: none')
    }
  })
}

const onClick = () => {
  input.addEventListener('click', (element) => {
    if(element.target.classList.contains('header__input-input')) {
       area.setAttribute('style', 'display: block')
    }
  })
  
}

const scrollingRight = () => {
  let x = 0;
  arrow.addEventListener('click', (event) => {
      arrowLeft.setAttribute('style', 'display: flex !important;')
      arrow.setAttribute('style', "display: none !important;")
      list.setAttribute('style', `transition: transform 0.2s linear; transform: translateX(-${280}px)`)
  })
}
const scrollingLeft= () => {
  arrowLeft.addEventListener('click', (event) => {
    arrowLeft.setAttribute('style', 'display: none !important;')
    arrow.setAttribute('style', 'display: flex !important;')
    list.setAttribute('style', `transition: transform 0.2s linear; transform: translateX(${0}px)`)
  })
}

const sound = () => {
  play1.addEventListener('click', () => {
    const notSound = play1.querySelector('.not-sound')
    const sounded = play1.querySelector('.how-sound')
    video1.muted = !video1.muted;
    if(video1.muted === false) {
      notSound.style = "display: none"
      sounded.style = "display: block"
    } else {
      notSound.style = "display: block"
      sounded.style = "display: none"
    }
  })
}
const sound2 = () => {
  play2.addEventListener('click', () => {
    const notSound = play2.querySelector('.not-sound')
    const sounded = play2.querySelector('.how-sound')
    video2.muted = !video2.muted;
    if(video2.muted === false) {
      notSound.style = "display: none"
      sounded.style = "display: block"
    } else {
      notSound.style = "display: block"
      sounded.style = "display: none"
    }
  })
}


outSideClick(input)
onClick()
scrollingRight()
scrollingLeft()
sound()
sound2()