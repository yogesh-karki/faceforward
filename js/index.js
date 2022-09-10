function showMen() {
  var box = document.querySelector(".men-section");
  fixedTl.restart();
  box.classList.add("show");
}
function showWomen() {
  var box = document.querySelector(".women-section");
  fixedTl.restart();
  box.classList.add("show");
}

function closeWomenSection() {
  var box = document.querySelector(".women-section");
  fixedTl.reverse();
  box.classList.remove("show");
}

function closeMenSection() {
  var box = document.querySelector(".men-section");
  fixedTl.reverse();
  box.classList.remove("show");
}

gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".scrollContainer"),
  smooth: true,
});

// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy(".scrollContainer", {
  scrollTop(value) {
    return arguments.length
      ? locoScroll.scrollTo(value, 0, 0)
      : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {
      top: 0,
      left: 0,
      width: window.innerWidth,
      height: window.innerHeight,
    };
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector(".scrollContainer").style.transform
    ? "transform"
    : "fixed",
});

const fixedTl = gsap.timeline({ paused: true });

fixedTl
  .from(".home_click .image_background", {
    webkitClipPath: "inset(10% 10% 10% 10%)",
    clipPath: "inset(10% 10% 10% 10%)",
    scale: 1.4,
    duration: 1.5,
  })

  .from(
    ".home_click h3, .home_click p",
    {
      opacity: 0,
      y: 30,
    },
    "0.5"
  )

  .from(
    ".home_click .treat_list .list",
    {
      opacity: 0,
      yPercent: 50,
      // stagger: 0.5,
    },
    "0"
  );

gsap.to(".header", {
  scrollTrigger: {
    trigger: ".header",
    start: "bottom+=300% top",
    scroller: ".scrollContainer",
    toggleActions: "restart none none reset",
    onEnter: headerFix,
    onLeaveBack: headerNotFix,
  },
});

function headerNotFix() {
  document.querySelector(".header").classList.remove("sticky");
}

function headerFix() {
  document.querySelector(".header").classList.add("sticky");
}

let imageContainers = document.querySelectorAll(".image_container");

imageContainers.forEach((container) => {
  let image = container.querySelector("img");
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: container,
      scroller: ".scrollContainer",
      toggleActions: "restart none none reset",
    },
  });

  tl.set(container, { autoAlpha: 1 });
  tl.from(container, 1.5, {
    xPercent: -100,
    ease: Power2.out,
  });
  tl.from(image, 1.5, {
    xPercent: 100,
    scale: 1.3,
    delay: -1.5,
    ease: Power2.out,
  });
});

let textContainers = document.querySelectorAll(".text_container");

textContainers.forEach((container) => {
  let heading = container.querySelector("h3,h4");
  let paragraph = container.querySelectorAll("p");
  let label = container.querySelectorAll("label");
  let list = container.querySelectorAll("ul li");

  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: container,
      scroller: ".scrollContainer",
      toggleActions: "restart none none reset",
    },
  });

  tl.from(label, 1, {
    yPercent: 200,
    opacity: 0,

    ease: Power2.out,
  });

  tl.from(
    heading,
    1,
    {
      yPercent: 100,
      opacity: 0,

      ease: Power2.out,
    },
    "0"
  );

  tl.from(
    paragraph,
    1,
    {
      opacity: 0,
      stagger: 0.5,
      yPercent: 100,
      ease: Power2.out,
    },
    "0.5"
  );

  tl.from(
    list,
    1,
    {
      yPercent: 100,
      opacity: 0,
      stagger: 0.5,
      ease: Power2.out,
    },
    "0.5"
  );
});

gsap.to(".text_pin h3", {
  scrollTrigger: {
    trigger: ".div_anim",
    scroller: ".scrollContainer",
    start: "center-=10% center",
    toggleActions: "restart none none reset",
    scrub: 3,
  },

  scale: 1.3,
  y: 150,
});

let svgTl = gsap.timeline({
  scrollTrigger: {
    trigger: ".div_anim",
    start: "top center",
    scroller: ".scrollContainer",
    toggleActions: "restart none none reset",
    scrub: 2,
  },
});

svgTl.to(".left2", {
  x: 5,
});

gsap.from(".right1", {
  scrollTrigger: {
    trigger: ".div_anim",
    start: "top center",
    scroller: ".scrollContainer",
    toggleActions: "restart none none reset",
  },
  duration: 1.5,

  webkitClipPath: "inset(5% 15% 0 45%)",
  clipPath: "inset(5% 15% 5% 45%)",
});

gsap.from(".right2", {
  scrollTrigger: {
    trigger: ".div_anim",
    start: "top center-=10%",
    scroller: ".scrollContainer",
    toggleActions: "restart none none reset",
    scrub: 3,
  },
  duration: 1.5,
  x: -5,
});

gsap.from(".left1", {
  scrollTrigger: {
    trigger: ".div_anim",
    start: "top center",
    scroller: ".scrollContainer",
    toggleActions: "restart none none reset",
  },
  duration: 1.5,

  webkitClipPath: "inset(5% 5% 0 45%)",
  clipPath: "inset(5% 5% 0 45%)",
});

gsap.from(".treatments", {
  scrollTrigger: {
    trigger: ".treatments",
    start: "top center",
    scroller: ".scrollContainer",
    toggleActions: "restart none none reset",
  },
  scaleX: 0.95,
});

gsap.from(".image_background", {
  scrollTrigger: {
    trigger: ".about_big",
    start: "top center+=10%",
    scroller: ".scrollContainer",
    toggleActions: "restart none none reset",
  },
  webkitClipPath: "inset(25% 25% 25% 25%)",
  clipPath: "inset(25% 25% 25% 25%)",
  scale: 1.4,
  duration: 1.5,
});

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();
