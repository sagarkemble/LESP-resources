const navLinks = document.querySelector(".links-container");
const navMenuIcon = document.querySelector(".menu-button-wrapper");
const subLink = document.querySelector(".sublink");
const subLinkToggleButton = document.querySelector(".sublink-toggle-button");

navMenuIcon.addEventListener("click", () => {
  if (navLinks.style.maxHeight) {
    navLinks.style.maxHeight = null;

    navLinks.style.opacity = "0";
  } else {
    navLinks.style.maxHeight = "100vh";
    navLinks.style.opacity = "100";
  }
});

subLinkToggleButton.addEventListener("click", () => {
  if (window.innerWidth < 768) {
    if (subLink.style.maxHeight) {
      subLink.style.maxHeight = null;
      subLink.style.paddingTop = "0";
      subLink.style.opacity = "0";
    } else {
      subLink.style.maxHeight = subLink.scrollHeight + "px";
      subLink.style.paddingTop = "1.5rem";
      subLink.style.opacity = "100";
    }
  } else {
  }
});

const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  centeredSlides: true,
  slidesPerView: 1.2,
  spaceBetween: 20,
  breakpoints: {
    768: {
      slidesPerView: "auto",
    },
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
