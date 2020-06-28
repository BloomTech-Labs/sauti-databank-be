require("dotenv").config();
let unserializer = require("php-unserialize");

const db = require("./model");

// tradersDataParser.js withdraws user information from PHP serialized data in `platform_sessions2` table in database
// Many users have submit more than one request so there are ~80,000 entries in `platform_sessions2` but only ~11,000 users in `traders` table
// This applies all user details to their phone number such as: age, gender, education, border crossing frequency, etc.

// ==== SEE BOTTOM OF FILE BEFORE RUNNING ====
// To run the file during testing, run: node ./models/tradersDataParser.js

// First Lance's Data is saved in array = []
try {
  db.findLanceData().then(sessions => {
    let array = [];

    sessions.map(element => {
      let object = {};
      object.cell_num = element.cell_num;
      array.push(object);
    });

    // At this point, "array" contains a bunch of phone numbers, some that appear multiple times
    // The loop below removes all duplicate phone numbers, so they only appear once, and form the skeleton of what the object will look like
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
          age: null,
          education: null,
          crossing_freq: null,
          produce: null,
          primary_income: null,
          language: null,
          country_of_residence: null,
          crossing_location: null
        });
      }
    }
    getGender(sessions, distinctUsers);
  });

  // These functions fill in the 'null' values in the user object:
  // gender, age, education, crossing frequency, produce, primary income, language, and country of residence
  getGender = (sessions, distinctUsers) => {
    let arrayWithGender = distinctUsers;

    sessions.map(element => {
      let num = element.cell_num;
      if (element.data.includes("Male") || element.data.includes("Kiume")) {
        arrayWithGender.map(user => {
          if (user.cell_num === num) {
            user.gender = "Male";
          }
        });
      } else if (
        element.data.includes("Female") ||
        element.data.includes("Kike") ||
        element.data.includes("Musajja") ||
        element.data.includes("Mukazi") ||
        element.data.includes("Gore")
      ) {
        arrayWithGender.map(user => {
          if (user.cell_num === num) {
            user.gender = "Female";
          }
        });
      }
    });

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
      if (
        element.data.includes("No formal education") ||
        element.data.includes("Ssaasomako")
      ) {
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
      if (
        element.data.includes("Never") ||
        element.data.includes("Ssiyitangayo")
      ) {
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
      } else if (
        element.data.includes("Weekly") ||
        element.data.includes("Buli wiiki")
      ) {
        arrayWithCrossingFreq.map(user => {
          if (user.cell_num === num) {
            user.crossing_freq = "Weekly";
          }
        });
      } else if (
        element.data.includes("Daily") ||
        element.data.includes("Buli lunaku")
      ) {
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

  getCountry = (sessions, arrayWithLanguage) => {
    let arrayWithCountry = arrayWithLanguage;

    arrayWithCountry.map(user => {
      let num = user.cell_num;
      if (/^254/.test(num)) {
        user.country_of_residence = "KEN";
      } else if (/^256/.test(num)) {
        user.country_of_residence = "UGA";
      } else if (/^250/.test(num)) {
        user.country_of_residence = "RWA";
      } else if (/^255/.test(num)) {
        user.country_of_residence = "TZA";
      }
    });

    getcrossing_location(sessions, arrayWithCountry);
  };

  getcrossing_location = (sessions, arrayWithCountry) => {
    let arrayWithCrossingLocation = arrayWithCountry;

    sessions.map(element => {
      let num = element.cell_num;
      if (element.data.includes("survey-1-border")) {
        const unSerialData = unserializer.unserialize(element.data);
        if (unSerialData["survey-1-border"] !== undefined) {
          arrayWithCrossingLocation.map(user => {
            if (user.cell_num === num) {
              user.crossing_location = unSerialData["survey-1-border"]["0"];
            }
          });
        }
      }
    });

    try {
      console.log("\n** TRADERS TABLE **\n", Date(Date.now().toString()));
      // THIS DELETES ALL ENTRIES IN TABLE - COMMENT OUT THIS LINE WHEN TESTING
      db.truncateTable("traders");
      // THIS INSERTS ~11,000 ENTRIES INTO TABLE - COMMENT OUT THIS LINE WHEN TESTING
      db.batchInsert("traders", arrayWithCrossingLocation);
    } catch {
      console.log("Failed to batch insert");
    }
  };
} catch ({ message }) {
  console.log("Failed file", message);
}
