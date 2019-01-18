const Post = require("../models/Post");
const Comment = require("../models/Comment");


Post.find({}).remove(() => {
    let bugs = Post.create({
        title: "test title",
      url:{
        link: 'https://blog.usejournal.com/i-interviewed-at-six-top-companies-in-silicon-valley-in-six-days-and-stumbled-into-six-job-offers-fe9cc7bbc996'
      },
    })
})