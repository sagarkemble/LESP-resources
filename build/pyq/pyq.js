const menuIcon = document.getElementById("menu-icon");
const closeMenu = document.getElementById("close-menu");
const mobileMenu = document.getElementById("mobile-menu");
const menuIconContainer = document.getElementById("menu-icon-container");
const closeMenuContainer = document.getElementById("close-menu-container");

const papers = [
  {
    scheme: "K",
    semester: "sem1",
    subject: "ENG",
    title: "311303 ENG 2023 Winter English Question Paper",
    link: "https://www.questionkaka.com/files/311303-Question-Paper-Winter-2023.pdf",
  },
  {
    scheme: "I",
    semester: "sem1",
    subject: "ENG",
    title: "22101 ENG 2023 Winter English Question Paper",
    link: "https://msbte.engg-info.website/sites/default/files/winter2023/22101-2023-Winter-question-paper%5BMsbte%20study%20resources%5D.pdf",
  },
  {
    scheme: "I",
    semester: "sem1",
    subject: "ENG",
    title: "22101 ENG 2023 Summer English Question Paper",
    link: "https://msbte.engg-info.website/sites/default/files/Summer2023%20bb/22101-2023-Summer-question-paper%5BMsbte%20study%20resources%5D.pdf",
  },
  {
    scheme: "I",
    semester: "sem1",
    subject: "ENG",
    title: "22101 ENG 2022 Summer English Question Paper",
    link: "https://msbte.engg-info.website/sites/default/files/Summer%2022%20Question%20Papers%20A/22101-2022-Summer-question-paper%5BMsbte-study-resources%5D.pdf",
  },
  {
    scheme: "I",
    semester: "sem1",
    subject: "ENG",
    title: "22101 ENG 2022 Summer English Model Answer Paper",
    link: "https://msbte.engg-info.website/sites/default/files/Model%20answer%20winter%202023-24%20A.tar/22101-2022-Summer-model-answer-paper%5BMsbte%20study%20resources%5D.pdf",
  },
  {
    scheme: "I",
    semester: "sem1",
    subject: "ENG",
    title: "22101 ENG 2019 Winter English Model Answer Paper",
    link: "https://msbte.engg-info.website/sites/default/files/New%20fldr3/22101-2019-Winter-model-answer-paper%5BMsbte%20study%20resources%5D.pdf",
  },
  {
    scheme: "I",
    semester: "sem1",
    subject: "ENG",
    title: "22101 ENG 2019 Summer English Question Paper",
    link: "https://msbte.engg-info.website/sites/default/files/s19qph-2-413/22101-2019-Summer-question-paper%5BMsbte-study-resources%5D.pdf",
  },
  {
    scheme: "I",
    semester: "sem1",
    subject: "ENG",
    title: "22101 ENG 2019 Summer English Model Answer Paper",
    link: "https://msbte.engg-info.website/sites/default/files/s19mo%2022201-22334/22101-2019-Summer-model-answer-paper%5BMsbte-study-resources%5D.pdf",
  },
  {
    scheme: "I",
    semester: "sem1",
    subject: "ENG",
    title: "22101 ENG 2018 Winter English Question Paper",
    link: "https://msbte.engg-info.website/sites/default/files/w18qp5/22101-2018-Winter-question-paper%5BMsbte-study-resources%5D.pdf",
  },
  {
    scheme: "I",
    semester: "sem1",
    subject: "ENG",
    title: "22101 ENG 2018 Winter English Model Answer Paper",
    link: "https://msbte.engg-info.website/sites/default/files/w18mo161718/22101-2018-Winter-model-answer-paper.pdf",
  },
  {
    scheme: "I",
    semester: "sem1",
    subject: "ENG",
    title: "22101 ENG 2018 Summer English Question Paper",
    link: "https://msbte.engg-info.website/sites/default/files/s18%20papers%202/22101-2018-Summer-question-paper.pdf",
  },
  {
    scheme: "I",
    semester: "sem1",
    subject: "ENG",
    title: "22101 ENG 2018 Summer English Model Answer Paper",
    link: "https://msbte.engg-info.website/sites/default/files/s18moupto22201/22101-2018-Summer-model-answer-paper.pdf",
  },
  {
    scheme: "I",
    semester: "sem1",
    subject: "ENG",
    title: "22101 ENG 2017 Winter English Model Answer Paper",
    link: "https://msbte.engg-info.website/sites/default/files/22101-Model-%20-Answer-Winter-%202017.pdf",
  },

  {
    scheme: "K",
    semester: "sem1",
    subject: "BMS",
    title: "311302 BMS 2024 Summer Basic Mathematics Question Paper",
    link: "https://msbte.engg-info.website/sites/default/files/311302-2024-summer-question-Paper%7Bmsbte%20study%20resources%7D/311302-2024-summer-question-Paper%7Bmsbte%20study%20resources%7D.pdf",
  },
  {
    scheme: "K",
    semester: "sem1",
    subject: "BMS",
    title: "311302 BMS 2024 Summer Basic Mathematics Model Answer Paper",
    link: "https://msbte.engg-info.website/sites/default/files/m1%20qp/311302-2024-Summer-msbte-model-answer-paper-full.pdf",
  },
  {
    scheme: "K",
    semester: "sem1",
    subject: "BMS",
    title: "311302 BMS 2023 Winter Basic Mathematics Question Paper",
    link: "https://msbte.engg-info.website/sites/default/files/311302-2023-winter-question-Paper%7Bmsbte%20study%20resources%7D.pdf_/311302-2023-winter-question-Paper%7Bmsbte%20study%20resources%7D.pdf",
  },
  {
    scheme: "K",
    semester: "sem1",
    subject: "BMS",
    title: "311302 BMS 2023 Winter Basic Mathematics Model Answer Paper",
    link: "https://msbte.engg-info.website/sites/default/files/m1%20qp/311302-2023-Winter-msbte-model-answer-paper-full.pdf",
  },
  {
    scheme: "I",
    semester: "sem1",
    subject: "BMS",
    title: "22103 BMS 2024 Summer Basic Mathematics Question Paper",
    link: "https://msbte.engg-info.website/sites/default/files/summer%2024%20I%20scheme/22103-2024-Summer-question-paper.pdf",
  },
  {
    scheme: "I",
    semester: "sem1",
    subject: "BMS",
    title: "22103 BMS 2023 Winter Basic Mathematics Question Paper",
    link: "https://msbte.engg-info.website/sites/default/files/winter2023/22103-2023-Winter-question-paper%5BMsbte%20study%20resources%5D.pdf",
  },
  {
    scheme: "I",
    semester: "sem1",
    subject: "BMS",
    title: "22103 BMS 2023 Summer Basic Mathematics Question Paper",
    link: "https://msbte.engg-info.website/sites/default/files/Summer2023%20bb/22103-2023-Summer-question-paper%5BMsbte%20study%20resources%5D.pdf",
  },
  {
    scheme: "I",
    semester: "sem1",
    subject: "BMS",
    title: "22103 BMS 2022 Summer Basic Mathematics Question Paper",
    link: "https://msbte.engg-info.website/sites/default/files/Summer%2022%20Question%20Papers%20A/22103-2022-Summer-question-paper%5BMsbte-study-resources%5D.pdf",
  },
  {
    scheme: "I",
    semester: "sem1",
    subject: "BMS",
    title: "22103 BMS 2022 Summer Basic Mathematics Model Answer Paper",
    link: "https://msbte.engg-info.website/sites/default/files/Model%20answer%20winter%202023-24%20A.tar/22103-2022-Summer-model-answer-paper%5BMsbte%20study%20resources%5D.pdf",
  },
  {
    scheme: "I",
    semester: "sem1",
    subject: "BMS",
    title: "22103 BMS 2019 Summer Basic Mathematics Question Paper",
    link: "https://msbte.engg-info.website/sites/default/files/s19qph-2-413/22103-2019-Summer-question-paper%5BMsbte-study-resources%5D.pdf",
  },
  {
    scheme: "I",
    semester: "sem1",
    subject: "BMS",
    title: "22103 BMS 2019 Winter Basic Mathematics Model Answer Paper",
    link: "https://msbte.engg-info.website/sites/default/files/New%20fldr3/22103-2019-Winter-model-answer-paper%5BMsbte%20study%20resources%5D.pdf",
  },
  {
    scheme: "I",
    semester: "sem1",
    subject: "BMS",
    title: "22103 BMS 2019 Winter Basic Mathematics Model Answer Paper",
    link: "https://msbte.engg-info.website/sites/default/files/s19qph-2-413/22103-2019-Summer-question-paper%5BMsbte-study-resources%5D.pdf",
  },
  {
    scheme: "I",
    semester: "sem1",
    subject: "BMS",
    title: "22103 BMS 2018 Winter Basic Mathematics Question Paper",
    link: "https://msbte.engg-info.website/sites/default/files/w18qp5/22103-2018-Winter-question-paper%5BMsbte-study-resources%5D.pdf",
  },
  {
    scheme: "I",
    semester: "sem1",
    subject: "BMS",
    title: "22103 BMS 2018 Winter Basic Mathematics Model Answer Paper",
    link: "https://msbte.engg-info.website/sites/default/files/w18mo161718/22103-2018-Winter-model-answer-paper.pdf",
  },
  {
    scheme: "I",
    semester: "sem1",
    subject: "BMS",
    title: "22103 BMS 2018 Summer Basic Mathematics Question Paper",
    link: "https://msbte.engg-info.website/sites/default/files/s18%20papers%202/22103-2018-Summer-question-paper.pdf",
  },
  {
    scheme: "I",
    semester: "sem1",
    subject: "BMS",
    title: "22103 BMS 2018 Summer Basic Mathematics Model Answer Paper",
    link: "https://msbte.engg-info.website/sites/default/files/s18moupto22201/22103-2018-Summer-model-answer-paper.pdf",
  },
  {
    scheme: "I",
    semester: "sem1",
    subject: "BMS",
    title: "22103 BMS 2024 Summer Basic Mathematics Question Paper",
    link: "https://msbte.engg-info.website/sites/default/files/summer%2024%20I%20scheme/22103-2024-Summer-question-paper.pdf",
  },

  {
    scheme: "K",
    semester: "sem2",
    subject: "AMS",
    title: "312301 AMS 2024 Summer Applied Mathematics Question Paper",
    link: "https://msbte.engg-info.website/sites/default/files/312301-2024-summer-question-paper%20%5BMsbtestudyresources%5D/312301-2024-summer-question-paper%20%5BMsbtestudyresources%5D.pdf",
  },
  {
    scheme: "I",
    semester: "sem2",
    subject: "AMS",
    title: "22224 AMS 2024 Summer Applied Mathematics Question Paper",
    link: "https://msbte.engg-info.website/sites/default/files/summer%2024%20I%20scheme/22224-2024-Summer-question-paper.pdf",
  },
  {
    scheme: "I",
    semester: "sem2",
    subject: "AMS",
    title: "22224 AMS 2023 Winter Applied Mathematics Question Paper",
    link: "https://msbte.engg-info.website/sites/default/files/winter2023/22224-2023-Winter-question-paper%5BMsbte%20study%20resources%5D.pdf",
  },
  {
    scheme: "I",
    semester: "sem2",
    subject: "AMS",
    title: "22224 AMS 2023 Summer Applied Mathematics Question Paper",
    link: "https://msbte.engg-info.website/sites/default/files/Summer2023%20bb/22224-2023-Summer-question-paper%5BMsbte%20study%20resources%5D.pdf",
  },
  {
    scheme: "I",
    semester: "sem2",
    subject: "AMS",
    title: "22224 AMS 2022 Summer Applied Mathematics Question Paper",
    link: "https://msbte.engg-info.website/sites/default/files/Summer%202022%20QP1%206%20lines/22224-2022-Summer-question-paper%5BMsbte-study-resources%5D.pdf",
  },
  {
    scheme: "I",
    semester: "sem2",
    subject: "AMS",
    title: "22224 AMS 2022 Summer Applied Mathematics Model Answer Paper",
    link: "https://msbte.engg-info.website/sites/default/files/Model%20answer%20winter%202023-24%20A.tar/22224-2022-Summer-model-answer-paper%5BMsbte%20study%20resources%5D.pdf",
  },
  {
    scheme: "I",
    semester: "sem2",
    subject: "AMS",
    title: "22224 AMS 2019 Summer Applied Mathematics Question Paper",
    link: "https://msbte.engg-info.website/sites/default/files/s19qph-2-413/22224-2019-Summer-question-paper%5BMsbte-study-resources%5D.pdf",
  },
  {
    scheme: "I",
    semester: "sem2",
    subject: "AMS",
    title: "22224 AMS 2019 Winter Applied Mathematics Model Answer Paper",
    link: "https://msbte.engg-info.website/sites/default/files/aaa2pr/22224-2019-Winter-question-paper%5BMsbte%20study%20resources%5D.pdf",
  },
  {
    scheme: "I",
    semester: "sem2",
    subject: "AMS",
    title: "22224 AMS 2019 Summer Applied Mathematics Question Paper",
    link: "https://msbte.engg-info.website/sites/default/files/s19qph-2-413/22224-2019-Summer-question-paper%5BMsbte-study-resources%5D.pdf",
  },
  {
    scheme: "I",
    semester: "sem2",
    subject: "AMS",
    title: "22224 AMS 2019 Winter Applied Mathematics Model Answer Paper",
    link: "https://msbte.engg-info.website/sites/default/files/New%20fldr3_0/22224-2019-Winter-model-answer-paper%5BMsbte%20study%20resources%5D.pdf",
  },
  {
    scheme: "I",
    semester: "sem2",
    subject: "AMS",
    title: "22224 AMS 2018 Winter Applied Mathematics Question Paper",
    link: "https://msbte.engg-info.website/sites/default/files/w18qp5/22224-2018-Winter-question-paper%5BMsbte-study-resources%5D.pdf",
  },
  {
    scheme: "I",
    semester: "sem2",
    subject: "AMS",
    title: "22224 AMS 2018 Winter Applied Mathematics Model Answer Paper",
    link: "https://msbte.engg-info.website/sites/default/files/w18mo192021/22224-2018-Winter-model-answer-paper.pdf",
  },
  {
    scheme: "I",
    semester: "sem2",
    subject: "AMS",
    title: "22224 AMS 2018 Summer Applied Mathematics Question Paper",
    link: "https://msbte.engg-info.website/sites/default/files/s18%20papers%202/22224-2018-Summer-question-paper.pdf",
  },
  {
    scheme: "I",
    semester: "sem2",
    subject: "AMS",
    title: "22224 AMS 2018 Summer Applied Mathematics Model Answer Paper",
    link: "https://msbte.engg-info.website/sites/default/files/s18moupto22233/22224-2018-Summer-model-answer-paper.pdf",
  },

  {
    scheme: "I",
    semester: "sem2",
    subject: "PIC",
    title: "22226 PIC 2024 Summer Programming in 'C' Question Paper",
    link: "https://msbte.engg-info.website/sites/default/files/summer%2024%20I%20scheme/22226-2024-Summer-question-paper.pdf",
  },
  {
    scheme: "I",
    semester: "sem2",
    subject: "PIC",
    title: "22226 PIC 2024 Winter Programming in 'C' Question Paper",
    link: "https://msbte.engg-info.website/sites/default/files/summer%2024%20I%20scheme/22226-2024-Summer-question-paper.pdf",
  },
  {
    scheme: "I",
    semester: "sem2",
    subject: "PIC",
    title: "22226 PIC 2023 Winter Programming in 'C' Question Paper",
    link: "https://msbte.engg-info.website/sites/default/files/winter2023/22226-2023-Winter-question-paper%5BMsbte%20study%20resources%5D.pdf",
  },
  {
    scheme: "I",
    semester: "sem2",
    subject: "PIC",
    title: "22226 PIC 2023 Summer Programming in 'C' Question Paper",
    link: "https://msbte.engg-info.website/sites/default/files/Summer2023%20aa/22226-2023-Summer-question-paper%5BMsbte%20study%20resources%5D.pdf",
  },
  {
    scheme: "I",
    semester: "sem2",
    subject: "PIC",
    title: "22226 PIC 2022 Winter Programming in 'C' Model Answer Paper",
    link: "https://msbte.engg-info.website/sites/default/files/Model%20Answer%2022/22226-2022-Winter-model-answer-paper%5BMsbte%20study%20resources%5D.pdf",
  },
  {
    scheme: "I",
    semester: "sem2",
    subject: "PIC",
    title: "22226 PIC 2022 Summer Programming in 'C' Question Paper",
    link: "https://msbte.engg-info.website/sites/default/files/Summer%202022%20QP1%206%20lines/22226-2022-Summer-question-paper%5BMsbte-study-resources%5D.pdf",
  },
  {
    scheme: "I",
    semester: "sem2",
    subject: "PIC",
    title: "22226 PIC 2022 Summer Programming in 'C' Model Answer Paper",
    link: "https://msbte.engg-info.website/sites/default/files/Model%20answer%20winter%202023-24%20A.tar/22226-2022-Summer-model-answer-paper%5BMsbte%20study%20resources%5D.pdf",
  },
  {
    scheme: "I",
    semester: "sem2",
    subject: "PIC",
    title: "22226 PIC 2019 Winter Programming in 'C' Question Paper",
    link: "https://msbte.engg-info.website/sites/default/files/aaa2pr/22226-2019-Winter-question-paper%5BMsbte%20study%20resources%5D.pdf",
  },
  {
    scheme: "I",
    semester: "sem2",
    subject: "PIC",
    title: "22226 PIC 2019 Winter Programming in 'C' Model Answer Paper",
    link: "https://msbte.engg-info.website/sites/default/files/New%20fldr3/22226-2019-Winter-model-answer-paper%5BMsbte%20study%20resources%5D.pdf",
  },
  {
    scheme: "I",
    semester: "sem2",
    subject: "PIC",
    title: "22226 PIC 2019 Summer Programming in 'C' Question Paper",
    link: "https://msbte.engg-info.website/sites/default/files/s19qph-2-413/22226-2019-Summer-question-paper%5BMsbte-study-resources%5D.pdf",
  },
  {
    scheme: "I",
    semester: "sem2",
    subject: "PIC",
    title: "22226 PIC 2019 Summer Programming in 'C' Model Answer Paper",
    link: "https://msbte.engg-info.website/sites/default/files/s19mo%2022201-22334/22226-2019-Summer-model-answer-paper%5BMsbte-study-resources%5D.pdf",
  },
  {
    scheme: "I",
    semester: "sem2",
    subject: "PIC",
    title: "22226 PIC 2018 Winter Programming in 'C' Question Paper",
    link: "https://msbte.engg-info.website/sites/default/files/w18qp5/22226-2018-Winter-question-paper%5BMsbte-study-resources%5D.pdf",
  },
  {
    scheme: "I",
    semester: "sem2",
    subject: "PIC",
    title: "22226 PIC 2018 Winter Programming in 'C' Model Answer Paper",
    link: "https://msbte.engg-info.website/sites/default/files/w18mo192021/22226-2018-Winter-model-answer-paper.pdf",
  },
  {
    scheme: "I",
    semester: "sem2",
    subject: "PIC",
    title: "22226 PIC 2018 Summer Programming in 'C' Question Paper",
    link: "https://msbte.engg-info.website/sites/default/files/s18%20papers%202/22226-2018-Summer-question-paper.pdf",
  },
  {
    scheme: "I",
    semester: "sem2",
    subject: "PIC",
    title: "22226 PIC 2018 Summer Programming in 'C' Model Answer Paper",
    link: "https://msbte.engg-info.website/sites/default/files/s18%20papers%202/22226-2018-Summer-question-paper.pdf",
  },

  {
    scheme: "I",
    semester: "sem3",
    subject: "OOP",
    title:
      "22316 OOP 2024 Summer Object Oriented Programming Using C++ Question Paper",
    link: "https://msbte.engg-info.website/sites/default/files/summer%2024%20I%20scheme/22316-2024-Summer-question-paper.pdf",
  },
  {
    scheme: "I",
    semester: "sem3",
    subject: "OOP",
    title:
      "22316 OOP 2023 Winter Object Oriented Programming Using C++ Question Paper",
    link: "https://msbte.engg-info.website/sites/default/files/winter2023/22316-2023-Winter-question-paper%5BMsbte%20study%20resources%5D.pdf",
  },
  {
    scheme: "I",
    semester: "sem3",
    subject: "OOP",
    title:
      "22316 OOP 2023 Summer Object Oriented Programming Using C++ Question Paper",
    link: "https://msbte.engg-info.website/sites/default/files/Summer2023%20aa/22316-2023-Summer-question-paper%5BMsbte%20study%20resources%5D.pdf",
  },
  {
    scheme: "I",
    semester: "sem3",
    subject: "OOP",
    title:
      "22316 OOP 2022 Summer Object Oriented Programming Using C++ Question Paper",
    link: "https://msbte.engg-info.website/sites/default/files/Summer%202022%20QP1%206%20lines/22316-2022-Summer-question-paper%5BMsbte-study-resources%5D.pdf",
  },
  {
    scheme: "I",
    semester: "sem3",
    subject: "OOP",
    title:
      "22316 OOP 2019 Winter Object Oriented Programming Using C++ Question Paper",
    link: "https://msbte.engg-info.website/sites/default/files/aaa2pr/22316-2019-Winter-question-paper%5BMsbte%20study%20resources%5D.pdf",
  },
  {
    scheme: "I",
    semester: "sem3",
    subject: "OOP",
    title:
      "22316 OOP 2019 Winter Object Oriented Programming Using C++ Model Answer Paper",
    link: "https://msbte.engg-info.website/sites/default/files/New%20fldr2/22316-2019-Winter-model-answer-paper%5BMsbte%20study%20resources%5D.pdf",
  },
  {
    scheme: "I",
    semester: "sem3",
    subject: "OOP",
    title:
      "22316 OOP 2019 Summer Object Oriented Programming Using C++ Question Paper",
    link: "https://msbte.engg-info.website/sites/default/files/s19qph-2-413/22316-2019-Summer-question-paper%5BMsbte-study-resources%5D.pdf",
  },
  {
    scheme: "I",
    semester: "sem3",
    subject: "OOP",
    title:
      "22316 OOP 2019 Summer Object Oriented Programming Using C++ Model Answer Paper",
    link: "https://msbte.engg-info.website/sites/default/files/s19mo%2022201-22334/22316-2019-Summer-model-answer-paper%5BMsbte-study-resources%5D.pdf",
  },
  {
    scheme: "I",
    semester: "sem3",
    subject: "OOP",
    title:
      "22316 OOP 2018 Winter Object Oriented Programming Using C++ Question Paper",
    link: "https://msbte.engg-info.website/sites/default/files/w18qp5/22316-2018-Winter-question-paper%5BMsbte-study-resources%5D.pdf",
  },
  {
    scheme: "I",
    semester: "sem3",
    subject: "OOP",
    title:
      "22316 OOP 2018 Winter Object Oriented Programming Using C++ Model Answer Paper",
    link: "https://msbte.engg-info.website/sites/default/files/w18mo192021/22316-2018-Winter-model-answer-paper.pdf",
  },

  {
    scheme: "I",
    semester: "sem3",
    subject: "DSU",
    title: "22317 DSU 2024 Summer Data Structure Using C Question Paper",
    link: "https://msbte.engg-info.website/sites/default/files/summer%2024%20I%20scheme/22317-2024-Summer-question-paper.pdf",
  },
  {
    scheme: "I",
    semester: "sem3",
    subject: "DSU",
    title: "22317 DSU 2023 Winter Data Structure Using C Question Paper",
    link: "https://msbte.engg-info.website/sites/default/files/winter2023/22317-2023-Winter-question-paper%5BMsbte%20study%20resources%5D.pdf",
  },
  {
    scheme: "I",
    semester: "sem3",
    subject: "DSU",
    title: "22317 DSU 2023 Summer Data Structure Using C Question Paper",
    link: "https://msbte.engg-info.website/sites/default/files/Summer2023%20bb/22317-2023-Summer-question-paper%5BMsbte%20study%20resources%5D.pdf",
  },
  {
    scheme: "I",
    semester: "sem3",
    subject: "DSU",
    title: "22317 DSU 2022 Summer Data Structure Using C Question Paper",
    link: "https://msbte.engg-info.website/sites/default/files/Summer%202022%20QP1%206%20lines/22317-2022-Summer-question-paper%5BMsbte-study-resources%5D.pdf",
  },
  {
    scheme: "I",
    semester: "sem3",
    subject: "DSU",
    title: "22317 DSU 2019 Winter Data Structure Using C Question Paper",
    link: "https://msbte.engg-info.website/sites/default/files/aaa2pr/22317-2019-Winter-question-paper%5BMsbte%20study%20resources%5D.pdf",
  },
  {
    scheme: "I",
    semester: "sem3",
    subject: "DSU",
    title: "22317 DSU 2019 Winter Data Structure Using C Model Answer Paper",
    link: "https://msbte.engg-info.website/sites/default/files/New%20fldr2/22317-2019-Winter-model-answer-paper%5BMsbte%20study%20resources%5D.pdf",
  },
  {
    scheme: "I",
    semester: "sem3",
    subject: "DSU",
    title: "22317 DSU 2019 Summer Data Structure Using C Question Paper",
    link: "https://msbte.engg-info.website/sites/default/files/s19qph-2-413/22317-2019-Summer-question-paper%5BMsbte-study-resources%5D.pdf",
  },
  {
    scheme: "I",
    semester: "sem3",
    subject: "DSU",
    title: "22317 DSU 2019 Summer Data Structure Using C Model Answer Paper",
    link: "https://msbte.engg-info.website/sites/default/files/s19mo%2022201-22334/22317-2019-Summer-model-answer-paper%5BMsbte-study-resources%5D.pdf",
  },
  {
    scheme: "I",
    semester: "sem3",
    subject: "DSU",
    title: "22317 DSU 2018 Winter Data Structure Using C Question Paper",
    link: "https://msbte.engg-info.website/sites/default/files/w18qp5/22317-2018-Winter-question-paper%5BMsbte-study-resources%5D.pdf",
  },
  {
    scheme: "I",
    semester: "sem3",
    subject: "DSU",
    title: "22317 DSU 2018 Winter Data Structure Using C Model Answer Paper",
    link: "https://msbte.engg-info.website/sites/default/files/w18mo192021/22317-2018-Winter-model-answer-paper.pdf",
  },

  {
    scheme: "I",
    semester: "sem3",
    subject: "DMS",
    title: "22319 DMS 2023 Winter Database Management System Question Paper",
    link: "https://msbte.engg-info.website/sites/default/files/winter2023/22319-2023-Winter-question-paper%5BMsbte%20study%20resources%5D.pdf",
  },
  {
    scheme: "I",
    semester: "sem3",
    subject: "DMS",
    title: "22319 DMS 2023 Summer Database Management System Question Paper",
    link: "https://msbte.engg-info.website/sites/default/files/Summer2023%20aa/22319-2023-Summer-question-paper%5BMsbte%20study%20resources%5D.pdf",
  },
  {
    scheme: "I",
    semester: "sem3",
    subject: "DMS",
    title:
      "22319 DMS 2022 Winter Database Management System Model Answer Paper",
    link: "https://msbte.engg-info.website/sites/default/files/Model%20Answer%2022/22319-2022-Winter-model-answer-paper%5BMsbte%20study%20resources%5D.pdf",
  },
  {
    scheme: "I",
    semester: "sem3",
    subject: "DMS",
    title: "22319 DMS 2022 Summer Database Management System Question Paper",
    link: "https://msbte.engg-info.website/sites/default/files/Summer%202022%20QP1%206%20lines/22319-2022-Summer-question-paper%5BMsbte-study-resources%5D.pdf",
  },
  {
    scheme: "I",
    semester: "sem3",
    subject: "DMS",
    title: "22319 DMS 2019 Winter Database Management System Question Paper",
    link: "https://msbte.engg-info.website/sites/default/files/aaa2pr/22319-2019-Winter-question-paper%5BMsbte%20study%20resources%5D.pdf",
  },
  {
    scheme: "I",
    semester: "sem3",
    subject: "DMS",
    title:
      "22319 DMS 2019 Winter Database Management System Model Answer Paper",
    link: "https://msbte.engg-info.website/sites/default/files/New%20fldr2/22319-2019-Winter-model-answer-paper%5BMsbte%20study%20resources%5D.pdf",
  },
  {
    scheme: "I",
    semester: "sem3",
    subject: "DMS",
    title: "22319 DMS 2019 Summer Database Management System Question Paper",
    link: "https://msbte.engg-info.website/sites/default/files/s19qph-2-413/22319-2019-Summer-question-paper%5BMsbte-study-resources%5D.pdf",
  },
  {
    scheme: "I",
    semester: "sem3",
    subject: "DMS",
    title:
      "22319 DMS 2019 Summer Database Management System Model Answer Paper",
    link: "https://msbte.engg-info.website/sites/default/files/s19mo%2022201-22334/22319-2019-Summer-model-answer-paper%5BMsbte-study-resources%5D.pdf",
  },
  {
    scheme: "I",
    semester: "sem3",
    subject: "DMS",
    title: "22319 DMS 2018 Winter Database Management System Question Paper",
    link: "https://msbte.engg-info.website/sites/default/files/w18qp5/22319-2018-Winter-question-paper%5BMsbte-study-resources%5D.pdf",
  },
  {
    scheme: "I",
    semester: "sem3",
    subject: "DMS",
    title:
      "22319 DMS 2018 Winter Database Management System Model Answer Paper",
    link: "https://msbte.engg-info.website/sites/default/files/w18mo192021/22319-2018-Winter-model-answer-paper.pdf",
  },

  {
    scheme: "I",
    semester: "sem3",
    subject: "DTE",
    title: "22320 DTE 2024 Summer Digital Techniques Question Paper",
    link: "https://msbte.engg-info.website/sites/default/files/summer%2024%20I%20scheme/22320-2024-Summer-question-paper.pdf",
  },
  {
    scheme: "I",
    semester: "sem3",
    subject: "DTE",
    title: "22320 DTE 2023 Winter Digital Techniques Question Paper",
    link: "https://msbte.engg-info.website/sites/default/files/winter2023/22320-2023-Winter-question-paper%5BMsbte%20study%20resources%5D.pdf",
  },
  {
    scheme: "I",
    semester: "sem3",
    subject: "DTE",
    title: "22320 DTE 2023 Summer Digital Techniques Question Paper",
    link: "https://msbte.engg-info.website/sites/default/files/Summer2023%20aa/22320-2023-Summer-question-paper%5BMsbte%20study%20resources%5D.pdf",
  },
  {
    scheme: "I",
    semester: "sem3",
    subject: "DTE",
    title: "22320 DTE 2022 Summer Digital Techniques Question Paper",
    link: "https://msbte.engg-info.website/sites/default/files/Summer%202022%20QP%202/22320-2022-Summer-question-paper%5BMsbte-study-resources%5D.pdf",
  },
  {
    scheme: "I",
    semester: "sem3",
    subject: "DTE",
    title: "22320 DTE 2019 Winter Digital Techniques Question Paper",
    link: "https://msbte.engg-info.website/sites/default/files/aaa2pr/22320-2019-Winter-question-paper%5BMsbte%20study%20resources%5D.pdf",
  },
  {
    scheme: "I",
    semester: "sem3",
    subject: "DTE",
    title: "22320 DTE 2019 Winter Digital Techniques Model Answer Paper",
    link: "https://msbte.engg-info.website/sites/default/files/New%20fldr2/22320-2019-Winter-model-answer-paper%5BMsbte%20study%20resources%5D.pdf",
  },
  {
    scheme: "I",
    semester: "sem3",
    subject: "DTE",
    title: "22320 DTE 2019 Summer Digital Techniques Question Paper",
    link: "https://msbte.engg-info.website/sites/default/files/s19qph-2-413/22320-2019-Summer-question-paper%5BMsbte-study-resources%5D.pdf",
  },
  {
    scheme: "I",
    semester: "sem3",
    subject: "DTE",
    title: "22320 DTE 2019 Summer Digital Techniques Model Answer Paper",
    link: "https://msbte.engg-info.website/sites/default/files/s19mo%2022201-22334/22320-2019-Summer-model-answer-paper%5BMsbte-study-resources%5D.pdf",
  },
  {
    scheme: "I",
    semester: "sem3",
    subject: "DTE",
    title: "22320 DTE 2018 Winter Digital Techniques Question Paper",
    link: "https://msbte.engg-info.website/sites/default/files/w18qp5/22320-2018-Winter-question-paper%5BMsbte-study-resources%5D.pdf",
  },
  {
    scheme: "I",
    semester: "sem3",
    subject: "DTE",
    title: "22320 DTE 2018 Winter Digital Techniques Model Answer Paper",
    link: "https://msbte.engg-info.website/sites/default/files/w18mo222324/22320-2018-Winter-model-answer-paper.pdf",
  },

  {
    scheme: "I",
    semester: "sem4",
    subject: "MIC",
    title: "22415 MIC 2023 Winter Microprocessor Programming Question Paper",
    link: "https://msbte.engg-info.website/sites/default/files/winter2023/22415-2023-Winter-question-paper%5BMsbte%20study%20resources%5D.pdf",
  },
  {
    scheme: "I",
    semester: "sem4",
    subject: "MIC",
    title: "22415 MIC 2023 Summer Microprocessor Programming Question Paper",
    link: "https://msbte.engg-info.website/sites/default/files/Summer2023%20bb/22415-2023-Summer-question-paper%5BMsbte%20study%20resources%5D.pdf",
  },
  {
    scheme: "I",
    semester: "sem4",
    subject: "MIC",
    title: "22415 MIC 2022 Summer Microprocessor Programming Question Paper",
    link: "https://msbte.engg-info.website/sites/default/files/Summer%202022%20QP%202/22415-2022-Summer-question-paper%5BMsbte-study-resources%5D.pdf",
  },
  {
    scheme: "I",
    semester: "sem4",
    subject: "MIC",
    title:
      "22415 MIC 2022 Summer Microprocessor Programming Model Answer Paper",
    link: "https://msbte.engg-info.website/sites/default/files/Model%20answer%20winter%202023-24%20A.tar/22415-2022-Summer-model-answer-paper%5BMsbte%20study%20resources%5D.pdf",
  },
  {
    scheme: "I",
    semester: "sem4",
    subject: "MIC",
    title: "22415 MIC 2019 Winter Microprocessor Programming Question Paper",
    link: "https://msbte.engg-info.website/sites/default/files/aaa2pr/22415-2019-Winter-question-paper%5BMsbte%20study%20resources%5D.pdf",
  },
  {
    scheme: "I",
    semester: "sem4",
    subject: "MIC",
    title:
      "22415 MIC 2019 Winter Microprocessor Programming Model Answer Paper",
    link: "https://msbte.engg-info.website/sites/default/files/New%20fldr2/22415-2019-Winter-model-answer-paper%5BMsbte%20study%20resources%5D.pdf",
  },
  {
    scheme: "I",
    semester: "sem4",
    subject: "MIC",
    title:
      "22415 MIC 2019 Summer Microprocessor Programming Model Answer Paper",
    link: "https://msbte.engg-info.website/sites/default/files/s19mo-22337-33446/22415-2019-Summer-model-answer-paper%5BMsbte-study-resources%5D.pdf",
  },

  {
    scheme: "I",
    semester: "sem4",
    subject: "JPR",
    title: "22412 JPR 2024 Summer Java Programming Question Paper",
    link: "https://msbte.engg-info.website/sites/default/files/summer%2024%20I%20scheme/22412-2024-Summer-question-paper.pdf",
  },
  {
    scheme: "I",
    semester: "sem4",
    subject: "JPR",
    title: "22412 JPR 2023 Winter Java Programming Question Paper",
    link: "https://msbte.engg-info.website/sites/default/files/winter2023/22412-2023-Winter-question-paper%5BMsbte%20study%20resources%5D.pdf",
  },
  {
    scheme: "I",
    semester: "sem4",
    subject: "JPR",
    title: "22412 JPR 2023 Summer Java Programming Question Paper",
    link: "https://msbte.engg-info.website/sites/default/files/Summer2023%20aa/22412-2023-Summer-question-paper%5BMsbte%20study%20resources%5D.pdf",
  },
  {
    scheme: "I",
    semester: "sem4",
    subject: "JPR",
    title: "22412 JPR 2022 Winter Java Programming Model Answer Paper",
    link: "https://msbte.engg-info.website/sites/default/files/Model%20Answer%2022/22412-2022-Winter-model-answer-paper%5BMsbte%20study%20resources%5D.pdf",
  },
  {
    scheme: "I",
    semester: "sem4",
    subject: "JPR",
    title: "22412 JPR 2022 Summer Java Programming Question Paper",
    link: "https://msbte.engg-info.website/sites/default/files/Summer%202022%20QP%202/22412-2022-Summer-question-paper%5BMsbte-study-resources%5D.pdf",
  },
  {
    scheme: "I",
    semester: "sem4",
    subject: "JPR",
    title: "22412 JPR 2022 Summer Java Programming Model Answer Paper",
    link: "https://msbte.engg-info.website/sites/default/files/Model%20answer%20winter%202023-24%20A.tar/22412-2022-Summer-model-answer-paper%5BMsbte%20study%20resources%5D.pdf",
  },
  {
    scheme: "I",
    semester: "sem4",
    subject: "JPR",
    title: "22412 JPR 2019 Winter Java Programming Question Paper",
    link: "https://msbte.engg-info.website/sites/default/files/aaa2pr/22412-2019-Winter-question-paper%5BMsbte%20study%20resources%5D.pdf",
  },
  {
    scheme: "I",
    semester: "sem4",
    subject: "JPR",
    title: "22412 JPR 2019 Winter Java Programming Model Answer Paper",
    link: "https://msbte.engg-info.website/sites/default/files/New%20fldr2/22412-2019-Winter-model-answer-paper%5BMsbte%20study%20resources%5D.pdf",
  },
  {
    scheme: "I",
    semester: "sem4",
    subject: "JPR",
    title: "22412 JPR 2019 Summer Java Programming Question Paper",
    link: "https://msbte.engg-info.website/sites/default/files/s19qph-2-413/22412-2019-Summer-question-paper%5BMsbte-study-resources%5D.pdf",
  },
  {
    scheme: "I",
    semester: "sem4",
    subject: "JPR",
    title: "22412 JPR 2019 Summer Java Programming Model Answer Paper",
    link: "https://msbte.engg-info.website/sites/default/files/s19mo-22337-33446/22412-2019-Summer-model-answer-paper%5BMsbte-study-resources%5D.pdf",
  },

  {
    scheme: "I",
    semester: "sem4",
    subject: "DCN",
    title:
      "22414 DCN 2023 Winter Data Communication and Computer Network Question Paper",
    link: "https://msbte.engg-info.website/sites/default/files/winter2023/22414-2023-Winter-question-paper%5BMsbte%20study%20resources%5D.pdf",
  },
  {
    scheme: "I",
    semester: "sem4",
    subject: "DCN",
    title:
      "22414 DCN 2023 Summer Data Communication and Computer Network Question Paper",
    link: "https://msbte.engg-info.website/sites/default/files/Summer2023%20aa/22414-2023-Summer-question-paper%5BMsbte%20study%20resources%5D.pdf",
  },
  {
    scheme: "I",
    semester: "sem4",
    subject: "DCN",
    title:
      "22414 DCN 2022 Summer Data Communication and Computer Network Question Paper",
    link: "https://msbte.engg-info.website/sites/default/files/Summer%202022%20QP%202/22414-2022-Summer-question-paper%5BMsbte-study-resources%5D.pdf",
  },
  {
    scheme: "I",
    semester: "sem4",
    subject: "DCN",
    title:
      "22414 DCN 2022 Summer Data Communication and Computer Network Model Answer Paper",
    link: "https://msbte.engg-info.website/sites/default/files/Model%20answer%20winter%202023-24%20A.tar/22414-2022-Summer-model-answer-paper%5BMsbte%20study%20resources%5D.pdf",
  },
  {
    scheme: "I",
    semester: "sem4",
    subject: "DCN",
    title:
      "22414 DCN 2019 Winter Data Communication and Computer Network Question Paper",
    link: "https://msbte.engg-info.website/sites/default/files/aaa2pr/22414-2019-Winter-question-paper%5BMsbte%20study%20resources%5D.pdf",
  },
  {
    scheme: "I",
    semester: "sem4",
    subject: "DCN",
    title:
      "22414 DCN 2019 Winter Data Communication and Computer Network Model Answer Paper",
    link: "https://msbte.engg-info.website/sites/default/files/New%20fldr2/22414-2019-Winter-model-answer-paper%5BMsbte%20study%20resources%5D.pdf",
  },
  {
    scheme: "I",
    semester: "sem4",
    subject: "DCN",
    title:
      "22414 DCN 2019 Summer Data Communication and Computer Network Model Answer Paper",
    link: "https://msbte.engg-info.website/sites/default/files/s19mo-22337-33446/22414-2019-Summer-model-answer-paper%5BMsbte-study-resources%5D.pdf",
  },

  {
    scheme: "I",
    semester: "sem6",
    subject: "STE",
    title: "22518 STE 2024 Summer Software Testing Question Paper",
    link: "https://msbte.engg-info.website/sites/default/files/summer%2024%20I%20scheme/22518-2024-Summer-question-paper.pdf",
  },
  {
    scheme: "I",
    semester: "sem6",
    subject: "STE",
    title: "22518 STE 2023 Winter Software Testing Question Paper",
    link: "https://msbte.engg-info.website/sites/default/files/winter2023/22518-2023-Winter-question-paper%5BMsbte%20study%20resources%5D.pdf",
  },
  {
    scheme: "I",
    semester: "sem6",
    subject: "STE",
    title: "22518 STE 2023 Summer Software Testing Question Paper",
    link: "https://msbte.engg-info.website/sites/default/files/Summer2023%20aa/22518-2023-Summer-question-paper%5BMsbte%20study%20resources%5D.pdf",
  },
  {
    scheme: "I",
    semester: "sem6",
    subject: "STE",
    title: "22518 STE 2022 Summer Software Testing Question Paper",
    link: "https://msbte.engg-info.website/sites/default/files/Summer%202022%20QP3/22518-2022-Summer-question-paper%5BMsbte-study-resources%5D.pdf",
  },
  {
    scheme: "I",
    semester: "sem6",
    subject: "STE",
    title: "22518 STE 2019 Winter Software Testing Question Paper",
    link: "https://msbte.engg-info.website/sites/default/files/aaa3/22518-2019-Winter-question-paper%5BMsbte%20study%20resources%5D.pdf",
  },
  {
    scheme: "I",
    semester: "sem6",
    subject: "STE",
    title: "22518 STE 2019 Winter Software Testing Model Answer Paper",
    link: "https://msbte.engg-info.website/sites/default/files/New%20fldr1/22518-2019-Winter-model-answer-paper%5BMsbte%20study%20resources%5D.pdf",
  },

  {
    scheme: "I",
    semester: "sem5",
    subject: "ACN",
    title:
      "22519 ACN 2024 Summer Client Side Scripting Language Question Paper",
    link: "https://msbte.engg-info.website/sites/default/files/summer%2024%20I%20scheme/22519-2024-Summer-question-paper.pdf",
  },
  {
    scheme: "I",
    semester: "sem5",
    subject: "ACN",
    title:
      "22519 ACN 2023 Winter Client Side Scripting Language Question Paper",
    link: "https://msbte.engg-info.website/sites/default/files/winter2023/22519-2023-Winter-question-paper%5BMsbte%20study%20resources%5D.pdf",
  },
  {
    scheme: "I",
    semester: "sem5",
    subject: "ACN",
    title:
      "22519 ACN 2023 Summer Client Side Scripting Language Question Paper",
    link: "https://msbte.engg-info.website/sites/default/files/Summer2023%20bb/22519-2023-Summer-question-paper%5BMsbte%20study%20resources%5D.pdf",
  },
  {
    scheme: "I",
    semester: "sem5",
    subject: "ACN",
    title:
      "22519 ACN 2022 Summer Client Side Scripting Language Question Paper",
    link: "https://msbte.engg-info.website/sites/default/files/Summer%202022%20QP3/22519-2022-Summer-question-paper%5BMsbte-study-resources%5D.pdf",
  },
  {
    scheme: "I",
    semester: "sem5",
    subject: "ACN",
    title:
      "22519 ACN 2019 Winter Client Side Scripting Language Question Paper",
    link: "https://msbte.engg-info.website/sites/default/files/aaa3/22519-2019-Winter-question-paper%5BMsbte%20study%20resources%5D.pdf",
  },
  {
    scheme: "I",
    semester: "sem5",
    subject: "ACN",
    title:
      "22519 ACN 2019 Winter Client Side Scripting Language Model Answer Paper",
    link: "https://msbte.engg-info.website/sites/default/files/New%20fldr1/22519-2019-Winter-model-answer-paper%5BMsbte%20study%20resources%5D.pdf",
  },

  {
    scheme: "I",
    semester: "sem5",
    subject: "CSS",
    title: "22520 CSS 2024 Summer Advanced Computer Network Question Paper",
    link: "https://msbte.engg-info.website/sites/default/files/summer%2024%20I%20scheme/22520-2024-Summer-question-paper.pdf",
  },
  {
    scheme: "I",
    semester: "sem5",
    subject: "CSS",
    title: "22520 CSS 2023 Winter Advanced Computer Network Question Paper",
    link: "https://msbte.engg-info.website/sites/default/files/winter2023/22520-2023-Winter-question-paper%5BMsbte%20study%20resources%5D.pdf",
  },
  {
    scheme: "I",
    semester: "sem5",
    subject: "CSS",
    title: "22520 CSS 2023 Summer Advanced Computer Network Question Paper",
    link: "https://msbte.engg-info.website/sites/default/files/Summer2023%20bb/22520-2023-Summer-question-paper%5BMsbte%20study%20resources%5D.pdf",
  },
  {
    scheme: "I",
    semester: "sem5",
    subject: "CSS",
    title: "22520 CSS 2022 Summer Advanced Computer Network Question Paper",
    link: "https://msbte.engg-info.website/sites/default/files/Summer%202022%20QP3/22520-2022-Summer-question-paper%5BMsbte-study-resources%5D.pdf",
  },
  {
    scheme: "I",
    semester: "sem5",
    subject: "CSS",
    title: "22520 CSS 2019 Winter Advanced Computer Network Question Paper",
    link: "https://msbte.engg-info.website/sites/default/files/aaa3/22520-2019-Winter-question-paper%5BMsbte%20study%20resources%5D.pdf",
  },
  {
    scheme: "I",
    semester: "sem5",
    subject: "CSS",
    title: "22520 CSS 2019 Winter Advanced Computer Network Model Answer Paper",
    link: "https://msbte.engg-info.website/sites/default/files/New%20fldr1/22520-2019-Winter-model-answer-paper%5BMsbte%20study%20resources%5D.pdf",
  },

  {
    scheme: "I",
    semester: "sem6",
    subject: "PWP",
    title: "22616 PWP 2024 Summer Programming with Python Question Paper",
    link: "https://msbte.engg-info.website/sites/default/files/summer%2024%20I%20scheme/22616-2024-Summer-question-paper.pdf",
  },
  {
    scheme: "I",
    semester: "sem6",
    subject: "PWP",
    title: "22616 PWP 2023 Winter Programming with Python Question Paper",
    link: "https://msbte.engg-info.website/sites/default/files/winter2023/22616-2023-Winter-question-paper%5BMsbte%20study%20resources%5D.pdf",
  },
  {
    scheme: "I",
    semester: "sem6",
    subject: "PWP",
    title: "22616 PWP 2023 Summer Programming with Python Question Paper",
    link: "https://msbte.engg-info.website/sites/default/files/Summer2023%20aa/22616-2023-Summer-question-paper%5BMsbte%20study%20resources%5D.pdf",
  },
  {
    scheme: "I",
    semester: "sem6",
    subject: "PWP",
    title: "22616 PWP 2022 Winter Programming with Python Model Answer Paper",
    link: "https://msbte.engg-info.website/sites/default/files/Model%20Answer%2022/22616-2022-Winter-model-answer-paper%5BMsbte%20study%20resources%5D.pdf",
  },
  {
    scheme: "I",
    semester: "sem6",
    subject: "PWP",
    title: "22616 PWP 2022 Summer Programming with Python Question Paper",
    link: "https://msbte.engg-info.website/sites/default/files/Summer%202022%20QP%204/22616-2022-Summer-question-paper%5BMsbte-study-resources%5D.pdf",
  },
  {
    scheme: "I",
    semester: "sem6",
    subject: "PWP",
    title: "22616 PWP 2022 Summer Programming with Python Model Answer Paper",
    link: "https://msbte.engg-info.website/sites/default/files/abb.tar/22616-Model-%20-Answer-Summer-%20202222616.pdf",
  },

  {
    scheme: "I",
    semester: "sem6",
    subject: "MAD",
    title:
      "22617 MAD 2024 Summer Mobile Application Development Question Paper",
    link: "https://msbte.engg-info.website/sites/default/files/summer%2024%20I%20scheme/22617-2024-Summer-question-paper.pdf",
  },
  {
    scheme: "I",
    semester: "sem6",
    subject: "MAD",
    title:
      "22617 MAD 2023 Winter Mobile Application Development Question Paper",
    link: "https://msbte.engg-info.website/sites/default/files/winter2023/22617-2023-Winter-question-paper%5BMsbte%20study%20resources%5D.pdf",
  },
  {
    scheme: "I",
    semester: "sem6",
    subject: "MAD",
    title:
      "22617 MAD 2023 Summer Mobile Application Development Question Paper",
    link: "https://msbte.engg-info.website/sites/default/files/Summer2023%20aa/22617-2023-Summer-question-paper%5BMsbte%20study%20resources%5D.pdf",
  },
  {
    scheme: "I",
    semester: "sem6",
    subject: "MAD",
    title:
      "22617 MAD 2022 Summer Mobile Application Development Question Paper",
    link: "https://msbte.engg-info.website/sites/default/files/Summer%202022%20QP%204/22617-2022-Summer-question-paper%5BMsbte-study-resources%5D.pdf",
  },
  {
    scheme: "I",
    semester: "sem6",
    subject: "MAD",
    title:
      "22617 MAD 2022 Summer Mobile Application Development Model Answer Paper",
    link: "https://msbte.engg-info.website/sites/default/files/abb.tar/22617-2022-Summer-model-answer-paper%5BMsbte%20study%20resources%5D.pdf",
  },

  {
    scheme: "I",
    semester: "sem6",
    subject: "WBP",
    title:
      "22619 WBP 2024 Summer Web Based Application Development using PHP Question Paper",
    link: "https://msbte.engg-info.website/sites/default/files/summer%2024%20I%20scheme/22619-2024-Summer-question-paper.pdf",
  },
  {
    scheme: "I",
    semester: "sem6",
    subject: "WBP",
    title:
      "22619 WBP 2023 Winter Web Based Application Development using PHP Question Paper",
    link: "https://msbte.engg-info.website/sites/default/files/winter2023/22619-2023-Winter-question-paper%5BMsbte%20study%20resources%5D.pdf",
  },
  {
    scheme: "I",
    semester: "sem6",
    subject: "WBP",
    title:
      "22619 WBP 2023 Summer Web Based Application Development using PHP Question Paper",
    link: "https://msbte.engg-info.website/sites/default/files/Summer2023%20bb/22619-2023-Summer-question-paper%5BMsbte%20study%20resources%5D.pdf",
  },
  {
    scheme: "I",
    semester: "sem6",
    subject: "WBP",
    title:
      "22619 WBP 2022 Summer Web Based Application Development using PHP Question Paper",
    link: "https://msbte.engg-info.website/sites/default/files/Summer%202022%20QP%204/22619-2022-Summer-question-paper%5BMsbte-study-resources%5D.pdf",
  },

  {
    scheme: "I",
    semester: "sem6",
    subject: "NIS",
    title:
      "22620 NIS 2024 Summer Network and information security Question Paper",
    link: "https://msbte.engg-info.website/sites/default/files/summer%2024%20I%20scheme/22620-2024-Summer-question-paper.pdf",
  },
  {
    scheme: "I",
    semester: "sem6",
    subject: "NIS",
    title:
      "22620 NIS 2023 Winter Network and information security Question Paper",
    link: "https://msbte.engg-info.website/sites/default/files/winter2023/22620-2023-Winter-question-paper%5BMsbte%20study%20resources%5D.pdf",
  },
  {
    scheme: "I",
    semester: "sem6",
    subject: "NIS",
    title:
      "22620 NIS 2023 Summer Network and information security Question Paper",
    link: "https://msbte.engg-info.website/sites/default/files/Summer2023%20bb/22620-2023-Summer-question-paper%5BMsbte%20study%20resources%5D.pdf",
  },
  {
    scheme: "I",
    semester: "sem6",
    subject: "NIS",
    title:
      "22620 NIS 2022 Summer Network and information security Question Paper",
    link: "https://msbte.engg-info.website/sites/default/files/Summer%202022%20QP%204/22620-2022-Summer-question-paper%5BMsbte-study-resources%5D.pdf",
  },

  {
    scheme: "I",
    semester: "sem6",
    subject: "DWM",
    title:
      "22621 DWM 2024 Summer Data Warehousing with Mining Techniques Question Paper",
    link: "https://msbte.engg-info.website/sites/default/files/summer%2024%20I%20scheme/22621-2024-Summer-question-paper.pdf",
  },
  {
    scheme: "I",
    semester: "sem6",
    subject: "DWM",
    title:
      "22621 DWM 2023 Winter Data Warehousing with Mining Techniques Question Paper",
    link: "https://msbte.engg-info.website/sites/default/files/winter2023/22621-2023-Winter-question-paper%5BMsbte%20study%20resources%5D.pdf",
  },
  {
    scheme: "I",
    semester: "sem6",
    subject: "DWM",
    title:
      "22621 DWM 2023 Summer Data Warehousing with Mining Techniques Question Paper",
    link: "https://msbte.engg-info.website/sites/default/files/Summer2023%20bb/22621-2023-Summer-question-paper%5BMsbte%20study%20resources%5D.pdf",
  },
  {
    scheme: "I",
    semester: "sem6",
    subject: "DWM",
    title:
      "22621 DWM 2022 Winter Data Warehousing with Mining Techniques Question Paper",
    link: "https://www.questionkaka.com/files/22621-Question-Paper-Winter-2022.pdf",
  },
  {
    scheme: "I",
    semester: "sem6",
    subject: "DWM",
    title:
      "22621 DWM 2022 Summer Data Warehousing with Mining Techniques Question Paper",
    link: "https://msbte.engg-info.website/sites/default/files/Summer%202022%20QP%204/22621-2022-Summer-question-paper%5BMsbte-study-resources%5D.pdf",
  },
];

