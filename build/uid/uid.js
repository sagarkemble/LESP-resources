const passedparameter = new URLSearchParams(window.location.search);
const highlight1 = passedparameter.get("highlight1");
const highlight2 = passedparameter.get("highlight2");
const highlight3 = passedparameter.get("highlight3");
const highlight4 = passedparameter.get("highlight4");
const manual_container = document.querySelector(".manual-cards-container");

const other_resources_container = document.querySelector(
  ".other-resources-cards-container",
);
const manual_question_answer_container = document.querySelector(
  ".manual-question-answer-cards-container",
);

const content = {
  manual_questionandanswer_obj: {
    exp1: {
      name: "Experiment-1",
      link: "https://drive.google.com/file/d/1HPNN05eGaaJ0hl-VY7Y1HGKNTQ2pxlSr/view?usp=drivesdk",
    },
    exp2: {
      name: "Experiment-2",
      link: "https://drive.google.com/file/d/1HPTtCYuUpdMXeN_qvDmbqZp9_2t3anwa/view?usp=drivesdk",
    },
    exp3: {
      name: "Experiment-3",
      link: "https://drive.google.com/file/d/1HRScRhH3IIbbmSIEBvNSuDASmP3nWWqD/view?usp=drivesdk",
    },
    exp4: {
      name: "Experiment-4",
      link: "https://drive.google.com/file/d/1HV1A4f4TDmX2V4IjLjErT7quc4lMVVnL/view?usp=drivesdk",
    },
    exp5: {
      name: "Experiment-5",
      link: "https://drive.google.com/file/d/1CAYEPbggBhMOTKEYBgcFiKQcQY4GFi39/view?usp=drive_link",
    },
    exp6: {
      name: "Experiment-6",
      link: "https://drive.google.com/file/d/17u-3IpfqhwS2yT5A_WHktDNkCvNqnV1F/view?usp=drive_link",
    },
    exp7: {
      name: "Experiment-7",
      link: "https://drive.google.com/file/d/1IWojxIE7a1MKCSmZSMYjHN59JMyzX0Da/view?usp=drive_link",
    },
    exp8: {
      name: "Experiment-8",
      link: "https://drive.google.com/file/d/1GvUfySCYg_ASVpMybiwaUzzQhGCCRXZ3/view?usp=drive_link",
    },
    exp9: {
      name: "Experiment-9",
      link: "https://drive.google.com/file/d/1a7R7JPmXyT7rPcRdf4kwb6VZB4p1L_tD/view?usp=drivesdk",
    },
    exp10: {
      name: "Experiment-10",
      link: "https://drive.google.com/file/d/1a8zF0AmxNgdL0xaW86G5Jm-88O5Xq1AT/view?usp=drivesdk",
    },
    exp11: {
      name: "Experiment-11",
      link: "https://drive.google.com/file/d/1noR4f8madZ5iaQLeqCoS-bSHR9c34MVF/view?usp=drivesdk",
    },
    exp12: {
      name: "Experiment-12",
      link: "https://drive.google.com/file/d/1whl8gg7E3dH4iiNsA1roY4GIbg_FVTWI/view?usp=drivesdk",
    },
    exp13: {
      name: "Experiment-13",
      link: "https://drive.google.com/file/d/1wjesRDS8fpLxTenjCQ0E3R8Km-CDKzO3/view?usp=drivesdk",
    },
    exp14: {
      name: "Experiment-14",
      link: "https://drive.google.com/file/d/1y60W9uYgh1dQX_w4s6EAOO3qKH2Z3EjN/view?usp=drivesdk",
    },
    exp15: {
      name: "Experiment-15",
      link: "https://drive.google.com/file/d/1yHb27hbLsEQANh2yXJMbZzmGgfZjv2_z/view?usp=drivesdk",
    },
  },
  manual_Obj: {
    manual_0: {
      name: "Index",
      link: "https://drive.google.com/file/d/1-tpt9B1uf8eRPnmd1_yv8zDFXjBdLrbf/view?usp=drive_link",
    },
    manual_1: {
      name: "Manual 1-5",
      link: "https://drive.google.com/file/d/1zDYBAqxW1No9LFqIe2TYsNEHePzppEju/view?usp=drive_link",
    },
    manual_2: {
      name: "Manual 6-10",
      link: "https://drive.google.com/file/d/15-FAdmzBjtRkIO27y4SLMGxUl_dQaG0S/view?usp=drive_link",
    },
    manual_3: {
      name: "Manual 11-14",
      link: "https://drive.google.com/file/d/1760DI_zfd7mSBgUwQIPvVbeamAiif0AL/view?usp=drive_link",
    },
    manual_4: {
      name: "Full Manual",
      link: "https://drive.google.com/file/d/18GArX8TwnRzitBCK_z6tgTlQIno1_ciI/view?usp=drive_link",
    },
  },

  other_resources_Obj: {
    resrc: {
      name: "Syllabus",
      link: "https://drive.google.com/file/d/1TCKxAJM26pr3m0GXahHINDsWRkN_cfy0/view?usp=drivesdk",
    },
    resrc_1: {
      name: "MP INDEX",
      link: "https://docs.google.com/document/d/12Nr6nE4pODqxD6KNDXYq5WtBk6WdjyXM/edit?usp=drivesdk&ouid=113726029866302553507&rtpof=true&sd=true",
    },
    resrc_2: {
      name: "MP FORMAT",
      link: "https://docs.google.com/document/d/1-yvNy-JvlkRkJRZP87k-x8vIN-o7YOqY/edit?usp=sharing&ouid=113726029866302553507&rtpof=true&sd=true",
    },
    resrc_3: {
      name: "CERTIFICATE",
      link: "https://drive.google.com/file/d/1-Be30W_zMDLOOcSO1GTX6gvvnBzdCb6f/view?usp=drive_link",
    },
    resrc_4: {
      name: "S1 Batch Dates",
      link: "https://drive.google.com/file/d/10UTRzBNUNhfC_cp1iCDqwnYxR89fLzWs/view?usp=drivesdk",
    },
    resrc_5: {
      name: "S2 Batch Dates",
      link: "https://drive.google.com/file/d/10UhA0jAR0i_QkWavEaSNoT583GvV3qnK/view?usp=drivesdk",
    },
    resrc_6: {
      name: "S3 Batch Dates",
      link: "https://drive.google.com/file/d/10WjpiIkM9UvQkq7neSbx5CDAhAcP2RhA/view?usp=drivesdk",
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

// Load Assignments
createCard(content.manual_Obj, manual_container);
createCard(
  content.manual_questionandanswer_obj,
  manual_question_answer_container,
);
createCard(content.other_resources_Obj, other_resources_container);
