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


gsap.from( ".why-us", {
  scrollTrigger: { 
    trigger: ".why-us" , 
    start: "top 80%",
  
    toggleActions: "play none none reverse",

    // markers: true,
  },
  y: 100,

  opacity: 0,
  stagger: 0.2,
  scale:0.9,
  
  
  delay: 0,
});


gsap.from( ".event-grid", {
  scrollTrigger: { 
    trigger: ".event-grid" , 
    start: "top 80%",
  
    toggleActions: "play none none reverse",

    // markers: true,
  },
  y: 100,

  opacity: 0,
  stagger: 0.2,
  scale:0.9,
  
  
  delay: 0,
});


gsap.from( ".news .new", {
  scrollTrigger: { 
    trigger: ".news .new" , 
    start: "top 80%",
    
    toggleActions: "play none none reverse",

    // markers: true,
  },
  y: 50,

  opacity: 0,
  stagger: 0.2,
  
  
  
  delay: 0,
});
