const smfw = require('../utils/smfw');
const chatModel = require("../models/ChatModel")

module.exports = smfw.getCRUDController(chatModel)