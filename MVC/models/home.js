const fs = require("fs");
const path = require("path");
const rootDir = require("../utils/pathUtil");

module.exports = class Home {
  constructor(houseName, price, location, rating, photUrl) {
    this.houseName = houseName;
    this.price = price;
    this.location = location;
    this.rating = rating;
    this.photUrl = photUrl;
  }
  save() {
    Home.fetchAll((registeredHomes) => {
      registeredHomes.push(this);
      const HomeDataPath = path.join(rootDir, "data", "homes.json");
      fs.writeFile(HomeDataPath, JSON.stringify(registeredHomes), (err) => {
        if (err) {
          console.log(err);
        } else {
          console.log("Home data saved successfully");
        }
      });
    });
  }
  static fetchAll(callback) {
    const HomeDataPath = path.join(rootDir, "data", "homes.json");
    fs.readFile(HomeDataPath, (err, data) => {
      console.log("File read: ", err, data);
      callback(!err ? JSON.parse(data) : []);
    });
  }
};
