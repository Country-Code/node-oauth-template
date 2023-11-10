const { Router } = require("express");
const router = Router();
const userController = require("../controllers/UserController");

router.route("/").post(userController.register);
router.route("/").get(userController.getAll);
router.route("/login").post(userController.login);

module.exports = router;
