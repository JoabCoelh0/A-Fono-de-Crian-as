
  const wrapper = document.querySelector('#comentarios');

  let isDown = false;
  let startX;
  let scrollLeft;

  wrapper.addEventListener('mousedown', (e) => {
    isDown = true;
    wrapper.classList.add('scrolling');
    startX = e.pageX - wrapper.offsetLeft;
    scrollLeft = wrapper.scrollLeft;
  });

  wrapper.addEventListener('mouseleave', () => {
    isDown = false;
    wrapper.classList.remove('scrolling');
  });

  wrapper.addEventListener('mouseup', () => {
    isDown = false;
    wrapper.classList.remove('scrolling');
  });

  wrapper.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - wrapper.offsetLeft;
    const walk = (x - startX) * 1.5; // velocidade do arrasto
    wrapper.scrollLeft = scrollLeft - walk;
  });

  // Suporte a toque (touchscreen)
  let touchStartX = 0;
  wrapper.addEventListener('touchstart', (e) => {
    touchStartX = e.touches[0].clientX;
    scrollLeft = wrapper.scrollLeft;
  });

  wrapper.addEventListener('touchmove', (e) => {
    const touchX = e.touches[0].clientX;
    const delta = touchStartX - touchX;
    wrapper.scrollLeft = scrollLeft + delta;
  });

