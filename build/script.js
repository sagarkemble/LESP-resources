//navigation bar start

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
      subLink.style.maxHeight = "800px";
      subLink.style.paddingTop = "1.5rem";
      subLink.style.opacity = "100";
    }
  } else {
  }
});

//navigation bar end

//timetable start

const timetable_popup_close_btn = document.querySelector(
  "#timetable-popup-close-btn",
);
const timetable_popup_open_btn = document.querySelector(
  "#timetable-popup-open-btn",
);
const timetable_popup = document.querySelector(".timetable-popup"); // Fixed variable name

timetable_popup_close_btn.addEventListener("click", () => {
  timetable_popup.style.opacity = "0";
  setTimeout(() => {
    timetable_popup.style.display = "none";
  }, 200);
});

timetable_popup_open_btn.addEventListener("click", () => {
  timetable_popup.style.display = "block";
  requestAnimationFrame(() => {
    timetable_popup.style.opacity = "1";
  });
});

//timetable start end

//swiper
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
const swiper3 = new Swiper("#swiper-3", {
  direction: "horizontal",
  loop: true,
  autoHeight: true,
  centeredSlides: true,
  slidesPerView: "auto",
  spaceBetween: 20,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    1024: {
      spaceBetween: 40,
      autoHeight: false,
    },
  },
});

const upcomingSectionContainer = document.querySelector(
  ".submissions-cards-conteiner",
);

//

//upcoming submissions
const temp = {
  DivA: [
    {
      name: "DCN",
      sub1: "Experiment-1",
      sub2: "0",
      sub3: "0",
      sub4: "0",
      link: "build/dcn/DCN.html",
      batch: "S1",
    },
    {
      name: "EES",
      sub1: "Experiment-1",
      sub2: "0",
      sub3: "0",
      sub4: "0",
      link: "build/dcn/DCN.html",
      batch: "S1",
    },

    {
      name: "DCN",
      sub1: "Experiment-1",
      sub2: "0",
      sub3: "0",
      sub4: "0",
      link: "build/dcn/DCN.html",
      batch: "S2",
    },
  ],
  DivB: [],
};
const upcomingSubmissionContent = {
  DCNobj: {
    name: "DCN",
    sub1: "Experiment-1",
    sub2: "0",
    sub3: "0",
    sub4: "0",
    link: "build/dcn/DCN.html",
  },
  JAVAobj: {
    name: "JAVA",
    sub1: "Experiment-1",
    sub2: "Assignment-1",
    sub3: "0",
    sub4: "0",
    link: "build/java/JAVA.html",
  },
  PWPobj: {
    name: "PWP",
    sub1: "Tutorial-6",
    sub2: "0",
    sub3: "0",
    sub4: "0",
    link: "build/pwp/PWP.html",
  },
  MICobj: {
    name: "MIC",
    sub1: "Assignment-1",
    sub2: "0",
    sub3: "0",
    sub4: "0",
    link: "build/mic/MIC.html",
  },
  UIDobj: {
    name: "UID",
    sub1: "Assignment-1",
    sub2: "0",
    sub3: "0",
    sub4: "0",
    link: "build/uid/UID.html",
  },
  EESobj: {
    name: "EES",
    sub1: "Assignment-1",
    sub2: "0",
    sub3: "0",
    sub4: "0",
    link: "build/ees/EES.html",
  },
};

