const chatController = require("../controllers/ChatController");
const authMiddleware = require("../middlewares/AuthMiddleware")
const smfw = require('../utils/smfw');

module.exports = smfw.getCRUDRouter(chatController)
