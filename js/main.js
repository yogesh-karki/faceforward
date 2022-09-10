let headerButton = document.querySelector(".menu_click");
let navBox = document.querySelector(".nav_menu");

headerButton.addEventListener("click", () => {
  navBox.classList.toggle("show");
  headerButton.classList.toggle("active");
});

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

var swiperGallery = new Swiper(".gallery_slider", {
  speed: 1500,
  parallax: true,
  spaceBetween: 0,
  centeredSlides: true,
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  autoplay: {
    delay: 4500,
    disableOnInteraction: false,
  },
});

var swiperProducts = new Swiper(".products_slider", {
  speed: 1500,

  autoplay: {
    delay: 4500,
    disableOnInteraction: false,
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 1.5,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
  },
});

var swiperContact = new Swiper(".contact_slider", {
  speed: 1500,
  spaceBetween: 40,
  slidesPerView: 1,
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

  centeredSlides: true,
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    768: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    1024: {
      slidesPerView: 1.5,
      spaceBetween: 50,
    },
  },
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

var items = document.querySelectorAll(".treat_list .list");

if (items) {
  items.forEach((el) => {
    const image = el.querySelector("img");

    el.addEventListener("mouseenter", (e) => {
      gsap.to(image, { autoAlpha: 1 });
    });

    el.addEventListener("mouseleave", (e) => {
      gsap.to(image, { autoAlpha: 0 });
    });

    el.addEventListener("mousemove", (e) => {
      gsap.set(image, { x: e.offsetX - 200, y: e.offsetY - 10 });
    });
  });
}
