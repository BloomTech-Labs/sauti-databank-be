const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { JWT_SECRET: secret } = require("../config/secrets");

module.exports = {
  Query: {
    // Used to get data from "traders" table only
    async tradersUsers(_, { input }, ctx) {
      if (!input) return ctx.Traders.getTraders();
      const keys = Object.keys(input);
      let dataFromDataBase;
      for (let i = 0; i < keys.length; i++) {
        if (i === 0) dataFromDataBase = await ctx.Traders.getTraders();
        dataFromDataBase = dataFromDataBase.filter(
          filterBy => filterBy[keys[i]] === input[keys[i]]
        );
      }
      return dataFromDataBase;
    },
    // Used to get data from "parsed_data" and "traders" table joined
    async sessionsData(_, { input }, ctx) {
      if (!input) return ctx.Traders.getDataSessions();
      const keys = Object.keys(input);
      let dataFromDataBase;
      for (let i = 0; i < keys.length; i++) {
        if (i === 0) dataFromDataBase = await ctx.Traders.getDataSessions();
        dataFromDataBase = dataFromDataBase.filter(
          filterBy => filterBy[keys[i]] === input[keys[i]]
        );
      }
      return dataFromDataBase;
    },
    databankUsers(_, args, ctx) {
      return ctx.Users.findAll();
    }
  },
  Mutation: {
    async register(_, { input }, ctx) {
      const users = await ctx.Users.findAll();
      const emailTaken = users.some(user => user.email === input.email);
      if (emailTaken) {
        // This should return an email with the following message. All other requested fields are returned as null
        return { email: "Sorry, this email has already been taken." };
      } else {
        const hashedPassword = bcrypt.hashSync(input.password, 8);
        const [newlyCreatedUser] = await ctx.Users.create({
          ...input,
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
    async login(_, { input }, ctx) {
      let user = input;

      // if password is okay
      // get user
      // make token using the tier and other user stuff
      // return user and token
      if (await validPassword(user, ctx)) {
        const registeredUser = await ctx.Users.findByEmail(user.email);
        delete registeredUser.password;
        const token = generateToken(registeredUser);
        return { ...registeredUser, token };
      } else {
        return "Invalid email or password.";
      }
    },
    async editUser(_, { input }, ctx) {
      // The first arg to EditedUserOrError becomes the returned input value
      return input;
    },

    async deleteUser(_, { input }) {
      // The first arg to DeletedUserOrError becomes the returned input value
      return input;
    }
  },
  EditedUserOrError: {
    async __resolveType(user, ctx, info) {
      const updated = await ctx.Users.updateById(user.id, user);
      if (updated) {
        return "DatabankUser";
      } else {
        let error = user;
        error.message = `There was an issue updating the user with id ${user.id}`;
        return "Error";
      }
    }
  },
  DeletedUserOrError: {
    async __resolveType(user, ctx) {
      const deleted = await ctx.Users.removeById(user.id, user);
      if (deleted) {
        return "DatabankUser";
      } else {
        let error = user;
        error.message = `There was an issue deleting user with id ${user.id}`;
        return "Error";
      }
    }
  }
  // TODO: Add a DatabankUser resolver to return the updated fields
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
