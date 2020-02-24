const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { JWT_SECRET: secret } = require("../config/secrets");

module.exports = {
  Query: {
    // Used to get data from "traders" table only
    async tradersUsers(_, args, ctx) {
      const keys = Object.keys(args);

      if (!keys.length) return ctx.Traders.getTraders();

      let dataFromDataBase;
      for (let i = 0; i < keys.length; i++) {
        if (i === 0) dataFromDataBase = await ctx.Traders.getTraders();
        dataFromDataBase = dataFromDataBase.filter(
          filterBy => filterBy[keys[i]] === args[keys[i]]
        );
      }
      return dataFromDataBase;
    },
    // Used to get data from "traders" AND "parsed_data" table joined together
    async sessionsData(_, args, ctx) {
      const keys = Object.keys(args);
      if (!keys.length) return ctx.Traders.getDataSessions();
      let dataFromDataBase;
      for (let i = 0; i < keys.length; i++) {
        if (i === 0) dataFromDataBase = await ctx.Traders.getDataSessions();
        dataFromDataBase = dataFromDataBase.filter(
          filterBy => filterBy[keys[i]] === args[keys[i]]
        );
      }
      return dataFromDataBase;
    },

    databankUser(_, args, ctx) {
      return ctx.Users.findAll();
    }
  },
  Mutation: {
    async register(_, args, ctx) {
      const users = await ctx.Users.findAll();
      const emailTaken = users.some(user => user.email === args.email);
      if (emailTaken) {
        // This should return an email with the following message. All other requested fields are returned as null
        return { email: "Sorry, this email has already been taken." };
      } else {
        const hashedPassword = bcrypt.hashSync(args.password, 8);
        const [newlyCreatedUser] = await ctx.Users.create({
          ...args,
          password: hashedPassword
        });
        // leave out the stored password when returning the user object.
        const {
          password,
          ...newlyCreatedUserWithoutPassword
        } = newlyCreatedUser;
        return newlyCreatedUserWithoutPassword;
      }
    },
    async login(_, args, ctx) {
      let user = args;
      // if their login is valid
      if (await validPassword(user, ctx)) {
        const token = generateToken(user);
        const registeredUser = await ctx.Users.findByEmail(user.email);
        delete registeredUser.password;
        return { ...registeredUser, token };
      } else {
        return "Invalid email or password.";
      }
    }
  }
};

/**
 * Helpers
 */

function generateToken(user) {
  const payload = {
    subject: user.id,
    id: user.id,
    email: user.email,
    tier: user.tier
  };
  const options = {
    expiresIn: "12h"
  };
  return jwt.sign(payload, secret, options);
}

function validPassword(user, ctx) {
  let { email, password } = user;
  if (email && password) {
    return ctx.Users.findByEmail(email)
      .then(user => {
        return user && bcrypt.compareSync(password, user.password)
          ? true
          : false;
      })
      .catch(error => {
        console.error("Invalid email: ", error);
        return false;
      });
  } else {
    console.error("You did not specify an email and/or password.");
    return false;
  }
}
