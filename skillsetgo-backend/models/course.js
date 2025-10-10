const mongoose = require("mongoose");

const lessonSchema = new mongoose.Schema({
  title: String,
  description: String,
  videoUrl: String,
  duration: String,
  order: Number,
});

const courseSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  category: String,
  level: String,
  price: Number,
  duration: String,
  thumbnail: String,
  lessons: [lessonSchema],
  instructor: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  studentsEnrolled: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  rating: { type: Number, default: 0 }
});

module.exports = mongoose.model("Course", courseSchema);
