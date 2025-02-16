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
    Tutorial_3: {
      name: "Tutorial-3",
      link: "/build/notuploaded.html",
    },
    Tutorial_4: {
      name: "Tutorial-4",
      link: "/build/notuploaded.html",
    },
    Tutorial_5: {
      name: "Tutorial-5",
      link: "/build/notuploaded.html",
    },
    Tutorial_6: {
      name: "Tutorial-6",
      link: "/build/notuploaded.html",
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
    resrc5: {
      name: "EX-1 O/P",
      link: "https://drive.google.com/file/d/13TBvcNEzWMTYulDDGKr3i2xH-DQ-b_5o/view?usp=drivesdk",
    },
    resrc6: {
      name: "EX-2 O/P",
      link: "https://drive.google.com/file/d/13a7lAlH1lZwdlv5BnaCtEv4ItSm6I6MR/view?usp=drivesdk",
    },
    resrc7: {
      name: "EX-3 O/P",
      link: "https://drive.google.com/file/d/13_xeuf9emJT_poBxxAoMpEpf-dP8rtVX/view?usp=drivesdk",
    },
    resrc8: {
      name: "EX-3 O/P",
      link: "https://drive.google.com/file/d/13_xeuf9emJT_poBxxAoMpEpf-dP8rtVX/view?usp=drivesdk",
    },
    resrc9: {
      name: "EX-4 O/P",
      link: "https://drive.google.com/file/d/14kTSc4kRigB95RIJKKwqjz3aOiSeas2O/view?usp=drivesdk",
    },
    resrc10: {
      name: "EX-5 O/P",
      link: "https://drive.google.com/file/d/14kX8-Gmj0fu9VJ5GM9AnhGnXcNFLfxJt/view?usp=drivesdk",
    },
    resrc11: {
      name: "EX-6 O/P",
      link: "https://drive.google.com/file/d/14oFy40XRZVnKl0wSdItleXg7FK7YnfsE/view?usp=drivesdk",
    },
    resrc12: {
      name: "EX-7 O/P",
      link: "https://drive.google.com/file/d/16Eeza492-aZPX5hmYn5LkBCXu4tqDKmw/view?usp=drivesdk",
    },
    resrc13: {
      name: "EX-8 O/P",
      link: "https://drive.google.com/file/d/16Pdy8Yk79M8IRddEPcrcWsyyZq0K1efE/view?usp=drivesdk",
    },
    resrc14: {
      name: "EX-9 O/P",
      link: "https://drive.google.com/file/d/16WWijIIZO9FSThuA0tt_knd_D7MrULu5/view?usp=drivesdk",
    },
    resrc15: {
      name: "EX-10 O/P",
      link: "https://drive.google.com/file/d/16gs3ZFA8dGe8Ln4XszviSSA5fFZrrlgX/view?usp=drivesdk",
    },
    resrc16: {
      name: "EX-11 O/P",
      link: "https://drive.google.com/file/d/16qd1aC-DROBHeLlFXxZ8EsA4lIvd2HSY/view?usp=drivesdk",
    },
    resrc17: {
      name: "EX-13 O/P",
      link: "https://drive.google.com/file/d/16qlEWYNXc1TB9edSR0s6O7HhaBjhvPLk/view?usp=drivesdk",
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
      link: "https://drive.google.com/file/d/10SotUjYqryGYBMWota3qqn_rSRroXUOL/view?usp=drive_link",
    },
    manual_5: {
      name: "Manual 21-25",
      link: "https://drive.google.com/file/d/1kVRUcirWHmVLQEAm2W3m3-KS3jrTryMf/view?usp=drive_link",
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

    const nameDiv = document.createElement("div");
    nameDiv.textContent = item.name;

    card.appendChild(nameDiv);
    link.appendChild(card);
    container.appendChild(link);
  }
}

// Load Assignments
createCard(content.assignment_Obj, assignment_container);
createCard(content.notes_obj, notes_container);
createCard(content.other_resources_Obj, other_resources_container);
createCard(content.manaul_obj, manual_container);
