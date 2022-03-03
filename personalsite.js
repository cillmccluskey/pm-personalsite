console.log('mic check, this thing on??')

let mobileAboutMe = document.querySelector('.about-me');
if (window.innerWidth <= 768) {
    mobileAboutMe.innerText = "I'm an aspiring Front End Web Developer with a digital marketing background. Through learning web development I can  now bring the creative ideas in my head to life and onto peoples' screens."
  } 


  window.addEventListener('load', function() {
    setTimeout(
      function open(e) {
        document.querySelector('.popup').style.display = "block";
      },
      2500
    )
  })

  document.querySelector('#close').addEventListener('click', function() {
    document.querySelector('.popup').style.display = 'none';
  })

  document.querySelector('#modalBtn').addEventListener('click', function() {
    document.querySelector('.popup').style.display = 'none';
  })