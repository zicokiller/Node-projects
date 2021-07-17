const express = require("express");
const router = express.Router();
const ObjectID = require("mongoose").Types.ObjectId;

const { PostsModel } = require("../models/postsModel");

router.get("/", async (req, res) => {
  try {
    const data = await PostsModel.find();
    res.send(data);
  } catch (e) {
    console.log(e);
    res.send("Error to get data:");
  }
});

router.post("/", async (req, res) => {
  try {
    const newRecord = new PostsModel({
      author: req.body.author,
      message: req.body.message,
    });
    await newRecord.save();
    res.send({ success: true });
  } catch (e) {
    console.log(e);
    res.send("Error creating new data:");
  }
});
// update
router.put("/:id", async (req, res) => {
  try {
    const updateRecord = {
      author: req.body.author,
      message: req.body.message,
    };

    await PostsModel.findByIdAndUpdate(
      req.params.id,
      { $set: updateRecord },
      { new: true }
    );
    res.send({ success: true });
  } catch (e) {
    console.log(e);
    res.send("Server Error:");
  }
});

router.delete("/:id", async (req, res) => {
  try {
      await PostsModel.findByIdAndRemove(
      req.params.id,
    )
    res.send({success: true});
  } catch (e) {
    console.log(e);
    res.send("Deletion failed:");
  }
});

module.exports = router;
