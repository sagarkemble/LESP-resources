const passedparameter = new URLSearchParams(window.location.search);
const highlight1 = passedparameter.get("highlight1");
const highlight2 = passedparameter.get("highlight2");
const highlight3 = passedparameter.get("highlight3");
const highlight4 = passedparameter.get("highlight4");

const assignment_container = document.querySelector(
  ".assignment-cards-container",
);
const class_notes_container = document.querySelector(
  ".class-notes-cards-container",
);
const notes_container = document.querySelector(".notes-cards-container");
const manual_questionandanswer_container = document.querySelector(
  ".manaul-question-answer-cards-container",
);
const manual_container = document.querySelector(".manual-cards-container");

const other_resources_container = document.querySelector(
  ".other-resources-cards-container",
);
const output_resources_container = document.querySelector(
  ".output-container-cards-container",
);
const content = {
  assignment_Obj: {
    assignemnt1: {
      name: "Assignment-1",
      link: "https://drive.google.com/file/d/1-4Jh8QLm5PmCkv9eG8FLC31hQuQBOLnT/view?usp=drivesdk",
    },
    assignemnt2: {
      name: "Assignment-2",
      link: "https://drive.google.com/file/d/11eZVAujt3um-qreLZx8cq9JE7TFmXxJ9/view?usp=drivesdk",
    },
    assignemnt3: {
      name: "Assignment-3",
      link: "https://drive.google.com/file/d/1YbJg5KRXL-_kvPLhb98BXsgLB-jfbuyw/view?usp=drivesdk",
    },
    assignemnt4: {
      name: "Assignment-4",
      link: "https://drive.google.com/file/d/1yke7ypakeuJtygmut-m8KVjiJU81rdWv/view?usp=drivesdk",
    },
    assignemnt5: {
      name: "Assignment-5",
      link: "https://drive.google.com/file/d/1ylvfBhwodhll1SuRp9aDCUxFH1tbL-KU/view?usp=drivesdk",
    },
  },
  class_notes_obj: {
    unit1: {
      name: "Unit-1",
      link: "https://drive.google.com/file/d/16xIfY1s-ROCeDd6Kles_GbKF9mdYC6jY/view?usp=drivesdk",
    },
    unit2: {
      name: "Unit-2",
      link: "https://drive.google.com/file/d/170nl0aRgmmbnUysrlWhus1iZ4W1wCj7n/view?usp=drivesdk",
    },
    unit3: {
      name: "Unit-3",
      link: "https://drive.google.com/file/d/1YljrQ94i5a8bH6f0cCiV74OODKydWx3l/view?usp=drive_link",
    },
    unit4: {
      name: "Unit-4",
      link: "https://drive.google.com/file/d/1DPhPag9RRsHbVVpdbqF1t27auKm-znZj/view?usp=drive_link",
    },
  },
  notes_obj: {
    unit1: {
      name: "Unit-1",
      link: "https://drive.google.com/file/d/12D6f3bm5izYB5d0ztpsv1QJs-dmKWFVc/view?usp=drivesdk",
    },
    unit2: {
      name: "Unit-2",
      link: "https://drive.google.com/file/d/12E_nENUww9uGjjH1EHbOJ_nxp9QZKsFW/view?usp=drivesdk",
    },
    unit3: {
      name: "Unit-3",
      link: "https://drive.google.com/file/d/12IMPrVxN_IduIY7nYDrua5RKYy1qEGgI/view?usp=drivesdk",
    },
    unit4: {
      name: "Network Topology",
      link: "https://drive.google.com/file/d/1xJ5GD6PQrZjaf9stb6OaJeddoEcw_ps3/view?usp=drivesdk",
    },
    unit5: {
      name: " networking device",
      link: "https://drive.google.com/file/d/1xK7fNIpiw8oPQuOTD0qma4M7shekMilG/view?usp=drivesdk",
    },
  },
  manual_questionandanswer_obj: {
    exp1: {
      name: "Experiment-1",
      link: "https://drive.google.com/file/d/1CszJ_NMP_ebQ44MntBTwl_dbkDtfr1JO/view?usp=drivesdk",
    },
    exp2: {
      name: "Experiment-2",
      link: "https://drive.google.com/file/d/1Cy2ulBt7_yRyv7qflm7M30YW97b12fRp/view?usp=drivesdk",
    },
    exp3: {
      name: "Experiment-3",
      link: "https://drive.google.com/file/d/1Cu1uFx-KoGw8L_eRwCzkdi4k3DghrjBY/view?usp=drivesdk",
    },
    exp4: {
      name: "Experiment-4",
      link: "https://drive.google.com/file/d/1CvHxHo7SqLLNCw8YAgisXXwELYzeo44K/view?usp=drivesdk",
    },
    exp5: {
      name: "Experiment-5",
      link: "https://drive.google.com/file/d/1CzqCzhURCUU6huZUeq007Za9T8B4o3ci/view?usp=drivesdk",
    },
    exp6: {
      name: "Experiment-6",
      link: "https://drive.google.com/file/d/1QsVlmR-nCwzJTFYHoL8L8UH8cZL_CW2m/view?usp=drivesdk",
    },
    exp7: {
      name: "Experiment-7",
      link: "https://drive.google.com/file/d/1Qu5HBfDSX9tY0CYyCHjx5y01S9TTuhLt/view?usp=drivesdk",
    },
    exp8: {
      name: "Experiment-8",
      link: "https://drive.google.com/file/d/1QuHyV9GGESz_SHDH3vQiS44Z-F18h5Td/view?usp=drivesdk",
    },
    exp9: {
      name: "Experiment-9",
      link: "https://drive.google.com/file/d/1QyqK7R1tHuGxXJxg-ifM6xybkfeDOhn4/view?usp=drivesdk",
    },
    exp10: {
      name: "Experiment-10",
      link: "https://drive.google.com/file/d/1R5I9iGqpPhQgxqnL5h1KuOZjS2-A4J8b/view?usp=drivesdk",
    },
    exp11: {
      name: "Experiment-11",
      link: "https://drive.google.com/file/d/1R68vJ2IryQWaUV7Z2OcZfE5GnLrFnXh9/view?usp=drivesdk",
    },
    exp12: {
      name: "Experiment-12",
      link: "https://drive.google.com/file/d/1YR0eP_EB4tb8lIgUmQH4eEKezMc_6wqp/view?usp=drivesdk",
    },
    exp13: {
      name: "Experiment-13",
      link: "https://drive.google.com/file/d/1R8gTo9xBgmyP6PR5Wd83qFZeeK7CN50q/view?usp=drivesdk",
    },
    exp14: {
      name: "Experiment-14",
      link: "https://drive.google.com/file/d/1RBhDz39hfxHl36J3DoogDClpQT-pCA_2/view?usp=drivesdk",
    },
    exp15: {
      name: "Experiment-15",
      link: "https://drive.google.com/file/d/1YJ9ssVl8ai347LdcoUcSIaIhmHk_9090/view?usp=drivesdk",
    },
    exp16: {
      name: "Experiment-16",
      link: "https://drive.google.com/file/d/1YLwta6ApQxAAyYdipwgq9DpGjSDYAHgv/view?usp=drivesdk",
    },
    exp17: {
      name: "Experiment-17",
      link: "https://drive.google.com/file/d/1YO69dfRkWNJ0bIgn8uSM03iXmXRbY4wb/view?usp=drivesdk",
    },
    exp18: {
      name: "Experiment-18",
      link: "https://drive.google.com/file/d/1m2xTyQVHoT7GY0gaDRl3u9c0KWywjLYg/view?usp=drivesdk",
    },
    exp19: {
      name: "Experiment-19",
      link: "https://drive.google.com/file/d/1m4BO76DHwYZcRQKIzAuSipJkrSwzitop/view?usp=drivesdk",
    },
    exp_20: {
      name: "Experiment-20",
      link: "https://drive.google.com/file/d/1m4nWC8wJe69XgjkZbD9_leXman533wCV/view?usp=drivesdk",
    },
    exp23: {
      name: "Experiment-23",
      link: "https://drive.google.com/file/d/1cozhSdk7Tu-ClXelcXfdxBoaUAAjLA_z/view?usp=drivesdk",
    },
    exp24: {
      name: "Experiment-24",
      link: "https://drive.google.com/file/d/1cqptoRnjskMJQk7pCBCnYdVergaOTmgf/view?usp=drivesdk",
    },
    exp27: {
      name: "Experiment-27",
      link: "https://drive.google.com/file/d/1d-I_PDKnnXv55k92vEL4uRInx_uC7gph/view?usp=drivesdk",
    },
  },
  other_resources_Obj: {
    qb1: {
      name: "QB UT-1",
      link: "https://drive.google.com/file/d/163Xzoq9CbS2uG_xz8DGvaLnn3OqeSx6j/view?usp=drivesdk",
    },
    qb2: {
      name: "QB UT-2",
      link: "https://drive.google.com/file/d/1zMRDIbq38fc3Ml-lLGOlo39Z4kXcRRZe/view?usp=drive_link",
    },
    syllabus: {
      name: "Syllabus",
      link: "https://drive.google.com/file/d/1IElLQ5rcPuQWjtTD-e5tNcNP7Ndm_iPi/view?usp=drive_link",
    },

    PYQ1: {
      name: "PYQ-2019",
      link: "https://drive.google.com/file/d/1GouoV-a2va5wYKaaTsWiZvHzd0ypeIbE/view?usp=drive_link",
    },
    PYQ2: {
      name: "PYQ-2019-2",
      link: "https://drive.google.com/file/d/16xN5q5kJ9lNyOfhLPFPlchjxtYzBhOiz/view?usp=drive_link",
    },
    PYQ3: {
      name: "PYQ-2022",
      link: "https://drive.google.com/file/d/1w0g_c4BY3zq01SabYY0TnTXI_P90gCUz/view?usp=drive_link",
    },
  },
  output_Obj: {
    Exp_1_OP: {
      name: "EXP-1 O/P",
      link: "https://drive.google.com/file/d/1VVgBcxgJPPVRxMF0E7Hgbhgw3u-M9UNv/view?usp=drivesdk",
    },
    Exp_2_OP: {
      name: "EXP-2 O/P",
      link: "https://drive.google.com/file/d/1Ve6k1ZjW2xRI1H6jF763XSS_AvSxRERY/view?usp=drivesdk",
    },
    Exp_3_OP: {
      name: "EXP-3 O/P",
      link: "https://drive.google.com/file/d/1VSQSCs1l_c96_z4cuIoxmvgYMZgZj5Jk/view?usp=drivesdk",
    },
    Exp_8_OP: {
      name: "EXP-8 O/P",
      link: "https://drive.google.com/file/d/19oLL2tCsh19nCA2kYnhxpUPfXAel_pUA/view?usp=drive_link",
    },
    Exp_11_OP: {
      name: "EXP-11 O/P",
      link: "https://drive.google.com/file/d/1dkwDv0VwdF510Nk3xWtFdFapyzqDwbMP/view?usp=drivesdk",
    },
    Exp_12_OP: {
      name: "EXP-12 O/P",
      link: "https://drive.google.com/file/d/1LWykyzo-WybUJvyyG22T5S-SHn3wvTpp/view?usp=drive_link",
    },
  },
  manual_Obj: {
    manual0: {
      name: "Index",
      link: "https://drive.google.com/file/d/1-9UD9qJIPT9xI5sORZTVr3ASXdUqh0NB/view?usp=drive_link",
    },
    manual1: {
      name: "Manual 1-5",
      link: "https://drive.google.com/file/d/1-UCeFCMhyY0EeXVlHxncAURx3tiuxgFx/view?usp=drive_link",
    },
    manual2: {
      name: "Manual 6-10",
      link: "https://drive.google.com/file/d/1-S9XeEWCvyFxTJy3a20NtNtWWl5XBb4M/view?usp=drive_link",
    },
    manual3: {
      name: "Manual 11-15",
      link: "https://drive.google.com/file/d/1-S4bnE3AYYFE76Oc4iZTRqLVCsUvyF53/view?usp=drive_link",
    },
    manual4: {
      name: "Manual 16-20",
      link: "https://drive.google.com/file/d/1-RoQe0A0q0la5fd-JI4J161f_jMWaWdK/view?usp=drive_link",
    },
    manual5: {
      name: "Manual 21-25",
      link: "https://drive.google.com/file/d/1-ND05yNHbQ23b0MQP6p2iPiccNalRENE/view?usp=drive_link",
    },
    manual6: {
      name: "Manual 26-28",
      link: "https://drive.google.com/file/d/1-KQAp3fjTBQi8Q1ye_-qcIZfigA5WZNu/view?usp=drive_link",
    },
    manual7: {
      name: "Full Manual",
      link: "https://drive.google.com/file/d/14v8vtY1-8ZgsUxvZRCnRNa9IfIecU4An/view?usp=drive_link",
    },
  },
};
const contentb = {
  assignment_Obj: {
    assignemnt1: {
      name: "Assignment-1",
      link: "https://drive.google.com/file/d/1OJOgpjfUlpXvZKIBhaxIOSwRjlAST57A/view?usp=drivesdk",
    },
    assignemnt2: {
      name: "Assignment-2",
      link: "https://drive.google.com/file/d/1OTSTqiD8KF-BSi3_54ULAr2Qs1Wg38a4/view?usp=drivesdk",
    },
    assignemnt3: {
      name: "Assignment-3",
      link: "https://drive.google.com/file/d/1kOTNv7Zbo9ddLf3QjangtMeCd5DoVfFP/view?usp=drivesdk",
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

if (localStorage.getItem("DIV") == "A") {
  createCard(content.assignment_Obj, assignment_container);
} else {
  createCard(contentb.assignment_Obj, assignment_container);
}

createCard(content.class_notes_obj, class_notes_container);
createCard(content.other_resources_Obj, other_resources_container);
createCard(content.notes_obj, notes_container);
createCard(content.manual_Obj, manual_container);
createCard(
  content.manual_questionandanswer_obj,
  manual_questionandanswer_container,
);
createCard(content.output_Obj, output_resources_container);
