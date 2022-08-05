const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const generateToken = require('../config/generateToken');

const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password, pic, hobbies } = req.body;

  if (!name || !email || !password) {
    res.status(400);
    throw new Error("Please Enter all the Feilds");
  }

  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }

  const user = await User.create({
    name,
    email,
    password,
    pic,
    hobbies
  });

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      pic: user.pic,
      hobbies: user.hobbies,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Failed to Create the User");
  }
});

const editUser = asyncHandler(async (req, res) => {
  const { id, name, pic, hobbies, token } = req.body;

  if (!name) {
    res.status(400);
    throw new Error("Please Enter all the Feilds");
  }

  const user = await User.findByIdAndUpdate(
    id,
    {
     name: name, 
     pic: pic,
     hobbies: hobbies
    },
    {
      new: true,
    }
  )

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      pic: user.pic,
      hobbies: user.hobbies,
      token: token
    });
  } else {
    res.status(400);
    throw new Error("Failed to Edit the User");
  }
});

const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      pic: user.pic,
      hobbies: user.hobbies,
      token: generateToken(user._id),
    });
  } else {
    res.status(401);
    throw new Error("Invalid Email or Password");
  }
});

const allUsers = asyncHandler(async (req, res) => {
  const keyword = req.query.search
    ? {
        $or: [
          { name: { $regex: req.query.search, $options: "i" } },
          //{ email: { $regex: req.query.search, $options: "i" } },
          { hobbies: { $regex: req.query.search, $options: "i" } }
        ],
      }
    : {};

  const users = await User.find(keyword).find({ _id: { $ne: req.user._id } });
  res.send(users);
});

module.exports = { registerUser, editUser, authUser, allUsers };