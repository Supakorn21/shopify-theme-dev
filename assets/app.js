//  animations
let jumboTL = gsap.timeline();
jumboTL
  .fromTo(
    "#jumbo .transparent-color",
    {
      opacity: 1,
      backgroundColor: "black",
    },
    {
      opacity: 0.8,
      duration: 1.7,
    }
  )
  .fromTo(
    "header .logo ",
    {
      x: -200,
      opacity: 0,
    },
    {
      x: 0,
      opacity: 1,
      duration: 1.3,
    }
  )
  .fromTo(
    "header .menu",
    {
      x: 200,
      opacity: 0,
    },
    {
      x: 0,
      opacity: 1,
      duration: 1.3,
    },
    ">-1.3"
  )
  .fromTo(
    "#jumbo .titles h1",
    {
      x: 0,
      opacity: 0,
    },
    {
      x: "20%",
      opacity: 1,
      duration: 1,
    },
    ">-.3"
  )
  .fromTo(
    "#jumbo .titles h2",
    {
      x: 0,
      opacity: 0,
    },
    {
      x: "35%",
      opacity: 1,
      duration: 1,
    },
    ">-.8"
  )
  .fromTo(
    "#jumbo .state",
    {
      x: "100%",
    },
    {
      x: 0,
      duration: 1,
    }
  )
  .fromTo(
    "#jumbo .store-info",
    {
      y: "100%",
    },
    {
      y: 0,
      duration: 1,
    },
    ">-1.8"
  )
  .fromTo(
    // stagger
    "#jumbo .store-info img",
    {
      y: 400,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      duration: 1,
      stagger: 0.2,
    },
    ">-2.2"
  );

// twocollection section animations

const twoCollectionTL = gsap.timeline();
twoCollectionTL
  .fromTo(
    "#twoCollections .col-md-6",
    {
      y: 300,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      duration: 1,
    }
  )
  .fromTo(
    "#twoCollections .left-c span",
    {
      y: 300,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      duration: 1,
    }
  )
  .fromTo(
    "#twoCollections .right-c span",
    {
      y: 300,
      opacity: 0,
    },
    {
      y: -100,
      opacity: 1,
      duration: 1,
    },
    ">-.8"
  );

// scroll section animations

let homeController = new ScrollMagic.Controller();
let twoCScene = new ScrollMagic.Scene({
  triggerElement: "#twoCollections",
  triggerHook: 1,
  reverse: false,
  offset: 100,
  duration: 0,
  // duration: document.querySelector("#twoCollections").offsetHeight,
})
  .setTween(twoCollectionTL)
  //.addIndicators()
  .addTo(homeController);

// header animation
const headerTL = gsap.timeline();
headerTL
  .fromTo(
    "header",
    {
      backgroundColor: "rgba(0,0,0, 0)",
    },
    {
      backgroundColor: "rgba(0,0,0, 1)",
      duration: 0.4,
    }
  )
  .fromTo(
    "header .logo a",
    {
      scale: 1,
    },
    {
      scale: 0.9,
      duration: 0.4,
    }
  );
// header animation
let headerScene = new ScrollMagic.Scene({
  triggerElement: "#jumbo",
  triggerHook: 1,
  reverse: true,
  offset: document.querySelector("#jumbo").offsetHeight + 100,
  duration: 0,
  // duration: document.querySelector("#twoCollections").offsetHeight,
})
  .setTween(headerTL)
  //.addIndicators()
  .addTo(homeController);

// horizontalsale animation
const horizontalSaleTL = gsap.timeline();
horizontalSaleTL
  .fromTo(
    "horizontal-sale",
    {
      opacity: 0,
    },
    {
      opacity: 1,
      duration: 0.4,
    }
  )
  .fromTo(
    "#horizontal-sale .overlay .percent-number",
    {
      scale: 0,
    },
    {
      scale: 1,
      duration: 1,
    }
  )
  .fromTo(
    "#horizontal-sale .overlay .title",
    {
      scale: 0,
    },
    {
      scale: 1,
      duration: 1,
    },
    ">-1"
  );

// horizontalSale animation
let horizontalSaleScene = new ScrollMagic.Scene({
  triggerElement: "#horizontal-sale",
  triggerHook: 1,
  reverse: false,
  offset: 150,
  duration: document.querySelector("#horizontal-sale").offsetHeight,
  // duration: document.querySelector("#twoCollections").offsetHeight,
})
  .setTween(horizontalSaleTL)
  //.addIndicators()
  .addTo(homeController);

//productsGroup animation
const productsGroupTL = gsap.timeline();
productsGroupTL.fromTo(
  "#products-group .product-bg",
  {
    opacity: 0,
    y: 100,
  },
  {
    opacity: 1,
    y: 0,
    stagger: 0.3,
    duration: 0.2,
  }
);

//  productsGroup animation
let productsGroupScene = new ScrollMagic.Scene({
  triggerElement: "#products-group",
  triggerHook: 1,
  reverse: false,
  offset: 0,
  duration: 0,
  // duration: document.querySelector("#twoCollections").offsetHeight,
})
  .setTween(productsGroupTL)
  //.addIndicators()
  .addTo(homeController);

//footer animation
const footerTL = gsap.timeline();
footerTL.fromTo(
  "footer .footer-fade-in",
  {
    opacity: 0,
    y: 100,
  },
  {
    opacity: 1,
    y: 0,
    stagger: 0.3,
    duration: 0.2,
  }
);

//  footer animation
let footerScene = new ScrollMagic.Scene({
  triggerElement: "footer",
  triggerHook: 1,
  reverse: false,
  offset: 0,
  duration: 0,
  // duration: document.querySelector("#twoCollections").offsetHeight,
})
  .setTween(footerTL)
  //.addIndicators()
  .addTo(homeController);

// document.querySelector(".close-mobile-menu").addEventListener("click", () => {
//   document.querySelector("#mobile-menu").classList.remove("active");
// });
// document.querySelector(".open-mobile-menu").addEventListener("click", () => {
//   document.querySelector("#mobile-menu").classList.add("active");
// });

const mobileMenuTL = gsap.timeline({
  paused: true,
});
mobileMenuTL
  .fromTo(
    "#mobile-menu",
    {
      x: "-100%",
    },
    {
      x: 0,
      duration: 0.5,
    }
  )
  .fromTo(
    "#mobile-menu .menu .link",
    {
      y: 50,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      duration: 0.3,
      stagger: 0.1,
    }
  );

const openMobileMenu = document.querySelector(".open-mobile-menu");
openMobileMenu.addEventListener("click", () => {
  mobileMenuTL.play();
});

const closeMobileMenu = document.querySelector(".close-mobile-menu");
closeMobileMenu.addEventListener("click", () => {
  mobileMenuTL.reverse();
});

const mobileModeOn = () => {
  if (window.innerWidth <= 991) {
    document.querySelector("header .menu").classList.add("mobile-mode");
  } else {
    document.querySelector("header .menu").classList.remove("mobile-mode");
  }
};
mobileModeOn();
window.addEventListener("resize", (e) => {
  mobileModeOn();
});
