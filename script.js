/*==================== SHOW MENU ====================*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== CHANGE BACKGROUND HEADER ====================*/
function scrollHeader(){
    const header = document.getElementById('header')
    // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 50) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*==================== PROGRAMS CARD INTERACTIVITY ====================*/
const programCards = document.querySelectorAll('.programs__card')

programCards.forEach(card => {
    card.addEventListener('click', () => {
        // Remove featured class from all cards
        programCards.forEach(c => c.classList.remove('featured'))
        
        // Add featured class to the clicked card
        card.classList.add('featured')
    })
})

/*==================== SCROLL REVEAL ANIMATION ====================*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    // reset: true
})

sr.reveal(`.home__data`)
sr.reveal(`.home__images`, {delay: 700, origin: 'bottom'})
sr.reveal(`.about__data, .about__img-wrapper`, {interval: 100})
sr.reveal(`.programs__card`, {interval: 100})
sr.reveal(`.contact__info, .contact__form`, {interval: 100})
/*==================== ZEN MEMORY MATCH GAME ====================*/
const memoryGame = document.getElementById('memory-game'),
      gameTime = document.getElementById('game-time'),
      gameMoves = document.getElementById('game-moves'),
      gameReset = document.getElementById('game-reset'),
      zenWin = document.getElementById('zen-win'),
      playAgain = document.getElementById('play-again')

const symbols = [
    'ri-sun-line', 'ri-moon-line', 'ri-leaf-line', 'ri-water-flash-line',
    'ri-heart-line', 'ri-windy-line', 'ri-fire-line', 'ri-earth-line'
]

let cards = [...symbols, ...symbols]
let hasFlippedCard = false
let lockBoard = false
let firstCard, secondCard
let moves = 0
let seconds = 0
let timerInterval
let matchedPairs = 0

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function createBoard() {
    memoryGame.innerHTML = ''
    shuffle(cards)
    cards.forEach(symbol => {
        const card = document.createElement('div')
        card.classList.add('memory-card')
        card.dataset.symbol = symbol
        card.innerHTML = `
            <div class="memory-card__front">
                <i class="${symbol}"></i>
            </div>
            <div class="memory-card__back"></div>
        `
        card.addEventListener('click', flipCard)
        memoryGame.appendChild(card)
    })
}

function flipCard() {
    if (lockBoard) return
    if (this === firstCard) return

    this.classList.add('flip')

    if (!hasFlippedCard) {
        // First click
        hasFlippedCard = true
        firstCard = this
        
        // Start timer on first flip
        if (moves === 0 && seconds === 0) {
            startTimer()
        }
        return
    }

    // Second click
    secondCard = this
    moves++
    gameMoves.innerText = moves
    checkForMatch()
}

function checkForMatch() {
    let isMatch = firstCard.dataset.symbol === secondCard.dataset.symbol
    isMatch ? disableCards() : unflipCards()
}

function disableCards() {
    firstCard.removeEventListener('click', flipCard)
    secondCard.removeEventListener('click', flipCard)
    firstCard.classList.add('matched')
    secondCard.classList.add('matched')
    
    matchedPairs++
    if (matchedPairs === symbols.length) {
        setTimeout(showWinMessage, 500)
    }

    resetBoard()
}

function unflipCards() {
    lockBoard = true
    setTimeout(() => {
        firstCard.classList.remove('flip')
        secondCard.classList.remove('flip')
        resetBoard()
    }, 1000)
}

function resetBoard() {
    [hasFlippedCard, lockBoard] = [false, false]
    [firstCard, secondCard] = [null, null]
}

function startTimer() {
    clearInterval(timerInterval)
    seconds = 0
    timerInterval = setInterval(() => {
        seconds++
        const mins = Math.floor(seconds / 60).toString().padStart(2, '0')
        const secs = (seconds % 60).toString().padStart(2, '0')
        gameTime.innerText = `${mins}:${secs}`
    }, 1000)
}

function stopTimer() {
    clearInterval(timerInterval)
}

function showWinMessage() {
    stopTimer()
    zenWin.classList.add('show')
}

function resetGame() {
    stopTimer()
    seconds = 0
    moves = 0
    matchedPairs = 0
    gameTime.innerText = '00:00'
    gameMoves.innerText = '0'
    zenWin.classList.remove('show')
    hasFlippedCard = false
    lockBoard = false
    firstCard = null
    secondCard = null
    createBoard()
}

if (memoryGame) {
    createBoard()
    gameReset.addEventListener('click', resetGame)
    playAgain.addEventListener('click', resetGame)
}

/*==================== SCROLL REVEAL UPDATE ====================*/
sr.reveal(`.zen__container`, {delay: 600})
const contactForm = document.getElementById('contact-form'),
      contactSuccess = document.getElementById('contact-success'),
      contactButton = document.getElementById('contact-button')

if (contactForm) {
    contactForm.addEventListener('submit', e => {
        e.preventDefault()

        contactButton.innerText = 'Sending...'
        contactButton.disabled = true

        const formData = new FormData(contactForm)
        
        fetch('/', {
            method: 'POST',
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: new URLSearchParams(formData).toString()
        })
        .then(() => {
            contactForm.classList.add('hide-form')
            contactSuccess.classList.add('show-success')
        })
        .catch(error => {
            alert('Oops! There was an error: ' + error)
            contactButton.innerText = 'Send Message'
            contactButton.disabled = false
        })
    })
}