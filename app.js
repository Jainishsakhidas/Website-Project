let controller;
let slideScene;
let pageScene;
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
  sliders.forEach((slide, index, slides) => {
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

    //Creating scene
    slideScene = new ScrollMagic.Scene({
      triggerElement: slide,
      triggerHook: 0.25,
      reverse: false,
    })
      .setTween(slideTl)
      .addIndicators({
        colorStart: "white",
        colorTrigger: "white",
        name: "slide",
      })
      .addTo(controller);

    //New Animation
    const pageTl = gsap.timeline();
    let nextSlide = slides.length - 1 === index ? "end" : slides[index + 1];
    // console.log(slides.length, index, nextSlide);
    pageTl.fromTo(nextSlide, { y: "0%" }, { y: "50%" });
    pageTl.fromTo(slide, { opacity: 1, scale: 1 }, { opacity: 0, scale: 0.5 });
    pageTl.fromTo(nextSlide, { y: "50%" }, { y: "0%" }, "-=0.5");
    //Create new Scene
    pageScene = new ScrollMagic.Scene({
      triggerElement: slide,
      duration: "100%",
      triggerHook: 0,
    })
      .addIndicators({
        colorStart: "white",
        colorTrigger: "white",
        name: "page",
        indent: 200,
      })
      .setPin(slide, { pushFollowers: false })
      .setTween(pageTl)
      .addTo(controller);
  });
}

animateSlide();
