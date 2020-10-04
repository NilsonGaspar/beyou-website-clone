const navbarLinks = document.getElementsByClassName('navbar-links')[0]
const switchButton = document.getElementsByClassName('switch-button')[0]


switchButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})

// BeYou Website Clone by Nilson Gaspar