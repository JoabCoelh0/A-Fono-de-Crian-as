  let slides = document.querySelectorAll('.slid');
  let index = 0;

  function showSlide() {
    slides.forEach((slide, i) => {
      slide.classList.remove('active');
    });
    slides[index].classList.add('active');
    index = (index + 1) % slides.length;
  }

  showSlide();

  setInterval(showSlide, 5000);
