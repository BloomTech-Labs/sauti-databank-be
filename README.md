# API Documentation

#### Backend deployed on [Heroku](https://staging-sauti-labs-14.herokuapp.com/). <br>

## Getting started
To get the server running locally:

- Clone this repo, then, cd into the repo in Terminal and:
- **yarn install** to install all required dependencies.
- **yarn server** to start the local server.
- **yarn test** to start server using testing environment.
- **update .env** store SQL server connection info there.

### Backend framework
We built our backend, including our REST API, using Node, Express, and Knex to work with a MySQL database.

- [REST API](https://restfulapi.net/): We decided a REST API, one that responds only with JSON data upon a user request, would give us enough flexibility to present our data however we deem fit.
- [Node](https://nodejs.org/en/): We all learned Node.js, and since we were taking on a lot of new libraries in this project, learning MySQL, Nivo, and more, we decided Node.js would meet our needs for building our API and free us up to learn new tools. We also see potential for realtime data updating in the future, and know Node is particularly useful in those applications.
- [Express](https://expressjs.com/): We added a bit more usability to Node for our project using Express, a web application framework that lets us build a bit more rapidly.
- [Knex](http://knexjs.org/): We used Knex to help us more efficiently build our queries.
- [MySQL](https://www.mysql.com/): Sauti has a lot of data to work with: over 5k users and 40k sessions. In order to best meet their needs and visualize their data, we used their existing and preferred MySQL database to eliminate migration issues and complexity.

## Endpoints

### User Routes
| Method | Endpoint     | Access Control | Description                                          |
| ------ | ------------ | -------------- | ---------------------------------------------------- |
| GET    | `/users/all` | public         | Returns a list of all recorded Sauti Databank users. |

#### Accessing gender data

| Method | Endpoint                         | Access Control | Description                                                                                |
| ------ | -------------------------------- | -------------- | ------------------------------------------------------------------------------------------ |
| GET    | `/users/all/gender/all`          | public         | Returns all Sauti Databank users that answered a gender survey along with recorded gender. |
| GET    | `/users/all/gender/female/count` | public         | Returns the number of users who marked female in a gender survey.                          |
| GET    | `/users/all/gender/male/count`   | public         | Returns the number of users who marked male in a gender survey.                            |

#### Accessing border crossing frequency data

| Method | Endpoint                                | Access Control | Description                                                                 |
| ------ | --------------------------------------- | -------------- | --------------------------------------------------------------------------- |
| GET    | `/users/all/crossingfreq/all`           | public         | Returns all Sauti Databank users that recorded a border crossing frequency. |
| GET    | `/users/all/crossingfreq/daily/count`   | public         | Returns the number of users who report crossing a border daily.             |
| GET    | `/users/all/crossingfreq/weekly/count`  | public         | Returns the number of users who report crossing a border weekly.            |
| GET    | `/users/all/crossingfreq/monthly/count` | public         | Returns the number of users who report crossing a border monthly.           |
| GET    | `/users/all/crossingfreq/never/count`   | public         | Returns the number of users who report never crossing a border.             |

#### Accessing education data

| Method | Endpoint                               | Access Control | Description                                                                               |
| ------ | -------------------------------------- | -------------- | ----------------------------------------------------------------------------------------- |
| GET    | `/users/all/all/education/all`         | public         | Returns all users who reported any education history.                                     |
| GET    | `/users/all/education/primary/count`   | public         | Returns a count of all users who reported primary as their highest level of education.    |
| GET    | `/users/all/education/secondary/count` | public         | Returns a count of all users who reported secondary as their highest level of education.  |
| GET    | `/users/all/education/uni/count`       | public         | Returns a count of all users who reported university as their highest level of education. |
| GET    | `/users/all/education/none/count`      | public         | Returns a count of all users who reported they had no education.                          |

#### Accessing language data

| Method | Endpoint                            | Access Control | Description                                                                            |
| ------ | ----------------------------------- | -------------- | -------------------------------------------------------------------------------------- |
| GET    | `/users/all/language/all`           | public         | Returns all Sauti Databank users that reported a language.                             |
| GET    | `/users/all/language/english/count` | public         | Returns the number of Sauti Databank users who reported English as their language.     |
| GET    | `/users/all/language/swahili/count` | public         | Returns the number of Sauti Databank users who reported Swahili as their language.     |
| GET    | `/users/all/language/kinya/count`   | public         | Returns the number of Sauti Databank users who reported Kinyarwanda as their language. |
| GET    | `users/all/language/luganda/count`  | public         | Returns the number of Sauti Databank users who reported Luganda as their language.     |
| GET    | `users//all/language/lukiga/count`  | public         | Returns the number of Sauti Databank users who reported Lukiga as their language. .    |

#### Accessing country of residence data

| Method | Endpoint                          | Access Control | Description                                                                                   |
| ------ | --------------------------------- | -------------- | --------------------------------------------------------------------------------------------- |
| GET    | `/users/all/country/all`          | public         | Returns all Sauti Databank users that reported a country of residence.                        |
| GET    | `users/all/country/kenya/count`   | public         | Returns the number of Sauti Databank users who reported Kenya as their country of residence.  |
| GET    | `/users/all/country/uganda/count` | public         | Returns the number of Sauti Databank users who reported Uganda as their country of residence. |
| GET    | `/users/all/country/rwanda/count` | public         | Returns the number of Sauti Databank users who reported Rwanda as their country of residence. |

#### Accessing age data

| Method | Endpoint                           | Access Control | Description                                                                         |
| ------ | ---------------------------------- | -------------- | ----------------------------------------------------------------------------------- |
| GET    | `/users/all/age/all`               | public         | Returns all Sauti Databank users that reported an age demographic.                  |
| GET    | `users/all/age/group-zero/count`   | public         | Returns the number of Sauti Databank users who reported an age between 10-20 years. |
| GET    | `/users/all/age/group-one/count`   | public         | Returns the number of Sauti Databank users who reported an age between 20-30 years. |
| GET    | `/users/all/age/group-two/count`   | public         | Returns the number of Sauti Databank users who reported an age between 30-40 years. |
| GET    | `/users/all/age/group-three/count` | public         | Returns the number of Sauti Databank users who reported an age between 40-50 years. |
| GET    | `/users/all/age/group-four/count`  | public         | Returns the number of Sauti Databank users who reported an age between 50-60 years. |
| GET    | `/users/all/age/group-five/count`  | public         | Returns the number of Sauti Databank users who reported an age between 60-70 years. |

#### Accessing primary income data

| Method | Endpoint                             | Access Control | Description                                                                                                        |
| ------ | ------------------------------------ | -------------- | ------------------------------------------------------------------------------------------------------------------ |
| GET    | `/users/all/primary-income/all`      | public         | Returns all Sauti Databank users that reported an answer to the primary income question.                           |
| GET    | `users/all/primary-income/yes/count` | public         | Returns the number of Sauti Databank users who reported small border trade as a primary source of income.          |
| GET    | `/users/all/primary-income/no/count` | public         | Returns the number of Sauti Databank users who reported small border trade was not their primary source of income. |

#### Accessing produce data

| Method | Endpoint                      | Access Control | Description                                                                                           |
| ------ | ----------------------------- | -------------- | ----------------------------------------------------------------------------------------------------- |
| GET    | `/users/all/produce/all`      | public         | Returns all Sauti Databank users that reported an answer to the produce question.                     |
| GET    | `users/all/produce/yes/count` | public         | Returns the number of Sauti Databank users who reported trading produce at the border.                |
| GET    | `/users/all/produce/no/count` | public         | Returns the number of Sauti Databank users who reported that they do not trade produce at the border. |

# Data Model

#### Platform sessions

```
{
  sess_id: UUID
  cell_num: varchar(25)
  created_date: datetime
  udate: timestamp
  data: STRING
  platform_id:  int(2)
  notes: varchar(400)
}
```

#### Users

```
{
  id: UUID
  cell_num: UUID foreign key in PLATFORM_SESSIONS table
  gender: STRING
  age: STRING
  education: STRING
  crossing_freq: STRING
  produce: STRING
  primary_income: STRING
  language: STRING
  country_of_residence: STRING
}
```

## Actions

_Note: every time we say users below, we're referring to the traders who log on and use the Sauti Databan platform, not the users (often researchers) who view Sauti's data_.

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

### Language data actions

`getLanguageAll()` -> Returns all users who reported any language data.

`getLanguageEnglish()` -> Returns all users who reported English as their primary language.

`getLanguageSwahili()` -> Returns all users who reported Swahili as their primary language.

`getLanguageKinya()` -> Returns all users who reported Kinyarwanda as their primary language.

`getLanguageLug()` -> Returns all users who reported Luganda as their primary language.

`getLanguageLuk()` -> Returns all users who reported Lukiga as their primary language.

### Country of residence data actions

`getCountryAll()` -> Returns all users who reported a country of residence.

`getCountryKenya()` -> Returns all users who reported Kenya as their country of residence.

`getCountryUganda()` -> Returns all users who reported Uganda as their country of residence.

`getCountryRwanda()` -> Returns all users who reported Rwanda as their country of residence.

### Age data actions

`getAgeAll()` -> Returns all users who reported an age demographic.

`getAgeGroupZero()` -> Returns all users who reported their age demographic as 10-20 years.

`getAgeGroupOne()` -> Returns all users who reported their age demographic as 20-30 years.

`getAgeGroupTwo()` -> Returns all users who reported their age demographic as 30-40 years.

`getAgeGroupThree()` -> Returns all users who reported their age demographic as 40-50 years.

`getAgeGroupFour()` -> Returns all users who reported their age demographic as 50-60 years.

`getAgeGroupFive()` -> Returns all users who reported their age demographic as 60-70 years.

### Primary income data actions

`getPrimaryIncomeAll()` -> Returns all users who answered a question about trade and primary income.

`getPrimaryIncomeYes()` -> Returns all users who reported border trade as their primary source of income.

`getPrimaryIncomeNo()` -> Returns all users who reported that border trade is _not_ their primary source of income.

### Produce data actions

`getProduceAll()` -> Returns a list of all users who answered whether or not they trade produce at the border.

`getProduceYes()` -> Returns a list of all users who say that yes they do trade produce at the border.

`getProduceNo()` -> Returns a list of all users who say they do _not_ trade produce at the border.

## Environment Variables

In order for the app to function correctly, the user must set up their own environment variables.

create a .env file that includes the following:
- username: Reach out to Sauti for access. 
- password: Reach out to Sauti for access.

## Contributing

When contributing to this repository, please first discuss the change you wish to make via issue, email, or any other method with the owners of this repository before making a change.

### Issue/Bug Request

**If you are having an issue with the existing project code, please submit a bug report under the following guidelines:**

- Check first to see if your issue has already been reported.
- Check to see if the issue has recently been fixed by attempting to reproduce the issue using the latest master branch in the repository.
- Create a live example of the problem.
- Submit a detailed bug report including your environment & browser, steps to reproduce the issue, actual and expected outcomes, where you believe the issue is originating from, and any potential solutions you have considered.

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

See [Frontend Documentation](https://github.com/sauti-databank/front-end/blob/master/README.md) for details on the frontend of our project.
