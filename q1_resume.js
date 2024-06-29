let resume = {
  name : "Sowmiya",
  contact : {
    email : "sowmimiya43@gmail.com",
    phone : "9629657908",
    linkedIn : "Sowmiya Balu",
  },
  education : [
    {
      degree : "Bachelor of Technology",
      department : "Information Technology",
      institution : "Avvaiyar College of Engineering & Technology for Women",
      passedOutYear : "2019",
    }
  ],
  workExperience : [
    {
      company : "Srikesh Infotech",
      designation : "Software Developer",
      duration : "2019-2020",
      responsibilities : [
        "Developed an OCR Web applicaiton in Django platform",
      ]
    },
  {
    company: "ARC Fertility Hospitals",
    designation : "Front office Executive",
    duration : "2022 - Present",
    responsibilities : [
      "Maintaining patient records cum Billing",
    ]
  }
  ],
  skills : [
    "Javascript",
    "HTML/CSS",
    "Node.js",
    "Python",
    "Postgresql",
    "MangoDB",
  ],
  personalDetails : [
    {
      dob : "18/06/1998",
      fathersName : "Balamurugan",
    }
  ],
}
let jsonResume = JSON.stringify(resume);
console.log(jsonResume);