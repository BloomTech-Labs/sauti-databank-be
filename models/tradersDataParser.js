require("dotenv").config();

const db = require("./model");

// tradersDataParser.js withdraws user information from PHP serialized data in `platform_sessions2` table in database
// Many users have submit more than one request so there are ~80,000 entries in `platform_sessions2` but only ~11,000 users in `traders` table
// This applies all user details to their phone number such as: age, gender, education, border crossing frequency, etc.

// ==== SEE BOTTOM OF FILE BEFORE RUNNING ====
// To run the file during testing, run: node ./models/tradersDataParser.js

// First Lance's Data is saved in array = []
db.findLanceData()
  .then(function getDistinctUsers(sessions) {
    const allCellNums = sessions.map(session => session.cell_num);
    const uniqueCellNums = removeDuplicates(allCellNums);

    // initialize a new trader object for each unique cell_num with the cell_num field auto-populated.
    const distinctTraders = uniqueCellNums.map(cellNum => {
      return new Trader({
        cell_num: cellNum,
        gender: null,
        age: null,
        education: null,
        crossing_freq: null,
        produce: null,
        primary_income: null,
        language: null,
        country_of_residence: null
      });
    });

    return [sessions, distinctTraders];
  })
  // The following promise chain fills in the 'null' values in the user object:
  // gender, age, education, crossing frequency, produce, primary income, language, and country of residence
  .then(applyGenders)
  .then(function applyAges([sessions, traders]) {
    return [sessions, traders];
  })
  .then(function applyEducation([sessions, traders]) {
    return [sessions, traders];
  })
  .then(function applyCrossingFrequencies([sessions, traders]) {
    return [sessions, traders];
  })
  .then(function applyProduce([sessions, traders]) {
    return [sessions, traders];
  })
  .then(function applyPrimaryIncomes([sessions, traders]) {
    return [sessions, traders];
  })
  .then(function applyLanguages([sessions, traders]) {
    return [sessions, traders];
  })
  .then(function applyCountries([sessions, traders]) {
    return [sessions, traders];
  })
  .then(console.log)
  .catch(error => {
    console.error("Failure: ", error);
  });

function applyGenders([sessions, traders]) {
  const transformedTraders = traders.map(trader => {
    const [sessionIncludingTradersGender] = sessions
      .filter(session => session.cell_num === trader.cell_num)
      .filter(
        session =>
          session.data.includes("Male") || session.data.includes("Female")
      );

    if (!sessionIncludingTradersGender) {
      return { ...trader, gender: "Unknown" };
    } else if (sessionIncludingTradersGender.data.includes("Male")) {
      return { ...trader, gender: "Male" };
    } else {
      return { ...trader, gender: "Female" };
    }
  });

  return [sessions, transformedTraders];
}

function getGender(sessions, distinctUsers) {
  let arrayWithGender = distinctUsers;

  sessions.map(session => {
    let num = session.cell_num;
    if (session.data.includes("Male")) {
      arrayWithGender.map(user => {
        if (user.cell_num === num) {
          user.gender = "Male";
        }
      });
    } else if (session.data.includes("Female")) {
      arrayWithGender.map(user => {
        if (user.cell_num === num) {
          user.gender = "Female";
        }
      });
    }
  });

  getAge(sessions, arrayWithGender);
}

function getAge(sessions, arrayWithGender) {
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
}

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
    } else if (element.data.includes(`survey-1-primaryincome\";a:1:{i:0;s:2`)) {
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

  // Clear the db of all traders' entries and repopulate it with unique values.
  // This function will run every 24 hours via a cron job.
  DANGER_PERFORM_IO();
};

/**
 * Helpers
 */

function Trader(newTrader) {
  this.cell_num = newTrader.cell_num;
  this.gender = newTrader.gender;
  this.age = newTrader.age;
  this.education = newTrader.education;
  this.crossing_freq = newTrader.crossing_freq;
  this.produce = newTrader.e;
  this.primary_income = newTrader.primary_income;
  this.language = newTrader.language;
  this.country_of_residence = newTrader.country_of_residence;
}

// Remove any duplicate indexes in an array
function removeDuplicates(array) {
  return Array.from(new Set(array));
}

// Polyfill for Object.fromEntries (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/fromEntries)
function objectFromEntries(entries = []) {
  return Object.assign({}, ...entries.map(([key, val]) => ({ [key]: val })));
}

// Array.prototype.map, but applied to objects
function mapObj(mapperFn, obj) {
  return objectFromEntries(
    Object.entries(obj).map(([key, val], i, arr) => {
      return [key, mapperFn(val, i, arr)];
    })
  );
}

function transformTraderData(sessions, traders, mapperFn) {
  const transformedTraders = traders.reduce(
    (allTraders, currentTrader, index) => {
      return sessions[index].cell_num === currentTrader.cell_num
        ? [...allTraders, objMap(mapperFn, currentTrader)]
        : [...allTraders, currentTrader];
    },
    []
  );

  return transformedTraders;
}

function DANGER_PERFORM_IO() {
  try {
    console.log("\n** TRADERS TABLE **\n", Date(Date.now().toString()));
    // THIS DELETES ALL ENTRIES IN TABLE - COMMENT OUT THIS LINE WHEN TESTING
    // db.truncateTable('traders');
    // THIS INSERTS ~11,000 ENTRIES INTO TABLE - COMMENT OUT THIS LINE WHEN TESTING
    // db.batchInsert('traders', arrayWithCountry);
  } catch {
    console.log("Failed to batch insert");
  }
}

module.exports = {
  removeDuplicates,
  mapObj
};
