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
  .then(applyAges)
  .then(applyEducation)
  .then(applyCrossingFrequencies)
  .then(applyProduce)
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
  // .then(DANGER_PERFORM_IO)
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

function applyAges([sessions, traders]) {
  const ageGroups = ["10-20", "20-30", "30-40", "40-50", "50-60", "60-70"];
  const transformedTraders = traders.map(function determineTradersAge(trader) {
    const sessionIncludingTradersAge = sessions
      .filter(session => session.cell_num === trader.cell_num)
      .find(session => {
        for (ageGroup of ageGroups) {
          if (session.data.includes(ageGroup)) {
            return true;
          }
        }
        return null;
      });

    if (!sessionIncludingTradersAge) {
      return { ...trader, age: "Unknown" };
    } else if (sessionIncludingTradersAge.data.includes("10-20")) {
      return { ...trader, age: "10-20" };
    } else if (sessionIncludingTradersAge.data.includes("20-30")) {
      return { ...trader, age: "20-30" };
    } else if (sessionIncludingTradersAge.data.includes("30-40")) {
      return { ...trader, age: "30-40" };
    } else if (sessionIncludingTradersAge.data.includes("40-50")) {
      return { ...trader, age: "30-40" };
    } else if (sessionIncludingTradersAge.data.includes("50-60")) {
      return { ...trader, age: "50-60" };
    } else {
      return { ...trader, age: "60-70" };
    }
  });

  return [sessions, transformedTraders];
}

function applyEducation([sessions, traders]) {
  const possibleEducation = [
    "No formal education",
    "Primary",
    "Secondary",
    "University/College"
  ];
  const transformedTraders = traders.map(trader => {
    const sessionIncludingTradersEducation = sessions
      .filter(session => session.cell_num === trader.cell_num)
      .find(session => {
        for (education of possibleEducation) {
          if (session.data.includes(education)) {
            return true;
          }
        }
        return null;
      });

    if (!sessionIncludingTradersEducation) {
      return { ...trader, education: "Unknown" };
    } else if (
      sessionIncludingTradersEducation.data.includes("No formal education")
    ) {
      return { ...trader, education: "No formal education" };
    } else if (sessionIncludingTradersEducation.data.includes("Primary")) {
      return { ...trader, education: "Primary" };
    } else if (sessionIncludingTradersEducation.data.includes("Secondary")) {
      return { ...trader, education: "Secondary" };
    } else {
      return { ...trader, education: "University/College" };
    }
  });

  return [sessions, transformedTraders];
}

function applyCrossingFrequencies([sessions, traders]) {
  const possibleCrossingFrequencies = ["Never", "Monthly", "Weekly", "Daily"];

  const transformedTraders = traders.map(trader => {
    const sessionIncludingTradersCrossingFrequency = sessions
      .filter(session => session.cell_num === trader.cell_num)
      .find(session => {
        for (possibleCrossingFrequency of possibleCrossingFrequencies) {
          if (session.data.includes(possibleCrossingFrequency)) {
            return true;
          }
        }
        return null;
      });

    if (!sessionIncludingTradersCrossingFrequency) {
      return { ...trader, crossing_freq: "Unknown" };
    } else if (
      sessionIncludingTradersCrossingFrequency.data.includes("Never")
    ) {
      return { ...trader, crossing_freq: "Never" };
    } else if (
      sessionIncludingTradersCrossingFrequency.data.includes("Monthly")
    ) {
      return { ...trader, crossing_freq: "Monthly" };
    } else if (
      sessionIncludingTradersCrossingFrequency.data.includes("Weekly")
    ) {
      return { ...trader, crossing_freq: "Weekly" };
    } else {
      return { ...trader, crossing_freq: "Daily" };
    }
  });

  return [sessions, transformedTraders];
}

function applyProduce([sessions, traders]) {
  const possibleProduce = [
    `survey-2-produce\";a:1:{i:0;s:3`,
    `survey-2-produce\";a:1:{i:0;s:4`
  ];
  const transformedTraders = traders.map(trader => {
    const sessionIncludingTradersProduce = sessions
      .filter(session => session.cell_num === trader.cell_num)
      .find(session => {
        for (pp of possibleProduce) {
          if (session.data.includes(pp)) return true;
        }
      });

    if (!sessionIncludingTradersProduce) {
      return { ...trader, produce: "No" };
    } else {
      return { ...trader, produce: "Yes" };
    }
  });

  return [sessions, transformedTraders];
}

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

function trace(val) {
  console.log(val);
  return val;
}

// Clear the db of all traders' entries and repopulate it with unique values.
// This function will run every 24 hours via a cron job.
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
