//navigation bar start

const navLinks = document.querySelector(".links-container");
const navMenuIcon = document.querySelector(".menu-button-wrapper");
const subLink = document.querySelector(".sublink");
const subLinkToggleButton = document.querySelector(".sublink-toggle-button");
const updatePopupButton = document.querySelector(".updateShowBtn");
const popup = document.querySelector(".popup-container");
const cbutton = document.querySelector(".donate-btn");
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

// popup start
document.addEventListener("DOMContentLoaded", () => {
  let popupversion = "2.33";
  const localStorageData = localStorage.getItem("updatepopupShown");
  console.log(localStorageData);

  // Check if popup was already shown
  if (localStorage.getItem("updatepopupShown") != popupversion) {
    popup.style.display = "flex"; // Make visible
    setTimeout(() => {
      popup.style.opacity = "1"; // Fade in
    }, 10);
  }

  cbutton.addEventListener("click", () => {
    popup.style.opacity = "0";
    setTimeout(() => {
      popup.style.display = "none";
      localStorage.setItem("updatepopupShown", popupversion); // Store in localStorage
    }, 400);
  });
});
updatePopupButton.addEventListener("click", () => {
  popup.style.display = "flex"; // Make visible
  setTimeout(() => {
    popup.style.opacity = "1"; // Fade in
  }, 10);
});
//division and batch selection
const division_batch_selection_container = document.querySelector(
  ".division-batch-popup-container",
);
const division_batch_btn_open = document.querySelector(
  ".division-toggle-button",
);

division_batch_btn_open.addEventListener("click", () => {
  division_batch_selection_container.classList.remove("hidden");
  requestAnimationFrame(() => {
    division_batch_selection_container.style.opacity = "1";
  });
});
console.log(division_batch_btn_open);

const division_selection_li = document.querySelectorAll(".division-options li");
const batch_selection_container =
  document.querySelectorAll(".batch-options li");

// Check if values exist in localStorage; if not, set default values
if (!localStorage.getItem("DIV")) {
  localStorage.setItem("DIV", "A");
}
if (!localStorage.getItem("BATCH")) {
  localStorage.setItem("BATCH", "S1");
}

// Retrieve values from localStorage

let active_division_element = document.getElementById(
  localStorage.getItem("DIV"),
);
let active_batch_element = document.getElementById(
  localStorage.getItem("BATCH"),
);

let temp_batch = active_batch_element;
let temp_division = active_division_element;

temp_batch.classList.add("active-batch");
temp_division.classList.add("active-division");

division_selection_li.forEach((item) => {
  item.addEventListener("click", () => {
    temp_division.classList.remove("active-division");

    item.classList.add("active-division");
    temp_division = item;
  });
});

batch_selection_container.forEach((item) => {
  item.addEventListener("click", () => {
    temp_batch.classList.remove("active-batch");

    item.classList.add("active-batch");
    temp_batch = item;
  });
});

const error_msg_container = document.querySelector(".error_msg");
const okayBtn = document.querySelector(".division-popup-okay-btn");
okayBtn.addEventListener("click", () => {
  if (
    (temp_division.id === "A" && ["S1", "S2", "S3"].includes(temp_batch.id)) ||
    (temp_division.id === "B" && ["S4", "S5", "S6"].includes(temp_batch.id))
  ) {
    location.reload();
    localStorage.setItem("BATCH", temp_batch.id);
    localStorage.setItem("DIV", temp_division.id);
  } else {
    error_msg_container.innerText = "Enter valid Div and Batch combination";
  }
});

const division_batch_btn_close = document.querySelector(
  "#division-batch-popup-container-close-btn",
);
division_batch_btn_close.addEventListener("click", () => {
  division_batch_selection_container.style.opacity = "0";
  setTimeout(() => {
    error_msg_container.innerText = "";
    division_batch_selection_container.classList.add("hidden");
    temp_batch.classList.remove("active-batch");
    temp_division.classList.remove("active-division");
    temp_batch = active_batch_element;
    temp_division = active_division_element;
    temp_batch.classList.add("active-batch");
    temp_division.classList.add("active-division");
  }, 200);
});

