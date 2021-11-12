let controller;

// const exploreScene = new ScrollMagic.Scene({
//   triggerElement: ".hike-exp",
//   triggerHook: 0.5,
// })
//   .addIndicators({ colorStart: "white", colorTrigger: "white" })
//   .addTo(controller);

function animateSlide() {
  //Init Controller
  controller = new ScrollMagic.Controller();
  //Select Some things

  const sliders = document.querySelectorAll(".slide");
  const nav = document.querySelector(".nav-header");
  //Loop over Each slide
  sliders.forEach((slide) => {
    const revealingImg = slide.querySelector(".reveal-img");
    const img = slide.querySelector("img");
    const revealText = slide.querySelector(".reveal-text");
    // console.log(revealText);
    //GSAP
    // gsap.to(revealingImg, 1, { x: "100%" });
    // gsap.to(img);

    const slideTl = gsap.timeline({
      defaults: { duration: 1, ease: " elastic.out" },
    });
    slideTl.fromTo(revealingImg, { x: "0%" }, { x: "100%" });
    slideTl.fromTo(img, { scale: 2 }, { scale: 1 }, "-=1");
    slideTl.fromTo(revealText, { x: "0%" }, { x: "100%" }, "-=0.75");
    slideTl.fromTo(nav, { y: "-100%" }, { y: "0%" }, "-=0.5");
  });
}

animateSlide();
