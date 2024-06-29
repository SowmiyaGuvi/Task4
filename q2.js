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
  let resumeObject = JSON.parse(jsonResume);

  //Iteration Over all for loops

  //For Loop:

    let keys = Object.keys(resumeObject); 
    for (var i = 0; i < keys.length; i++) { 
        let key = keys[i]; var value = resumeObject[key]; 
        console.log(key + ":" + value); 
        }

  // For In Loop : 
    
    for (let key in resumeObject){
        console.log(key, ":", resumeObject[key]);
    }

 //For Of Loop:

    for (let [key, value] of Object.entries(resumeObject)) {
        console.log(key, ":" , value);
    }

 // For Each Loop:

    Object.keys(resumeObject).forEach(key => {
        console.log(key, ":", resumeObject[key]);
    });