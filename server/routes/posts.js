const router = require("express").Router();
const Post = require("../models/Post");
const moment = require("moment");

router.get("/", (req, res) => {
  Post.find({})
    .sort("-createdAt")
    .exec((err, posts) => {
      if (err) return res.json(err);
      res.json(posts);
    });
});

router.get("/:post_id", (req, res) => {
  Post.findOne({ _id: req.params.post_id }, (err, result) => {
    if (err) res.json(err);
    res.json(result);
  });
});

router.post("/", (req, res) => {
  const post = new Post();
  post.title = req.body.title;
  post.content = req.body.content;
  post.createdAt = moment().format("YYYY-MM-DD hh:mm:ss");

  post.save((err, result) => {
    if (err) res.json(err);
    res.json(result);
  });
});

router.put("/:post_id", (req, res) => {
  req.body.updatedAt = moment().format("YYYY-MM-DD hh:mm:ss");
  Post.findOneAndUpdate(
    { _id: req.params.post_id },
    req.body,
    (err, result) => {
      if (err) res.json(result);
      res.json({ message: "post updated" });
    }
  );
});

router.delete("/:post_id", (req, res) => {
  Post.deleteOne({ _id: req.params.post_id }, (err) => {
    if (err) return res.json(err);
    res.status(204).end();
  });
});

module.exports = router;
