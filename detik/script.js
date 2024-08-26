let slideIndex = 0;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("dot");

    if (n >= slides.length) {
        slideIndex = 0;
    }
    if (n < 0) {
        slideIndex = slides.length - 1;
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active");
    }

    for (let i = 0; i < dots.length; i++) {
        dots[i].classList.remove("active-dot");
    }

    slides[slideIndex].classList.add("active");
    dots[slideIndex].classList.add("active-dot");
}


document.querySelectorAll('.job-item').forEach(item => {
    item.addEventListener('mouseenter', function() {
      const randomColor = `rgb(${Math.floor(Math.random() * 256)}, 
                                ${Math.floor(Math.random() * 256)}, 
                                ${Math.floor(Math.random() * 256)})`;
      this.querySelector('.job-title').style.backgroundColor = randomColor;
    });
  
    item.addEventListener('mouseleave', function() {
      this.querySelector('.job-title').style.backgroundColor = '';
    });
  });
  
