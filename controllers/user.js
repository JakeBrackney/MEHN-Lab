
const User = require("../models/User")
const passport = require("passport");

module.exports = {
    show: (req, res) => {
      User.findOne({ _id: req.params.id })
        .populate({
          path: "tweets",
          options: { limit: 5, sort: { createdAt: -1 } }
        })
        .then(user => {
          res.render("user/show", { user });
        });
    },
    login: (req, res) => {
      res.render("user/login", { message: req.flash("loginMessage") });
    },
    createLogin: (req, res) => {
      const login = passport.authenticate("local-login", {
        successRedirect: "/",
        failureRedirect: "user/login",
        failureFlash: true
      });
  
      return login(req, res);
    },
    signUp: (req, res) => {
      res.render("user/sign-up", { message: req.flash("signupMessage") });
    },
    createSignUp: (req, res) => {
      //create new document in users collection from signup form


      // const signup = passport.authenticate("local-signup", {
      //   successRedirect: "/",
      //   failureRedirect: "user/sign-up",
      //   failureFlash: true
      // });
  
      return signup(req, res);
    },
    logout: (req, res) => {
      req.logout();
      res.redirect("/");
    }
  };

// module.exports = {
//     index: (req,res) => {
//         User.find({})
//         .then(user => {
//             res.render('user/signup', { user })
//         })
//     },
//     login: (req, res) => {
//         res.render("user/login", { message: req.flash("loginMessage") });
//       },
//     show: (req, res) => {
//         User.findById(req.params.id)
//             .populate({
//                 path: "post",
//                 options: { limit: 5, sort: { createdAt: -1}}  
//             })
//             .then(user => {
//                 res.render("user/signup", { user })
//             })
//     },
//     new: (req, res) => {
//         res.render("user/signup", { user })
//     },
//     create: (req, res) => {
//         User.create({
//             username: req.body.username,
//             password: req.body.password
//         }).then(user => {
//             res.redirect(`/user/${user._id}`)
//         })
//     }
// }
