const { Router } = require("express");
const router = Router();
const userController = require("../controllers/UserController");

router.route("/").post(userController.register);

module.exports = router;
