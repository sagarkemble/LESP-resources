const navLinks = document.querySelector(".links-container");
const navMenuIcon = document.querySelector(".menu-button-wrapper");
const subLink = document.querySelector(".sublink");
const subLinkToggleButton = document.querySelector(".sublink-toggle-button");
const jsConfetti = new JSConfetti();
if (!localStorage.getItem("popupShown")) {
  jsConfetti.addConfetti();
} else {
  document.querySelector(".popup-container").style.display = "none"; // Hide popup if already shown
}

const cbutton = document.querySelector(".donate-btn"); // Select the button
const popup = document.querySelector(".popup-container"); // Select the popup container

cbutton.addEventListener("click", () => {
  popup.style.opacity = "0"; // Fade out effect
  setTimeout(() => {
    popup.style.display = "none"; // Hide after fade-out
    localStorage.setItem("popupShown", "true"); // Store in localStorage
  }, 400); // Delay matches the transition time
});

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
      subLink.style.maxHeight = "800px";
      subLink.style.paddingTop = "1.5rem";
      subLink.style.opacity = "100";
    }
  } else {
  }
});

const swiper1 = new Swiper("#swiper-1", {
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

const swiper2 = new Swiper("#swiper-2", {
  direction: "horizontal",
  loop: true,
  centeredSlides: true,
  slidesPerView: "auto", // Change this to auto
  spaceBetween: 20,
  autoplay: {
    delay: 2500,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
