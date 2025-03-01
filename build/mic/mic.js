const passedparameter = new URLSearchParams(window.location.search);
const highlight1 = passedparameter.get("highlight1");
const highlight2 = passedparameter.get("highlight2");
const highlight3 = passedparameter.get("highlight3");
const highlight4 = passedparameter.get("highlight4");
const assignment_container = document.querySelector(
  ".assignment-cards-container",
);
const manual_questionandanswer_container = document.querySelector(
  ".manaul-question-answer-cards-container",
);
const manual_container = document.querySelector(".manual-cards-container");
const notes_container = document.querySelector(
  ".Notes-resources-cards-container",
);
const other_resources_container = document.querySelector(
  ".other-resources-cards-container",
);
const Notes_container = document.querySelector(".Notes-cards-container");
const code_container = document.querySelector(".code-cards-container");

const content = {
  assignment_Obj: {
    assignemnt1: {
      name: "Assignment-1",
      link: "https://drive.google.com/file/d/1JP-6_uLIEI7qEDRnOKrGrIpWkOgKoJuL/view?usp=drive_link",
    },
    assignemnt2: {
      name: "Assignment-2",
      link: "https://drive.google.com/file/d/18u56d3aGjLdUv8BkZ0oYEKeDq9xk0KBy/view?usp=drive_link",
    },
  },
  code_Obj: {
    code1: {
      name: "Additon",
      link: "https://drive.google.com/file/d/19a4vRJ5N3qyeAvVzFVhPYq231w-8qdf8/view?usp=drivesdk",
    },
    code2: {
      name: "BCD",
      link: "https://drive.google.com/file/d/19H3MdgWO0KDX_7rUUEs64uRJ6pf85Bsb/view?usp=drivesdk",
    },
    code3: {
      name: "Block-transfer",
      link: "https://drive.google.com/file/d/19Roo8foo-2q6fgRMU3J3G08LjO24yIeo/view?usp=drivesdk",
    },
    code4: {
      name: "Division",
      link: "https://drive.google.com/file/d/19tIE3YRbJmFdhD53UToUfw1xf6od21Nw/view?usp=drivesdk",
    },
    code5: {
      name: "Sum-of-series 1",
      link: "https://drive.google.com/file/d/19Roo8foo-2q6fgRMU3J3G08LjO24yIeo/view?usp=drivesdk",
    },
    code6: {
      name: "Multiplication",
      link: "https://drive.google.com/file/d/19hX97Wy6ZI0NTH2DbadYWACZW7lVFNMK/view?usp=drivesdk",
    },
    code7: {
      name: "Subtraction",
      link: "https://drive.google.com/file/d/19g9epyn61D1RFn2usUM8-qJLPDR8o1E_/view?usp=drivesdk",
    },
    code8: {
      name: "Sum-of-series 2",
      link: "https://drive.google.com/file/d/19LxJcKJHIHY0kbWeJ0FcNZjsD1yD2mzl/view?usp=drive_link",
    },
  },

  other_resources_Obj: {
    qb: {
      name: "QB UT-1",
      link: "https://drive.google.com/file/d/1AHba8iOjenN9S7MXIluESvAkKh2ZOsG9/view?usp=drivesdk",
    },
    syllabus: {
      name: "Syllabus",
      link: "https://drive.google.com/file/d/1F7ci0w-NkYqJ4Z9sBCnpLaiEINKfDAMF/view?usp=drive_link",
    },

    PYQ_1: {
      name: "PYQ-2019",
      link: "https://drive.google.com/file/d/1LqRAqp80tHJVIByJ4Iw1vnaUeuWOeX1t/view?usp=sharing",
    },

    PYQ_2: {
      name: "PYQ_2019-2",
      link: "https://drive.google.com/file/d/1ABBxYPt1--n9vZXDRWx8Jq4-dkapc9EY/view?usp=sharing",
    },

    PYQ_3: {
      name: "PYQ_2022",
      link: "https://drive.google.com/file/d/1w8efNAvdOWbpmzl87jtBeGH4DXiDOKwh/view?usp=sharing",
    },
  },
  notes_obj: {
    unit_1: {
      name: "Unit-1",
      link: "https://drive.google.com/file/d/199RhWgTH6ObvcDflrXIbH1oQeUoRGG_x/view?usp=drivesdk",
    },
    unit_2: {
      name: "Unit-2",
      link: "https://drive.google.com/file/d/19GTEhMmsQE1-zESjosiJUigUd47bnjmx/view?usp=drivesdk",
    },
    unit_3: {
      name: "Unit-3",
      link: "https://drive.google.com/file/d/1Jn83xsTlvDrKs7_PBxG9lsQ0UrmWGNpN/view?usp=sharing",
    },
  },
  manual_obj: {
    maunal_0: {
      name: "Index",
      link: "https://drive.google.com/file/d/17i6XvJdcyQ8KdntOamRqwMolrlT2NNde/view?usp=drive_link",
    },
    maunal_1: {
      name: "Manual 1-5",
      link: "https://drive.google.com/file/d/18jWDQP1e-XQ2ccEGhIdI92n-hGgo-sC9/view?usp=drive_link",
    },
    maunal_2: {
      name: "Manual 6-10",
      link: "https://drive.google.com/file/d/1SQyBjG2LBcy1MEHC4Lc4vkOMQaZAZCV8/view?usp=drive_link",
    },
    maunal_3: {
      name: "Manual 11-15",
      link: "https://drive.google.com/file/d/1u2rR0nta3WuuXkA6cdeVJMyXrJWHOfLQ/view?usp=drive_link",
    },
    maunal_4: {
      name: "Manual 16-18",
      link: "https://drive.google.com/file/d/1WYahPHsfAj8Mw-a8vRSzn3LztYdjtZ_O/view?usp=drive_link",
    },
    manual_5: {
      name: "Full Manual",
      link: "https://drive.google.com/file/d/1NG3QhBXDvHdzNwsYvg3Xmgg4P-HSzV01/view?usp=drive_link",
    },
  },
};

console.log(content.code_Obj);
console.log(code_container);

function createCard(obj, container) {
  if (!container) return; // Check if the container exists

  for (let key in obj) {
    const item = obj[key];

    const link = document.createElement("a");
    link.href = item.link;
    link.target = "_blank"; // Open in new tab

    const card = document.createElement("div");
    card.className =
      "assignment-card click-effect md:hover-effect flex cursor-pointer justify-center rounded-2xl bg-[#171D2B] py-4 px-6";
    if (
      item.name == highlight1 ||
      item.name == highlight2 ||
      item.name == highlight3 ||
      item.name == highlight4
    ) {
      card.classList.add("glow"); // Correct way to add a class
    }

    const nameDiv = document.createElement("div");
    nameDiv.textContent = item.name;

    card.appendChild(nameDiv);
    link.appendChild(card);
    container.appendChild(link);
  }
}

// Load Assignments
createCard(content.assignment_Obj, assignment_container);

createCard(content.other_resources_Obj, other_resources_container);
createCard(content.notes_obj, Notes_container);
createCard(content.manual_obj, manual_container);
createCard(content.code_Obj, code_container);
