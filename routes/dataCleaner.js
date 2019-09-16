require("dotenv").config();
console.log(process.env.host);
const db = require("../data/dbConfig");
const Sessions = require("./sessions-model");
const Users = require("./users-model");

const bcrypt = require("bcryptjs");

// First Lance's Data is saved in array = []
try {
  Sessions.findLanceData().then(sessions => {
    let array = [];

    sessions.map(element => {
      let object = {};
      object.cell_num = element.cell_num;
      array.push(object);
    });
    // Then a new array is created with unique phone numbers for filtering out unique users
    // Data for each category is set to null to begin with
    const distinctUsers = [];
    const map = new Map();
    for (const item of array) {
      // for each element of the array that contains duplicates
      if (!map.has(item.cell_num)) {
        //if map does not contain an object with the cell_num (userid), it includes it and pushes it to result
        map.set(item.cell_num, true);
        distinctUsers.push({
          cell_num: item.cell_num,
          gender: null,
          age: null, //set gender to null inside every object so that every object has a gender property.
          education: null,
          crossing_freq: null,
          produce: null,
          primary_income: null,
          language: null,
          country_of_residence: null
        });
      }
    }

    getGender(sessions, distinctUsers);
    // console.log(sessions);
  });

  // These functions do the updating for the categories
  getGender = (sessions, distinctUsers) => {
    let arrayWithGender = distinctUsers;

    sessions.map(element => {
      let num = element.cell_num;
      if (element.data.includes("Male")) {
        arrayWithGender.map(user => {
          if (user.cell_num === num) {
            user.gender = "Male";
          }
        });
      } else if (element.data.includes("Female")) {
        arrayWithGender.map(user => {
          if (user.cell_num === num) {
            user.gender = "Female";
          }
        });
      }
    });

    //console.log(arrayWithGender)

    getAge(sessions, arrayWithGender);
  };

  getAge = (sessions, arrayWithGender) => {
    let arrayWithAge = arrayWithGender;

    sessions.map(element => {
      let num = element.cell_num;
      if (element.data.includes("10-20")) {
        arrayWithAge.map(user => {
          if (user.cell_num === num) {
            user.age = "10-20";
          }
        });
      } else if (element.data.includes("20-30")) {
        arrayWithAge.map(user => {
          if (user.cell_num === num) {
            user.age = "20-30";
          }
        });
      } else if (element.data.includes("30-40")) {
        arrayWithAge.map(user => {
          if (user.cell_num === num) {
            user.age = "30-40";
          }
        });
      } else if (element.data.includes("40-50")) {
        arrayWithAge.map(user => {
          if (user.cell_num === num) {
            user.age = "40-50";
          }
        });
      } else if (element.data.includes("50-60")) {
        arrayWithAge.map(user => {
          if (user.cell_num === num) {
            user.age = "50-60";
          }
        });
      } else if (element.data.includes("60-70")) {
        arrayWithAge.map(user => {
          if (user.cell_num === num) {
            user.age = "60-70";
          }
        });
      }
    });

    getEducation(sessions, arrayWithAge);
  };

  getEducation = (sessions, arrayWithAge) => {
    let arrayWithEducation = arrayWithAge;

    sessions.map(element => {
      let num = element.cell_num;
      if (element.data.includes("No formal education")) {
        arrayWithEducation.map(user => {
          if (user.cell_num === num) {
            user.education = "No formal education";
          }
        });
      } else if (element.data.includes("Primary")) {
        arrayWithEducation.map(user => {
          if (user.cell_num === num) {
            user.education = "Primary";
          }
        });
      } else if (element.data.includes("Secondary")) {
        arrayWithEducation.map(user => {
          if (user.cell_num === num) {
            user.education = "Secondary";
          }
        });
      } else if (element.data.includes("University/College")) {
        arrayWithEducation.map(user => {
          if (user.cell_num === num) {
            user.education = "University/College";
          }
        });
      }
    });

    getCrossingFreq(sessions, arrayWithEducation);
  };

  getCrossingFreq = (sessions, arrayWithEducation) => {
    let arrayWithCrossingFreq = arrayWithEducation;

    sessions.map(element => {
      let num = element.cell_num;
      if (element.data.includes("Never")) {
        arrayWithCrossingFreq.map(user => {
          if (user.cell_num === num) {
            user.crossing_freq = "Never";
          }
        });
      } else if (element.data.includes("Monthly")) {
        arrayWithCrossingFreq.map(user => {
          if (user.cell_num === num) {
            user.crossing_freq = "Monthly";
          }
        });
      } else if (element.data.includes("Weekly")) {
        arrayWithCrossingFreq.map(user => {
          if (user.cell_num === num) {
            user.crossing_freq = "Weekly";
          }
        });
      } else if (element.data.includes("Daily")) {
        arrayWithCrossingFreq.map(user => {
          if (user.cell_num === num) {
            user.crossing_freq = "Daily";
          }
        });
      }
    });

    getProduce(sessions, arrayWithCrossingFreq);
  };

  getProduce = (sessions, arrayWithCrossingFreq) => {
    let arrayWithProduce = arrayWithCrossingFreq;

    sessions.map(element => {
      let num = element.cell_num;
      if (
        element.data.includes(`survey-2-produce\";a:1:{i:0;s:3`) ||
        element.data.includes(`survey-2-produce\";a:1:{i:0;s:4`)
      ) {
        arrayWithProduce.map(user => {
          if (user.cell_num === num) {
            user.produce = "Yes";
          }
        });
      } else if (element.data.includes(`survey-2-produce\";a:1:{i:0;s:2`)) {
        arrayWithProduce.map(user => {
          if (user.cell_num === num) {
            user.produce = "No";
          }
        });
      }
    });

    getPrimaryIncome(sessions, arrayWithProduce);
  };

  getPrimaryIncome = (sessions, arrayWithProduce) => {
    let arrayWithPrimaryIncome = arrayWithProduce;

    sessions.map(element => {
      let num = element.cell_num;
      if (
        element.data.includes(`survey-1-primaryincome\";a:1:{i:0;s:3`) ||
        element.data.includes(`survey-1-primaryincome\";a:1:{i:0;s:4`)
      ) {
        arrayWithPrimaryIncome.map(user => {
          if (user.cell_num === num) {
            user.primary_income = "Yes";
          }
        });
      } else if (
        element.data.includes(`survey-1-primaryincome\";a:1:{i:0;s:2`)
      ) {
        arrayWithPrimaryIncome.map(user => {
          if (user.cell_num === num) {
            user.primary_income = "No";
          }
        });
      }
    });

    getLanguage(sessions, arrayWithPrimaryIncome);
  };

  getLanguage = (sessions, arrayWithPrimaryIncome) => {
    let arrayWithLanguage = arrayWithPrimaryIncome;

    sessions.map(element => {
      let num = element.cell_num;
      if (element.data.includes("English")) {
        arrayWithLanguage.map(user => {
          if (user.cell_num === num) {
            user.language = "English";
          }
        });
      } else if (element.data.includes("Swahili")) {
        arrayWithLanguage.map(user => {
          if (user.cell_num === num) {
            user.language = "Swahili";
          }
        });
      } else if (element.data.includes("Luganda")) {
        arrayWithLanguage.map(user => {
          if (user.cell_num === num) {
            user.language = "Luganda";
          }
        });
      } else if (element.data.includes("Kinyarwanda")) {
        arrayWithLanguage.map(user => {
          if (user.cell_num === num) {
            user.language = "Kinyarwanda";
          }
        });
      } else if (element.data.includes("Lukiga")) {
        arrayWithLanguage.map(user => {
          if (user.cell_num === num) {
            user.language = "Lukiga";
          }
        });
      }
    });

    getCountry(sessions, arrayWithLanguage);
  };

  getCountry = async (sessions, arrayWithLanguage) => {
    let arrayWithCountry = arrayWithLanguage;

    arrayWithCountry.map(user => {
      let num = user.cell_num;
      if (num.includes("25400")) {
        user.country_of_residence = "KEN";
      } else if (num.includes("25600")) {
        user.country_of_residence = "UGA";
      } else if (num.includes("25000")) {
        user.country_of_residence = "RWA";
      }
    });

    arrayWithCountry.map(user => {
      const hash = bcrypt.hashSync(user.cell_num, 2);
      user.cell_num = hash;
    });

    console.log(arrayWithCountry);

    try {
      for (const user of arrayWithCountry) {
        console.log(user);
        await Users.add(user);
      }
    } catch ({ message }) {
      console.log(message);
    }
  };
} catch ({ message }) {
  console.log(message);
}