//division and batch selection end

//timetable start

const timetable_popup_close_btn_a = document.querySelector(
  ".timetable-popup-close-btn-a",
);
const timetable_popup_close_btn_b = document.querySelector(
  ".timetable-popup-close-btn-b",
);

const timetable_popup_open_btn = document.querySelector(
  "#timetable-popup-open-btn",
);
const timetable_popup = document.querySelector(".timetable-popup"); // Fixed variable name
const timetable_popup_div_a = document.querySelector(".timetable-popup-div-a"); // Fixed variable name
const timetable_popup_div_b = document.querySelector(".timetable-popup-div-b"); // Fixed variable name
if (active_division_element.id === "B") {
  timetable_popup_open_btn.addEventListener("click", () => {
    timetable_popup_div_b.style.display = "block";
    requestAnimationFrame(() => {
      timetable_popup_div_b.style.opacity = "1";
    });
  });
  timetable_popup_close_btn_b.addEventListener("click", () => {
    timetable_popup_div_b.style.opacity = "0";
    setTimeout(() => {
      timetable_popup_div_b.style.display = "none";
    }, 200);
  });
}
if (active_division_element.id === "A") {
  timetable_popup_open_btn.addEventListener("click", () => {
    timetable_popup.style.display = "block";
    requestAnimationFrame(() => {
      timetable_popup.style.opacity = "1";
    });
  });
  timetable_popup_close_btn_a.addEventListener("click", () => {
    timetable_popup_div_a.style.opacity = "0";
    setTimeout(() => {
      timetable_popup_div_a.style.display = "none";
    }, 200);
  });
}

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

//

