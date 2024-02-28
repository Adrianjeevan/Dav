import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);






gsap.from(".highlights .high", {
  y: 100,

  opacity: 0,
  stagger: 0.2,

  duration: 1,

  delay: 0,
});

gsap.registerPlugin(ScrollTrigger);

gsap.from(".sectiontitle", {
  y: 100,

  opacity: 0,
  stagger: 0.2,

  duration: 1,

  delay: 0,
});



gsap.from(".event-grid", {
  scrollTrigger: {
    trigger: ".event-grid",
    start: "top 80%",

    toggleActions: "play none none reverse",

    // markers: true,
  },
  y: 100,

  opacity: 0,
  stagger: 0.2,
  scale: 0.9,

  delay: 0,
});


gsap.from(".why-us", {
  scrollTrigger: {
    trigger: ".why-us",
    start: "top 80%",

    toggleActions: "play none none reverse",

    // markers: true,
  },
  y: 0,

  opacity: 0,
  stagger: 0.2,
  scale: 0.9,

  delay: 0,
});

gsap.from(".news .new", {
  scrollTrigger: {
    trigger: ".news .new",
    start: "top 80%",

    toggleActions: "play none none reverse",

    // markers: true,
  },
  y: 50,

  opacity: 0,
  stagger: 0.2,

  delay: 0,
});

gsap.from(".numbers .box", {
  scrollTrigger: {
    trigger: ".numbers .box",
    start: "top 80%",

    toggleActions: "play none none reverse",

    // markers: true,
  },
  y: 50,

  opacity: 0,
  stagger: 0.3,

  delay: 0,
});

gsap.from(".principal .principal-img", {
  scrollTrigger: {
    trigger: ".principal .principal-img",
    start: "top 80%",

    toggleActions: "play none none reverse",

    // markers: true,
  },
  x: -150,

  opacity: 0,
  stagger: 0.3,
  duration: 1,

  delay: 0,
});

gsap.from(".principal .principal-cont", {
  scrollTrigger: {
    trigger: ".principal .principal-cont",
    start: "top 80%",

    toggleActions: "play none none reverse",

    // markers: true,
  },
  x: 150,

  opacity: 0,
  stagger: 0.3,
  duration: 1,

  delay: 0,
});

gsap.from(".belives-point", {
  scrollTrigger: {
    trigger: ".belives",
    start: "top 80%",

    toggleActions: "play none none reverse",

    // markers: true,
  },
  y: 150,

  opacity: 0,
  stagger: 0.3,
  duration: 1,

  delay: 0,
});
gsap.from(".obj", {
  scrollTrigger: {
    trigger: ".obj",
    start: "top 80%",

    toggleActions: "play none none reverse",

    // markers: true,
  },
  y: 150,

  opacity: 0,
  stagger: 0.3,
  duration: 1,

  delay: 0,
});

gsap.from(".member-card", {
  scrollTrigger: {
    trigger: " .member-card",
    start: "top 80%",

    toggleActions: "play none none reverse",

    // markers: true,
  },
  y: 150,

  opacity: 0,
  stagger: 0.3,
  duration: 1,

  delay: 0,
});

gsap.from(".curriculum", {
  scrollTrigger: {
    trigger: " .curriculum",
    start: "top 80%",

    toggleActions: "play none none reverse",

    // markers: true,
  },
  x: 150,

  opacity: 0,
  stagger: 0.3,
  duration: 1,

  delay: 0,
});

gsap.from(".timings", {
  scrollTrigger: {
    trigger: " .timings",
    start: "top 80%",

    toggleActions: "play none none reverse",

    // markers: true,
  },
  x: -150,

  opacity: 0,
  stagger: 0.3,
  duration: 1,

  delay: 0,
});
gsap.from(".curriculum-1", {
  x: 150,

  opacity: 0,
  stagger: 0.3,
  duration: 1,

  delay: 0,
});

gsap.from(".timings-1", {
  x: -150,

  opacity: 0,
  stagger: 0.3,
  duration: 1,

  delay: 0,
});

gsap.from(".other-tile", {
  scrollTrigger: {
    trigger: " .other-tile",
    start: "top 80%",

    toggleActions: "play none none reverse",

    // markers: true,
  },
  x: -50,

  opacity: 0,
  stagger: 0.3,
  // duration:1,

  delay: 0,
});

gsap.from(".procedure li", {
  y: 50,

  opacity: 0,
  stagger: 0.3,
  // duration:1,

  delay: 0,
});

gsap.from(".pb", {
  x: 50,

  opacity: 0,
  stagger: 0.3,
  duration: 0.6,

  delay: 0,
});

gsap.from("newclass", {
  x: 50,

  opacity: 0,
  stagger: 0.3,
  duration: 0.6,

  delay: 0,
});

gsap.from(".calls", {
  scrollTrigger: {
    trigger: " .calls",
    start: "top 80%",

    toggleActions: "play none none reverse",

    // markers: true,
  },
  x: -50,

  opacity: 0,
  stagger: 0.3,
  // duration:1,

  delay: 0,
});

gsap.from(".contact-card", {
  scrollTrigger: {
    trigger: " .contact-card",
    start: "top 80%",

    toggleActions: "play none none reverse",

    // markers: true,
  },
  x: -50,

  opacity: 0,
  stagger: 0.3,
  // duration:1,

  delay: 0,
});

gsap.from(".map", {
  scrollTrigger: {
    trigger: " .map",
    start: "top 80%",

    toggleActions: "play none none reverse",

    // markers: true,
  },
  y: -50,
  scale: 0.5,

  opacity: 0,
  stagger: 0.3,
  // duration:1,

  delay: 0,
});
