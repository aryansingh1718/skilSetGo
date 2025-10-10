const mongoose = require("mongoose");

const progressSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  course: { type: mongoose.Schema.Types.ObjectId, ref: "Course" },
  completedLessons: [Number], // index of completed lessons
  progress: { type: Number, default: 0 },
  lastAccessed: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Progress", progressSchema);
