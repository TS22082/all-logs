const Group = require("../models/groupModel");

module.exports = {
  newGroup: async (req, res) => {
    try {
      const newGroup = new Group({
        name: req.body.name,
        authorId: req.user,
      });
      res.json(await newGroup.save());
    } catch (err) {
      res.send(err);
    }
  },

  getUserGroups: async (req, res) => {
    try {
      res.json(await Group.find({ authorId: req.user }));
    } catch (err) {
      res.send(err);
    }
  },

  findGroup: async (req, res) => {
    try {
      res.json(await Group.findOne({ _id: req.params.id }));
    } catch (err) {
      res.send(err);
    }
  },

  deleteGroup: async (req, res) => {
    try {
      res.json(await Group.findByIdAndDelete(req.params.groupId));
    } catch (err) {
      res.send(err);
    }
  },

  editGroup: async (req, res) => {
    try {
      res.json(
        await Group.findByIdAndUpdate(req.body._id, { text: req.body.name })
      );
    } catch (err) {
      res.send(err);
    }
  },
};