const subjectFullForms = {
  ENG: { fullName: "English" },
  BSC: { fullName: "Basic Science" },
  BMS: { fullName: "Basic Mathematics" },
  EEC: { fullName: "Elements of Electrical Engineering" },
  AMS: { fullName: "Applied Mathematics" },
  BEC: { fullName: "Basic Electronics" },
  PIC: { fullName: "Programming in 'C'" },
  OOP: { fullName: "Object Oriented Programming using C++" },
  DSU: { fullName: "Data Structure using C" },
  CGR: { fullName: "Computer Graphics" },
  DMS: { fullName: "Database Management System" },
  DTE: { fullName: "Digital Techniques" },
  JPR: { fullName: "Java Programming" },
  SEN: { fullName: "Software Engineering" },
  DCN: { fullName: "Data Communication and Computer Network" },
  MIC: { fullName: "Microprocessors" },
  ENV: { fullName: "Environmental Studies" },
  OSY: { fullName: "Operating Systems" },
  AJP: { fullName: "Advanced Java Programming" },
  STE: { fullName: "Software Testing" },
  CSS: { fullName: "Client Side Scripting Language" },
  ACN: { fullName: "Advanced Computer Network" },
  ADM: { fullName: "Advanced Database Management Systems" },
  MGT: { fullName: "Management" },
  PWP: { fullName: "Programming with Python" },
  MAD: { fullName: "Mobile Application Development" },
  ETI: { fullName: "Emerging Trends in Computer and Information Technology" },
  WBP: { fullName: "Web Based Application Development using PHP" },
  NIS: { fullName: "Network and Information Security" },
  DWM: { fullName: "Data Warehousing with Mining Techniques" },
};

