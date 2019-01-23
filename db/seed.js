const Post = require("../models/Post");
const Comment = require("../models/Comment");

const User = require("../models/User");
const { Tweet } = require("../models/Tweet");
const bcrypt = require("bcrypt-nodejs");

const createPassword = password =>
  bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);

User.find({}).remove(() => {
  Tweet.find({}).remove(() => {
    let bugs = User.create({
        email: "bugsbunny@gmail.com",
        password: createPassword("bugsbunny")
    }).then(user => {
      Promise.all([
        Tweet.create({
          content: "eh, what's up doc?",
          author: user._id
        }).then(tweet => {
          user.tweets.push(tweet);
        }),
        Tweet.create({
          content: "That's all, folks!",
          author: user._id
        }).then(tweet => {
          user.tweets.push(tweet);
        })
      ]).then(() => {
        user.save(err => console.log(err));
      });
    });

    let daffy = User.create({
        email: "daffyduck@gmail.com",
        password: createPassword("daffyduck")
    }).then(user => {
      Promise.all([
        Tweet.create({
          content: "Who's this Duck Dodgers any how?",
          author: user._id
        }).then(tweet => {
          user.tweets.push(tweet);
        }),
        Tweet.create({
          content: "You're dethpicable.",
          author: user._id
        }).then(tweet => {
          user.tweets.push(tweet);
        })
      ]).then(() => {
        user.save(err => console.log(err));
      });
    });

    let elmer = User.create({
        email: "elmerfudd@gmail.com",
        password: createPassword("elmerfudd")
    }).then(user => {
      Promise.all([
        Tweet.create({
          content:
            "Shh. Be vewy vewy quiet. I'm hunting wabbits! Huh-huh-huh-huh!",
          author: user._id
        }).then(tweet => {
          user.tweets.push(tweet);
        }),

        Tweet.create({
          content: "Kiww da wabbit!",
          author: user._id
        }).then(tweet => {
          user.tweets.push(tweet);
        })
      ]).then(() => {
        user.save(err => console.log(err));
      });
    });
  });
});



// Post.find({}).remove(() => {
//     let bugs = Post.create({
//         title: "test title",
//       url:{
//         link: 'https://blog.usejournal.com/i-interviewed-at-six-top-companies-in-silicon-valley-in-six-days-and-stumbled-into-six-job-offers-fe9cc7bbc996'
//       },
//     })
// })

// db.post.insert([
//   {
//       "title": "Why Don't People Use Formal Methods",
//       "url": {
//           "link": "https://www.hillelwayne.com/post/why-dont-people-use-formal-methods/"
//       },
//       "text": "this is an article about formal metods?",
//   },
//   {
//       "title": "Nova Hunters 2006",
//       "url": {
//           "link": "https://www.skyandtelescope.com/observing/celestial-objects-to-watch/nova-hunters/"
//       },
//       "text": "this is an article about novas?",
//   },
//   {
//       "title": "A command-line installer for Windows",
//       "url": {
//           "link": "https://scoop.sh/"
//       },
//       "text": "this is an article about command line?",
//   }
// ])