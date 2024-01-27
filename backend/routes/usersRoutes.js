const express = require("express");
const { check, validationResult } = require("express-validator");
const JWT = require("jsonwebtoken");
const {createToken}=  require("../helper/helper");  
const router = express.Router();
const User = require("../models/User");

///  get users
router.get("/api/users", async (req, res) => {
  try {
    const result = await User.find();
    res.status(200).json(result);
  } catch (error) {
    console.log("is accured an error ", error.message);
    res.status(500).json({ message: "req ,. is failed" });
  }
});

// fetch single item using id

router.get("/api/users/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const user = await User.findById(id);

    if (!user) {
      res.status(400).json("no user found ");
    }

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json(error.message);
  }
});

// post a single item

router.post(
  "/signup",
  [
    check("userName", "min length is 6 characters").isLength({ min: 6 }),
    check("email", "please provide a valide email").isEmail(),
    check("password", "min length is 6 characters").isLength({ min: 6 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty) {
      return res.status(400).json({ errors: errors.array() });
    }
    const newUser = {
      userName: req.body.userName,
      email: req.body.email,
      password: req.body.password,
    };

    try {
      const user = await User.create(newUser);
      // here comming jwt
      const token = createToken(user._id);
      res.cookie("jwt", token, { httpOnly: true, maxAge: maxAge * 1000 });
      res.status(200).json({ user: user._id, token });
    } catch (error) {
      res.status(500).json(error.message);
    }
  }
);

///  update a single item

router.put("/api/users/:id", async (req, res) => {
  const itemId = req.params.id;

  const updatedItem = {
    id: itemId,
    userName: req.body.userName,
    email: req.body.email,
    password: req.body.password,
  };
  try {
    const user = await User.findByIdAndUpdate(itemId, updatedItem);
    if (!user) {
      res.status(400).json("user  not found");
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json(error.message);
  }
});

// delete   item using id

router.delete("/api/users/:id", async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const user = await User.findByIdAndDelete(id);
    res.status(200).json("user is deleted");
  } catch (error) {
    res.status(500).json(error.message);
  }
});

module.exports = router;
