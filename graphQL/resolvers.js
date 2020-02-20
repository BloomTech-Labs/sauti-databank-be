module.exports = {
  Query: {
    // Used to get data from "traders" table only
    async tradersUsers(_, args, ctx) {
      const keys = Object.keys(args);

      if (!keys.length) {
        return ctx.getTraders();
      }
      let dataFromDataBase;
      for (let i = 0; i < keys.length; i++) {
        if (i === 0) dataFromDataBase = await ctx.getTraders();
        dataFromDataBase = dataFromDataBase.filter(
          filterBy => filterBy[keys[i]] === args[keys[i]]
        );
      }
      return dataFromDataBase;
    },
    // Used to get data from "traders" AND "parsed_data" table joined together
    async sessionsData(_, args, ctx) {
      const keys = Object.keys(args);
      if (!keys.length) return ctx.getDataSessions();
      let dataFromDataBase;
      for (let i = 0; i < keys.length; i++) {
        if (i === 0) dataFromDataBase = await ctx.getDataSessions();
        dataFromDataBase = dataFromDataBase.filter(
          filterBy => filterBy[keys[i]] === args[keys[i]]
        );
      }
      return dataFromDataBase;
    }
  }
};
