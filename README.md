# API Documentation

#### Backend deployed on [Heroku](https://staging-sauti-labs-14.herokuapp.com/) <br>
_TEAM question: I just linked our staging link -- is that correct?_

## Getting started

To get the server running locally:

- Clone this repo, then, cd into the repo in Terminal and: 
- **yarn install** to install all required dependencies
- **yarn server** to start the local server
- **yarn test** to start server using testing environment

### Backend framework
_TEAM question: is this all accurate?_

We built our backend, including our REST API, using Node, Express, and Knex to work with a MySQL database. 

-    [REST API](https://restfulapi.net/): We decided a REST API, one that responds only with JSON data upon a user request, would give us enough flexibility to present our data however we deem fit. 
-    [Node](https://nodejs.org/en/): We all learned Node.js, and since we were taking on a lot of new libraries in this project, learning MySQL, Nivo, and more, we decided Node.js would meet our needs for building our API and free us up to learn new tools. We also see potential for realtime data updating in the future, and know Node is particularly useful in those applications. 
-    [Express](https://expressjs.com/): We added a bit more usability to Node for our project using Express, a web application framework that lets us build a bit more rapidly.  
-    [Knex](http://knexjs.org/): We used Knex to help us more efficiently build our queries. 
-    [MySQL](https://www.mysql.com/): Sauti has a lot of data to work with: over 5k users and 40k sessions. In order to best meet their needs and visualize their data, we used their existing and preferred MySQL database to eliminate migration issues and complexity.

## Endpoints

### User Routes
_TEAM question: Wonder if we should edit the double all endpoints?_
_TEAM question: Do we have to include users/all before everyone? If not, how do we indicate routes in most new user-friendly way?_

| Method | Endpoint                | Access Control      | Description                                        |
| ------ | ----------------------- | ------------------- | -------------------------------------------------- |
| GET    | `/users/all`        | public           | Returns a list of all recorded Sauti Databank users.               |

#### Accessing gender data 
| Method | Endpoint                | Access Control      | Description                                        |
| ------ | ----------------------- | ------------------- | -------------------------------------------------- |
| GET    | `/users/all/gender/all`    | public | Returns all Sauti Databank users that answered a gender survey along with recorded gender.             |
| GET    | `/users/all/gender/female/count`        | public | Returns the number of users who marked female in a gender survey.                    |
| GET  | `/users/all/gender/male/count` | public                | Returns the number of users who marked male in a gender survey. |

#### Accessing border crossing frequency data 
| Method | Endpoint                | Access Control      | Description                                        |
| ------ | ----------------------- | ------------------- | -------------------------------------------------- |
| GET    | `/users/all/crossingfreq/all`    | public | Returns all Sauti Databank users that recorded a border crossing frequency.             |
| GET    | `/users/all/crossingfreq/daily/count`        | public | Returns the number of users who report crossing a border daily.                    |
| GET  | `/users/all/crossingfreq/weekly/count` | public                | Returns the number of users who report crossing a border weekly.  |
| GET    | `/users/all/crossingfreq/monthly/count`        | public | Returns the number of users who report crossing a border monthly.                    |
| GET  | `/users/all/crossingfreq/never/count` | public                | Returns the number of users who report never crossing a border. |

#### Accessing education data 
| Method | Endpoint                | Access Control      | Description                                        |
| ------ | ----------------------- | ------------------- | -------------------------------------------------- |
| GET    | `/users/all/all/education/all`        | public | Returns all users who reported any education history.                    |
| GET  | `/users/all/education/primary/count` | public                | Returns a count of all users who reported primary as their highest level of education. |
| GET    | `/users/all/education/secondary/count`    | public | Returns a count of all users who reported secondary as their highest level of education.              |
| GET  | `/users/all/education/uni/count` | public                | Returns a count of all users who reported university as their highest level of education.  |
| GET  | `/users/all/education/none/count` | public                | Returns a count of all users who reported they had no education. |

#### Accessing language data 
| Method | Endpoint                | Access Control      | Description                                        |
| ------ | ----------------------- | ------------------- | -------------------------------------------------- |
| GET    | `/users/all/language/all`    | public | Returns all Sauti Databank users that reported a language.             |
| GET    | `/users/all/language/english/count`        | public | Returns the number of Sauti Databank users who reported English as their language.                    |
| GET  | `/users/all/language/swahili/count` | public                | Returns the number of Sauti Databank users who reported Swahili as their language.  |
| GET  | `/users/all/language/kinya/count` | public                | Returns the number of Sauti Databank users who reported Kinyarwanda as their language.  |
| GET  | `users/all/language/luganda/count` | public                | Returns the number of Sauti Databank users who reported Luganda as their language.  |
| GET  | `users//all/language/lukiga/count` | public                |Returns the number of Sauti Databank users who reported Lukiga as their language. . |

#### Accessing country of residence data 
| Method | Endpoint                | Access Control      | Description                                        |
| ------ | ----------------------- | ------------------- | -------------------------------------------------- |
| GET    | `/users/all/country/all`    | public | Returns all Sauti Databank users that reported a country of residence.            |
| GET    | `users/all/country/kenya/count`        | public | Returns the number of Sauti Databank users who reported Kenya as their country of residence.                   |
| GET  | `/users/all/country/uganda/count` | public                | Returns the number of Sauti Databank users who reported Uganda as their country of residence.   |
| GET  | `/users/all/country/rwanda/count` | public                | Returns the number of Sauti Databank users who reported Rwanda as their country of residence.  |

#### Accessing age data 
| Method | Endpoint                | Access Control      | Description                                        |
| ------ | ----------------------- | ------------------- | -------------------------------------------------- |
| GET    | `/users/all/age/all`    | public | Returns all Sauti Databank users that reported an age demographic.            |
| GET    | `users/all/age/group-zero/count`        | public | Returns the number of Sauti Databank users who reported an age between 10-20 years.           |
| GET  | `/users/all/age/group-one/count` | public                | Returns the number of Sauti Databank users who reported an age between 20-30 years.   |
| GET  | `/users/all/age/group-two/count` | public                | Returns the number of Sauti Databank users who reported an age between 30-40 years.  |
| GET  | `/users/all/age/group-three/count` | public                | Returns the number of Sauti Databank users who reported an age between 40-50 years.  |
| GET  | `/users/all/age/group-four/count` | public                | Returns the number of Sauti Databank users who reported an age between 50-60 years.  |
| GET  | `/users/all/age/group-five/count` | public                | Returns the number of Sauti Databank users who reported an age between 60-70 years.  |

#### Accessing primary income data 
| Method | Endpoint                | Access Control      | Description                                        |
| ------ | ----------------------- | ------------------- | -------------------------------------------------- |
| GET    | `/users/all/primary-income/all`    | public | Returns all Sauti Databank users that reported an answer to the primary income question.            |
| GET    | `users/all/primary-income/yes/count`        | public | Returns the number of Sauti Databank users who reported small border trade as a primary source of income.           |
| GET  | `/users/all/primary-income/no/count` | public                | Returns the number of Sauti Databank users who reported small border trade was not their primary source of income.  |

#### Accessing produce data 
| Method | Endpoint                | Access Control      | Description                                        |
| ------ | ----------------------- | ------------------- | -------------------------------------------------- |
| GET    | `/users/all/produce/all`    | public | Returns all Sauti Databank users that reported an answer to the produce question.            |
| GET    | `users/all/produce/yes/count`        | public | Returns the number of Sauti Databank users who reported trading produce at the border.           |
| GET  | `/users/all/produce/no/count` | public                | Returns the number of Sauti Databank users who reported that they do not trade produce at the border.  |


# Data Model
_TEAM: Do we have any tables other than users?_

#### Users

```
{
  id: UUID
  organization_id: UUID foreign key in ORGANIZATIONS table
  first_name: STRING
  last_name: STRING
  role: STRING [ 'owner', 'supervisor', 'employee' ]
  email: STRING
  phone: STRING
  cal_visit: BOOLEAN
  emp_visit: BOOLEAN
  emailpref: BOOLEAN
  phonepref: BOOLEAN
}
```

## Actions


### Education data actions

`getEducation()` -> Returns all users who reported any education completed.

`getEducationPrimary()` -> Returns all users who reported primary as their highest level of education. 

`getEducationSecondary()` -> Returns all users who reported secondary as their highest level of education. 

`getEducationUni()` -> Returns all users who reported University as their highest level of education. 

`getEducationNone()` -> Returns all users who reported that they did not receive any formal education. 

### Gender data actions
`getGenderAll()` -> Returns all users who reported any gender selection. 

`getGenderMale()` -> Returns all users who reported a male gender identity. 

`getGenderFemale()` -> Returns all users who reported a female gender identity. 

### Border crossing frequency data actions 
`getCrossingFreqAll()`-> Returns all users who reported any border crossing frequency.

`getCrossingFreqDaily()`-> Returns all users who reported crossing a border daily. 

`getCrossingFreqWeekly()` -> Returns all users who reported crossing a border weekly.

`getCrossingFreqMonthly()` -> Returns all users who reported crossing a border monthly. 

`getCrossingFreqNever()` -> Returns all users who reported never crossing a border.  

// Primary language functions //
// Futureproof: We can simplify these functions 
// E.g. const getCrossingFreq = (arg) => db('users').where({crossing_freq: arg}) 

const getLanguageAll = () => db('users').whereNot({language: null}); 

const getLanguageEnglish = () => db('users').where({language: "English"});

const getLanguageSwahili = () => db('users').where({language: "Swahili"}); 

const getLanguageKinya = () => db('users').where({language: "Kinyarwanda"});

const getLanguageLug = () => db('users').where({language: "Luganda"});

const getLanguageLuk = () => db('users').where({language: "Lukiga"});

// Country of residence functions // 
// Futureproof: We can simplify these functions 
// E.g. const getCrossingFreq = (arg) => db('users').where({crossing_freq: arg}) 

const getCountryAll = () => db('users').whereNot({country_of_residence: null}); 

const getCountryKenya = () => db('users').where({country_of_residence: "KEN"});

const getCountryUganda = () => db('users').where({country_of_residence: "UGA"});

const getCountryRwanda = () => db('users').where({country_of_residence: "RWA"});

// Age functions // 
// Futureproof: We can simplify these functions 
// E.g. const getCrossingFreq = (arg) => db('users').where({crossing_freq: arg}) 

const getAgeAll = () => db('users').whereNot({age: null}); 

const getAgeGroupZero = () => db('users').where({age: "10-20"});

const getAgeGroupOne = () => db('users').where({age: "20-30"});

const getAgeGroupTwo = () => db('users').where({age: "30-40"});

const getAgeGroupThree = () => db('users').where({age: "40-50"});

const getAgeGroupFour = () => db('users').where({age: "50-60"});

const getAgeGroupFive = () => db('users').where({age: "60-70"});


// Primary Income functions // 
// Futureproof: We can simplify these functions 
// E.g. const getCrossingFreq = (arg) => db('users').where({crossing_freq: arg}) 

const getPrimaryIncomeAll = () => db('users').whereNot({primary_income: null}); 

const getPrimaryIncomeYes = () => db('users').where({primary_income: "Yes"}); 

const getPrimaryIncomeNo = () => db('users').where({primary_income: "No"}); 

//Produce Functions

const getProduceAll = () => db('users').whereNot({produce: null});

const getProduceYes = () => db('users').where({produce: "Yes"});

const getProduceNo = () => db('users').where({produce: "No"});

`getOrgs()` -> Returns all organizations

`getOrg(orgId)` -> Returns a single organization by ID

`addOrg(org)` -> Returns the created org

`updateOrg(orgId)` -> Update an organization by ID

`deleteOrg(orgId)` -> Delete an organization by ID
<br>
<br>
<br>
`getUsers(orgId)` -> if no param all users

`getUser(userId)` -> Returns a single user by user ID

`addUser(user object)` --> Creates a new user and returns that user. Also creates 7 availabilities defaulted to hours of operation for their organization.

`updateUser(userId, changes object)` -> Updates a single user by ID.

`deleteUser(userId)` -> deletes everything dependent on the user

## 3️⃣ Environment Variables

In order for the app to function correctly, the user must set up their own environment variables.

create a .env file that includes the following:

🚫 These are just examples, replace them with the specifics for your app
    
    *  STAGING_DB - optional development db for using functionality not available in SQLite
    *  NODE_ENV - set to "development" until ready for "production"
    *  JWT_SECRET - you can generate this by using a python shell and running import random''.join([random.SystemRandom().choice('abcdefghijklmnopqrstuvwxyz0123456789!@#\$%^&amp;*(-*=+)') for i in range(50)])
    *  SENDGRID_API_KEY - this is generated in your Sendgrid account
    *  stripe_secret - this is generated in the Stripe dashboard
    
## Contributing

When contributing to this repository, please first discuss the change you wish to make via issue, email, or any other method with the owners of this repository before making a change.

Please note we have a [code of conduct](./code_of_conduct.md). Please follow it in all your interactions with the project.

### Issue/Bug Request

 **If you are having an issue with the existing project code, please submit a bug report under the following guidelines:**
 - Check first to see if your issue has already been reported.
 - Check to see if the issue has recently been fixed by attempting to reproduce the issue using the latest master branch in the repository.
 - Create a live example of the problem.
 - Submit a detailed bug report including your environment & browser, steps to reproduce the issue, actual and expected outcomes,  where you believe the issue is originating from, and any potential solutions you have considered.

### Feature Requests

We would love to hear from you about new features which would improve this app and further the aims of our project. Please provide as much detail and information as possible to show us why you think your new feature should be implemented.

### Pull Requests

If you have developed a patch, bug fix, or new feature that would improve this app, please submit a pull request. It is best to communicate your ideas with the developers first before investing a great deal of time into a pull request to ensure that it will mesh smoothly with the project.

Remember that this project is licensed under the MIT license, and by submitting a pull request, you agree that your work will be, too.

#### Pull Request Guidelines

- Ensure any install or build dependencies are removed before the end of the layer when doing a build.
- Update the README.md with details of changes to the interface, including new plist variables, exposed ports, useful file locations and container parameters.
- Ensure that your code conforms to our existing code conventions and test coverage.
- Include the relevant issue number, if applicable.
- You may merge the Pull Request in once you have the sign-off of two other developers, or if you do not have permission to do that, you may request the second reviewer to merge it for you.

### Attribution

These contribution guidelines have been adapted from [this good-Contributing.md-template](https://gist.github.com/PurpleBooth/b24679402957c63ec426).

## Documentation

See [Frontend Documentation](🚫link to your frontend readme here) for details on the fronend of our project.
🚫 Add DS iOS and/or Andriod links here if applicable.
