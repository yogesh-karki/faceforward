var swiper = new Swiper(".banner_slider", {
  speed: 1500,
  parallax: true,
  spaceBetween: 0,
  centeredSlides: true,
  autoplay: {
    delay: 4500,
    disableOnInteraction: false,
  },
});

var swiperProducts = new Swiper(".products_slider", {
  speed: 1500,
  spaceBetween: 40,
  slidesPerView: 3,
  autoplay: {
    delay: 4500,
    disableOnInteraction: false,
  },
});

var swiperClients = new Swiper(".clients_slider", {
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  slidesPerView: 1.5,
  spaceBetween: 50,
  centeredSlides: true,
});

var genderBox = document.querySelector(".treatments");

if (genderBox) {
  var forFemale = document.querySelector("#option_for_female");
  var forMale = document.querySelector("#option_for_male");

  forFemale.addEventListener("mouseover", () => {
    var imgSrc = forFemale.querySelector("img").getAttribute("src");
    genderBox.style.backgroundImage = "url(" + imgSrc + ")";
  });

  forMale.addEventListener("mouseover", () => {
    var imgSrc = forMale.querySelector("img").getAttribute("src");
    genderBox.style.backgroundImage = "url(" + imgSrc + ")";
  });
}