const upcomingSectionContainer = document.querySelector(
  ".submissions-cards-conteiner",
);
//upcoming submissions
//s1 batch upcoming submissions start
const submission = [
  {
    name: "DCN",
    sub1: "Exp-1 to 27",
    sub2: "0",
    sub3: "0",
    sub4: "0",
    date: "7-Apr",
    link: "dcn/DCNpage.html",
    batch: "S1",
  },
  {
    name: "JAVA",
    sub1: "Exp-25 to 30",
    sub2: "0",
    sub3: "0",
    sub4: "0",
    date: "5-Apr",
    link: "java/JAVApage.html",
    batch: "S1",
  },
  {
    name: "PWP",
    sub1: "Exp-25 to 30",
    sub2: "0",
    sub3: "0",
    sub4: "0",
    date: "5-Apr",
    link: "pwp/PWPpage.html",
    batch: "S1",
  },

  {
    name: "UID",
    sub1: "Exp-1 to 12",
    sub2: "0",
    sub3: "0",
    sub4: "0",
    date: "4-Apr",
    link: "uid/UIDpage.html",
    batch: "S1",
  },
  {
    name: "EES",
    sub1: "N/A",
    sub2: "0",
    sub3: "0",
    sub4: "0",
    date: "N/A",
    link: "ees/EESpage.html",
    batch: "S1",
  },

  {
    name: "MIC",
    sub1: "Exp-1 to 15",
    sub2: "0",
    sub3: "0",
    sub4: "0",
    date: "3-Apr",
    link: "mic/MICpage.html",
    batch: "S1",
  },
  //s1 batch upcoming submissions end
  //s2 batch upcoming submissions start
  {
    name: "DCN",
    sub1: "Exp-1 to 27",
    sub2: "0",
    sub3: "0",
    sub4: "0",
    date: "8-Apr",
    link: "dcn/DCNpage.html",
    batch: "S2",
  },
  {
    name: "JAVA",
    sub1: "Exp-27 to 28",
    sub2: "0",
    sub3: "0",
    sub4: "0",
    date: "25-Mar",
    link: "java/JAVApage.html",
    batch: "S2",
  },
  {
    name: "PWP",
    sub1: "Exp-1 to 28",
    sub2: "0",
    sub3: "0",
    sub4: "0",
    date: "27-Mar",
    link: "pwp/PWPpage.html",
    batch: "S2",
  },

  {
    name: "UID",
    sub1: "Exp-1 to 15",
    sub2: "0",
    sub3: "0",
    sub4: "0",
    date: "5-Apr",
    link: "uid/UIDpage.html",
    batch: "S2",
  },
  {
    name: "EES",
    sub1: "N/A",
    sub2: "0",
    sub3: "0",
    sub4: "0",
    date: "N/A",
    link: "ees/EESpage.html",
    batch: "S2",
  },

  {
    name: "MIC",
    sub1: "Exp-1 to 18",
    sub2: "0",
    sub3: "0",
    sub4: "0",
    date: "2-Apr",
    link: "mic/MICpage.html",
    batch: "S2",
  },
  //s2 batch upcoming submissions end
  //s3 batch upcoming submissions start
  {
    name: "DCN",
    sub1: "Exp-25 to 27",
    sub2: "0",
    sub3: "0",
    sub4: "0",
    date: "5-Apr",
    link: "dcn/DCNpage.html",
    batch: "S3",
  },
  {
    name: "JAVA",
    sub1: "Exp-25 to 30",
    sub2: "0",
    sub3: "0",
    sub4: "0",
    date: "4-Apr",
    link: "java/JAVApage.html",
    batch: "S3",
  },
  {
    name: "PWP",
    sub1: "Exp-15 to 26",
    sub2: "0",
    sub3: "0",
    sub4: "0",
    date: "29-Mar",
    link: "pwp/PWPpage.html",
    batch: "S3",
  },

  {
    name: "UID",
    sub1: "Exp-10 to 12",
    sub2: "0",
    sub3: "0",
    sub4: "0",
    date: "3-Apr",
    link: "uid/UIDpage.html",
    batch: "S3",
  },
  {
    name: "EES",
    sub1: "N/A",
    sub2: "0",
    sub3: "0",
    sub4: "0",
    date: "N/A",
    link: "ees/EESpage.html",
    batch: "S3",
  },

  {
    name: "MIC",
    sub1: "Exp-10 to 18",
    sub2: "0",
    sub3: "0",
    sub4: "0",
    date: "14-Apr",
    link: "mic/MICpage.html",
    batch: "S3",
  },
  //s3 batch upcoming submissions end
  //s4 batch upcoming submissions start
  {
    name: "DCN",
    sub1: "Exp-1 to 20",
    sub2: "0",
    sub3: "0",
    sub4: "0",
    date: "18-Mar",
    link: "dcn/DCNpage.html",
    batch: "S4",
  },
  {
    name: "JAVA",
    sub1: "Exp-24 to 25",
    sub2: "0",
    sub3: "0",
    sub4: "0",
    date: "20-Mar",
    link: "java/JAVApage.html",
    batch: "S4",
  },
  {
    name: "PWP",
    sub1: "Exp-1 to 14",
    sub2: "0",
    sub3: "0",
    sub4: "0",
    date: "12-Mar",
    link: "pwp/PWPpage.html",
    batch: "S4",
  },

  {
    name: "UID",
    sub1: "Exp-1 to 9",
    sub2: "0",
    sub3: "0",
    sub4: "0",
    date: "11-Mar",
    link: "uid/UIDpage.html",
    batch: "S4",
  },
  {
    name: "EES",
    sub1: "N/A",
    sub2: "0",
    sub3: "0",
    sub4: "0",
    date: "N/A",
    link: "ees/EESpage.html",
    batch: "S4",
  },

  {
    name: "MIC",
    sub1: "Exp-1 to 15",
    sub2: "0",
    sub3: "0",
    sub4: "0",
    date: "20-Mar",
    link: "mic/MICpage.html",
    batch: "S4",
  },
  //s5 batch upcoming submissions start
  {
    name: "DCN",
    sub1: "N/A",
    sub2: "0",
    sub3: "0",
    sub4: "0",
    date: "N/A",
    link: "dcn/DCNpage.html",
    batch: "S5",
  },
  {
    name: "JAVA",
    sub1: "N/A",
    sub2: "0",
    sub3: "0",
    sub4: "0",
    date: "N/A",
    link: "java/JAVApage.html",
    batch: "S5",
  },
  {
    name: "PWP",
    sub1: "N/A",
    sub2: "0",
    sub3: "0",
    sub4: "0",
    date: "N/A",
    link: "pwp/PWPpage.html",
    batch: "S5",
  },

  {
    name: "UID",
    sub1: "N/A",
    sub2: "0",
    sub3: "0",
    sub4: "0",
    date: "N/A",
    link: "uid/UIDpage.html",
    batch: "S5",
  },

  {
    name: "EES",
    sub1: "N/A",
    sub2: "0",
    sub3: "0",
    sub4: "0",
    date: "N/A",
    link: "ees/EESpage.html",
    batch: "S5",
  },

  {
    name: "MIC",
    sub1: "N/A",
    sub2: "0",
    sub3: "0",
    sub4: "0",
    date: "N/A",
    link: "mic/MICpage.html",
    batch: "S5",
  },
  //s6 batch upcoming submissions start
  {
    name: "DCN",
    sub1: "Exp-1 to 20",
    sub2: "0",
    sub3: "0",
    sub4: "0",
    date: "17-Mar",
    link: "dcn/DCNpage.html",
    batch: "S6",
  },
  {
    name: "JAVA",
    sub1: "Exp-1 to 22",
    sub2: "0",
    sub3: "0",
    sub4: "0",
    date: "12-Mar",
    link: "java/JAVApage.html",
    batch: "S6",
  },
  {
    name: "PWP",
    sub1: "Exp-1 to 20",
    sub2: "0",
    sub3: "0",
    sub4: "0",
    date: "24-Mar",
    link: "pwp/PWPpage.html",
    batch: "S6",
  },

  {
    name: "UID",
    sub1: "Exp-1 to 10",
    sub2: "0",
    sub3: "0",
    sub4: "0",
    date: "28-Mar",
    link: "uid/UIDpage.html",
    batch: "S6",
  },
  {
    name: "EES",
    sub1: "N/A",
    sub2: "0",
    sub3: "0",
    sub4: "0",
    date: "N/A",
    link: "ees/EESpage.html",
    batch: "S6",
  },

  {
    name: "MIC",
    sub1: "Exp-1 to 15",
    sub2: "0",
    sub3: "0",
    sub4: "0",
    date: "24-Mar",
    link: "mic/MICpage.html",
    batch: "S6",
  },
];
let active_batch_key = active_batch_element.id;
let active_division_key = active_division_element.id;
if (active_division_key === "A") {
}
division_batch_btn_open.innerText = `DIV ${active_division_key} - ${active_batch_key}`;

