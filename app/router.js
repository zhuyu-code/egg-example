"use strict";

/**
 * @param {Egg.Application} app - egg application
 */
const userRoute = require("./routes/user");
module.exports = (app) => {
  userRoute(app);
};
