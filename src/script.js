import { tns } from "tiny-slider/src/tiny-slider";

import { Fancybox } from "@fancyapps/ui";



import { Carousel } from '@fancyapps/ui';








if(document.querySelector('.hero-slider')){
  var slider = tns({
    container: '.hero-slider',
    items: 1,
    slideBy: 1,
    autoplay: true,
    edgePadding: 0,
    gutter: 20,
    controls:false,
    autoplayButton:false,
    autoplayButtonOutput:false,
    
    
    animateIn: 'fadeInDown',
    animateOut: 'fadeOutDown',
    // controlsContainer:'.controls-container',
    nav: false,
    animateDelay: 700,
  });
}





if(document.querySelector('.course-slider')){
  var slider = tns({
    container: '.course-slider',
    items: 4,
    slideBy: 1,
    autoplay: false,
    edgePadding: 20,
    gutter: 40,
    speed:200,
    controls:true,
    controlsContainer:'.controls-container2',
    nav: false,
    responsive: {
      0: {
        edgePadding: 0,
        gutter: 0,
        items: 1
      },
      640: {
        edgePadding: 0,
        gutter: 0,
        items: 1
      },
      700: {
        gutter: 30,
        items: 2,
      },
      900: {
        items: 4,
        gutter: 40,
      }
    },
   });
}
  



if(document.querySelector('.safety-slider')){
  var slider = tns({
    container: '.safety-slider',
    
    slideBy: 1,
    autoplay: false,
    edgePadding: 0,
    // navContainer: ".nav-container",
    // navAsThumbnails: false, 
    nav:false,
    autoplayButton:false,
    autoplayButtonOutput:false,
    controls:true,
    controlsContainer:'.controls-containers2',
    responsive: {
      0: {
        edgePadding: 0,
        gutter: 0,
        items: 1
      },
      640: {
        edgePadding: 0,
        gutter: 0,
        items: 1
      },
      700: {
        gutter: 30,
        items: 2,
      },
      900: {
        items: 3,
        gutter: 10, 
        
      }
    },
   
    
});
}

Fancybox.bind()

if(document.querySelector('.facility-slider')){
  var slider = tns({
    container: '.facility-slider',
    
    slideBy: 1,
    autoplay: false,
    edgePadding: 0,
    // navContainer: ".nav-container",
    // navAsThumbnails: false, 
    nav:false,
    autoplayButton:false,
    autoplayButtonOutput:false,
    controls:true,
    controlsContainer:'.controls-containers',
    responsive: {
      0: {
        edgePadding: 0,
        gutter: 0,
        items: 1
      },
      640: {
        edgePadding: 0,
        gutter: 0,
        items: 1
      },
      700: {
        gutter: 30,
        items: 2,
      },
      900: {
        items: 3,
        gutter: 10, 
        
      }
    },
   
    
});
}

if(document.querySelector('.gallery-slider')){
  var slider = tns({
    container: '.gallery-slider',
    
    slideBy: 1,
    autoplay: false,
    edgePadding: 0,
    // navContainer: ".nav-container",
    // navAsThumbnails: false, 
    nav:false,
    autoplayButton:false,
    autoplayButtonOutput:false,
    controls:true,
    controlsContainer:'.gallery-controls',
    responsive: {
      0: {
        edgePadding: 0,
        gutter: 0,
        items: 1
      },
      640: {
        edgePadding: 0,
        gutter: 0,
        items: 1
      },
      700: {
        gutter: 30,
        items: 2,
      },
      900: {
        items: 3,
        gutter: 10, 
        
      }
    },
   
    
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

const mainContainer = document.getElementById("myCarousel");
const mainOptions = {
  Dots: false,
  transition: 'slide' ,
  Autoplay: {
    timeout: 3000,
  },
};

const mainCarousel = new Carousel(mainContainer, mainOptions);

const navContainer = document.getElementById("myNavigation");
const navOptions = {
  infinite: true,
  transition: 'slide' ,
  center: true,
  fill: true,
  Autoplay: {
    timeout: 3000,
  },
  slidesPerPage: 1,
  dragFree: true,
  Navigation: false,
  button:false,

  Dots: false,
  
  Sync: {
    target: mainCarousel,
  },
};

new Carousel(navContainer, navOptions);  

// amenities

// amenities











   

  