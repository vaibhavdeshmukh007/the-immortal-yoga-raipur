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
sr.reveal(`.footer__content`, {interval: 100})

/*==================== CONTACT FORM AJAX ====================*/
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