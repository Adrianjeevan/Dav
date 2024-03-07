import { tns } from "tiny-slider/src/tiny-slider";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import { Fancybox } from "@fancyapps/ui";
import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);



if (document.querySelector(".gallery-slider")) {
  var slider = tns({
    container: ".gallery-slider",

    slideBy: 1,
    autoplay: false,
    edgePadding: 0,
    // navContainer: ".nav-container",
    // navAsThumbnails: false,
    nav: false,
    autoplayButton: false,
    autoplayButtonOutput: false,
    controls: true,
    controlsContainer: ".gallery-controls",
    responsive: {
      0: {
        edgePadding: 0,
        gutter: 0,
        items: 1,
      },
      640: {
        edgePadding: 0,
        gutter: 0,
        items: 1,
      },
      700: {
        gutter: 30,
        items: 2,
      },
      900: {
        items: 3,
        gutter: 10,
      },
    },
  });

  gsap.from(".gallery-slider .tns-slide-active", {
    y: 50,
    stagger: 0.2,
    opacity: 0,
    duration: 0.7,
  });

  slider.events.on("indexChanged", function (info) {
    // Target the current active slide link
    var activeLink = $(".gallery-slider .tns-slide-active ");

    // GSAP animation with requestAnimationFrame
    function animate() {
      gsap.from(activeLink, {
        y: 50,
        stagger: 0.2,
        opacity: 0,
        duration: 1,
      });
    }

    // Request animation frame
    requestAnimationFrame(animate);
  });
}

Fancybox.bind();

const mainContainer = document.getElementById("myCarousel");
const mainOptions = {
  Dots: false,
  transition: "slide",
  Autoplay: {
    timeout: 3000,
  },
};

let headerHeight = document.querySelector("header").offsetHeight;

// set css variable header-height to the height of <header>
document.documentElement.style.setProperty(
  "--header-height",
  headerHeight + "px"
);
if (document.querySelector(".first-fold-wrapper")) {
  if (window.innerWidth < 768) {
    document.querySelector("header").nextElementSibling.style.marginTop =
      headerHeight + "px";
    // add headerHeight to .first-fold
    document.querySelector(".first-fold-wrapper").style.marginTop =
      headerHeight + "px";
  } else {
    document.querySelector(".first-fold-wrapper").style.marginTop =
      headerHeight + "px";
    document.querySelector("header").nextElementSibling.style.marginTop =
      headerHeight + "px";
  }
}

if (document.querySelector(".hero-slider")) {
  var slider = tns({
    container: ".hero-slider",
    items: 1,
    slideBy: 1,
    autoplay: true,
    edgePadding: 0,
    gutter: 20,
    mouseDrag: true,
    controls: false,
    autoplayButton: false,
    autoplayButtonOutput: false,

    animateIn: "fadeInDown",
    animateOut: "fadeOutDown",
    // controlsContainer:'.controls-container',
    nav: false,
    animateDelay: 700,
  });

  gsap.from(".hero-slider .tns-slide-active .banner-title", {
    y: 50,
    stagger: 0.2,
    opacity: 0,
    duration: 0.7,
  });

  slider.events.on("indexChanged", function (info) {
    // Target the current active slide link
    var activeLink = $(".hero-slider .tns-slide-active .banner-title");

    // GSAP animation with requestAnimationFrame
    function animate() {
      gsap.from(activeLink, {
        y: 50,
        stagger: 0.2,
        opacity: 0,
        duration: 1,
      });
    }

    // Request animation frame
    requestAnimationFrame(animate);
  });
}

if (document.querySelector(".test-slider")) {
  var slider = tns({
    container: ".test-slider",
    items: 1,
    slideBy: 1,
    autoplay: false,
    edgePadding: 0,
    gutter: 20,
    mouseDrag: true,
    controls: true,
    autoplayButton: false,
    autoplayButtonOutput: false,

    animateIn: "fadeInDown",
    animateOut: "fadeOutDown",
    controlsContainer: ".testi-controls",
    nav: false,
    animateDelay: 700,
  });

  gsap.utils.toArray(".test-slider .slide").forEach(function (slide, index) {
    gsap.from(slide, {
      y: 100,
      opacity: 0,
      duration: 1,
      stagger: 0.4,
      scrollTrigger: {
        trigger: slide,
        start: "top 80%",
        scale: 0.9,

        // For debugging, you can remove this in production
        toggleActions: "play none none reverse",
        stagger: 0.4, // Stagger based on slide index
      },
    });
  });
}

