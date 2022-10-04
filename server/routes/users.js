const express = require("express");
const router = express.Router();
const User = require("../models/User");

router.get("/", (req, res) => {
  User.find({})
    .sort({ username: 1 })
    .exec((err, users) => {
      if (err) return res.json(err);
      res.json(users);
    });
});

router.post("/", (req, res) => {
  User.create(req.body, (err, user) => {
    if (err) res.json(err);
    res.json(user);
  });
});

module.exports = router;
