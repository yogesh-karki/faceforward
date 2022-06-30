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
  let heading = container.querySelector("h3");
  let paragraph = container.querySelectorAll("p");

  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: container,
      scroller: ".scrollContainer",
      toggleActions: "restart none none reset",
    },
  });

  tl.from(heading, 1, {
    yPercent: 100,
    opacity: 0,

    ease: Power2.out,
  });

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

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();
