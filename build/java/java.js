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
  manual_questionandanswer_obj: {
    exp1: {
      name: "Experiment-1",
      link: "https://drive.google.com/file/d/1WdPYQMr2wvV9CpT-dexxeZe9BILX0GJ1/view?usp=drive_link",
    },
    exp2: {
      name: "Experiment-2",
      link: "https://drive.google.com/file/d/18PH2xWsOjV1m4I4JJkMK_fV7I4cplV1d/view?usp=drivesdk",
    },
    exp4: {
      name: "Experiment-4",
      link: "https://drive.google.com/file/d/18Qmzh28_30u44jNYn7yRhFjnb9IYFd5T/view?usp=drivesdk",
    },
    exp5: {
      name: "Experiment-5",
      link: "https://drive.google.com/file/d/18R_tuKyTeQuHXgFe2UkGP74S1ossj-Jc/view?usp=drivesdk",
    },
    exp7: {
      name: "Experiment-7",
      link: "https://drive.google.com/file/d/18TX_CmLN9YPmJlMwSCsgyyjvYU2bXqMs/view?usp=drivesdk",
    },
    exp9: {
      name: "Experiment-9",
      link: "https://drive.google.com/file/d/18TcOloCDdRBjh8croc1KZ2QmqIZHI52a/view?usp=drivesdk",
    },
  },
  other_resources_Obj: {
    qb: {
      name: "QB UT-1",
      link: "https://drive.google.com/file/d/1AOcT-RuSXDwNjtf3ahT88lTQIV1oaPX3/view?usp=drivesdk",
    },
    syllabus: {
      name: "Syllabus",
      link: "https://drive.google.com/file/d/1n1GKosTv0jxSdrgv0d7X5YyOi4qHRQKw/view?usp=drive_link",
    },

    EX_3_OP: {
      name: "EX-3 O/P",
      link: "https://drive.google.com/file/d/13BbCSxkLQJ3-U3bMKXgGBK0KlZD6Xkg4/view?usp=drivesdk",
    },

    EX_4_OP: {
      name: "EX-4 O/P",
      link: "https://drive.google.com/file/d/13FedfSSQ3eJ7xQ4GuNFBUq2lyTcFW_c8/view?usp=drivesdk",
    },
    EX_5_OP: {
      name: "EX-5 O/P",
      link: "https://drive.google.com/file/d/130e6rRKcU-Pi4QIYMTlr7PBscWr9BFMg/view?usp=drivesdk",
    },
    EX_7_OP: {
      name: "EX-7 O/P",
      link: "https://drive.google.com/file/d/134XSaWIiN8-Ke32fQVWsiFUGhibH26Ui/view?usp=drivesdk",
    },
    EX_8_OP: {
      name: "EX-8 O/P",
      link: "https://drive.google.com/file/d/13-lawS6Cz6MVsLcvVTRCHRjZv525LLGp/view?usp=drivesdk",
    },
  },
  notes_obj: {
    unit_1: {
      name: "Unit-1",
      link: "https://drive.google.com/file/d/1cxVy7je24dOFORZq5ka3VijzrN7h2FvO/view?usp=sharing",
    },
    unit_2: {
      name: "Unit-2",
      link: "https://drive.google.com/file/d/1r1fWs4QGMn8_kewJzIZ1qj0yTAbNOOCD/view?usp=sharing",
    },
    unit_3: {
      name: "Unit-3",
      link: "https://drive.google.com/file/d/1t9upXsQtHy72YYvrQQnzMp7SnecGlkOB/view?usp=sharing",
    },
  },
};

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
const Notes_resources_container = document.querySelector(
  ".Notes-resources-cards-container",
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
createCard(
  content.manual_questionandanswer_obj,
  manual_questionandanswer_container,
);
createCard(content.other_resources_Obj, other_resources_container);
createCard(content.notes_obj, Notes_resources_container);
