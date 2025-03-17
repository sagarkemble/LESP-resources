const passedparameter = new URLSearchParams(window.location.search);
const highlight1 = passedparameter.get("highlight1");
const highlight2 = passedparameter.get("highlight2");
const highlight3 = passedparameter.get("highlight3");
const highlight4 = passedparameter.get("highlight4");
const assignment_container = document.querySelector(
  ".assignment-cards-container",
);

const other_resources_container = document.querySelector(
  ".other-resources-cards-container",
);

const content = {
  assignment_Obj: {
    assignemnt1: {
      name: "Assignment-1",
      link: "https://drive.google.com/file/d/10sUhxYFJ05wl18IwyI-5FOhrzcPgRX0U/view?usp=drivesdk",
    },
    assignemnt2: {
      name: "Assignment-2",
      link: "https://drive.google.com/file/d/10tap1xA1ufSFSbe4sK-i2BS6DxnWCWpb/view?usp=drive_link",
    },
    assignemnt3: {
      name: "Assignment-3",
      link: "https://drive.google.com/file/d/10zpbnVR7aLC1H23TQ9kjc3ZqBoAyMVG4/view?usp=drive_link",
    },
    assignemnt4: {
      name: "Assignment-4",
      link: "https://drive.google.com/file/d/175RMed_R1R2kXnWKIWKXsNSqkq2FvQw2/view?usp=drivesdk",
    },
    assignemnt5: {
      name: "Assignment-5",
      link: "https://docs.google.com/document/d/1kOnoXazTx1KP5BWG5yc3ichiKOkmcUnnyzykQRLruTo/edit?usp=sharing",
    },
    assignemnt6: {
      name: "Assignment-6",
      link: "https://drive.google.com/file/d/1VugfNbFxxDmMwT5fzl_s6uphLslY0_Xq/view?usp=drivesdk",
    },
    assignemnt7: {
      name: "Assignment-7",
      link: "https://drive.google.com/file/d/1bBubVJriSE8QyEVALebRd5joXdGAu5be/view?usp=drivesdk",
    },
    assignemnt8: {
      name: "Assignment-8",
      link: "https://drive.google.com/file/d/1hqOogrEtHxjMAUKi5KYZHgKW8L1ODSxk/view?usp=drivesdk",
    },
  },

  other_resources_Obj: {
    syllabus: {
      name: "Syllabus",
      link: "https://drive.google.com/file/d/1D-iREjzTepomydXUjDLEAU4eawktVBQ4/view?usp=drive_link",
    },
    qb: {
      name: "QB UT-1",
      link: "https://drive.google.com/file/d/1H478YDwmhFySg55BVqMXNW6n3p3eJklm/view?usp=drivesdk",
    },
  },
};

const contentb = {
  assignment_Obj: {
    assignemnt1: {
      name: "Assignment-1",
      link: "https://drive.google.com/file/d/1IMuN3JJ2tnPjlYBmBYJ9MoEaRCOp279i/view?usp=sharing",
    },
    assignemnt2: {
      name: "Assignment-2",
      link: "https://drive.google.com/file/d/1NN9MOrZ6oLV4YO6NRWeot3ygdNp_758Z/view?usp=sharing",
    },
    assignemnt3: {
      name: "Assignment-3",
      link: "https://drive.google.com/file/d/17adr0i0GsjAVc0hSlSPjhaWNsoqnoIW0/view?usp=sharing",
    },
    assignemnt4: {
      name: "Assignment-4",
      link: "https://drive.google.com/file/d/1caClAYhVE0NrVpHi7THGln4l0cVtX6Uj/view?usp=sharing",
    },
    assignemnt5: {
      name: "Assignment-5",
      link: "https://drive.google.com/file/d/1i4MG7lKmVXW7impFwpWDIXaWdVi4fjHn/view?usp=sharing",
    },
  },
};

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
if (localStorage.getItem("DIV") == "A") {
  createCard(content.assignment_Obj, assignment_container);
} else {
  createCard(contentb.assignment_Obj, assignment_container);
}
// Load Assignments
createCard(content.other_resources_Obj, other_resources_container);
