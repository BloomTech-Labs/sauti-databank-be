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

// Gender routes

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
router.get("/all/gender/female", (req, res) => {
  Users.getGenderFemale()
  .then(users => {
    res.status(200).json(users.length);
  })
  .catch(err => {
    res.status(500).json(err); 
  })
})

// Getting number of users who marked male 
router.get("all/gender/male", (req, res) => {
  Users.getGenderMale()
  .then(users => {
    res.status(200).json(users.length); 
  })
  .catch(err => {
    res.status(500).json(err); 
  })
})

// Border crossing routes 


// Education routes
router.get("/all/education/all", (req, res) => {

  Users.getEducation()
    .then(users => {
      res.status(200).json(users);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

router.get("/all/education/all/primary", (req, res) => {

  Users.getEducationPrimary()
    .then(users => {
      res.status(200).json(users.length);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

router.get("/all/education/all/secondary", (req, res) => {

  Users.getEducationSecondary()
    .then(users => {
      res.status(200).json(users.length);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

router.get("/all/education/all/uni", (req, res) => {

  Users.getEducationUni()
    .then(users => {
      res.status(200).json(users.length);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

router.get("/all/education/all/none", (req, res) => {

  Users.getEducationNone()
    .then(users => {
      res.status(200).json(users.length);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});


module.exports = router;
