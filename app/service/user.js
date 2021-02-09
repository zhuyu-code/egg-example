const Service = require("egg").Service;
class HomeService extends Service {
  async findUser() {
    return "indexService";
  }
}

module.exports = HomeService;
