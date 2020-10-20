const sliders = document.querySelectorAll('.swiper-container');



sliders.forEach(slider => {
  let mySwiper = new Swiper(slider, {
    slidesPerView: 'auto',
    spaceBetween: 10,
    // slidesPerView: 'auto',
  });
});


let mySwiper = new Swiper('.swiper-container1', {
  slidesPerView: 'auto',
  spaceBetween: 20,
  // slidesPerView: 'auto',
});

window.addEventListener("load", function () {
  setTimeout(function () {
    // This hides the address bar:
    window.scrollTo(0, 100);
  }, 0);
});

// var swiper = new Swiper('.swiper-container', {
//   slidesPerView: 1,
//   spaceBetween: 30,
//   pagination: {
//     el: '.swiper-pagination',
//     clickable: true,
//   },
// });