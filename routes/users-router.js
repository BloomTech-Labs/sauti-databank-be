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


module.exports = router;
