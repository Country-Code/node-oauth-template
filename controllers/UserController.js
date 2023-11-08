const asyncHandler = require("express-async-handler");
const User = require("../models/UserModel");
const jwt = require("../utils/jwt");

const register = asyncHandler(async (req, res) => {
  try {
    const { fullname, email, password, image } = req.body;

    if (!fullname || !email || !password) {
      res
        .status(400)
        .json({ message: "Please Enter all the Feilds", status: "KO" });
    }

    const user = await User.findOne({ email });

    if (user) {
      res.status(400).json({ message: "User already exists", status: "KO" });
    }

    const newUser = await User.create({
      fullname,
      email,
      password,
      image,
    });

    if (newUser) {
      res.status(201).json({
        _id: newUser._id,
        fullname: newUser.fullname,
        email: newUser.email,
        isAdmin: newUser.isAdmin,
        image: newUser.image,
        token: jwt.generate(newUser._id),
      });
    } else {
      res
        .status(400)
        .json({ message: "Error while creating the user!", status: "KO" });
    }
  } catch (err) {
    res.status(500).json({ message: err.message, status: "KO" });
  }
});

module.exports = { register };
