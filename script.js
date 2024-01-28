const courses = [
  {
    title: 'iOS Development',
    img: '/images/ios.png',
    description: 'რეგისტრაცია დასრულებულია',
    more: 'კურსის დეტალები',
  },
  {
    title: 'React',
    img: '/images/react.png',
    description: 'რეგისტრაცია დასრულებულია',
    more: 'კურსის დეტალები',
  },
  {
    title: 'Intro to Python',
    img: '/images/python.png',
    description: 'რეგისტრაცია დასრულებულია',
    more: 'კურსის დეტალები',
  },
  {
    title: 'Advanced Python',
    img: '/images/aPython.png',
    description: 'რეგისტრაცია დასრულებულია',
    more: 'კურსის დეტალები',
  },
  {
    title: 'Advanced Cybersecurity Course',
    img: '/images/advancedSecurity.png',
    description: 'რეგისტრაცია დასრულებულია',
    more: 'კურსის დეტალები',
  },
  {
    title: 'ToT - Training of Trainers',
    img: '/images/tot.png',
    description: 'რეგისტრაცია დასრულებულია',
    more: 'კურსის დეტალები',
  },
  {
    title: 'Blockchain',
    img: '/images/blockchain.png',
    description: 'რეგისტრაცია დასრულებულია',
    more: 'კურსის დეტალები',
  },
  {
    title: 'DevOps',
    img: '/images/devops.png',
    description: 'რეგისტრაცია დასრულებულია',
    more: 'კურსის დეტალები',
  },
  {
    title: 'Information Security Governance',
    img: '/images/securitygovernance.png',
    description: 'რეგისტრაცია დასრულებულია',
    more: 'კურსის დეტალები',
  },
];

// maping for courses data

document.getElementById('gridData').innerHTML = courses
  .map(
    (course) =>
      `<div class='grid-item'>
      <img src=${course.img}></img>
      <div class='item-description'>
        <p style="font-size: 16zpx">${course.title}</p>
        <p style="font-size: 14px">${course.description}</p>
        <a href='#' class='more'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width='20px'><path fill="#74C0FC" d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z"/></svg>${course.more}</a>
      </div>
    </div>`
  )
  .join('');

// slide function
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName('mySlides');
  let dots = document.getElementsByClassName('dot');
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(' active', '');
  }
  slides[slideIndex - 1].style.display = 'block';
  dots[slideIndex - 1].className += ' active';
}

// FAQ section

const acc = document.getElementsByClassName('accordion');
let i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener('click', function () {
    this.classList.toggle('active');
    const panel = this.nextElementSibling;
    if (panel.style.display === 'block') {
      panel.style.display = 'none';
    } else {
      panel.style.display = 'block';
    }
  });
}
