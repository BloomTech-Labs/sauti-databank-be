exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("users")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("users").insert([
        { id: 1, 
          gender: "female"
        },
        { id: 2,
          gender: "female"
        },
        { id: 3,
          gender: "female"
        },
        { id: 4,
          gender: "female"
        },
        { id: 5,
          gender: "female"
        },
        { id: 6,
          gender: "female"
        },
        { id: 7,
          gender: "female"
        },
        { id: 8,
          gender: "female"
        },
        { id: 9,
          gender: "female"
        },
        { id: 10,
          gender: "female"
        },
        { id: 11,
          gender: "male"
        },
        { id: 12,
          gender: "male"
        },
        { id: 13,
          gender: "male"
        },
        { id: 14,
          gender: "male"
        },
        { id: 15,
          gender: "male"
        }
      ]);
    });
};