function displayPapers(filteredPapers) {
  const papersContainer = document.getElementById("papersContainer");
  papersContainer.innerHTML = "";

  const groupedBySubject = {};

  filteredPapers.forEach((paper) => {
    if (!groupedBySubject[paper.subject]) {
      groupedBySubject[paper.subject] = {
        schemeK: [],
        schemeI: [],
        schemeG: [],
      };
    }
    groupedBySubject[paper.subject][`scheme${paper.scheme}`].push(paper);
  });

  for (const subject in groupedBySubject) {
    const subjectSection = document.createElement("div");
    subjectSection.classList.add("mb-4", "bg-[#171D2B]", "p-4", "rounded-lg");

    const subjectTitleContainer = document.createElement("div");
    subjectTitleContainer.classList.add(
      "flex",
      "justify-between",
      "items-center",
    );

    const subjectTitle = document.createElement("h3");
    subjectTitle.classList.add("text-xl", "font-bold", "text-white");
    subjectTitle.textContent = `${subject} - ${subjectFullForms[subject].fullName || subject}`;

    subjectTitleContainer.appendChild(subjectTitle);
    subjectSection.appendChild(subjectTitleContainer);

    ["schemeK", "schemeI", "schemeG"].forEach((scheme) => {
      if (groupedBySubject[subject][scheme].length > 0) {
        const schemeTitle = document.createElement("h4");
        schemeTitle.classList.add(
          "text-lg",
          "font-semibold",
          "text-white",
          "mb-2",
        );
        schemeTitle.textContent = `${scheme === "schemeK" ? "Scheme K" : scheme === "schemeI" ? "Scheme I" : "Scheme G"}`;
        subjectSection.appendChild(schemeTitle);

        const paperList = document.createElement("ul");
        groupedBySubject[subject][scheme].forEach((paper) => {
          const paperItem = document.createElement("li");
          paperItem.classList.add(
            "p-2",
            "text-sm",
            "bg-[#171D2B]",
            "rounded-lg",
            "shadow-sm",
            "mb-0",
          );
          paperItem.innerHTML = ` 
                    <a href="${paper.link}" class="text-white hover:underline text-lg" target="_blank">
                        <i class="fas fa-file-pdf text-2xl mr-2 text-red-600 hover:text-black transition-colors duration-300"></i>
 ${paper.title}
                    </a>
                    `;
          paperItem.classList.add(
            "p-0",
            "text-sm",
            "bg-[#171D2B]",
            "rounded-lg",
            "shadow-sm",
            "mb-0.5",
          );

          paperList.appendChild(paperItem);
        });

        subjectSection.appendChild(paperList);
      }
    });

    papersContainer.appendChild(subjectSection);
  }
}

function updateSubjectFilter() {
  const semesterFilter = document.getElementById("semesterFilter").value;
  const subjectFilter = document.getElementById("subjectFilter");

  subjectFilter.innerHTML = "<option value='all'>All Subjects</option>";

  const subjectsForSemester = new Set(
    papers
      .filter(
        (paper) =>
          semesterFilter === "all" || paper.semester === semesterFilter,
      )
      .map((paper) => paper.subject),
  );

  subjectsForSemester.forEach((subject) => {
    const option = document.createElement("option");
    option.value = subject;
    option.textContent = `${subject} - ${subjectFullForms[subject].fullName || subject}`;
    subjectFilter.appendChild(option);
  });

  filterContent();
}

function filterContent() {
  const semesterFilter = document.getElementById("semesterFilter").value;
  const subjectFilter = document.getElementById("subjectFilter").value;

  const filteredPapers = papers.filter(
    (paper) =>
      (semesterFilter === "all" || paper.semester === semesterFilter) &&
      (subjectFilter === "all" || paper.subject === subjectFilter),
  );

  displayPapers(filteredPapers);
}

displayPapers(papers);
updateSubjectFilter();
