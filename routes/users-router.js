const express = require("express");
const router = express.Router();

const Users = require("./users-model");

router.get("/all", (req, res) => {
  Users.get()
    .then(users => {
      res.status(200).json(users);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

// Gender routes // 
// All users who had a gender field
router.get("/all/gender/all", (req, res) => {
  Users.getGenderAll()
  .then(users => {
    res.status(200).json(users); 
  })
  .catch(err => {
    res.status(500).json(err); 
  })
})

// Getting number of users who marked female 
router.get("/all/gender/female/count", (req, res) => {
  Users.getGenderFemale()
  .then(users => {
    res.status(200).json(users.length);
  })
  .catch(err => {
    res.status(500).json(err); 
  })
})

// Getting number of users who marked male 
router.get("/all/gender/male/count", (req, res) => {
  Users.getGenderMale()
  .then(users => {
    res.status(200).json(users.length); 
  })
  .catch(err => {
    res.status(500).json(err); 
  })
})

// Border crossing routes // 

// All border crossing frequencies
router.get("/all/crossingfreq/all", (req, res) => {
  Users.getCrossingFreqAll()
  .then(users => {
    res.status(200).json(users); 
  })
  .catch(err => {
    res.status(500).json(err); 
  })
})

// Daily 
router.get("/all/crossingfreq/daily/count", (req, res) => {
  Users.getCrossingFreqDaily()
  .then(users => {
    res.status(200).json(users.length); 
  })
  .catch(err => {
    res.status(500).json(err); 
  })
})

// Weekly 
router.get("/all/crossingfreq/weekly/count", (req, res) => {
  Users.getCrossingFreqWeekly()
  .then(users => {
    res.status(200).json(users.length); 
  })
  .catch(err => {
    res.status(500).json(err); 
  })
})

// Monthly 
router.get("/all/crossingfreq/monthly/count", (req, res) => {
  Users.getCrossingFreqMonthly()
  .then(users => {
    res.status(200).json(users.length); 
  })
  .catch(err => {
    res.status(500).json(err); 
  })
})

// Never 
router.get("/all/crossingfreq/never/count", (req, res) => {
  Users.getCrossingFreqNever()
  .then(users => {
    res.status(200).json(users.length); 
  })
  .catch(err => {
    res.status(500).json(err); 
  })
})

// Education routes //
router.get("/all/education/all", (req, res) => {

  Users.getEducation()
    .then(users => {
      res.status(200).json(users);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

router.get("/all/education/primary/count", (req, res) => {

  Users.getEducationPrimary()
    .then(users => {
      res.status(200).json(users.length);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

router.get("/all/education/secondary/count", (req, res) => {

  Users.getEducationSecondary()
    .then(users => {
      res.status(200).json(users.length);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

router.get("/all/education/uni/count", (req, res) => {

  Users.getEducationUni()
    .then(users => {
      res.status(200).json(users.length);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

router.get("/all/education/none/count", (req, res) => {

  Users.getEducationNone()
    .then(users => {
      res.status(200).json(users.length);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

// Language routes // 

// All users who filled out a language
router.get("/all/language/all", (req, res) => {

  Users.getLanguageAll()
    .then(users => {
      res.status(200).json(users);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

// English language count 
router.get("/all/language/english/count", (req, res) => {

  Users.getLanguageEnglish()
    .then(users => {
      res.status(200).json(users.length);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

// Swahili count 
router.get("/all/language/swahili/count", (req, res) => {

  Users.getLanguageSwahili()
    .then(users => {
      res.status(200).json(users.length);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

// Kinyarwanda count
router.get("/all/language/kinya/count", (req, res) => {

  Users.getLanguageKinya()
    .then(users => {
      res.status(200).json(users.length);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

// Luganda count 
router.get("/all/language/luganda/count", (req, res) => {

  Users.getLanguageLug()
    .then(users => {
      res.status(200).json(users.length);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

// Lukiga count 
router.get("/all/language/lukiga/count", (req, res) => {

  Users.getLanguageLuk()
    .then(users => {
      res.status(200).json(users.length);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

// Country of residence routes // 

// All users who input a country 
router.get("/all/country/all", (req, res) => {
  Users.getCountryAll()
  .then(users => {
    res.status(200).json(users);
  })
  .catch(err => {
    res.status(500).json(err);
  });
});

// Kenya 
router.get("/all/country/kenya/count", (req, res) => {

  Users.getCountryKenya()
    .then(users => {
      res.status(200).json(users.length);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

// Uganda
router.get("/all/country/uganda/count", (req, res) => {

  Users.getCountryUganda()
    .then(users => {
      res.status(200).json(users.length);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

// Rwanda 
router.get("/all/country/rwanda/count", (req, res) => {

  Users.getCountryRwanda()
    .then(users => {
      res.status(200).json(users.length);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

// Age routes // 

// All users with age
router.get("/all/age/all", (req, res) => {
  Users.getAgeAll()
  .then(users => {
    res.status(200).json(users);
  })
  .catch(err => {
    res.status(500).json(err);
  });
});

// Group zero, 10-20
router.get("/all/age/group-zero/count", (req, res) => {

  Users.getAgeGroupZero()
    .then(users => {
      res.status(200).json(users.length);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

// Group one, 20-30
router.get("/all/age/group-one/count", (req, res) => {

  Users.getAgeGroupOne()
    .then(users => {
      res.status(200).json(users.length);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

// Group two, 30-40
router.get("/all/age/group-two/count", (req, res) => {

  Users.getAgeGroupTwo()
    .then(users => {
      res.status(200).json(users.length);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

// Group three, 40-50
router.get("/all/age/group-three/count", (req, res) => {

  Users.getAgeGroupThree()
    .then(users => {
      res.status(200).json(users.length);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

// Group four, 50-60
router.get("/all/age/group-four/count", (req, res) => {

  Users.getAgeGroupFour()
    .then(users => {
      res.status(200).json(users.length);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

// Group five, 60-70
router.get("/all/age/group-five/count", (req, res) => {

  Users.getAgeGroupFive()
    .then(users => {
      res.status(200).json(users.length);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

// Primary Income routes // 

// All users who answered primary income
router.get("/all/primary-income/all", (req, res) => {
  Users.getPrimaryIncomeAll()
  .then(users => {
    res.status(200).json(users); 
  })
  .catch(err => {
    res.status(500).json(err);
  });
});

// Yes primary income
router.get("/all/primary-income/yes/count", (req, res) => {

  Users.getPrimaryIncomeYes()
    .then(users => {
      res.status(200).json(users.length);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

// Not primary income 
router.get("/all/primary-income/no/count", (req, res) => {

  Users.getPrimaryIncomeNo()
    .then(users => {
      res.status(200).json(users.length);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

/* ************************************
        PRIMARY INCOME ROUTES
 ************************************ */


router.get('/all/primary-income/all', (req, res) => {
    Users.getPrimaryIncomeAll()
    .then(users => {
      res.status(200).json(users);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

router.get('/all/primary-income/yes/count', (req, res) => {
  Users.getPrimaryIncomeYes()
  .then(users => {
    res.status(200).json(users.length);
  })
  .catch(err => {
    res.status(500).json(err);
  });
});

router.get('/all/primary-income/no/count', (req, res) => {
  Users.getPrimaryIncomeNo()
  .then(users => {
    res.status(200).json(users.length);
  })
  .catch(err => {
    res.status(500).json(err);
  });
});

 /* ************************************
        PRODUCE ROUTES
 ************************************ */

router.get('/all/produce/all', (req, res) => {
  Users.getProduceAll()
  .then(users => {
    res.status(200).json(users);
  })
  .catch(err => {
    res.status(500).json(err);
  });
});

router.get('/all/produce/yes/count', (req, res) => {
  Users.getProduceYes()
  .then(users => {
    res.status(200).json(users.length);
  })
  .catch(err => {
    res.status(500).json(err);
  });
});

router.get('/all/produce/no/count', (req, res) => {
  Users.getProduceNo()
  .then(users => {
    res.status(200).json(users.length);
  })
  .catch(err => {
    res.status(500).json(err);
  });
});


module.exports = router;