function createAllCards(content, container) {
  if (!container) return;

  for (const key in content) {
    if (content.hasOwnProperty(key)) {
      const obj = content[key];

      // Construct the URL with query parameters
      const url = new URL(obj.link, window.location.origin);
      url.searchParams.append("highlight1", obj.sub1 || "");
      url.searchParams.append("highlight2", obj.sub2 || "0");
      url.searchParams.append("highlight3", obj.sub3 || "0");
      url.searchParams.append("highlight4", obj.sub4 || "0");

      // Create the anchor element
      const link = document.createElement("a");
      link.href = url.toString();

      // Create the card container
      const card = document.createElement("div");
      card.className =
        "submission-card mx-auto flex flex-col gap-3 rounded-2xl bg-[#171D2B] p-5";

      // First row: Icon and title
      const iconTitleWrapper1 = document.createElement("div");
      iconTitleWrapper1.className =
        "icon-title-wrapper flex items-center gap-1";

      const icon1 = document.createElement("div");
      icon1.className = "icon -translate-x-1";
      const img1 = document.createElement("img");
      img1.src = `src/icons/colored_bg_icons/${obj.name}.png`; // Dynamic icon name
      img1.alt = obj.name;
      img1.className = "h-12";
      icon1.appendChild(img1);

      const title1 = document.createElement("div");
      title1.className = "title";
      title1.innerHTML = `<p>${obj.name}</p>`;

      iconTitleWrapper1.appendChild(icon1);
      iconTitleWrapper1.appendChild(title1);

      // Second row: Date icon and text
      const iconTitleWrapper2 = document.createElement("div");
      iconTitleWrapper2.className =
        "icon-title-wrapper flex items-center gap-1";

      const icon2 = document.createElement("div");
      icon2.className = "icon -translate-x-1";
      const img2 = document.createElement("img");
      img2.src = "src/icons/other/CAL.png";
      img2.alt = "";
      img2.className = "h-12";
      icon2.appendChild(img2);

      const title2 = document.createElement("div");
      title2.className = "title";
      title2.innerHTML = `<p>25-Feb</p>`;

      iconTitleWrapper2.appendChild(icon2);
      iconTitleWrapper2.appendChild(title2);

      // Description section
      const description = document.createElement("div");
      description.className = "description";
      description.innerHTML = `<div class="">${obj.sub1}</div>`;
      if (obj.sub2 != 0) {
      }
      // Append everything to the card
      card.appendChild(iconTitleWrapper1);
      card.appendChild(iconTitleWrapper2);
      card.appendChild(description);

      // Wrap card inside the link
      link.appendChild(card);

      // Append to container
      container.appendChild(link);
    }
  }
}

// Assuming upcomingSectionContainer is already defined in your HTML
createAllCards(upcomingSubmissionContent, upcomingSectionContainer);

//upcoming submissions end

//division and batch selection
const division_batch_selection_container = document.querySelector(
  ".division-batch-popup-container",
);
const division_selection_li = document.querySelectorAll(".division-options li");
const batch_selection_container =
  document.querySelectorAll(".batch-options li");
let active_division = document.querySelector("#A");
let active_batch = document.querySelector("#S1");
division_selection_li.forEach((item) => {
  item.addEventListener("click", () => {
    if (active_division) {
      active_division.classList.remove("active-division");
    }
    item.classList.add("active-division");
    active_division = item;
  });
});

batch_selection_container.forEach((item) => {
  item.addEventListener("click", () => {
    if (active_batch) {
      active_batch.classList.remove("active-batch");
    }
    item.classList.add("active-batch");
    active_batch = item;
  });
});

const okayBtn = document.querySelector(".division-popup-okay-btn");
okayBtn.addEventListener("click", () => {
  division_batch_selection_container.style.opacity = "0";
  setTimeout(() => {
    division_batch_selection_container.classList.add("hidden");
  }, 200);
});

const division_batch_btn_open = document.querySelector(
  ".division-toggle-button",
);
division_batch_btn_open.addEventListener("click", () => {
  division_batch_selection_container.classList.remove("hidden");
  requestAnimationFrame(() => {
    division_batch_selection_container.style.opacity = "1";
  });
});

const division_batch_btn_close = document.querySelector(
  "#division-batch-popup-container-close-btn",
);
division_batch_btn_close.addEventListener("click", () => {
  division_batch_selection_container.style.opacity = "0";
  setTimeout(() => {
    division_batch_selection_container.classList.add("hidden");
  }, 200);
});

//division and batch selection end