if (document.querySelector(".course-slider")) {
  var slider = tns({
    container: ".course-slider",
    items: 4,
    slideBy: 1,
    autoplay: false,
    edgePadding: 20,
    gutter: 40,
    speed: 200,
    controls: true,
    controlsContainer: ".controls-container2",
    nav: false,
    responsive: {
      0: {
        edgePadding: 0,
        gutter: 0,
        items: 1,
      },
      640: {
        edgePadding: 0,
        gutter: 0,
        items: 1,
      },
      700: {
        gutter: 30,
        items: 2,
      },
      900: {
        items: 4,
        gutter: 40,
      },
    },
  });

  gsap.utils
    .toArray(".course-slider .course-card")
    .forEach(function (slide, index) {
      gsap.from(slide, {
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.4,
        scrollTrigger: {
          trigger: slide,
          start: "top 80%",
          scale: 0.9,

          // For debugging, you can remove this in production
          toggleActions: "play none none reverse",
          stagger: 0.4, // Stagger based on slide index
        },
      });
    });
}



if (document.querySelector(".facility-slider")) {
  var slider = tns({
    container: ".facility-slider",

    slideBy: "page",
    autoplay: false,
    edgePadding: 0,
    // navContainer: ".nav-container",
    // navAsThumbnails: false,
    nav: false,
    autoplayButton: false,
    autoplayButtonOutput: false,
    controls: true,
    controlsContainer: ".controls-containers",
    responsive: {
      0: {
        edgePadding: 0,
        gutter: 0,
        items: 1,
      },
      640: {
        edgePadding: 0,
        gutter: 0,
        items: 1,
      },
      700: {
        gutter: 30,
        items: 2,
      },
      900: {
        items: 3,
        gutter: 10,
      },
    },
  });

  gsap.from(".facility-slider .tns-slide-active ", {
    y: 50,
    stagger: 0.2,
    opacity: 0,
    duration: 0.7,
  });

  slider.events.on("indexChanged", function (info) {
    // Target the current active slide link
    var activeLink = $(".facility-slider .tns-slide-active ");

    // GSAP animation with requestAnimationFrame
    function animate() {
      gsap.from(activeLink, {
        y: 50,
        stagger: 0.2,
        opacity: 0,
        duration: 1,
      });
    }

    // Request animation frame
    requestAnimationFrame(animate);
  });
}



$(document).ready(function () {
  new PureCounter({
    selector: ".purecounter",
    start: 0,
    end: 100,
    duration: 2,
    delay: 10,
    once: true,
    repeat: false,
    decimals: 0,
    legacy: true,
    filesizing: false,
    currency: false,
    separator: false,
  });
});

// amenities

// amenities



if (document.querySelector(".safety-slider")) {
  var slider = tns({
    container: ".safety-slider",

    slideBy: "page",
    autoplay: false,
    edgePadding: 0,
    // navContainer: ".nav-container",
    // navAsThumbnails: false,
    nav: false,
    autoplayButton: false,
    autoplayButtonOutput: false,
    controls: true,
    controlsContainer: ".controls-containers2",
    responsive: {
      0: {
        edgePadding: 0,
        gutter: 0,
        items: 1,
      },
      640: {
        edgePadding: 0,
        gutter: 0,
        items: 1,
      },
      700: {
        gutter: 30,
        items: 2,
      },
      900: {
        items: 3,
        gutter: 10,
      },
    },
  });

  gsap.from(".safety-slider .tns-slide-active", {
    y: 50,
    stagger: 0.2,
    opacity: 0,
    duration: 0.7,
  });

  slider.events.on("indexChanged", function (info) {
    // Target the current active slide link
    var activeLink = $(".safety-slider .tns-slide-active ");

    // GSAP animation with requestAnimationFrame
    function animate() {
      gsap.from(activeLink, {
        y: 50,
        stagger: 0.2,
        opacity: 0,
        duration: 1,
      });
    }

    // Request animation frame
    requestAnimationFrame(animate);
  });
}













