const passedparameter = new URLSearchParams(window.location.search);
const highlight1 = passedparameter.get("highlight1");
const highlight2 = passedparameter.get("highlight2");
const highlight3 = passedparameter.get("highlight3");
const highlight4 = passedparameter.get("highlight4");
const assignment_container = document.querySelector(
  ".assignment-cards-container",
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
const manual_questionandanswer_container = document.querySelector(
  ".manaul-question-answer-cards-container",
);
const output_resources_container = document.querySelector(
  ".output-container-cards-container",
);
const content = {
  assignment_Obj: {
    Tutorial_1: {
      name: "Tutorial-1",
      link: "https://drive.google.com/file/d/1OadICqTC3E4a-Spk8G6GVrFnrmrNRLzR/view?usp=drive_link",
    },
    Tutorial_2: {
      name: "Tutorial-2",
      link: "https://drive.google.com/file/d/10_fISMOeguC0GGMnn9Fl_EbezagDounH/view?usp=sharing",
    },
  },

  notes_obj: {
    unit_1: {
      name: "Unit-1",
      link: "https://drive.google.com/file/d/11arXQkYhDBITC4igVqa_aDgC8eoxBRgt/view?usp=drivesdk",
    },
    unit_2: {
      name: "Unit-2",
      link: "https://drive.google.com/file/d/1y66SJ2958pgOskMx9bMaCrKC6jxEvIYk/view?usp=drive_link",
    },
  },
  other_resources_Obj: {
    resrc1: {
      name: "Syllbus",
      link: "https://drive.google.com/file/d/1KAqoNHgr4M1qnucW5a7BWJxWKpZj6K3s/view?usp=drive_link",
    },

    resrc2: {
      name: "MP Index",
      link: "https://docs.google.com/document/d/1YUIa1cCq3URdtwEiLsZGnf3HCBR9lxft/edit?usp=drive_link&ouid=113726029866302553507&rtpof=true&sd=true",
    },

    resrc3: {
      name: "Sample propsal",
      link: "https://drive.google.com/file/d/1nCqYLOLTG8rzzotU7e7Ao9ePd1x4IwHd/view?usp=drive_lin",
    },

    resrc4: {
      name: "Sample Report",
      link: "https://drive.google.com/file/d/1OZ0plFmcTCkwu-m13cozUmVpN_BkE1ja/view?usp=drive_link",
    },
  },
  manaul_obj: {
    manual_0: {
      name: "Index",
      link: "https://drive.google.com/file/d/1A4f0wc15Ssh9-HxTo7XzoBXwUQDfbgBd/view?usp=drive_link",
    },
    manual_1: {
      name: "Manual 1-5",
      link: " https://drive.google.com/file/d/1_DJT9ejk5VWA4_HgakcurIsdzrJOVJXz/view?usp=drive_link",
    },
    manual_2: {
      name: "Manual 6-10",
      link: "https://drive.google.com/file/d/16yiJ1bpHoSYGMprAHqJDpXfmt51zBusz/view?usp=drive_link",
    },
    manual_3: {
      name: "Manual 11-15",
      link: "https://drive.google.com/file/d/1i5pP4EXsLrG_4wMOL0qnuidEozUGowyi/view?usp=drive_link",
    },
    manual_4: {
      name: "Manual 16-20",
      link: "https://drive.google.com/file/d/1kVRUcirWHmVLQEAm2W3m3-KS3jrTryMf/view?usp=drive_link",
    },
    manual_5: {
      name: "Manual 21-25",
      link: "https://drive.google.com/file/d/1gO_W9xgGFM1WOtiyDoZaPSGe2o5xDL9C/view?usp=drive_link",
    },
    manual_6: {
      name: "Manual 26-30",
      link: "https://drive.google.com/file/d/1Qnu5evyniNlu21Qn4p2omLFCmLfI37gn/view?usp=drive_link",
    },
    manual_7: {
      name: "Full Manual",
      link: "https://drive.google.com/file/d/1qF9tAU5DvLWgBnoAqqiFkD49jMuNBcPS/view?usp=drive_link",
    },
  },
  manual_questionandanswer_obj: {
    exp1: {
      name: "Experiment-1",
      link: "https://drive.google.com/file/d/1Ovrspy3m3D69amV_V5-f6pQyC2Pmcslz/view?usp=drivesdk",
    },
    exp2: {
      name: "Experiment-2",
      link: "https://drive.google.com/file/d/1P-S1aymSBkVdHsSr8roQelmJ8lvORmjN/view?usp=drivesdk",
    },
    exp3: {
      name: "Experiment-3",
      link: "https://drive.google.com/file/d/1P-UNmC0hsn3fKVCC6L_6h2h-MD_8T3zv/view?usp=drivesdk",
    },
    exp4: {
      name: "Experiment-4",
      link: "https://drive.google.com/file/d/1P0Lu6nIVu4VdNf2yQhaUflNNWfxemaqj/view?usp=drivesdk",
    },
    exp5: {
      name: "Experiment-5",
      link: "https://drive.google.com/file/d/1P2tF69sNlQEdCBirMXYa1pwDTuN1tsey/view?usp=drive_link",
    },
    exp6: {
      name: "Experiment-6",
      link: "https://drive.google.com/file/d/19TZMFzMAcjYLFGY9qya0HbmNuAzqeBI7/view?usp=drive_link",
    },
    exp7: {
      name: "Experiment-7",
      link: "https://drive.google.com/file/d/1qynXfl5qlw7npu652lnJMLAkOh5QOdMC/view?usp=drive_link",
    },
    exp8: {
      name: "Experiment-8",
      link: "https://drive.google.com/file/d/1aLnjKY7PKsOB-M424W3IOe_qhSf4Lw4a/view?usp=drive_link",
    },
    exp9: {
      name: "Experiment-9",
      link: "https://drive.google.com/file/d/1_loOarYpaYhnson3HHVaE96pUBmfEDK2/view?usp=drive_link",
    },
    exp10: {
      name: "Experiment-10",
      link: "https://drive.google.com/file/d/1dYfZ0Gu2Dg3zrf-I-XQXvxOKGmm9czC7/view?usp=drive_link",
    },
    exp11: {
      name: "Experiment-11",
      link: "https://drive.google.com/file/d/1V-sgYzOJeBY2YamWWqDq1Si28QlelTun/view?usp=drive_link",
    },
    exp12: {
      name: "Experiment-12",
      link: "https://drive.google.com/file/d/1yL0fjINJFVMmA2IZMEfUW2iIBFLnNeyw/view?usp=drive_link",
    },
    exp13: {
      name: "Experiment-13",
      link: "https://drive.google.com/file/d/1GgflnealzAVmvMk9U1tEeYhvVkKCuHsn/view?usp=drive_link",
    },
    exp14: {
      name: "Experiment-14",
      link: "https://drive.google.com/file/d/1spo9GRfbu1Tcq6lrFDOO4E719PcQozTv/view?usp=drive_link",
    },
    exp15: {
      name: "Experiment-15",
      link: "https://drive.google.com/file/d/11G_I-X8powsxJEeknYfy_GKUdy1aOCVh/view?usp=drive_link",
    },
    exp16: {
      name: "Experiment-16",
      link: "https://drive.google.com/file/d/1T8Vrj2VwrcElwYMOgJ3GLXIw5qMj6VK-/view?usp=drive_link",
    },
    exp17: {
      name: "Experiment-17",
      link: "https://drive.google.com/file/d/1AwYQjcMDo44W21-aBvI01BG73Xd-DzhX/view?usp=drive_link",
    },
    exp18: {
      name: "Experiment-18",
      link: "https://drive.google.com/file/d/1CnOTpuHJ12oBk3jOWC-5wy__MB6Pom6V/view?usp=drive_link",
    },
  },

  output_obj: {
    output1: {
      name: "EX-1 O/P",
      link: "https://drive.google.com/file/d/13TBvcNEzWMTYulDDGKr3i2xH-DQ-b_5o/view?usp=drivesdk",
    },
    output2: {
      name: "EX-2 O/P",
      link: "https://drive.google.com/file/d/13a7lAlH1lZwdlv5BnaCtEv4ItSm6I6MR/view?usp=drivesdk",
    },

    output3: {
      name: "EX-3 O/P",
      link: "https://drive.google.com/file/d/13_xeuf9emJT_poBxxAoMpEpf-dP8rtVX/view?usp=drivesdk",
    },
    output4: {
      name: "EX-4 O/P",
      link: "https://drive.google.com/file/d/14kTSc4kRigB95RIJKKwqjz3aOiSeas2O/view?usp=drivesdk",
    },
    output5: {
      name: "EX-5 O/P",
      link: "https://drive.google.com/file/d/14kX8-Gmj0fu9VJ5GM9AnhGnXcNFLfxJt/view?usp=drivesdk",
    },
    output6: {
      name: "EX-6 O/P",
      link: "https://drive.google.com/file/d/14oFy40XRZVnKl0wSdItleXg7FK7YnfsE/view?usp=drivesdk",
    },
    output7: {
      name: "EX-7 O/P",
      link: "https://drive.google.com/file/d/16Eeza492-aZPX5hmYn5LkBCXu4tqDKmw/view?usp=drivesdk",
    },
    output8: {
      name: "EX-8 O/P",
      link: "https://drive.google.com/file/d/16Pdy8Yk79M8IRddEPcrcWsyyZq0K1efE/view?usp=drivesdk",
    },
    output9: {
      name: "EX-9 O/P",
      link: "https://drive.google.com/file/d/16WWijIIZO9FSThuA0tt_knd_D7MrULu5/view?usp=drivesdk",
    },
    output10: {
      name: "EX-10 O/P",
      link: "https://drive.google.com/file/d/16gs3ZFA8dGe8Ln4XszviSSA5fFZrrlgX/view?usp=drivesdk",
    },
    output11: {
      name: "EX-11 O/P",
      link: "https://drive.google.com/file/d/16qd1aC-DROBHeLlFXxZ8EsA4lIvd2HSY/view?usp=drivesdk",
    },
    output12: {
      name: "EX-12 O/P",
      link: "https://drive.google.com/file/d/1aasZCzvvNiyKbsoVH9piDhRtlvG8uoYX/view?usp=sharing",
    },
    output13: {
      name: "EX-13 O/P",
      link: "https://drive.google.com/file/d/16qlEWYNXc1TB9edSR0s6O7HhaBjhvPLk/view?usp=drivesdk",
    },
    output15: {
      name: "EX-15 O/P",
      link: "https://drive.google.com/file/d/1dTBrhI-vA5gic1jIF6b7vkPCRm0Lu_r0/view?usp=drive_link",
    },
    output16: {
      name: "EX-16 O/P",
      link: "https://drive.google.com/file/d/1GBPxUiooC6OKHy_gvmHUv4naub4-7Jb9/view?usp=drive_link",
    },
    output17: {
      name: "EX-17 O/P",
      link: "https://drive.google.com/file/d/1ca7YGxurAVYSc4xz5SCxGZtP3nK8h4XS/view?usp=drive_link",
    },
    output18: {
      name: "EX-18 O/P",
      link: "https://drive.google.com/file/d/1_stZgzcjSd6Tgyml1AXjcX-wBRCWGZfl/view?usp=drive_link",
    },
  },
};
const contentb = {
  assignment_Obj: {
    assignemnt1: {
      name: "Assignment-1",
      link: "https://drive.google.com/file/d/1OBoFr655X6ObMHaznCgBIZJpCBRvMts3/view?usp=drivesdk",
    },
    assignemnt2: {
      name: "Assignment-2",
      link: "https://drive.google.com/file/d/1OBpZqMRdYbt3HheoR-lHankaG-Sz_PJD/view?usp=drivesdk",
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
};
function createCard(obj, container) {
  if (!container) return;

  for (let key in obj) {
    const item = obj[key];

    const link = document.createElement("a");
    link.href = item.link;
    link.target = "_blank";

    const card = document.createElement("div");
    card.className =
      "assignment-card click-effect md:hover-effect flex cursor-pointer justify-center rounded-2xl bg-[#171D2B] py-4 px-6";
    if (
      item.name == highlight1 ||
      item.name == highlight2 ||
      item.name == highlight3 ||
      item.name == highlight4
    ) {
      card.classList.add("glow");
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
createCard(content.notes_obj, notes_container);
createCard(content.other_resources_Obj, other_resources_container);
createCard(content.manaul_obj, manual_container);
createCard(content.output_obj, output_resources_container);
createCard(
  content.manual_questionandanswer_obj,
  manual_questionandanswer_container,
);
