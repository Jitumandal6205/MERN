const Home = require("../models/home");

exports.getAddHome = (req, res, next) => {
  res.render("hosts/addHome", {
    pageTitle: "Add Home to airbnb",
    currentPage: "addHome",
  });
};

exports.postAddHome = (req, res, next) => {
  // console.log("Home Registration successful for:", req.body);
  const { houseName, price, location, rating, photUrl } = req.body;
  const home = new Home(houseName, price, location, rating, photUrl);
  home.save();
  // registeredHomes.push(req.body);
  res.render("hosts/homeAdded", {
    pageTitle: "Home Added Successfully",
    currentPage: "homeAdded",
  });
};
exports.getHome = (req, res, next) => {
  Home.fetchAll( (registeredHomes) =>
    res.render("store/home", {
      registeredHomes: registeredHomes,
      pageTitle: "airbnb Home",
      currentPage: "Home",
    })
  );
 
};


