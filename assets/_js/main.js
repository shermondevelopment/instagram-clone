const input = document.querySelector('.header__input-input');
const area = document.querySelector('.header__area-recent');
const arrow = document.querySelector('.arrow');
const arrowLeft = document.querySelector('.arrow-left');
const list = document.querySelector('.list')
const video = document.querySelector('video')
const play = document.querySelector('.play')
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
  play.addEventListener('click', () => {
    const notSound = play.querySelector('.not-sound')
    const sounded = play.querySelector('.how-sound')
    video.muted = !video.muted;
    if(video.muted === false) {
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