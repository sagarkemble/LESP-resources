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
const Notes_resources_container = document.querySelector(
  ".Notes-resources-cards-container",
);
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
      link: "../notuploaded.html",
    },
    assignemnt4: {
      name: "Assignment-4",
      link: "../notuploaded.html",
    },
    assignemnt5: {
      name: "Assignment-5",
      link: "../notuploaded.html",
    },
    assignemnt6: {
      name: "Assignment-6",
      link: "../notuploaded.html",
    },
  },
  manual_questionandanswer_obj: {
    exp1: {
      name: "Experiment-1",
      link: "https://drive.google.com/file/d/1GGxbapM5rvPqnL-B2oyZhgzlw8TEZsER/view?usp=drivesdk",
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
      link: "https://drive.google.com/file/d/1-C6FagBZ0BuDXSvqrXAT4n_ke07qJCdJ/view?usp=drivesdk",
    },
    exp9: {
      name: "Experiment-9",
      link: "https://drive.google.com/file/d/18TcOloCDdRBjh8croc1KZ2QmqIZHI52a/view?usp=drivesdk",
    },
    exp12: {
      name: "Experiment-12",
      link: "https://drive.google.com/file/d/1NJL1N5MJHd9juxpZxKWK6RmnlvK067Rd/view?usp=drivesdk",
    },
    exp13: {
      name: "Experiment-13",
      link: "https://drive.google.com/file/d/1NHBw3W_Yr2inOjsu1nmWh7BX2UmyVq2o/view?usp=drivesdk",
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
    EX_9_OP: {
      name: "EX-9 O/P",
      link: "https://drive.google.com/file/d/1GzTlB5obcAd9ajD0gWvN-nvXqCxns8T1/view?usp=drivesdk",
    },
    EX_10_OP: {
      name: "Ex-10 O/P",
      link: "https://drive.google.com/file/d/15TQcq_oDGMAU1wPyMr7wIg7-IHTm1mjd/view?usp=drive_link",
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
  manual_obj: {
    maunal_0: {
      name: "Index",
      link: "https://drive.google.com/file/d/1qut1o_WrsnNyFd_Yso5_SGUNCNhqpRWq/view?usp=drive_link",
    },
    maunal_1: {
      name: "Manual 1-5",
      link: "https://drive.google.com/file/d/1-x72MeK6QB00wE-tD7_d5Wny6ZHSJSRa/view?usp=drive_link",
    },
    maunal_3: {
      name: "Manual 6-10",
      link: "https://drive.google.com/file/d/108M3_WB2AkiA6lj158URP0VU66BBCWm2/view?usp=drive_link",
    },
    maunal_4: {
      name: "Manual 11-15",
      link: "https://drive.google.com/file/d/10KDTVZdoDX35z7Ta9aMccsO3XVDyHcmU/view?usp=drive_link",
    },
    maunal_5: {
      name: "Manual 16-20",
      link: "https://drive.google.com/file/d/10SotUjYqryGYBMWota3qqn_rSRroXUOL/view?usp=drive_link",
    },
    maunal_6: {
      name: "Manual 21-25",
      link: "ttps://drive.google.com/file/d/10YKe5qoi7cRlTC4-5rWGE1EQpFD9TI2c/view?usp=drive_link",
    },
    maunal_7: {
      name: "Manual 26-30",
      link: "https://drive.google.com/file/d/10aIEnhgq-62jckzjJPSH64gG9dSir8JY/view?usp=drive_link",
    },
    maunal_8: {
      name: "Full Manual",
      link: "https://drive.google.com/file/d/14N-jxptj8EBm_MVr7wj4XRJP94NfVbSy/view?usp=drive_link",
    },
  },
};
const contentb = {
  assignment_Obj: {
    assignemnt1: {
      name: "Assignment-1",
      link: "https://drive.google.com/file/d/1PH3g2-7lbgA2yvZn5WKCMt7jDR_B8zEj/view?usp=drive_link",
    },
    assignemnt2: {
      name: "Assignment-2",
      link: "https://drive.google.com/file/d/1PJHSGQFSFiiGThbNDDx8XWVrAIUVzgW5/view?usp=drive_link",
    },
    assignemnt3: {
      name: "Assignment-3",
      link: "https://drive.google.com/file/d/1PL2GHT4R0MA9Ka1CSra3w0AHYdB3SX5s/view?usp=drive_link",
    },
    assignemnt4: {
      name: "Assignment-4",
      link: "../notuploaded.html",
    },
    assignemnt5: {
      name: "Assignment-5",
      link: "../notuploaded.html",
    },
    assignemnt6: {
      name: "Assignment-6",
      link: "../notuploaded.html",
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
// createCard(content.assignment_Obj, assignment_container);
createCard(
  content.manual_questionandanswer_obj,
  manual_questionandanswer_container,
);
createCard(content.other_resources_Obj, other_resources_container);
createCard(content.notes_obj, Notes_resources_container);
createCard(content.manual_obj, manual_container);
