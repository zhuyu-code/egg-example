"use strict";

const Controller = require("egg").Controller;

class HomeController extends Controller {
  async read() {
    const { ctx } = this;
    const data = await this.service.user.findUser();
    ctx.body = data;
  }
}

module.exports = HomeController;
