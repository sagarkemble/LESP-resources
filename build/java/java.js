const content = {
  assignment_Obj: {
    assignemnt1: {
      name: "Assignment-1",
      link: "https://drive.google.com/file/d/1WdPYQMr2wvV9CpT-dexxeZe9BILX0GJ1/view?usp=drive_link",
    },
    assignemnt2: {
      name: "Assignment-2",
      link: "https://drive.google.com/file/d/14NTu0mNJWAAi438wRlFAJaQsC9WaX4f3/view?usp=drivesdk",
    },
    assignemnt3: {
      name: "Assignment-3",
      link: "/build/notuploaded.html",
    },
    assignemnt4: {
      name: "Assignment-4",
      link: "/build/notuploaded.html",
    },
    assignemnt5: {
      name: "Assignment-5",
      link: "/build/notuploaded.html",
    },
    assignemnt6: {
      name: "Assignment-6",
      link: "/build/notuploaded.html",
    },
  },
  manual_obj: {
    manual1: {
      name: "Manual-1",
      link: "https://drive.google.com/file/d/1WdPYQMr2wvV9CpT-dexxeZe9BILX0GJ1/view?usp=drive_link",
    },
    manual2: {
      name: "Manual-2",
      link: "https://drive.google.com/file/d/1WdPYQMr2wvV9CpT-dexxeZe9BILX0GJ1/view?usp=drive_link",
    },
  },
};

const assignment_container = document.querySelector(
  ".assignment-cards-container",
);
const manual_container = document.querySelector(
  ".manaul-question-answer-cards-container",
);

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

    const nameDiv = document.createElement("div");
    nameDiv.textContent = item.name;

    card.appendChild(nameDiv);
    link.appendChild(card);
    container.appendChild(link);
  }
}

// Load Assignments
createCard(content.assignment_Obj, assignment_container);
createCard(content.manual_obj, manual_container);
