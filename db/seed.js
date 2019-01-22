const Post = require("../models/Post");
const Comment = require("../models/Comment");


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