const objvar = submission.filter((obj) => {
  return obj.batch === active_batch_key;
});

const upcomingSubmissionContent = {
  DCNobj: {
    name: "DCN",
    sub1: "Experiment-1",
    sub2: "Assignment-2",
    sub3: "0",
    sub4: "0",
    link: "build/dcn/DCNpage.html",
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

// function createAllCards(content, container) {
//   if (!container) return;

//   for (const key in content) {
//     const obj = content[key];

//     // Construct the URL with query parameters
//     const url = new URL(obj.link, window.location.origin);
//     url.searchParams.append("highlight1", obj.sub1 || "0");
//     url.searchParams.append("highlight2", obj.sub2 || "0");
//     url.searchParams.append("highlight3", obj.sub3 || "0");
//     url.searchParams.append("highlight4", obj.sub4 || "0");

//     // Create the anchor element
//     const link = document.createElement("a");
//     link.href = url.toString();

//     // Create the card container
//     const card = document.createElement("div");
//     card.className =
//       "submission-card mx-auto flex flex-col gap-3 rounded-2xl bg-[#171D2B] p-5";

//     // First row: Icon and title
//     const iconTitleWrapper1 = document.createElement("div");
//     iconTitleWrapper1.className = "icon-title-wrapper flex items-center gap-1";

//     const icon1 = document.createElement("div");
//     icon1.className = "icon -translate-x-1";
//     const img1 = document.createElement("img");
//     img1.src = `src/icons/colored_bg_icons/${obj.name}.png`; // Dynamic icon name
//     img1.alt = obj.name;
//     img1.className = "h-12";
//     icon1.appendChild(img1);

//     const title1 = document.createElement("div");
//     title1.className = "title";
//     title1.innerHTML = `<p>${obj.name}</p>`;

//     iconTitleWrapper1.appendChild(icon1);
//     iconTitleWrapper1.appendChild(title1);

//     // Second row: Date icon and text
//     const iconTitleWrapper2 = document.createElement("div");
//     iconTitleWrapper2.className = "icon-title-wrapper flex items-center gap-1";

//     const icon2 = document.createElement("div");
//     icon2.className = "icon -translate-x-1";
//     const img2 = document.createElement("img");
//     img2.src = "src/icons/other/coloredcal.png";
//     img2.alt = "";
//     img2.className = "h-12";
//     icon2.appendChild(img2);

//     const title2 = document.createElement("div");
//     title2.className = "title";
//     title2.innerHTML = obj.date;

//     iconTitleWrapper2.appendChild(icon2);
//     iconTitleWrapper2.appendChild(title2);

//     // Description section
//     const description = document.createElement("div");
//     description.className = "description";
//     description.innerHTML = `<div class=""> ${obj.sub1}</div>`;
//     let descriptionContent = `<div class=""> ${obj.sub1}</div>`;

//     if (obj.sub2 !== "0") {
//       descriptionContent += `<div class=""> ${obj.sub2}</div>`;
//     }
//     if (obj.sub3 !== "0") {
//       descriptionContent += `<div class=""> ${obj.sub3}</div>`;
//     }
//     if (obj.sub4 !== "0") {
//       descriptionContent += `<div class=""> ${obj.sub4}</div>`;
//     }

//     description.innerHTML = descriptionContent;

//     // Append everything to the card
//     card.appendChild(iconTitleWrapper1);
//     card.appendChild(iconTitleWrapper2);
//     card.appendChild(description);

//     // Wrap card inside the link
//     link.appendChild(card);

//     // Append to container
//     container.appendChild(link);
//   }
// }

// Assuming upcomingSectionContainer is already defined in your HTML
function createAllCards(content, container) {
  if (!container) return;

  for (const key in content) {
    const obj = content[key];

    // Create the anchor element
    const link = document.createElement("a");
    link.href = obj.link;

    // Create the card container
    const card = document.createElement("div");
    card.className =
      "submission-card mx-auto flex flex-col gap-3 rounded-2xl bg-[#171D2B] p-5";

    // First row: Icon and title
    const iconTitleWrapper1 = document.createElement("div");
    iconTitleWrapper1.className = "icon-title-wrapper flex items-center gap-1";

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
    iconTitleWrapper2.className = "icon-title-wrapper flex items-center gap-1";

    const icon2 = document.createElement("div");
    icon2.className = "icon -translate-x-1";
    const img2 = document.createElement("img");
    img2.src = "src/icons/other/coloredcal.png";
    img2.alt = "";
    img2.className = "h-12";
    icon2.appendChild(img2);

    const title2 = document.createElement("div");
    title2.className = "title";
    title2.innerHTML = obj.date;

    iconTitleWrapper2.appendChild(icon2);
    iconTitleWrapper2.appendChild(title2);

    // Description section
    const description = document.createElement("div");
    description.className = "description";
    description.innerHTML = `<div class=""> ${obj.sub1}</div>`;
    let descriptionContent = `<div class=""> ${obj.sub1}</div>`;

    if (obj.sub2 !== "0") {
      descriptionContent += `<div class=""> ${obj.sub2}</div>`;
    }
    if (obj.sub3 !== "0") {
      descriptionContent += `<div class=""> ${obj.sub3}</div>`;
    }
    if (obj.sub4 !== "0") {
      descriptionContent += `<div class=""> ${obj.sub4}</div>`;
    }

    description.innerHTML = descriptionContent;

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

createAllCards(objvar, upcomingSectionContainer);

//upcoming submissions end
