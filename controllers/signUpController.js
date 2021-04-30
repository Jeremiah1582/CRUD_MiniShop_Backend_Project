const User = require("../models/User");

exports.signUp = (req, res) => {
  res.render("signup");
};

exports.signUpPost = (req, res) => {
  const newUser = new User(req.body);
  newUser
    .save()
    .then(() => {
      console.log("you saved a user- well done !! :D");
      res.redirect("/login");
    })
    .catch(() => {
      console.log("did not save user");
    });
};
