/**
 * @type {HTMLElement}
 */
const hamburger = document.querySelector('.hamburger');
const contactForm = document.querySelector('.contact-form')

/**
 * @type {NodeList}
 */
const navItem = document.querySelectorAll('.nav-item')

hamburger.addEventListener('click', toggleHamburgerMenu);


Array.from(navItem).forEach(e => e.addEventListener('click', () => {
  const navBar = document.querySelector('.nav-bar');
  navBar.classList.toggle('active');
}));

/**
 * @function toggleHamburgerMenu
 * @description Toggles the class "active" on the element with the class "nav-bar"
*/
function toggleHamburgerMenu () {
  const navBar = document.querySelector('.nav-bar');
  navBar.classList.toggle('active');
}

contactForm.addEventListener('submit', e => {
  e.preventDefault()
  let email = document.getElementById('email')
  let subject = document.getElementById('subject')
  let message = document.getElementById('bio')
  let formData = {
      email: email.value,
      subject: subject.value,
      message: message.value,
  }
  let xhr = new XMLHttpRequest();
  xhr.open('POST', '/contact')
  xhr.setRequestHeader('content-type', 'application/json')
  xhr.onload = function() {
    console.log(xhr.responseText)
    if(xhr.responseText == 'success') {
      alert('Email Sent');
      email.value = '';
      subject.value = '';
      message.value = '';
    } else {
      alert('Something went wrong!')
    }
  }
  xhr.send(JSON.stringify(formData))
})