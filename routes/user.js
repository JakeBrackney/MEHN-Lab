const express = require("express")
const router = express.Router
const userController = require("../controllers/user")

router.post("/", userController.create)
router.get("/new", userController.new)
router.get("/:id", userController.show)
router.puth("/:id", userController.update)

module.exports = router