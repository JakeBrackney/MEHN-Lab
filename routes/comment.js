const express = require('express')
const router = express.Router()
const commentController = require ('../controllers/comment')

router.post("/", commentController.create)
router.get("/new", commentController.new)
router.get("/:id", commentController.show)
router.put("/:id", commentController.update)

module.exports = router