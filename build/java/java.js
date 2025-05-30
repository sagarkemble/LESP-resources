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
const ppt_resources_container = document.querySelector(
  ".ppt-resources-cards-container",
);
const output_resources_container = document.querySelector(
  ".output-container-cards-container",
);

const content = {
  ppt_Obj: {
    Unit1: {
      name: "Unit-1",
      link: "https://drive.google.com/file/d/1OauttuaihVi4x0AthyHx-FZMPePy59IY/view?usp=drive_link",
    },
    Unit2: {
      name: "Unit-2",
      link: "https://drive.google.com/file/d/1OekV07kmZTIBI3T_va0yr4dZMeuu2CMU/view?usp=drive_link",
    },
    Unit3: {
      name: "Unit-3",
      link: "https://drive.google.com/file/d/1OewD7Ln9Z94iun0k9QJ-TBrCNSnpxGlG/view?usp=drive_link",
    },
    Unit4: {
      name: "Unit-4",
      link: "https://drive.google.com/file/d/1OiQ3LEI30izecl9_LSzOng_v9T2A0YYQ/view?usp=drive_link",
    },
    awt: {
      name: "AWT",
      link: "https://drive.google.com/file/d/1ae3OAjNnZzrH5tv50l7OvKA6Rxv_uhN1/view?usp=drivesdk",
    },
    swing: {
      name: "SWING",
      link: "https://drive.google.com/file/d/1aiH6O9nMNmfwXNtv2a9ocjTdv-IvQXMI/view?usp=drivesdk",
    },
    prog: {
      name: "Unit 4 programs",
      link: "https://drive.google.com/file/d/1kTv05V86QrLQV74iY6t9sN8KXGJMlGj1/view?usp=drivesdk",
    },
    unit4: {
      name: "Unit-4",
      link: "https://drive.google.com/file/d/1x0YDy-dij-tsiia_YaPkLJiiQf7k6VKg/view?usp=drivesdk",
    },
    unit5: {
      name: "Basic of N/W",
      link: "https://drive.google.com/file/d/1x0vBU8QhH4hMB4_oH5pb3HmXIhRjxpXf/view?usp=drivesdk",
    },
    unit6: {
      name: "Unit-6",
      link: "https://drive.google.com/file/d/1x1eKQ_bcuUfwbnZuhGsiJ5XMscsprbg-/view?usp=drivesdk",
    },
  },
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
      link: "https://drive.google.com/file/d/1dItGZi_bQEB5Vch8QP9jtWYXyTNcwDrp/view?usp=drive_link",
    },
    assignemnt4: {
      name: "Assignment-4",
      link: "https://drive.google.com/file/d/1hxcou6R-bbKbn_NqS1f7XJ4szB8NjYh5/view?usp=drivesdk",
    },
    assignemnt5: {
      name: "Assignment-5",
      link: "https://drive.google.com/file/d/1uHH2B9UmQ82Rju9KzsXrvet2XYY8RHJw/view?usp=drivesdk",
    },
    assignemnt6: {
      name: "Assignment-6",
      link: "https://drive.google.com/file/d/1uHJZGNXF2FRMEJfYLSLRF2rFoxali5qp/view?usp=drivesdk",
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
    exp11: {
      name: "Experiment-11",
      link: "https://drive.google.com/file/d/1VPtt9q3iqJh_0fdWaif5Ju4EfKiFAtCG/view?usp=drivesdk",
    },
    exp12: {
      name: "Experiment-12",
      link: "https://drive.google.com/file/d/1NJL1N5MJHd9juxpZxKWK6RmnlvK067Rd/view?usp=drivesdk",
    },
    exp13: {
      name: "Experiment-13",
      link: "https://drive.google.com/file/d/1NHBw3W_Yr2inOjsu1nmWh7BX2UmyVq2o/view?usp=drivesdk",
    },
    exp16: {
      name: "Experiment-16",
      link: "https://drive.google.com/file/d/1b4KBQJFZU3ZTnA6Ah7uWCEBANNsXSLpi/view?usp=drivesdk",
    },
  },
  ouput_obj: {
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
    EX_11_OP: {
      name: "Ex-11 O/P",
      link: "https://drive.google.com/file/d/1TZnnsYI5LWr-ATJSvs3asiwwS3zEwQDK/view?usp=drive_link",
    },
    EX_12_OP: {
      name: "Ex-12 O/P",
      link: "https://drive.google.com/file/d/11i57t4cgFGTikqvmWccfZJIVO9v0OXIa/view?usp=sharing",
    },
    EX_13_OP: {
      name: "Ex-13 O/P",
      link: "https://drive.google.com/file/d/1UWizGXAqrXEFTd4aIbCfUtRhJ4en2owz/view?usp=drive_link",
    },
    EX_14_OP: {
      name: "Ex-14 O/P",
      link: "https://drive.google.com/file/d/1WI_gmeFliA-QHfa0Px2xfqAuV2gQse5P/view?usp=drivesdk",
    },
    EX_16_OP: {
      name: "Ex-16 O/P",
      link: "https://drive.google.com/file/d/1WgAdbswMAT6vnxZnUPoXfhuDnbl_YzmU/view?usp=drivesdk",
    },
    EX_17_OP: {
      name: "Ex-17 O/P",
      link: "https://drive.google.com/file/d/1Wgidr2AWe1pTbz6kf-_8KGFh9UXVWnYv/view?usp=drivesdk",
    },
    EX_18_OP: {
      name: "Ex-18 O/P",
      link: "https://drive.google.com/file/d/1WyWeMLgS3Xrj9i0XIBSuVFIj3apZRseH/view?usp=drivesdk",
    },
    EX_19_OP: {
      name: "Ex-19 O/P",
      link: "https://drive.google.com/file/d/1i-Ll1TBTfgMXvqdq3lCfr80lUtdN2UYa/view?usp=drivesdk",
    },
    EX_20_OP: {
      name: "Ex-20 O/P",
      link: "https://drive.google.com/file/d/1aoAI10wC8Q5vO3Zw1oGQh4lTqISH4STC/view?usp=drivesdk",
    },
    EX_21_OP: {
      name: "Ex-21 O/P",
      link: "https://drive.google.com/file/d/1arp2jpl46E4dyjiq-PpQanQhfpTJ-Sll/view?usp=drivesdk",
    },
    EX_22_OP: {
      name: "Ex-22 O/P",
      link: "https://drive.google.com/file/d/1at6XpgKedTAszGU8LwN3GjTCdS6Vx8JV/view?usp=drivesdk",
    },
    EX_23_OP: {
      name: "Ex-23 O/P",
      link: "https://drive.google.com/file/d/1iGAJMxh5sYWYWtw67UYJDpBIF7opUi6D/view?usp=drivesdk",
    },
    EX_24_OP: {
      name: "Ex-24 O/P",
      link: "https://drive.google.com/file/d/1iPe4SVh-EkvQ7BEN_td23Gz7zT99bOKQ/view?usp=drivesdk",
    },
    EX_25_OP: {
      name: "Ex-25 O/P",
      link: "https://drive.google.com/file/d/1iS3d1lu62brtaUvZ97kwGui4Ip7QuiBL/view?usp=drivesdk",
    },
    EX_27_OP: {
      name: "Ex-27 O/P",
      link: "https://drive.google.com/file/d/1nRbkjFYvKIlwiRBU9OtuVYjI3IsJjcUm/view?usp=drivesdk",
    },
    EX_28_OP: {
      name: "Ex-28 O/P",
      link: "https://drive.google.com/file/d/1ouFH59QbJW7bTW9cwlv0vFXXowIkWdp0/view?usp=drivesdk",
    },
    EX_29_OP: {
      name: "Ex-29 O/P",
      link: "https://drive.google.com/file/d/1ymS1qw-SkbcyUSmk61JXiislM1xUYCz7/view?usp=drivesdk",
    },
    EX_30_OP: {
      name: "Ex-30 O/P",
      link: "https://drive.google.com/file/d/1yuRdqILnrOCPx-1TS4mtho8ChIcQD_4Q/view?usp=drivesdk",
    },
  },
  other_resources_Obj: {
    qb1: {
      name: "QB UT-1",
      link: "https://drive.google.com/file/d/1AOcT-RuSXDwNjtf3ahT88lTQIV1oaPX3/view?usp=drivesdk",
    },
    qb2: {
      name: "QB UT-2",
      link: "https://drive.google.com/file/d/1HLZXIgTTTsC_KF7bJ_9C7iI852hGXriC/view?usp=drive_link",
    },
    prelim: {
      name: "Prelim Question paper",
      link: "https://drive.google.com/file/d/12ZXCIJi9Fc4Qu3N6pFKQvfRsIATebMoL/view?usp=drivesdk",
    },
    syllabus: {
      name: "Syllabus",
      link: "https://drive.google.com/file/d/1n1GKosTv0jxSdrgv0d7X5YyOi4qHRQKw/view?usp=drive_link",
    },
    Pr: {
      name: "Pra External Que",
      link: "https://drive.google.com/file/d/180VH6b11MKVtraKu4wcR_LzfJb6_56jB/view?usp=drivesdk",
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
//B div assignment
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
      link: "https://drive.google.com/file/d/1W-3xJzdtbnvuKGOKQhwKbT3GM-xmqKDh/view?usp=drivesdk",
    },
    assignemnt5: {
      name: "Assignment-5",
      link: "https://drive.google.com/file/d/1_TSB3eRBuO7NDvqgPgFCyE5BDy0MD2fu/view?usp=drivesdk",
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
createCard(content.ouput_obj, output_resources_container);
// Load Assignments
createCard(
  content.manual_questionandanswer_obj,
  manual_questionandanswer_container,
);
createCard(content.other_resources_Obj, other_resources_container);
createCard(content.notes_obj, Notes_resources_container);
createCard(content.manual_obj, manual_container);
createCard(content.ppt_Obj, ppt_resources_container);
